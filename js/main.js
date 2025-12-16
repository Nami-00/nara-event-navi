// ========================================
// なら優しいイベントナビ v6.0 - メインJavaScript
// バリアフリー施設情報統合版
// ========================================

// グローバル変数
let map;
let userMarker = null;
let userNearestStation = null;
let currentMode = 'event'; // 'event' or 'facility'
let eventMarkers = [];
let facilityMarkers = [];
let stationMarkers = [];
let routeLayer = null;

// ========================================
// 初期化
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('なら優しいイベントナビ v6.0 起動');
    console.log(`イベントデータ: ${EVENTS_DATA?.length || 0}件`);
    console.log(`施設データ: ${FACILITIES_DATA?.length || 0}件`);
    console.log(`駅データ: ${STATIONS_DATA?.length || 0}件`);
    
    initMap();
    initEventListeners();
    displayEvents();
    displayFacilityStats();
    
    // 保存された設定を読み込み
    loadSettings();
});

// ========================================
// 地図初期化
// ========================================
function initMap() {
    map = L.map('map').setView([34.685, 135.805], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // 駅マーカーを表示
    if (typeof STATIONS_DATA !== 'undefined') {
        STATIONS_DATA.forEach(station => {
            const marker = L.marker([station.lat, station.lng], {
                icon: L.divIcon({
                    className: 'custom-icon station-icon',
                    html: '🚉',
                    iconSize: [30, 30]
                })
            }).addTo(map);
            
            marker.bindPopup(`
                <strong>${station.name}</strong><br>
                ${station.lines.join('、')}
            `);
            
            stationMarkers.push(marker);
        });
    }
}

// ========================================
// イベントリスナー登録
// ========================================
function initEventListeners() {
    // モード切替
    document.getElementById('eventModeBtn')?.addEventListener('click', () => switchMode('event'));
    document.getElementById('facilityModeBtn')?.addEventListener('click', () => switchMode('facility'));
    
    // イベントモード: フィルタ
    document.getElementById('categoryFilter')?.addEventListener('change', filterEvents);
    document.getElementById('walkTimeFilter')?.addEventListener('change', filterEvents);
    document.querySelectorAll('.accessibility-filters input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', filterEvents);
    });
    
    // 施設モード: フィルタ
    document.getElementById('facilityTypeFilter')?.addEventListener('change', filterFacilities);
    document.getElementById('facilityBarrierFilter')?.addEventListener('change', filterFacilities);
    document.getElementById('facilitySearchBtn')?.addEventListener('click', filterFacilities);
    document.getElementById('facilitySearchInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') filterFacilities();
    });
    
    // 設定モーダル
    document.getElementById('openSettingsBtn')?.addEventListener('click', openSettingsModal);
    document.getElementById('saveSettingsBtn')?.addEventListener('click', saveSettings);
    
    // 自宅住所モーダル
    document.getElementById('openHomeAddressBtn')?.addEventListener('click', openHomeAddressModal);
    document.getElementById('registerHomeBtn')?.addEventListener('click', registerHomeAddress);
    
    // LINE通知: チェックボックす状態に応じて入力欄を表示/非表示
    const lineNotificationCheckbox = document.getElementById('lineNotification');
    if (lineNotificationCheckbox) {
        lineNotificationCheckbox.addEventListener('change', function() {
            const lineInputArea = document.getElementById('lineInputArea');
            if (lineInputArea) {
                lineInputArea.style.display = this.checked ? 'block' : 'none';
                // チェックを外したら入力値をクリア（オプション）
                if (!this.checked) {
                    const lineInput = document.getElementById('lineInput');
                    if (lineInput) {
                        // lineInput.value = ''; // 必要に応じてコメントアウトを外す
                    }
                }
            }
        });
    }
    
    // モーダルクローズ
    document.querySelectorAll('.modal .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// ========================================
// モード切替
// ========================================
function switchMode(mode) {
    currentMode = mode;
    
    // タブの切り替え
    document.querySelectorAll('.mode-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.mode-panel').forEach(panel => panel.classList.remove('active'));
    
    if (mode === 'event') {
        document.getElementById('eventModeBtn').classList.add('active');
        document.getElementById('eventMode').classList.add('active');
        
        // イベントマーカー表示、施設マーカー非表示
        eventMarkers.forEach(m => m.addTo(map));
        facilityMarkers.forEach(m => m.remove());
        
        filterEvents();
    } else {
        document.getElementById('facilityModeBtn').classList.add('active');
        document.getElementById('facilityMode').classList.add('active');
        
        // 施設マーカー表示、イベントマーカー非表示
        eventMarkers.forEach(m => m.remove());
        displayFacilities();
    }
}

// ========================================
// イベント表示
// ========================================
function displayEvents() {
    const eventList = document.getElementById('eventList');
    if (!eventList || typeof EVENTS_DATA === 'undefined') return;
    
    eventList.innerHTML = '';
    
    // 既存のイベントマーカーをクリア
    eventMarkers.forEach(m => m.remove());
    eventMarkers = [];
    
    EVENTS_DATA.forEach((event, index) => {
        // イベントカード作成
        const card = createEventCard(event, index);
        eventList.appendChild(card);
        
        // 地図マーカー作成
        const marker = L.marker([event.lat, event.lng], {
            icon: L.divIcon({
                className: 'custom-icon event-icon',
                html: '📍',
                iconSize: [30, 30]
            })
        });
        
        marker.bindPopup(createEventPopup(event));
        
        if (currentMode === 'event') {
            marker.addTo(map);
        }
        
        eventMarkers.push(marker);
    });
}

function createEventCard(event, index) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.dataset.eventId = `event-${index}`;
    
    // バリアフリー情報を統合データから取得
    const facilityInfo = getFacilityInfoByLocation(event.lat, event.lng);
    const barrierInfo = facilityInfo ? facilityInfo.barrierfree : event.accessibility;
    
    card.innerHTML = `
        <h3>${event.title}</h3>
        <p class="event-date">📅 ${event.date}</p>
        <p class="event-venue">📍 ${event.venue}</p>
        ${event.nearestStation ? `<p class="event-station">🚉 最寄り駅: ${event.nearestStation} (徒歩${event.walkTime}分)</p>` : ''}
        ${facilityInfo && facilityInfo.phone ? `<p class="event-phone">📞 ${facilityInfo.phone}</p>` : ''}
        
        <div class="accessibility-icons">
            ${barrierInfo.多目的トイレ ? '<span title="多目的トイレ">🚻</span>' : ''}
            ${barrierInfo.車椅子貸出 ? '<span title="車椅子貸出">♿</span>' : ''}
            ${barrierInfo.盲導犬同伴可 || barrierInfo.service_dog_allowed ? '<span title="盲導犬OK">🦮</span>' : ''}
            ${barrierInfo.優先駐車場 ? '<span title="優先駐車場">🅿️</span>' : ''}
            ${barrierInfo.エレベータ ? '<span title="エレベータ">🛗</span>' : ''}
            ${barrierInfo.段差対応 ? '<span title="段差対応">♿️</span>' : ''}
        </div>
        
        <button class="btn btn-primary view-route-btn" onclick="showRouteInfo(${index}, 'event')">
            経路を表示
        </button>
    `;
    
    return card;
}

