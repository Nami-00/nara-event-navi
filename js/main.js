/**
 * ならやさしいイベントナビ v5 - メイン機能
 * 更新日: 2025-12-14
 * 
 * 新機能:
 * ① 徒歩ルート最適化: OSRM foot プロファイルを採用
 * ② 経路表示のシンプル化: 駅マーカー強調、徒歩ルートのみ表示
 * ③ 住所登録時に最寄り駅の候補を3つ出して選択・登録
 * ④ 絞り込み情報を登録すれば、合致した情報を自動配信
 * ⑤ バリアフリー情報に「盲導犬・介助犬・聴導犬同伴可」追加
 * ⑥ 配信ボタンで徒歩ルートの地図も含めた画面を配信
 */

// グローバル変数
let map;
let routeMap;
let eventMarkers = [];
let stationMarkers = [];
let routeLayer = null;
let currentEvent = null;
let userSettings = {
    homeAddress: null,
    homeCoords: null,
    nearestStation: null,
    textSize: 'medium',
    highContrast: false,
    savedFilters: null
};

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    loadUserSettings();
    displayEvents(EVENTS_DATA);
    initEventListeners();
    applyAccessibilitySettings();
});

// 地図の初期化
function initMap() {
    map = L.map('map').setView([34.685174, 135.805000], 12);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // イベントマーカーを追加
    addEventMarkers(EVENTS_DATA);
    
    // 駅マーカーを追加（②強調表示）
    addStationMarkers();
}

// イベントマーカーの追加
function addEventMarkers(events) {
    // 既存のマーカーをクリア
    eventMarkers.forEach(marker => map.removeLayer(marker));
    eventMarkers = [];
    
    events.forEach(event => {
        const color = getMarkerColor(event.accessibility);
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        const marker = L.marker([event.lat, event.lon], { icon }).addTo(map);
        marker.bindPopup(`
            <div class="map-popup">
                <h3>${event.name}</h3>
                <p><strong>日時:</strong> ${event.date} ${event.time}</p>
                <p><strong>会場:</strong> ${event.venue}</p>
                <button onclick="showEventDetail(${event.id})" class="popup-btn">詳細を見る</button>
            </div>
        `);
        
        eventMarkers.push(marker);
    });
}

