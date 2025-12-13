// ==========================================
// ならやさしいイベントナビ - メインJavaScript v4.0
// 徒歩ルート最適化版
// ==========================================

// ==========================================
// 1. グローバル変数
// ==========================================
let map;
let eventsData = [];
let stationsData = [];
let currentFilters = {
    category: 'all',
    wheelchair: false,
    elevator: false,
    multipurpose_toilet: false,
    walkTime: 20
};
let userHome = null;
let currentRoute = null;
let homeMarker = null;
let routeLayers = [];

// ==========================================
// 2. 初期化処理
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
    loadData();
    loadUserSettings();
    setupEventListeners();
    updateAccessibilityControls();
});

// ==========================================
// 3. 地図の初期化
// ==========================================
function initializeMap() {
    map = L.map('map').setView([34.6851, 135.8048], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
}

// ==========================================
// 4. データの読み込み
// ==========================================
function loadData() {
    eventsData = window.EVENTS || [];
    stationsData = window.STATIONS_DATA || [];
    displayEvents();
    displayStations();
}

// ==========================================
// 5. ユーザー設定の読み込み
// ==========================================
function loadUserSettings() {
    const savedHome = localStorage.getItem('userHomeAddress');
    const savedPhone = localStorage.getItem('userPhone');
    const savedEmail = localStorage.getItem('userEmail');
    
    if (savedHome) {
        document.getElementById('home-address').value = savedHome;
        geocodeAddress(savedHome).then(coords => {
            if (coords) {
                userHome = coords;
                displayHomeMarker();
            }
        });
    }
    
    if (savedPhone) {
        document.getElementById('user-phone').value = savedPhone;
    }
    
    if (savedEmail) {
        document.getElementById('user-email').value = savedEmail;
    }
}

// ==========================================
// 6. イベントリスナーの設定
// ==========================================
function setupEventListeners() {
    // フィルター
    document.getElementById('category-filter').addEventListener('change', (e) => {
        currentFilters.category = e.target.value;
        displayEvents();
    });
    
    document.getElementById('filter-wheelchair').addEventListener('change', (e) => {
        currentFilters.wheelchair = e.target.checked;
        displayEvents();
    });
    
    document.getElementById('filter-elevator').addEventListener('change', (e) => {
        currentFilters.elevator = e.target.checked;
        displayEvents();
    });
    
    document.getElementById('filter-toilet').addEventListener('change', (e) => {
        currentFilters.multipurpose_toilet = e.target.checked;
        displayEvents();
    });
    
    document.getElementById('walk-time-filter').addEventListener('change', (e) => {
        currentFilters.walkTime = parseInt(e.target.value);
        document.getElementById('walk-time-value').textContent = `${currentFilters.walkTime}分`;
        displayEvents();
    });
    
    // 自宅住所登録
    document.getElementById('save-home').addEventListener('click', saveHomeAddress);
    
    // 連絡先登録
    document.getElementById('save-contact').addEventListener('click', saveContactInfo);
    
    // アクセシビリティ
    document.getElementById('font-size-increase').addEventListener('click', () => {
        document.body.style.fontSize = 
            (parseFloat(getComputedStyle(document.body).fontSize) + 2) + 'px';
    });
    
    document.getElementById('font-size-decrease').addEventListener('click', () => {
        document.body.style.fontSize = 
            (parseFloat(getComputedStyle(document.body).fontSize) - 2) + 'px';
    });
    
    document.getElementById('high-contrast').addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });
}

// ==========================================
// 7. 自宅住所の保存
// ==========================================
async function saveHomeAddress() {
    const address = document.getElementById('home-address').value.trim();
    
    if (!address) {
        alert('住所を入力してください');
        return;
    }
    
    const coords = await geocodeAddress(address);
    
    if (coords) {
        userHome = coords;
        localStorage.setItem('userHomeAddress', address);
        displayHomeMarker();
        alert('自宅住所を登録しました');
    } else {
        alert('住所が見つかりませんでした。もう一度お試しください。');
    }
}

// ==========================================
// 8. 連絡先情報の保存
// ==========================================
function saveContactInfo() {
    const phone = document.getElementById('user-phone').value.trim();
    const email = document.getElementById('user-email').value.trim();
    
    if (phone) {
        localStorage.setItem('userPhone', phone);
    }
    if (email) {
        localStorage.setItem('userEmail', email);
    }
    
    alert('連絡先情報を保存しました');
}