function createEventPopup(event) {
    const facilityInfo = getFacilityInfoByLocation(event.lat, event.lng);
    const barrierInfo = facilityInfo ? facilityInfo.barrierfree : event.accessibility;
    
    return `
        <div class="popup-content">
            <h3>${event.title}</h3>
            <p><strong>日時:</strong> ${event.date}</p>
            <p><strong>会場:</strong> ${event.venue}</p>
            ${event.nearestStation ? `<p><strong>最寄り駅:</strong> ${event.nearestStation}</p>` : ''}
            ${facilityInfo && facilityInfo.phone ? `<p><strong>電話:</strong> ${facilityInfo.phone}</p>` : ''}
            <div class="accessibility-info">
                <strong>バリアフリー設備:</strong><br>
                ${barrierInfo.多目的トイレ ? '✓ 多目的トイレ<br>' : ''}
                ${barrierInfo.車椅子貸出 ? '✓ 車椅子貸出<br>' : ''}
                ${barrierInfo.盲導犬同伴可 || barrierInfo.service_dog_allowed ? '✓ 盲導犬同伴可<br>' : ''}
                ${barrierInfo.優先駐車場 ? '✓ 優先駐車場<br>' : ''}
                ${barrierInfo.エレベータ ? '✓ エレベータ<br>' : ''}
                ${barrierInfo.段差対応 ? '✓ 段差対応<br>' : ''}
            </div>
        </div>
    `;
}