// ②駅マーカーの追加（強調表示）
function addStationMarkers() {
    // 既存の駅マーカーをクリア
    stationMarkers.forEach(marker => map.removeLayer(marker));
    stationMarkers = [];
    
    STATIONS_DATA.forEach(station => {
        const icon = L.divIcon({
            className: 'station-marker',
            html: `<div style="font-size: 24px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">🚉</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 30]
        });
        
        const marker = L.marker([station.lat, station.lon], { icon }).addTo(map);
        
        const accessibilityInfo = [];
        if (station.accessibility.multipurpose_toilet) accessibilityInfo.push('多目的トイレ');
        if (station.accessibility.elevator) accessibilityInfo.push('エレベータ');
        if (station.accessibility.wheelchair_rental) accessibilityInfo.push('車椅子貸出');
        if (station.accessibility.service_dog_allowed) accessibilityInfo.push('盲導犬OK');
        
        marker.bindPopup(`
            <div class="map-popup station-popup">
                <h3>🚉 ${station.name}駅</h3>
                <p><strong>路線:</strong> ${station.line}</p>
                <p><strong>運営:</strong> ${station.operator}</p>
                <p><strong>バリアフリー設備:</strong><br>${accessibilityInfo.join('、')}</p>
            </div>
        `);
        
        stationMarkers.push(marker);
    });
}

// マーカーの色を決定
function getMarkerColor(accessibility) {
    if (!accessibility || accessibility.length === 0) return '#ff5252';
    if (accessibility.length >= 3) return '#4caf50';
    return '#ffc107';
}

// イベント一覧の表示
function displayEvents(events) {
    const eventsList = document.getElementById('eventsList');
    const eventCount = document.getElementById('eventCount');
    
    eventCount.textContent = events.length;
    eventsList.innerHTML = '';
    
    if (events.length === 0) {
        eventsList.innerHTML = '<p class="no-events">条件に合うイベントが見つかりませんでした。</p>';
        return;
    }
    
    events.forEach(event => {
        const card = createEventCard(event);
        eventsList.appendChild(card);
    });
}

// イベントカードの作成
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.setAttribute('role', 'listitem');
    
    const accessibilityIcons = event.accessibility.map(item => {
        const iconMap = {
            '多目的トイレ': '🚻',
            'エレベータ': '🛗',
            '車椅子貸出': '♿',
            '段差への対応': '🚶',
            '盲導犬・介助犬・聴導犬同伴可': '🐕‍🦺'
        };
        return `<span class="accessibility-icon" title="${item}">${iconMap[item] || '✓'}</span>`;
    }).join('');
    
    card.innerHTML = `
        <div class="event-header">
            <h3>${event.name}</h3>
            <span class="event-category">${event.category}</span>
        </div>
        <div class="event-body">
            <p class="event-date"><strong>📅 日時:</strong> ${event.date} ${event.time}</p>
            <p class="event-venue"><strong>📍 会場:</strong> ${event.venue}</p>
            <p class="event-description">${event.description}</p>
            <div class="accessibility-info">
                <strong>バリアフリー設備:</strong>
                <div class="accessibility-icons">${accessibilityIcons || 'なし'}</div>
            </div>
        </div>
        <div class="event-footer">
            <button onclick="showEventDetail(${event.id})" class="detail-btn">詳細を見る</button>
        </div>
    `;
    
    return card;
}

// イベント詳細の表示
function showEventDetail(eventId) {
    const event = EVENTS_DATA.find(e => e.id === eventId);
    if (!event) return;
    
    currentEvent = event;
    const modal = document.getElementById('eventDetailModal');
    const content = document.getElementById('eventDetailContent');
    
    const accessibilityList = event.accessibility.length > 0 
        ? event.accessibility.map(item => `<li>${item}</li>`).join('')
        : '<li>情報なし</li>';
    
    content.innerHTML = `
        <h2>${event.name}</h2>
        <div class="event-detail-info">
            <p><strong>📅 日時:</strong> ${event.date} ${event.time}</p>
            <p><strong>📍 会場:</strong> ${event.venue}</p>
            <p><strong>🏠 住所:</strong> ${event.address}</p>
            <p><strong>📂 カテゴリー:</strong> ${event.category}</p>
            <p><strong>👥 定員:</strong> ${event.capacity}</p>
            <p><strong>💰 参加費:</strong> ${event.fee}</p>
            <p><strong>📞 問い合わせ:</strong> ${event.contact}</p>
        </div>
        <div class="event-description-detail">
            <h3>イベント詳細</h3>
            <p>${event.description}</p>
        </div>
        <div class="accessibility-detail">
            <h3>バリアフリー設備</h3>
            <ul>${accessibilityList}</ul>
        </div>
    `;
    
    // 自宅住所が登録されている場合は経路案内を表示
    if (userSettings.homeCoords) {
        showRouteInfo(event);
    }
    
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

// ①③経路情報の表示（OSRM footプロファイル + 最寄り駅経由）
async function showRouteInfo(event) {
    const routeInfoArea = document.getElementById('routeInfoArea');
    const routeDetails = document.getElementById('routeDetails');
    
    routeInfoArea.style.display = 'block';
    
    // 経路地図の初期化
    if (routeMap) {
        routeMap.remove();
    }
    
    routeMap = L.map('routeMap').setView([
        (userSettings.homeCoords.lat + event.lat) / 2,
        (userSettings.homeCoords.lon + event.lon) / 2
    ], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(routeMap);
    
    // 出発地マーカー（自宅）
    const homeIcon = L.divIcon({
        className: 'home-marker',
        html: '<div style="font-size: 28px;">🏠</div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30]
    });
    L.marker([userSettings.homeCoords.lat, userSettings.homeCoords.lon], { icon: homeIcon })
        .addTo(routeMap)
        .bindPopup('自宅');
    
    // 目的地マーカー（イベント会場）
    const eventIcon = L.divIcon({
        className: 'event-marker',
        html: '<div style="font-size: 28px;">🎯</div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30]
    });
    L.marker([event.lat, event.lon], { icon: eventIcon })
        .addTo(routeMap)
        .bindPopup(event.venue);
    
    // ②最寄り駅マーカー（強調）
    if (userSettings.nearestStation) {
        const stationIcon = L.divIcon({
            className: 'station-marker-route',
            html: '<div style="font-size: 32px; font-weight: bold;">🚉</div>',
            iconSize: [35, 35],
            iconAnchor: [17.5, 35]
        });
        L.marker([userSettings.nearestStation.lat, userSettings.nearestStation.lon], { icon: stationIcon })
            .addTo(routeMap)
            .bindPopup(`最寄り駅: ${userSettings.nearestStation.name}`);
    }
    
    // ①OSRM footプロファイルで徒歩ルートを取得
    try {
        const route = await getWalkingRoute(
            userSettings.homeCoords.lat,
            userSettings.homeCoords.lon,
            event.lat,
            event.lon
        );
        
        if (route) {
            // ②徒歩ルートのみ表示（シンプル化）
            const routeCoords = route.geometry.coordinates.map(coord => [coord[1], coord[0]]);
            
            if (routeLayer) {
                routeMap.removeLayer(routeLayer);
            }
            
            routeLayer = L.polyline(routeCoords, {
                color: '#2196F3',
                weight: 5,
                opacity: 0.7,
                dashArray: '10, 10'
            }).addTo(routeMap);
            
            routeMap.fitBounds(routeLayer.getBounds(), { padding: [50, 50] });
            
            // 経路詳細情報を表示
            const distance = (route.distance / 1000).toFixed(2);
            const duration = Math.round(route.duration / 60);
            
            routeDetails.innerHTML = `
                <div class="route-summary">
                    <h4>🚶 徒歩ルート</h4>
                    <p><strong>距離:</strong> ${distance} km</p>
                    <p><strong>所要時間:</strong> 約 ${duration} 分</p>
                    ${userSettings.nearestStation ? `
                        <p><strong>最寄り駅:</strong> ${userSettings.nearestStation.name}駅（${userSettings.nearestStation.line}）</p>
                    ` : ''}
                </div>
                <div class="route-note">
                    <p>💡 徒歩での最適ルートを表示しています。</p>
                    <p>実際の所要時間は、歩行速度や交通状況により異なる場合があります。</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('経路取得エラー:', error);
        routeDetails.innerHTML = `
            <p class="error-message">経路情報の取得に失敗しました。</p>
            <p>住所: ${userSettings.homeAddress} から ${event.address} までの経路を表示できませんでした。</p>
        `;
    }
}

// ①OSRM footプロファイルで徒歩ルートを取得
async function getWalkingRoute(startLat, startLon, endLat, endLon) {
    // OSRM footプロファイル（徒歩専用）を使用
    const url = `https://router.project-osrm.org/route/v1/foot/${startLon},${startLat};${endLon},${endLat}?overview=full&geometries=geojson`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
            return data.routes[0];
        }
        return null;
    } catch (error) {
        console.error('OSRM APIエラー:', error);
        return null;
    }
}

// イベントリスナーの初期化
function initEventListeners() {
    // 自宅住所設定ボタン
    document.getElementById('homeAddressBtn').addEventListener('click', () => {
        openModal('homeAddressModal');
    });
    
    // 通知設定ボタン
    document.getElementById('notificationBtn').addEventListener('click', () => {
        updateNotificationModal();
        openModal('notificationModal');
    });
    
    // 文字サイズ変更ボタン
    document.getElementById('textSizeBtn').addEventListener('click', toggleTextSize);
    
    // コントラスト変更ボタン
    document.getElementById('contrastBtn').addEventListener('click', toggleContrast);
    
    // ④絞り込み条件保存ボタン
    document.getElementById('saveFiltersBtn').addEventListener('click', saveFilters);
    
    // 絞り込み条件クリアボタン
    document.getElementById('clearFiltersBtn').addEventListener('click', clearFilters);
    
    // ⑥経路共有ボタン
    document.getElementById('shareRouteBtn').addEventListener('click', () => {
        prepareRouteShare();
        openModal('shareRouteModal');
    });
    
    // カテゴリーフィルター
    document.getElementById('categoryFilter').addEventListener('change', filterEvents);
    
    // バリアフリー設備フィルター
    document.querySelectorAll('input[name="accessibility"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterEvents);
    });
    
    // 自宅住所フォーム送信
    document.getElementById('homeAddressForm').addEventListener('submit', handleAddressSubmit);
    
    // モーダルを閉じる
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // モーダル外クリックで閉じる
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
}