// ==========================================
// 9. ジオコーディング
// ==========================================
async function geocodeAddress(address) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address + ' 奈良市')}&limit=1`
        );
        const data = await response.json();
        
        if (data && data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon)
            };
        }
        return null;
    } catch (error) {
        console.error('ジオコーディングエラー:', error);
        return null;
    }
}

// ==========================================
// 10. 自宅マーカーの表示
// ==========================================
function displayHomeMarker() {
    if (homeMarker) {
        map.removeLayer(homeMarker);
    }
    
    if (userHome) {
        const homeIcon = L.divIcon({
            html: '🏠',
            className: 'custom-icon',
            iconSize: [30, 30]
        });
        
        homeMarker = L.marker([userHome.lat, userHome.lng], { icon: homeIcon })
            .addTo(map)
            .bindPopup('自宅');
    }
}

// ==========================================
// 11. イベントの表示
// ==========================================
function displayEvents() {
    const container = document.getElementById('events-container');
    container.innerHTML = '';
    
    const filtered = eventsData.filter(event => {
        if (currentFilters.category !== 'all' && event.category !== currentFilters.category) {
            return false;
        }
        
        if (currentFilters.wheelchair && !event.barrier_free.wheelchair_accessible) {
            return false;
        }
        
        if (currentFilters.elevator && !event.barrier_free.elevator) {
            return false;
        }
        
        if (currentFilters.multipurpose_toilet && !event.barrier_free.multipurpose_toilet) {
            return false;
        }
        
        return true;
    });
    
    filtered.forEach(event => {
        const card = createEventCard(event);
        container.appendChild(card);
    });
    
    displayEventMarkers(filtered);
}

// ==========================================
// 12. イベントカードの作成
// ==========================================
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    
    const accessibilityIcons = [];
    if (event.barrier_free.wheelchair_accessible) accessibilityIcons.push('♿ 車椅子対応');
    if (event.barrier_free.elevator) accessibilityIcons.push('🛗 エレベーター');
    if (event.barrier_free.multipurpose_toilet) accessibilityIcons.push('🚻 多目的トイレ');
    if (event.barrier_free.parking) accessibilityIcons.push('🅿️ 駐車場');
    if (event.barrier_free.guide_dog) accessibilityIcons.push('🦮 盲導犬OK');
    
    card.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>📅 日時:</strong> ${event.date}</p>
        <p><strong>📍 場所:</strong> ${event.location}</p>
        <p><strong>🏷️ カテゴリー:</strong> ${event.category}</p>
        <p><strong>♿ バリアフリー:</strong> ${accessibilityIcons.join(', ') || 'なし'}</p>
        ${event.contact ? `<p><strong>📞 問合せ:</strong> ${event.contact}</p>` : ''}
        <div class="event-actions">
            ${userHome ? `<button onclick="showRoute(${event.id})" class="btn-route">🚶 経路を調べる</button>` : ''}
            <button onclick="sendEventInfo(${event.id}, 'mail')" class="btn-send">📮 郵送</button>
            <button onclick="sendEventInfo(${event.id}, 'phone')" class="btn-send">📞 電話</button>
            <button onclick="sendEventInfo(${event.id}, 'line')" class="btn-send">💬 LINE</button>
            <button onclick="sendEventInfo(${event.id}, 'email')" class="btn-send">📧 メール</button>
        </div>
    `;
    
    return card;
}