// ========================================
// イベントフィルタリング
// ========================================
function filterEvents() {
    const category = document.getElementById('categoryFilter')?.value || 'all';
    const walkTime = parseInt(document.getElementById('walkTimeFilter')?.value) || Infinity;
    
    const selectedAccessibility = [];
    document.querySelectorAll('.accessibility-filters input[type="checkbox"]:checked').forEach(cb => {
        selectedAccessibility.push(cb.value);
    });
    
    const eventCards = document.querySelectorAll('.event-card');
    let visibleCount = 0;
    
    EVENTS_DATA.forEach((event, index) => {
        let show = true;
        
        // カテゴリーフィルタ
        if (category !== 'all' && event.category !== category) {
            show = false;
        }
        
        // 徒歩時間フィルタ
        if (walkTime !== Infinity && event.walkTime > walkTime) {
            show = false;
        }
        
        // バリアフリー設備フィルタ
        if (selectedAccessibility.length > 0) {
            const facilityInfo = getFacilityInfoByLocation(event.lat, event.lng);
            const barrierInfo = facilityInfo ? facilityInfo.barrierfree : event.accessibility;
            
            for (const access of selectedAccessibility) {
                if (access === '盲導犬・介助犬・聴導犬同伴可') {
                    if (!barrierInfo.盲導犬同伴可 && !barrierInfo.service_dog_allowed) {
                        show = false;
                        break;
                    }
                } else if (!barrierInfo[access]) {
                    show = false;
                    break;
                }
            }
        }
        
        // 表示/非表示切替
        const card = eventCards[index];
        if (card) {
            card.style.display = show ? 'block' : 'none';
        }
        
        if (show) {
            visibleCount++;
            if (currentMode === 'event') {
                eventMarkers[index]?.addTo(map);
            }
        } else {
            eventMarkers[index]?.remove();
        }
    });
    
    console.log(`イベントフィルタ結果: ${visibleCount}/${EVENTS_DATA.length}件表示`);
}

// ========================================
// 施設表示
// ========================================
function displayFacilities() {
    const facilityList = document.getElementById('facilityList');
    if (!facilityList || typeof FACILITIES_DATA === 'undefined') return;
    
    facilityList.innerHTML = '<p>読み込み中...</p>';
    
    // 既存の施設マーカーをクリア
    facilityMarkers.forEach(m => m.remove());
    facilityMarkers = [];
    
    // フィルタリング適用
    filterFacilities();
}