// ③自宅住所フォーム送信処理
async function handleAddressSubmit(e) {
    e.preventDefault();
    
    const addressInput = document.getElementById('homeAddress');
    const address = addressInput.value.trim();
    
    if (!address) {
        alert('住所を入力してください。');
        return;
    }
    
    try {
        // ジオコーディング（住所→座標）
        const coords = await geocodeAddress(address);
        
        if (!coords) {
            alert('住所の取得に失敗しました。正しい住所を入力してください。');
            return;
        }
        
        userSettings.homeAddress = address;
        userSettings.homeCoords = coords;
        
        // ③最寄り駅の候補を3つ取得して表示
        const nearestStations = findNearestStations(coords, 3);
        displayStationCandidates(nearestStations);
        
        // フォームを非表示、駅選択エリアを表示
        document.getElementById('homeAddressForm').style.display = 'none';
        document.getElementById('nearestStationsArea').style.display = 'block';
        
    } catch (error) {
        console.error('住所登録エラー:', error);
        alert('住所の登録に失敗しました。もう一度お試しください。');
    }
}

// ジオコーディング（住所→座標）
async function geocodeAddress(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data && data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lon: parseFloat(data[0].lon)
            };
        }
        return null;
    } catch (error) {
        console.error('ジオコーディングエラー:', error);
        return null;
    }
}