// ==========================================
// 13. イベントマーカーの表示
// ==========================================
function displayEventMarkers(events) {
    events.forEach(event => {
        const markerColor = event.barrier_free.wheelchair_accessible ? 'green' : 
                          (event.barrier_free.elevator || event.barrier_free.multipurpose_toilet) ? 'yellow' : 'red';
        
        const icon = L.divIcon({
            html: `<div style="background-color: ${markerColor}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
            className: 'custom-marker',
            iconSize: [20, 20]
        });
        
        if (event.coordinates) {
            L.marker([event.coordinates.lat, event.coordinates.lng], { icon })
                .addTo(map)
                .bindPopup(`
                    <strong>${event.name}</strong><br>
                    ${event.location}<br>
                    ${event.date}
                `);
        }
    });
}

// ==========================================
// 14. 駅の表示
// ==========================================
function displayStations() {
    stationsData.forEach(station => {
        const stationIcon = L.divIcon({
            html: '🚉',
            className: 'station-icon',
            iconSize: [25, 25]
        });
        
        L.marker([station.lat, station.lng], { icon: stationIcon })
            .addTo(map)
            .bindPopup(`
                <strong>${station.name}</strong><br>
                <strong>路線:</strong> ${station.line}<br>
                <strong>バリアフリー設備:</strong><br>
                ${station.barrier_free.elevator ? '✅ エレベーター' : '❌ エレベーター'}<br>
                ${station.barrier_free.escalator ? '✅ エスカレーター' : '❌ エスカレーター'}<br>
                ${station.barrier_free.multipurpose_toilet ? '✅ 多目的トイレ' : '❌ 多目的トイレ'}<br>
                ${station.barrier_free.step_free ? '✅ 段差なし' : '❌ 段差なし'}<br>
                ${station.barrier_free.wheelchair_rental ? '✅ 車椅子貸出' : '❌ 車椅子貸出'}<br>
                ${station.barrier_free.guide_dog ? '✅ 盲導犬OK' : '❌ 盲導犬OK'}
            `);
    });
}

// ==========================================
// 15. 経路の表示 (v4.0: 徒歩ルート最適化)
// ==========================================
async function showRoute(eventId) {
    if (!userHome) {
        alert('自宅住所を登録してください');
        return;
    }
    
    clearRouteLayers();
    
    const event = eventsData.find(e => e.id === eventId);
    if (!event || !event.coordinates) {
        alert('イベント情報が見つかりません');
        return;
    }
    
    // 最寄り駅の検索
    const departureStation = findNearestStation(userHome);
    const arrivalStation = findNearestStation(event.coordinates);
    
    if (!departureStation || !arrivalStation) {
        alert('最寄り駅が見つかりません');
        return;
    }
    
    // 徒歩時間チェック
    const homeToStationDist = calculateDistance(userHome, departureStation);
    const stationToVenueDist = calculateDistance(arrivalStation, event.coordinates);
    const homeToStationTime = Math.ceil((homeToStationDist / 1000) / 4 * 60); // 時速4km
    const stationToVenueTime = Math.ceil((stationToVenueDist / 1000) / 4 * 60);
    
    if (homeToStationTime > currentFilters.walkTime || stationToVenueTime > currentFilters.walkTime) {
        alert(`徒歩${currentFilters.walkTime}分以内の駅が見つかりません。フィルターを調整してください。`);
        return;
    }
    
    // 徒歩ルートの取得 (v4.0: foot プロファイルを使用)
    const homeToStationRoute = await getWalkingRoute(userHome, departureStation);
    const stationToVenueRoute = await getWalkingRoute(arrivalStation, event.coordinates);
    
    if (!homeToStationRoute || !stationToVenueRoute) {
        alert('徒歩ルートが見つかりません');
        return;
    }
    
    // ルート情報の表示
    displayRouteInfo(event, departureStation, arrivalStation, homeToStationTime, stationToVenueTime, homeToStationRoute, stationToVenueRoute);
    
    // 地図上にルートを表示
    drawRoute(homeToStationRoute, stationToVenueRoute, departureStation, arrivalStation, event);
}

// ==========================================
// 16. 徒歩ルートの取得 (v4.0: 徒歩専用プロファイル)
// ==========================================
async function getWalkingRoute(start, end) {
    try {
        // OSRM API の foot プロファイルを使用
        const url = `https://router.project-osrm.org/route/v1/foot/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
            return {
                coordinates: data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]),
                distance: data.routes[0].distance,
                duration: data.routes[0].duration
            };
        }
        
        return null;
    } catch (error) {
        console.error('徒歩ルート取得エラー:', error);
        return null;
    }
}