function filterFacilities() {
    const facilityList = document.getElementById('facilityList');
    if (!facilityList) return;
    
    const typeFilter = document.getElementById('facilityTypeFilter')?.value || 'all';
    const barrierFilter = document.getElementById('facilityBarrierFilter')?.value || 'all';
    const searchQuery = document.getElementById('facilitySearchInput')?.value.toLowerCase() || '';
    
    facilityList.innerHTML = '';
    
    // 既存マーカーをクリア
    facilityMarkers.forEach(m => m.remove());
    facilityMarkers = [];
    
    let visibleCount = 0;
    
    FACILITIES_DATA.forEach((facility, index) => {
        let show = true;
        
        // タイプフィルタ
        if (typeFilter !== 'all' && facility.type !== typeFilter) {
            show = false;
        }
        
        // バリアフリー設備フィルタ
        if (barrierFilter !== 'all' && !facility.barrierfree[barrierFilter]) {
            show = false;
        }
        
        // 検索クエリ
        if (searchQuery && !facility.name.toLowerCase().includes(searchQuery)) {
            show = false;
        }
        
        if (show) {
            // カード作成
            const card = createFacilityCard(facility, index);
            facilityList.appendChild(card);
            
            // マーカー作成
            const iconHtml = facility.type === '駅' ? '🚉' : 
                           facility.type === '観光施設' ? '🏯' : '🏛️';
            
            const marker = L.marker([facility.lat, facility.lng], {
                icon: L.divIcon({
                    className: `custom-icon facility-${facility.type}`,
                    html: iconHtml,
                    iconSize: [30, 30]
                })
            });
            
            marker.bindPopup(createFacilityPopup(facility));
            marker.addTo(map);
            facilityMarkers.push(marker);
            
            visibleCount++;
        }
    });
    
    if (visibleCount === 0) {
        facilityList.innerHTML = '<p class="no-results">該当する施設が見つかりませんでした。</p>';
    }
    
    console.log(`施設フィルタ結果: ${visibleCount}/${FACILITIES_DATA.length}件表示`);
}

function createFacilityCard(facility, index) {
    const card = document.createElement('div');
    card.className = 'facility-card';
    
    const bf = facility.barrierfree;
    
    card.innerHTML = `
        <div class="facility-header">
            <h3>${facility.name}</h3>
            <span class="facility-type-badge">${facility.type}</span>
        </div>
        <p class="facility-address">📍 ${facility.address}</p>
        ${facility.phone ? `<p class="facility-phone">📞 ${facility.phone}</p>` : ''}
        
        <div class="barrierfree-grid">
            <div class="bf-item ${bf.多目的トイレ ? 'available' : 'unavailable'}">
                <span class="bf-icon">🚻</span>
                <span class="bf-label">多目的トイレ</span>
            </div>
            <div class="bf-item ${bf.車椅子貸出 ? 'available' : 'unavailable'}">
                <span class="bf-icon">♿</span>
                <span class="bf-label">車椅子貸出</span>
            </div>
            <div class="bf-item ${bf.盲導犬同伴可 ? 'available' : 'unavailable'}">
                <span class="bf-icon">🦮</span>
                <span class="bf-label">盲導犬OK</span>
            </div>
            <div class="bf-item ${bf.優先駐車場 ? 'available' : 'unavailable'}">
                <span class="bf-icon">🅿️</span>
                <span class="bf-label">優先駐車場</span>
            </div>
            <div class="bf-item ${bf.エレベータ ? 'available' : 'unavailable'}">
                <span class="bf-icon">🛗</span>
                <span class="bf-label">エレベータ</span>
            </div>
            <div class="bf-item ${bf.段差対応 ? 'available' : 'unavailable'}">
                <span class="bf-icon">♿️</span>
                <span class="bf-label">段差対応</span>
            </div>
            ${bf.オストメイト ? `
            <div class="bf-item available">
                <span class="bf-icon">🚾</span>
                <span class="bf-label">オストメイト</span>
            </div>
            ` : ''}
        </div>
        
        <button class="btn btn-secondary" onclick="map.setView([${facility.lat}, ${facility.lng}], 16)">
            地図で表示
        </button>
    `;
    
    return card;
}

function createFacilityPopup(facility) {
    const bf = facility.barrierfree;
    
    return `
        <div class="popup-content">
            <h3>${facility.name}</h3>
            <p><strong>種別:</strong> ${facility.type} - ${facility.category}</p>
            <p><strong>住所:</strong> ${facility.address}</p>
            ${facility.phone ? `<p><strong>電話:</strong> ${facility.phone}</p>` : ''}
            <div class="accessibility-info">
                <strong>バリアフリー設備:</strong><br>
                ${bf.多目的トイレ ? '✓ 多目的トイレ<br>' : ''}
                ${bf.車椅子貸出 ? '✓ 車椅子貸出<br>' : ''}
                ${bf.盲導犬同伴可 ? '✓ 盲導犬同伴可<br>' : ''}
                ${bf.優先駐車場 ? '✓ 優先駐車場<br>' : ''}
                ${bf.エレベータ ? '✓ エレベータ<br>' : ''}
                ${bf.段差対応 ? '✓ 段差対応<br>' : ''}
                ${bf.オストメイト ? '✓ オストメイトトイレ<br>' : ''}
            </div>
        </div>
    `;
}