// ③最寄り駅を複数検索
function findNearestStations(coords, count = 3) {
    const stationsWithDistance = STATIONS_DATA.map(station => {
        const distance = calculateDistance(
            coords.lat, coords.lon,
            station.lat, station.lon
        );
        return { ...station, distance };
    });
    
    // 距離順にソート
    stationsWithDistance.sort((a, b) => a.distance - b.distance);
    
    // 上位count件を返す
    return stationsWithDistance.slice(0, count);
}

// 2点間の距離を計算（Haversine formula）
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // 地球の半径（km）
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// ③駅候補の表示
function displayStationCandidates(stations) {
    const stationsList = document.getElementById('stationsList');
    stationsList.innerHTML = '';
    
    stations.forEach((station, index) => {
        const card = document.createElement('div');
        card.className = 'station-card';
        
        const accessibilityInfo = [];
        if (station.accessibility.multipurpose_toilet) accessibilityInfo.push('多目的トイレ');
        if (station.accessibility.elevator) accessibilityInfo.push('エレベータ');
        if (station.accessibility.wheelchair_rental) accessibilityInfo.push('車椅子貸出');
        if (station.accessibility.service_dog_allowed) accessibilityInfo.push('盲導犬OK');
        
        card.innerHTML = `
            <div class="station-card-header">
                <h4>候補 ${index + 1}: ${station.name}駅</h4>
                <span class="station-distance">${station.distance.toFixed(2)} km</span>
            </div>
            <p><strong>路線:</strong> ${station.line}</p>
            <p><strong>運営:</strong> ${station.operator}</p>
            <p><strong>バリアフリー:</strong> ${accessibilityInfo.join('、')}</p>
            <button onclick="selectStation(${station.id})" class="select-station-btn">この駅を選択</button>
        `;
        
        stationsList.appendChild(card);
    });
}