// ==========================================
// 17. ルート情報の表示
// ==========================================
function displayRouteInfo(event, departureStation, arrivalStation, homeToStationTime, stationToVenueTime, homeRoute, venueRoute) {
    const modal = document.createElement('div');
    modal.className = 'route-modal';
    modal.innerHTML = `
        <div class="route-modal-content">
            <span class="close-modal" onclick="this.parentElement.parentElement.remove()">×</span>
            <h2>🚶 ${event.name} への経路</h2>
            
            <div class="route-section">
                <h3>📍 出発駅: ${departureStation.name}</h3>
                <p>🏠 自宅から徒歩: 約${homeToStationTime}分 (${(homeRoute.distance/1000).toFixed(1)}km)</p>
                <div class="barrier-free-info">
                    ${formatBarrierFreeInfo(departureStation.barrier_free)}
                </div>
            </div>
            
            <div class="route-section">
                <h3>🚉 電車での移動</h3>
                <p>${departureStation.name} → ${arrivalStation.name}</p>
                <p><em>※乗り換え案内は別途ご確認ください</em></p>
            </div>
            
            <div class="route-section">
                <h3>📍 到着駅: ${arrivalStation.name}</h3>
                <p>🚶 駅から会場まで徒歩: 約${stationToVenueTime}分 (${(venueRoute.distance/1000).toFixed(1)}km)</p>
                <div class="barrier-free-info">
                    ${formatBarrierFreeInfo(arrivalStation.barrier_free)}
                </div>
            </div>
            
            <div class="route-section">
                <h3>⏱️ 合計時間</h3>
                <p>徒歩時間: 約${homeToStationTime + stationToVenueTime}分</p>
                <p><small>※電車の乗車時間は含まれません</small></p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// ==========================================
// 18. バリアフリー情報のフォーマット
// ==========================================
function formatBarrierFreeInfo(barrierFree) {
    const items = [];
    if (barrierFree.elevator) items.push('✅ エレベーター');
    else items.push('❌ エレベーター');
    
    if (barrierFree.multipurpose_toilet) items.push('✅ 多目的トイレ');
    else items.push('❌ 多目的トイレ');
    
    if (barrierFree.step_free) items.push('✅ 段差なし');
    else items.push('❌ 段差なし');
    
    if (barrierFree.wheelchair_rental) items.push('✅ 車椅子貸出');
    
    return items.join('<br>');
}

// ==========================================
// 19. ルートの描画 (v4.0: シンプルな表示)
// ==========================================
function drawRoute(homeRoute, venueRoute, departureStation, arrivalStation, event) {
    // 自宅→出発駅の徒歩ルート (緑の実線)
    const homeRouteLayer = L.polyline(homeRoute.coordinates, {
        color: 'green',
        weight: 4,
        opacity: 0.8
    }).addTo(map);
    routeLayers.push(homeRouteLayer);
    
    // 出発駅マーカー (大きな丸)
    const departureIcon = L.divIcon({
        html: `<div style="background-color: #2196F3; width: 40px; height: 40px; border-radius: 50%; border: 4px solid white; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px;">🚉</div>`,
        className: 'station-marker-large',
        iconSize: [40, 40]
    });
    const departureMarker = L.marker([departureStation.lat, departureStation.lng], { icon: departureIcon })
        .addTo(map)
        .bindPopup(`<strong>出発駅: ${departureStation.name}</strong>`);
    routeLayers.push(departureMarker);
    
    // 到着駅マーカー (大きな丸)
    const arrivalIcon = L.divIcon({
        html: `<div style="background-color: #FF9800; width: 40px; height: 40px; border-radius: 50%; border: 4px solid white; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px;">🚉</div>`,
        className: 'station-marker-large',
        iconSize: [40, 40]
    });
    const arrivalMarker = L.marker([arrivalStation.lat, arrivalStation.lng], { icon: arrivalIcon })
        .addTo(map)
        .bindPopup(`<strong>到着駅: ${arrivalStation.name}</strong>`);
    routeLayers.push(arrivalMarker);
    
    // 到着駅→会場の徒歩ルート (緑の実線)
    const venueRouteLayer = L.polyline(venueRoute.coordinates, {
        color: 'green',
        weight: 4,
        opacity: 0.8
    }).addTo(map);
    routeLayers.push(venueRouteLayer);
    
    // 会場マーカー
    const venueIcon = L.divIcon({
        html: '🎯',
        className: 'venue-icon',
        iconSize: [30, 30]
    });
    const venueMarker = L.marker([event.coordinates.lat, event.coordinates.lng], { icon: venueIcon })
        .addTo(map)
        .bindPopup(`<strong>会場: ${event.name}</strong>`);
    routeLayers.push(venueMarker);
    
    // 地図の表示範囲を調整
    const bounds = L.latLngBounds([
        [userHome.lat, userHome.lng],
        [departureStation.lat, departureStation.lng],
        [arrivalStation.lat, arrivalStation.lng],
        [event.coordinates.lat, event.coordinates.lng]
    ]);
    map.fitBounds(bounds, { padding: [50, 50] });
}

// ==========================================
// 20. ルートレイヤーのクリア
// ==========================================
function clearRouteLayers() {
    routeLayers.forEach(layer => map.removeLayer(layer));
    routeLayers = [];
}

// ==========================================
// 21. 最寄り駅の検索
// ==========================================
function findNearestStation(location) {
    let nearest = null;
    let minDistance = Infinity;
    
    stationsData.forEach(station => {
        const distance = calculateDistance(location, station);
        if (distance < minDistance) {
            minDistance = distance;
            nearest = station;
        }
    });
    
    return nearest;
}

// ==========================================
// 22. 距離の計算 (Haversine)
// ==========================================
function calculateDistance(point1, point2) {
    const R = 6371000; // 地球の半径 (メートル)
    const lat1 = point1.lat * Math.PI / 180;
    const lat2 = point2.lat * Math.PI / 180;
    const deltaLat = (point2.lat - point1.lat) * Math.PI / 180;
    const deltaLng = (point2.lng - point1.lng) * Math.PI / 180;
    
    const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLng/2) * Math.sin(deltaLng/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    return R * c;
}

// ==========================================
// 23. イベント情報の送信
// ==========================================
function sendEventInfo(eventId, method) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;
    
    const homeAddress = localStorage.getItem('userHomeAddress') || '未登録';
    const phone = localStorage.getItem('userPhone') || '未登録';
    const email = localStorage.getItem('userEmail') || '未登録';
    
    let message = `
【イベント情報】
イベント名: ${event.name}
日時: ${event.date}
場所: ${event.location}
カテゴリー: ${event.category}

【バリアフリー設備】
車椅子対応: ${event.barrier_free.wheelchair_accessible ? 'あり' : 'なし'}
エレベーター: ${event.barrier_free.elevator ? 'あり' : 'なし'}
多目的トイレ: ${event.barrier_free.multipurpose_toilet ? 'あり' : 'なし'}
駐車場: ${event.barrier_free.parking ? 'あり' : 'なし'}
盲導犬: ${event.barrier_free.guide_dog ? 'OK' : '不明'}

【連絡先】
${event.contact ? `問合せ: ${event.contact}` : '問合せ先なし'}

【あなたの情報】
自宅住所: ${homeAddress}
電話番号: ${phone}
メールアドレス: ${email}
    `.trim();
    
    switch(method) {
        case 'mail':
            alert('郵送用の情報をコピーしました。印刷してご利用ください。\n\n' + message);
            copyToClipboard(message);
            break;
        case 'phone':
            if (phone === '未登録') {
                alert('電話番号を設定してください');
            } else {
                alert(`電話での問い合わせ:\n${event.contact || '問合せ先が登録されていません'}\n\n情報をコピーしました。`);
                copyToClipboard(message);
            }
            break;
        case 'line':
            const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`;
            window.open(lineUrl, '_blank');
            break;
        case 'email':
            if (email === '未登録') {
                alert('メールアドレスを設定してください');
            } else {
                const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent('イベント情報: ' + event.name)}&body=${encodeURIComponent(message)}`;
                window.location.href = mailtoUrl;
            }
            break;
    }
}

// ==========================================
// 24. クリップボードへのコピー
// ==========================================
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// ==========================================
// 25. アクセシビリティコントロールの更新
// ==========================================
function updateAccessibilityControls() {
    const controls = document.querySelector('.accessibility-controls');
    if (controls) {
        controls.setAttribute('role', 'toolbar');
        controls.setAttribute('aria-label', 'アクセシビリティツール');
    }
}