// ========================================
// 統計表示
// ========================================
function displayFacilityStats() {
    const statsPanel = document.getElementById('facilityStats');
    if (!statsPanel || typeof FACILITIES_DATA === 'undefined') return;
    
    const total = FACILITIES_DATA.length;
    const stats = {
        '多目的トイレ': 0,
        '車椅子貸出': 0,
        '盲導犬同伴可': 0,
        '優先駐車場': 0,
        'エレベータ': 0,
        '段差対応': 0,
        'オストメイト': 0
    };
    
    FACILITIES_DATA.forEach(f => {
        const bf = f.barrierfree;
        if (bf.多目的トイレ) stats['多目的トイレ']++;
        if (bf.車椅子貸出) stats['車椅子貸出']++;
        if (bf.盲導犬同伴可) stats['盲導犬同伴可']++;
        if (bf.優先駐車場) stats['優先駐車場']++;
        if (bf.エレベータ) stats['エレベータ']++;
        if (bf.段差対応) stats['段差対応']++;
        if (bf.オストメイト) stats['オストメイト']++;
    });
    
    statsPanel.innerHTML = Object.keys(stats).map(key => {
        const count = stats[key];
        const percent = ((count / total) * 100).toFixed(1);
        return `
            <div class="stat-item">
                <span class="stat-label">${key}</span>
                <span class="stat-value">${count}件 (${percent}%)</span>
                <div class="stat-bar">
                    <div class="stat-fill" style="width: ${percent}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

// ========================================
// 補助関数: 位置情報から施設情報を取得
// ========================================
function getFacilityInfoByLocation(lat, lng, threshold = 0.001) {
    if (typeof FACILITIES_DATA === 'undefined') return null;
    
    for (const facility of FACILITIES_DATA) {
        const latDiff = Math.abs(facility.lat - lat);
        const lngDiff = Math.abs(facility.lng - lng);
        
        if (latDiff < threshold && lngDiff < threshold) {
            return facility;
        }
    }
    
    return null;
}

// ========================================
// 経路表示 (既存機能を維持)
// ========================================
async function showRouteInfo(index, type = 'event') {
    const routeDetails = document.getElementById('routeDetails');
    if (!routeDetails) return;
    
    routeDetails.innerHTML = '<p>経路を計算中...</p>';
    routeDetails.style.display = 'block';
    
    let targetLat, targetLng, targetName, targetStation;
    
    if (type === 'event') {
        const event = EVENTS_DATA[index];
        targetLat = event.lat;
        targetLng = event.lng;
        targetName = event.title;
        targetStation = event.nearestStation;
    } else {
        const facility = FACILITIES_DATA[index];
        targetLat = facility.lat;
        targetLng = facility.lng;
        targetName = facility.name;
    }
    
    if (!userNearestStation) {
        routeDetails.innerHTML = '<p>⚠️ 自宅住所を登録してください。</p>';
        return;
    }
    
    // 徒歩ルート取得 (既存コードを使用)
    const walkingRoute = await getWalkingRoute(
        userNearestStation.lat,
        userNearestStation.lng,
        targetLat,
        targetLng
    );
    
    if (walkingRoute) {
        displayRoute(walkingRoute, targetName, targetStation);
    } else {
        routeDetails.innerHTML = '<p>⚠️ ルートを取得できませんでした。</p>';
    }
}

async function getWalkingRoute(startLat, startLng, endLat, endLng) {
    const url = `https://router.project-osrm.org/route/v1/foot/${startLng},${startLat};${endLng},${endLat}?overview=full&geometries=geojson`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
            return data.routes[0];
        }
    } catch (error) {
        console.error('ルート取得エラー:', error);
    }
    
    return null;
}