// ③駅の選択
function selectStation(stationId) {
    const station = STATIONS_DATA.find(s => s.id === stationId);
    if (!station) return;
    
    userSettings.nearestStation = station;
    saveUserSettings();
    
    // 登録完了メッセージ
    alert(`最寄り駅を「${station.name}駅」に設定しました。`);
    
    // 住所表示を更新
    updateHomeAddressDisplay();
    
    // モーダルを閉じる
    closeModal('homeAddressModal');
    
    // フォームをリセット
    document.getElementById('homeAddressForm').reset();
    document.getElementById('homeAddressForm').style.display = 'block';
    document.getElementById('nearestStationsArea').style.display = 'none';
}

// 自宅住所表示の更新
function updateHomeAddressDisplay() {
    const display = document.getElementById('homeAddressDisplay');
    const addressSpan = document.getElementById('registeredAddress');
    const stationSpan = document.getElementById('registeredStation');
    
    if (userSettings.homeAddress) {
        display.style.display = 'block';
        addressSpan.textContent = userSettings.homeAddress;
        stationSpan.textContent = userSettings.nearestStation 
            ? `${userSettings.nearestStation.name}駅（${userSettings.nearestStation.line}）`
            : '未設定';
    } else {
        display.style.display = 'none';
    }
}

// ④絞り込み条件の保存
function saveFilters() {
    const category = document.getElementById('categoryFilter').value;
    const accessibility = Array.from(document.querySelectorAll('input[name="accessibility"]:checked'))
        .map(cb => cb.value);
    
    if (category === 'all' && accessibility.length === 0) {
        alert('絞り込み条件を設定してください。');
        return;
    }
    
    userSettings.savedFilters = {
        category,
        accessibility
    };
    
    saveUserSettings();
    alert('絞り込み条件を保存しました。\n条件に合致するイベント情報が自動で配信されます。');
    
    // 通知設定モーダルを更新
    updateNotificationModal();
}

// ④絞り込み条件のクリア
function clearFilters() {
    if (!confirm('保存された絞り込み条件をクリアしますか？')) {
        return;
    }
    
    userSettings.savedFilters = null;
    saveUserSettings();
    
    alert('絞り込み条件をクリアしました。');
    closeModal('notificationModal');
}

// 通知設定モーダルの更新
function updateNotificationModal() {
    const filterStatus = document.getElementById('filterStatus');
    const savedFiltersDisplay = document.getElementById('savedFiltersDisplay');
    const filtersSummary = document.getElementById('filtersSummary');
    const clearBtn = document.getElementById('clearFiltersBtn');
    
    if (userSettings.savedFilters) {
        filterStatus.className = 'status-active';
        filterStatus.innerHTML = '<span class="icon">✅</span> 絞り込み条件が設定されています';
        
        const { category, accessibility } = userSettings.savedFilters;
        const categoryText = category === 'all' ? 'すべてのカテゴリー' : category;
        const accessibilityText = accessibility.length > 0 
            ? accessibility.join('、')
            : 'すべての設備';
        
        filtersSummary.innerHTML = `
            <p><strong>カテゴリー:</strong> ${categoryText}</p>
            <p><strong>バリアフリー設備:</strong> ${accessibilityText}</p>
        `;
        
        savedFiltersDisplay.style.display = 'block';
        clearBtn.style.display = 'block';
    } else {
        filterStatus.className = 'status-inactive';
        filterStatus.innerHTML = '<span class="icon">❌</span> 絞り込み条件が未設定です';
        savedFiltersDisplay.style.display = 'none';
        clearBtn.style.display = 'none';
    }
}

// ⑥経路共有の準備
function prepareRouteShare() {
    if (!currentEvent || !userSettings.homeCoords) {
        alert('経路情報が利用できません。');
        return;
    }
    
    const preview = document.getElementById('sharePreview');
    
    // 経路地図のスクリーンショット風プレビュー
    preview.innerHTML = `
        <div class="share-preview-content">
            <h3>${currentEvent.name}</h3>
            <p><strong>日時:</strong> ${currentEvent.date} ${currentEvent.time}</p>
            <p><strong>会場:</strong> ${currentEvent.venue}</p>
            <div class="share-map-preview">
                <p>📍 出発地: ${userSettings.homeAddress}</p>
                ${userSettings.nearestStation ? `<p>🚉 最寄り駅: ${userSettings.nearestStation.name}駅</p>` : ''}
                <p>🎯 目的地: ${currentEvent.venue}</p>
                <div class="share-map-placeholder">
                    <p style="text-align: center; padding: 40px;">
                        🗺️<br>
                        徒歩ルート地図<br>
                        (実際の共有時に含まれます)
                    </p>
                </div>
            </div>
        </div>
    `;
}