function displayRoute(route, targetName, targetStation) {
    const routeDetails = document.getElementById('routeDetails');
    const distance = (route.distance / 1000).toFixed(2);
    const duration = Math.ceil(route.duration / 60);
    
    routeDetails.innerHTML = `
        <h3>📍 ${targetName} への経路</h3>
        <p><strong>最寄り駅:</strong> ${targetStation || '不明'}</p>
        <p><strong>徒歩距離:</strong> ${distance} km</p>
        <p><strong>徒歩時間:</strong> 約 ${duration} 分</p>
        <button class="btn btn-secondary" onclick="shareRoute('email', '${targetName}')">📧 メールで共有</button>
        <button class="btn btn-secondary" onclick="shareRoute('line', '${targetName}')">💬 LINEで共有</button>
    `;
    
    // 地図上にルートを描画
    if (routeLayer) {
        map.removeLayer(routeLayer);
    }
    
    const coordinates = route.geometry.coordinates.map(coord => [coord[1], coord[0]]);
    routeLayer = L.polyline(coordinates, {
        color: 'blue',
        weight: 4,
        opacity: 0.7
    }).addTo(map);
    
    map.fitBounds(routeLayer.getBounds());
}

function shareRoute(method, targetName) {
    alert(`${method}で「${targetName}」への経路を共有します(準備中)`);
}

// ========================================
// 自宅住所登録
// ========================================
async function registerHomeAddress() {
    const address = document.getElementById('homeAddress')?.value;
    const resultDiv = document.getElementById('homeAddressResult');
    
    if (!address) {
        alert('住所を入力してください。');
        return;
    }
    
    resultDiv.innerHTML = '検索中...';
    
    try {
        // Nominatim APIで住所を検索
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address + ',奈良県')}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lng = parseFloat(data[0].lon);
            
            // 最寄り駅を検索
            userNearestStation = findNearestStation(lat, lng);
            
            if (userNearestStation) {
                // ユーザーマーカーを地図に追加
                if (userMarker) {
                    map.removeLayer(userMarker);
                }
                
                userMarker = L.marker([lat, lng], {
                    icon: L.divIcon({
                        className: 'custom-icon user-icon',
                        html: '🏠',
                        iconSize: [30, 30]
                    })
                }).addTo(map);
                
                userMarker.bindPopup(`<strong>自宅</strong><br>${address}`).openPopup();
                
                resultDiv.innerHTML = `
                    <p>✅ 住所を登録しました。</p>
                    <p><strong>最寄り駅:</strong> ${userNearestStation.name}</p>
                    <p><strong>距離:</strong> 約 ${(userNearestStation.distance / 1000).toFixed(2)} km</p>
                `;
                
                // 設定を保存
                localStorage.setItem('homeAddress', address);
                localStorage.setItem('userLat', lat);
                localStorage.setItem('userLng', lng);
                
                map.setView([lat, lng], 14);
            } else {
                resultDiv.innerHTML = '<p>⚠️ 最寄り駅が見つかりませんでした。</p>';
            }
        } else {
            resultDiv.innerHTML = '<p>⚠️ 住所が見つかりませんでした。</p>';
        }
    } catch (error) {
        console.error('住所検索エラー:', error);
        resultDiv.innerHTML = '<p>⚠️ エラーが発生しました。</p>';
    }
}

function findNearestStation(lat, lng) {
    if (typeof STATIONS_DATA === 'undefined') return null;
    
    let nearest = null;
    let minDistance = Infinity;
    
    STATIONS_DATA.forEach(station => {
        const distance = calculateDistance(lat, lng, station.lat, station.lng);
        if (distance < minDistance) {
            minDistance = distance;
            nearest = { ...station, distance };
        }
    });
    
    return nearest;
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371000; // 地球の半径(m)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// ========================================
// 設定管理
// ========================================
function openSettingsModal() {
    // モーダルを表示
    document.getElementById('settingsModal').style.display = 'block';
    
    // 現在の設定をモーダルに反映
    const lineNotification = localStorage.getItem('lineNotification') === 'true';
    const lineCheckbox = document.getElementById('lineNotification');
    const lineInputArea = document.getElementById('lineInputArea');
    
    if (lineCheckbox) {
        lineCheckbox.checked = lineNotification;
    }
    
    if (lineInputArea) {
        lineInputArea.style.display = lineNotification ? 'block' : 'none';
    }
}

function openHomeAddressModal() {
    document.getElementById('homeAddressModal').style.display = 'block';
}

function saveSettings() {
    const textSize = document.getElementById('textSize')?.value;
    const contrast = document.getElementById('contrast')?.value;
    const lineNotification = document.getElementById('lineNotification')?.checked;
    const lineId = document.getElementById('lineInput')?.value?.trim() || '';
    
    // バリデーション
    let hasError = false;
    let errorMsg = '';
    
    // LINE通知が有効な場合はLINE IDが必須
    if (lineNotification && !lineId) {
        hasError = true;
        errorMsg += 'LINE IDまたは連携コードを入力してください。\n';
    }
    
    if (hasError) {
        alert(errorMsg);
        return;
    }
    
    // 設定を保存
    localStorage.setItem('textSize', textSize);
    localStorage.setItem('contrast', contrast);
    localStorage.setItem('lineNotification', lineNotification);
    localStorage.setItem('lineId', lineId);
    
    // 適用
    applySettings();
    
    // 成功メッセージ
    let successMsg = '設定を保存しました。';
    if (lineNotification) {
        successMsg += '\nLINE通知が有効になりました。';
    }
    
    alert(successMsg);
    document.getElementById('settingsModal').style.display = 'none';
}

function loadSettings() {
    const textSize = localStorage.getItem('textSize') || 'normal';
    const contrast = localStorage.getItem('contrast') || 'normal';
    const lineNotification = localStorage.getItem('lineNotification') === 'true';
    const lineId = localStorage.getItem('lineId') || '';
    
    // 文字サイズ設定
    if (document.getElementById('textSize')) {
        document.getElementById('textSize').value = textSize;
    }
    
    // コントラスト設定
    if (document.getElementById('contrast')) {
        document.getElementById('contrast').value = contrast;
    }
    
    // LINE通知設定
    const lineCheckbox = document.getElementById('lineNotification');
    const lineInputArea = document.getElementById('lineInputArea');
    const lineInputField = document.getElementById('lineInput');
    
    if (lineCheckbox) {
        lineCheckbox.checked = lineNotification;
    }
    
    if (lineInputArea) {
        lineInputArea.style.display = lineNotification ? 'block' : 'none';
    }
    
    if (lineInputField && lineId) {
        lineInputField.value = lineId;
    }
    
    applySettings();
    
    // 自宅住所も復元
    const savedAddress = localStorage.getItem('homeAddress');
    const userLat = parseFloat(localStorage.getItem('userLat'));
    const userLng = parseFloat(localStorage.getItem('userLng'));
    
    if (savedAddress && !isNaN(userLat) && !isNaN(userLng)) {
        userNearestStation = findNearestStation(userLat, userLng);
        
        if (userMarker) {
            map.removeLayer(userMarker);
        }
        
        userMarker = L.marker([userLat, userLng], {
            icon: L.divIcon({
                className: 'custom-icon user-icon',
                html: '🏠',
                iconSize: [30, 30]
            })
        }).addTo(map);
        
        userMarker.bindPopup(`<strong>自宅</strong><br>${savedAddress}`);
    }
}

function applySettings() {
    const textSize = localStorage.getItem('textSize') || 'normal';
    const contrast = localStorage.getItem('contrast') || 'normal';
    
    document.body.className = `text-${textSize} contrast-${contrast}`;
}

console.log('✅ main.js 読み込み完了');