// ⑥メールで共有
function shareViaEmail() {
    if (!currentEvent || !userSettings.homeCoords) return;
    
    const subject = encodeURIComponent(`【イベント情報】${currentEvent.name}`);
    const body = encodeURIComponent(
        `イベント名: ${currentEvent.name}\n` +
        `日時: ${currentEvent.date} ${currentEvent.time}\n` +
        `会場: ${currentEvent.venue}\n` +
        `住所: ${currentEvent.address}\n\n` +
        `出発地: ${userSettings.homeAddress}\n` +
        `経路: 徒歩ルートで案内\n\n` +
        `詳細はこちら: ${window.location.href}`
    );
    
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

// ⑥LINEで共有
function shareViaLine() {
    if (!currentEvent) return;
    
    const text = encodeURIComponent(
        `【イベント情報】${currentEvent.name}\n` +
        `${currentEvent.date} ${currentEvent.time}\n` +
        `${currentEvent.venue}\n` +
        `${window.location.href}`
    );
    
    window.open(`https://line.me/R/msg/text/?${text}`, '_blank');
}

// ⑥経路画像のダウンロード
function downloadRouteImage() {
    alert('この機能は準備中です。\n画像として保存する機能は今後実装予定です。');
}

// ⑥リンクをコピー
function copyRouteLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
        alert('リンクをコピーしました！');
    }).catch(err => {
        console.error('コピーエラー:', err);
        alert('リンクのコピーに失敗しました。');
    });
}

// イベントのフィルタリング
function filterEvents() {
    const category = document.getElementById('categoryFilter').value;
    const selectedAccessibility = Array.from(document.querySelectorAll('input[name="accessibility"]:checked'))
        .map(cb => cb.value);
    
    let filteredEvents = EVENTS_DATA;
    
    // カテゴリーでフィルタリング
    if (category !== 'all') {
        filteredEvents = filteredEvents.filter(event => event.category === category);
    }
    
    // バリアフリー設備でフィルタリング
    if (selectedAccessibility.length > 0) {
        filteredEvents = filteredEvents.filter(event => {
            return selectedAccessibility.every(item => event.accessibility.includes(item));
        });
    }
    
    displayEvents(filteredEvents);
    addEventMarkers(filteredEvents);
}

// 文字サイズの切り替え
function toggleTextSize() {
    const sizes = ['small', 'medium', 'large'];
    const currentIndex = sizes.indexOf(userSettings.textSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    userSettings.textSize = sizes[nextIndex];
    
    applyAccessibilitySettings();
    saveUserSettings();
}

// コントラストの切り替え
function toggleContrast() {
    userSettings.highContrast = !userSettings.highContrast;
    applyAccessibilitySettings();
    saveUserSettings();
}

// アクセシビリティ設定の適用
function applyAccessibilitySettings() {
    document.body.classList.remove('text-small', 'text-medium', 'text-large');
    document.body.classList.add(`text-${userSettings.textSize}`);
    
    if (userSettings.highContrast) {
        document.body.classList.add('high-contrast');
    } else {
        document.body.classList.remove('high-contrast');
    }
}

// ユーザー設定の保存
function saveUserSettings() {
    localStorage.setItem('naraEventNaviSettings', JSON.stringify(userSettings));
}

// ユーザー設定の読み込み
function loadUserSettings() {
    const saved = localStorage.getItem('naraEventNaviSettings');
    if (saved) {
        userSettings = JSON.parse(saved);
        updateHomeAddressDisplay();
    }
}

// モーダルを開く
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

// モーダルを閉じる
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}
