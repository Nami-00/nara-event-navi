// グローバル変数
let map;
let markers = [];
let currentFilters = {
    category: 'all',
    accessibility: [],
    walkingTime: 'all'
};
let homeLocation = null;
let contactInfo = null;
let routeLayer = null;
let routeMarkers = [];

// 徒歩速度（分速80m = 時速4.8km）
const WALKING_SPEED = 80; // meters per minute

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    loadHomeAddress();
    loadContactInfo();
    renderEvents();
    setupEventListeners();
    setupAccessibilityControls();
});

// 地図初期化
function initMap() {
    map = L.map('map').setView([34.6851, 135.8049], 12);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // イベントマーカーを追加
    addEventMarkers();
    
    // 駅マーカーを追加
    addStationMarkers();
}

// イベントマーカー追加
function addEventMarkers() {
    EVENTS_DATA.forEach(event => {
        const accessibilityCount = event.accessibility.length;
        let markerColor = 'red';
        if (accessibilityCount >= 3) markerColor = 'green';
        else if (accessibilityCount > 0) markerColor = 'gold';
        
        const marker = L.circleMarker([event.latitude, event.longitude], {
            radius: 8,
            fillColor: markerColor,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);
        
        marker.bindPopup(`
            <strong>${event.name}</strong><br>
            📅 ${event.date} ${event.time}<br>
            📍 ${event.venue}<br>
            <button onclick="showEventDetails(${event.id})">詳細を見る</button>
        `);
        
        markers.push({ marker, event });
    });
}

// 駅マーカー追加
function addStationMarkers() {
    STATIONS_DATA.forEach(station => {
        const marker = L.marker([station.latitude, station.longitude], {
            icon: L.divIcon({
                className: 'station-marker',
                html: '🚉',
                iconSize: [25, 25]
            })
        }).addTo(map);
        
        const accessibilityInfo = [];
        if (station.accessibility.multipurpose_toilet) accessibilityInfo.push('多目的トイレ');
        if (station.accessibility.elevator) accessibilityInfo.push('エレベーター');
        if (station.accessibility.barrier_free) accessibilityInfo.push('段差対応');
        
        marker.bindPopup(`
            <strong>🚉 ${station.name}駅</strong><br>
            ${station.line}<br>
            ${accessibilityInfo.length > 0 ? '♿ ' + accessibilityInfo.join(', ') : '⚠️ バリアフリー情報なし'}
        `);
    });
}

// イベント一覧表示
function renderEvents() {
    const grid = document.getElementById('eventsGrid');
    const filteredEvents = filterEvents();
    
    grid.innerHTML = '';
    
    // イベント数を表示
    document.getElementById('eventCount').textContent = `(${filteredEvents.length}件)`;
    
    if (filteredEvents.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">条件に合うイベントが見つかりませんでした。</p>';
        return;
    }
    
    filteredEvents.forEach(event => {
        const card = createEventCard(event);
        grid.appendChild(card);
    });
}

// イベントカード作成
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.onclick = () => showEventDetails(event.id);
    
    const accessibilityBadges = event.accessibility.map(item => 
        `<span class="accessibility-badge">${item}</span>`
    ).join('');
    
    // 最寄り駅からの徒歩時間を表示
    let walkingTimeInfo = '';
    if (event.nearestStation && currentFilters.walkingTime !== 'all') {
        walkingTimeInfo = `<div class="date">🚶 駅から徒歩約${event.walkingMinutes}分</div>`;
    }
    
    card.innerHTML = `
        <h3>${event.name}</h3>
        <div class="date">📅 ${event.date} ${event.time}</div>
        ${walkingTimeInfo}
        <div class="category">${event.category}</div>
        <div class="venue">📍 ${event.venue}</div>
        <div class="accessibility">
            ${accessibilityBadges || '<span style="color: #999;">バリアフリー情報なし</span>'}
        </div>
    `;
    
    return card;
}

// イベントフィルタリング
function filterEvents() {
    let filtered = EVENTS_DATA.map(event => ({...event}));
    
    // カテゴリーフィルター
    if (currentFilters.category !== 'all') {
        filtered = filtered.filter(event => event.category === currentFilters.category);
    }
    
    // バリアフリー設備フィルター
    if (currentFilters.accessibility.length > 0) {
        filtered = filtered.filter(event => {
            return currentFilters.accessibility.every(feature => 
                event.accessibility.includes(feature)
            );
        });
    }
    
    // 徒歩時間フィルター
    if (currentFilters.walkingTime !== 'all') {
        const maxMinutes = parseInt(currentFilters.walkingTime);
        filtered = filtered.filter(event => {
            const nearestStation = findNearestStation(event.latitude, event.longitude);
            const distance = calculateDistance(
                event.latitude, event.longitude,
                nearestStation.latitude, nearestStation.longitude
            );
            const walkingMinutes = Math.ceil((distance * 1000) / WALKING_SPEED);
            
            // イベントに徒歩時間情報を追加
            event.nearestStation = nearestStation;
            event.walkingMinutes = walkingMinutes;
            
            return walkingMinutes <= maxMinutes;
        });
    }
    
    return filtered;
}

// イベント詳細表示
function showEventDetails(eventId) {
    const event = EVENTS_DATA.find(e => e.id === eventId);
    if (!event) return;
    
    const modal = document.getElementById('eventModal');
    const details = document.getElementById('eventDetails');
    
    const accessibilityList = event.accessibility.length > 0 
        ? event.accessibility.map(item => `<li>${item}</li>`).join('')
        : '<li style="color: #999;">バリアフリー設備情報なし</li>';
    
    // 最寄り駅情報
    const nearestStation = findNearestStation(event.latitude, event.longitude);
    const distance = calculateDistance(
        event.latitude, event.longitude,
        nearestStation.latitude, nearestStation.longitude
    );
    const walkingMinutes = Math.ceil((distance * 1000) / WALKING_SPEED);
    
    const stationInfo = `
        <div class="detail-section">
            <h3>🚉 最寄り駅</h3>
            <p><strong>${nearestStation.name}駅</strong> (${nearestStation.line})</p>
            <p>駅から徒歩約${walkingMinutes}分 (約${Math.round(distance * 1000)}m)</p>
        </div>
    `;
    
    const routeButton = homeLocation 
        ? `<button class="btn btn-primary" onclick="showRoute(${event.id})">🚃 自宅から経路を調べる</button>`
        : `<p style="color: #999;">自宅住所を登録すると、経路検索ができます。</p>`;
    
    // 送信ボタン
    const sendButtons = createSendButtons(event);
    
    details.innerHTML = `
        <h2>${event.name}</h2>
        
        <div class="detail-section">
            <h3>📅 開催日時</h3>
            <p>${event.date} ${event.time}</p>
        </div>
        
        <div class="detail-section">
            <h3>📍 会場</h3>
            <p><strong>${event.venue}</strong></p>
            <p>${event.address}</p>
        </div>
        
        ${stationInfo}
        
        <div class="detail-section">
            <h3>📝 詳細</h3>
            <p>${event.description}</p>
        </div>
        
        <div class="detail-section">
            <h3>♿ バリアフリー設備</h3>
            <ul>${accessibilityList}</ul>
        </div>
        
        <div class="detail-section">
            <h3>ℹ️ その他情報</h3>
            <p>定員: ${event.capacity}</p>
            <p>参加費: ${event.fee}</p>
            <p>お問い合わせ: ${event.contact}</p>
        </div>
        
        <div class="detail-section">
            ${routeButton}
        </div>
        
        <div class="detail-section">
            <h3>📤 イベント情報を送る</h3>
            ${sendButtons}
        </div>
    `;
    
    modal.style.display = 'block';
}

// 送信ボタン作成
function createSendButtons(event) {
    const hasContact = contactInfo && (
        contactInfo.address || 
        contactInfo.phone || 
        contactInfo.line || 
        contactInfo.email
    );
    
    if (!hasContact) {
        return `
            <p style="color: #999; margin-bottom: 1rem;">
                連絡先を登録すると、イベント情報を送信できます。
            </p>
            <button class="btn btn-secondary" onclick="openContactSettings()">
                📮 連絡先を登録する
            </button>
        `;
    }
    
    const buttons = [];
    
    if (contactInfo.address && contactInfo.postal) {
        buttons.push(`
            <button class="send-btn mail" onclick="sendEventInfo(${event.id}, 'mail')">
                📮 郵送で受け取る
            </button>
        `);
    }
    
    if (contactInfo.phone) {
        buttons.push(`
            <button class="send-btn phone" onclick="sendEventInfo(${event.id}, 'phone')">
                📞 電話で案内を受ける
            </button>
        `);
    }
    
    if (contactInfo.line) {
        buttons.push(`
            <button class="send-btn line" onclick="sendEventInfo(${event.id}, 'line')">
                💬 LINEで受け取る
            </button>
        `);
    }
    
    if (contactInfo.email) {
        buttons.push(`
            <button class="send-btn email" onclick="sendEventInfo(${event.id}, 'email')">
                📧 メールで受け取る
            </button>
        `);
    }
    
    return `
        <p style="margin-bottom: 0.5rem;">登録済みの連絡先に送信できます：</p>
        <div class="send-buttons">
            ${buttons.join('')}
        </div>
    `;
}

// イベント情報送信
function sendEventInfo(eventId, method) {
    const event = EVENTS_DATA.find(e => e.id === eventId);
    if (!event || !contactInfo) return;
    
    // 経路情報を含める場合
    let routeInfo = '';
    if (homeLocation) {
        const nearestStation = findNearestStation(event.latitude, event.longitude);
        const homeStation = findNearestStation(homeLocation.latitude, homeLocation.longitude);
        
        const homeToStationDist = calculateDistance(
            homeLocation.latitude, homeLocation.longitude,
            homeStation.latitude, homeStation.longitude
        );
        const stationToVenueDist = calculateDistance(
            nearestStation.latitude, nearestStation.longitude,
            event.latitude, event.longitude
        );
        
        const homeWalk = Math.ceil((homeToStationDist * 1000) / WALKING_SPEED);
        const venueWalk = Math.ceil((stationToVenueDist * 1000) / WALKING_SPEED);
        
        routeInfo = `
            
【経路情報】
自宅 → ${homeStation.name}駅: 徒歩約${homeWalk}分
${homeStation.name}駅 → ${nearestStation.name}駅: 電車
${nearestStation.name}駅 → 会場: 徒歩約${venueWalk}分

【駅のバリアフリー情報】
${homeStation.name}駅:
${homeStation.accessibility.multipurpose_toilet ? '✓' : '×'} 多目的トイレ
${homeStation.accessibility.elevator ? '✓' : '×'} エレベーター
${homeStation.accessibility.barrier_free ? '✓' : '×'} 段差対応

${nearestStation.name}駅:
${nearestStation.accessibility.multipurpose_toilet ? '✓' : '×'} 多目的トイレ
${nearestStation.accessibility.elevator ? '✓' : '×'} エレベーター
${nearestStation.accessibility.barrier_free ? '✓' : '×'} 段差対応
        `;
    }
    
    const eventInfo = `
【イベント情報】
イベント名: ${event.name}
日時: ${event.date} ${event.time}
会場: ${event.venue}
住所: ${event.address}
内容: ${event.description}

【バリアフリー設備】
${event.accessibility.length > 0 ? event.accessibility.join('\n') : 'なし'}

【その他情報】
定員: ${event.capacity}
参加費: ${event.fee}
お問い合わせ: ${event.contact}
${routeInfo}
    `.trim();
    
    // 確認モーダルを表示
    showSendConfirm(event, method, eventInfo);
}

// 送信確認モーダル表示
function showSendConfirm(event, method, eventInfo) {
    const modal = document.getElementById('sendConfirmModal');
    const content = document.getElementById('sendConfirmContent');
    
    const methodNames = {
        mail: '📮 郵送',
        phone: '📞 電話',
        line: '💬 LINE',
        email: '📧 メール'
    };
    
    const contactDetails = {
        mail: `${contactInfo.postal}<br>${contactInfo.address}`,
        phone: contactInfo.phone,
        line: contactInfo.line,
        email: contactInfo.email
    };
    
    content.innerHTML = `
        <div class="send-confirm-info">
            <h3>${methodNames[method]}で送信</h3>
            <p><strong>送信先:</strong> ${contactInfo.name || '未設定'}</p>
            <p><strong>連絡先:</strong> ${contactDetails[method]}</p>
        </div>
        
        <div class="send-confirm-info">
            <h3>送信内容</h3>
            <pre style="white-space: pre-wrap; font-size: 0.9rem;">${eventInfo}</pre>
        </div>
        
        <div class="confirm-buttons">
            <button class="btn btn-secondary" onclick="document.getElementById('sendConfirmModal').style.display='none'">
                キャンセル
            </button>
            <button class="btn btn-primary" onclick="confirmSend('${method}', ${event.id})">
                送信する
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// 送信確定
function confirmSend(method, eventId) {
    // 実際のアプリでは、ここでサーバーにリクエストを送信
    console.log(`Sending event ${eventId} via ${method}`);
    
    alert(`✓ イベント情報を${
        method === 'mail' ? '郵送' :
        method === 'phone' ? '電話案内' :
        method === 'line' ? 'LINE' :
        'メール'
    }で送信しました！`);
    
    document.getElementById('sendConfirmModal').style.display = 'none';
}

// 経路表示（簡略版 - 徒歩ルートのみ）
async function showRoute(eventId) {
    if (!homeLocation) {
        alert('自宅住所を登録してください。');
        return;
    }
    
    const event = EVENTS_DATA.find(e => e.id === eventId);
    if (!event) return;
    
    const modal = document.getElementById('routeModal');
    const details = document.getElementById('routeDetails');
    
    // ローディング表示
    details.innerHTML = `
        <h2>🚃 ${event.name}への経路</h2>
        <div class="loading-message">
            経路を計算しています...
        </div>
        <div class="route-map-container">
            <div id="routeMap" class="route-map"></div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // 小さな地図を初期化
    setTimeout(() => {
        const routeMap = L.map('routeMap').setView([34.6851, 135.8049], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(routeMap);
        
        // 経路計算を実行
        calculateSimpleRoute(event, routeMap, details);
    }, 100);
}

// シンプルな経路計算（徒歩ルートのみ）
async function calculateSimpleRoute(event, routeMap, detailsContainer) {
    try {
        // 最寄り駅を検索
        const homeStation = findNearestStation(homeLocation.latitude, homeLocation.longitude);
        const venueStation = findNearestStation(event.latitude, event.longitude);
        
        // 1. 自宅→最寄り駅の徒歩ルート
        const walkRoute1 = await getWalkingRoute(
            homeLocation.latitude, homeLocation.longitude,
            homeStation.latitude, homeStation.longitude
        );
        
        // 2. 会場最寄り駅→会場の徒歩ルート
        const walkRoute2 = await getWalkingRoute(
            venueStation.latitude, venueStation.longitude,
            event.latitude, event.longitude
        );
        
        // ルートを地図に表示（徒歩ルートのみ）
        displaySimpleRoute(routeMap, walkRoute1, walkRoute2, 
                          homeLocation, homeStation, venueStation, event);
        
        // 詳細情報を表示
        const totalWalkingTime = Math.ceil(walkRoute1.duration + walkRoute2.duration);
        const trainTime = homeStation.id === venueStation.id ? 0 : 15; // 同じ駅なら0分
        const totalTime = totalWalkingTime + trainTime;
        
        const trainSection = homeStation.id !== venueStation.id ? `
            <div class="route-step train-route">
                ${renderStationInfo(homeStation, '自宅最寄り駅')}
            </div>
            
            <div class="route-step train-route">
                <h4>🚃 電車で移動</h4>
                <p>${homeStation.name}駅 → ${venueStation.name}駅</p>
                <p>約${trainTime}分</p>
            </div>
            
            <div class="route-step train-route">
                ${renderStationInfo(venueStation, '会場最寄り駅')}
            </div>
        ` : `
            <div class="route-step">
                <h4>🚉 最寄り駅: ${homeStation.name}駅</h4>
                <p>自宅と会場の最寄り駅は同じです</p>
                ${renderStationInfo(homeStation, '最寄り駅')}
            </div>
        `;
        
        const routeHTML = `
            <h2>🚃 ${event.name}への経路</h2>
            <p style="font-size: 1.1rem; font-weight: bold; margin-bottom: 1rem;">
                総所要時間: 約${totalTime}分 (徒歩${totalWalkingTime}分${trainTime > 0 ? ' + 電車' + trainTime + '分' : ''})
            </p>
            
            <div class="route-step walking-route">
                <h4>🚶 出発: 自宅 → ${homeStation.name}駅</h4>
                <p>徒歩 約${Math.ceil(walkRoute1.duration)}分 (${Math.round(walkRoute1.distance)}m)</p>
                <p style="color: #666; font-size: 0.9rem;">📍 ${homeLocation.address}</p>
            </div>
            
            ${trainSection}
            
            <div class="route-step walking-route">
                <h4>🚶 ${venueStation.name}駅 → 会場</h4>
                <p>徒歩 約${Math.ceil(walkRoute2.duration)}分 (${Math.round(walkRoute2.distance)}m)</p>
            </div>
            
            <div class="route-step">
                <h4>📍 到着: ${event.venue}</h4>
                <p>${event.address}</p>
            </div>
        `;
        
        detailsContainer.innerHTML = routeHTML + '<div class="route-map-container"><div id="routeMap" class="route-map"></div></div>';
        
        // 地図を再初期化
        setTimeout(() => {
            const newRouteMap = L.map('routeMap').setView([34.6851, 135.8049], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(newRouteMap);
            
            displaySimpleRoute(newRouteMap, walkRoute1, walkRoute2,
                             homeLocation, homeStation, venueStation, event);
        }, 100);
        
    } catch (error) {
        console.error('Route calculation error:', error);
        detailsContainer.innerHTML = `
            <h2>🚃 ${event.name}への経路</h2>
            <div class="warning">
                経路の計算中にエラーが発生しました。
            </div>
        ` + detailsContainer.innerHTML;
    }
}

// シンプルなルート表示（徒歩ルートと駅マーカーのみ）
function displaySimpleRoute(map, walkRoute1, walkRoute2, home, homeStation, venueStation, event) {
    // 徒歩ルート1（自宅→最寄り駅）
    L.polyline(walkRoute1.coordinates, {
        color: '#4CAF50',
        weight: 4,
        opacity: 0.7,
        dashArray: '10, 10'
    }).addTo(map);
    
    // 徒歩ルート2（会場最寄り駅→会場）
    L.polyline(walkRoute2.coordinates, {
        color: '#4CAF50',
        weight: 4,
        opacity: 0.7,
        dashArray: '10, 10'
    }).addTo(map);
    
    // マーカー追加
    L.marker([home.latitude, home.longitude], {
        icon: L.divIcon({ className: 'home-marker', html: '🏠', iconSize: [30, 30] })
    }).addTo(map).bindPopup('自宅');
    
    // 自宅最寄り駅に大きな丸マーカー
    L.circleMarker([homeStation.latitude, homeStation.longitude], {
        radius: 15,
        fillColor: '#2196F3',
        color: '#fff',
        weight: 3,
        opacity: 1,
        fillOpacity: 0.7
    }).addTo(map).bindPopup(`🚉 ${homeStation.name}駅（自宅最寄り）`);
    
    // 会場最寄り駅に大きな丸マーカー（異なる駅の場合）
    if (homeStation.id !== venueStation.id) {
        L.circleMarker([venueStation.latitude, venueStation.longitude], {
            radius: 15,
            fillColor: '#FF9800',
            color: '#fff',
            weight: 3,
            opacity: 1,
            fillOpacity: 0.7
        }).addTo(map).bindPopup(`🚉 ${venueStation.name}駅（会場最寄り）`);
    }
    
    L.marker([event.latitude, event.longitude], {
        icon: L.divIcon({ className: 'event-marker', html: '📍', iconSize: [30, 30] })
    }).addTo(map).bindPopup(event.name);
    
    // 地図の表示範囲を調整
    const bounds = L.latLngBounds([
        [home.latitude, home.longitude],
        [event.latitude, event.longitude]
    ]);
    map.fitBounds(bounds, { padding: [50, 50] });
}

// 徒歩ルート取得（OSRM API使用）
async function getWalkingRoute(fromLat, fromLon, toLat, toLon) {
    try {
        const url = `https://router.project-osrm.org/route/v1/foot/${fromLon},${fromLat};${toLon},${toLat}?overview=full&geometries=geojson`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
            const route = data.routes[0];
            return {
                coordinates: route.geometry.coordinates.map(c => [c[1], c[0]]),
                distance: route.distance,
                duration: route.duration / 60
            };
        }
    } catch (error) {
        console.error('Walking route error:', error);
    }
    
    // フォールバック: 直線距離を使用
    const distance = calculateDistance(fromLat, fromLon, toLat, toLon) * 1000;
    return {
        coordinates: [[fromLat, fromLon], [toLat, toLon]],
        distance: distance,
        duration: distance / WALKING_SPEED
    };
}

// 駅情報レンダリング
function renderStationInfo(station, label) {
    const acc = station.accessibility;
    const features = [];
    
    if (acc.multipurpose_toilet) features.push('✅ 多目的トイレあり');
    else features.push('⚠️ 多目的トイレなし');
    
    if (acc.elevator) features.push('✅ エレベーターあり');
    else features.push('⚠️ エレベーターなし');
    
    if (acc.barrier_free) features.push('✅ 段差対応あり');
    else features.push('⚠️ 段差対応なし');
    
    if (acc.wheelchair_rental) features.push('✅ 車椅子貸出あり');
    if (acc.service_dog_allowed) features.push('✅ 盲導犬同伴可');
    
    const hasIssues = !acc.multipurpose_toilet || !acc.elevator || !acc.barrier_free;
    const warningHtml = hasIssues ? '<div class="warning">一部のバリアフリー設備が不足しています。事前に駅へお問い合わせください。</div>' : '';
    
    return `
        <h4>🚉 ${label}: ${station.name}駅</h4>
        <div class="station-info">
            <p><strong>${station.line}</strong> (${station.operator})</p>
            <div class="station-accessibility">
                ${features.map(f => `<p style="margin: 0.25rem 0;">${f}</p>`).join('')}
            </div>
            ${warningHtml}
        </div>
    `;
}

// 最寄り駅検索
function findNearestStation(lat, lon) {
    let nearest = null;
    let minDistance = Infinity;
    
    STATIONS_DATA.forEach(station => {
        const distance = calculateDistance(lat, lon, station.latitude, station.longitude);
        if (distance < minDistance) {
            minDistance = distance;
            nearest = station;
        }
    });
    
    return nearest;
}

// 距離計算（ハバーサイン式）
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// 連絡先情報の読み込み
function loadContactInfo() {
    const saved = localStorage.getItem('contactInfo');
    if (saved) {
        contactInfo = JSON.parse(saved);
    }
}

// 連絡先設定を開く
function openContactSettings() {
    document.getElementById('contactModal').style.display = 'block';
    
    // 既存の情報を表示
    if (contactInfo) {
        document.getElementById('contactName').value = contactInfo.name || '';
        document.getElementById('contactPhone').value = contactInfo.phone || '';
        document.getElementById('contactEmail').value = contactInfo.email || '';
        document.getElementById('contactLine').value = contactInfo.line || '';
        document.getElementById('contactPostal').value = contactInfo.postal || '';
        document.getElementById('contactAddress').value = contactInfo.address || '';
    }
}

// 連絡先保存
function saveContactInfo() {
    const statusDiv = document.getElementById('contactStatus');
    
    contactInfo = {
        name: document.getElementById('contactName').value.trim(),
        phone: document.getElementById('contactPhone').value.trim(),
        email: document.getElementById('contactEmail').value.trim(),
        line: document.getElementById('contactLine').value.trim(),
        postal: document.getElementById('contactPostal').value.trim(),
        address: document.getElementById('contactAddress').value.trim()
    };
    
    // 少なくとも1つの連絡先が入力されているか確認
    if (!contactInfo.phone && !contactInfo.email && !contactInfo.line && !contactInfo.address) {
        statusDiv.className = 'status-message error';
        statusDiv.textContent = '少なくとも1つの連絡先を入力してください。';
        statusDiv.style.display = 'block';
        return;
    }
    
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
    
    statusDiv.className = 'status-message success';
    statusDiv.textContent = '✓ 連絡先を保存しました！';
    statusDiv.style.display = 'block';
    
    setTimeout(() => {
        document.getElementById('contactModal').style.display = 'none';
    }, 1500);
}

// 自宅住所の読み込み
function loadHomeAddress() {
    const saved = localStorage.getItem('homeAddress');
    const savedLat = localStorage.getItem('homeLatitude');
    const savedLon = localStorage.getItem('homeLongitude');
    
    if (saved && savedLat && savedLon) {
        homeLocation = {
            address: saved,
            latitude: parseFloat(savedLat),
            longitude: parseFloat(savedLon)
        };
        
        document.getElementById('homeAddressDisplay').style.display = 'block';
        document.getElementById('displayAddress').textContent = saved;
        document.getElementById('walkingTimeFilterGroup').style.display = 'block';
        
        L.marker([homeLocation.latitude, homeLocation.longitude], {
            icon: L.divIcon({
                className: 'home-marker',
                html: '🏠',
                iconSize: [30, 30]
            })
        }).addTo(map).bindPopup('自宅');
    }
}

// 自宅住所の保存
function saveHomeAddress() {
    const address = document.getElementById('homeAddress').value.trim();
    const statusDiv = document.getElementById('addressStatus');
    
    if (!address) {
        statusDiv.className = 'status-message error';
        statusDiv.textContent = '住所を入力してください。';
        return;
    }
    
    const encodedAddress = encodeURIComponent(address + ', 奈良市');
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&limit=1`;
    
    statusDiv.className = 'status-message';
    statusDiv.textContent = '住所を検索中...';
    statusDiv.style.display = 'block';
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const location = data[0];
                
                homeLocation = {
                    address: address,
                    latitude: parseFloat(location.lat),
                    longitude: parseFloat(location.lon)
                };
                
                localStorage.setItem('homeAddress', address);
                localStorage.setItem('homeLatitude', location.lat);
                localStorage.setItem('homeLongitude', location.lon);
                
                statusDiv.className = 'status-message success';
                statusDiv.textContent = '✓ 住所を登録しました！';
                
                setTimeout(() => {
                    document.getElementById('addressModal').style.display = 'none';
                    location.reload();
                }, 1500);
            } else {
                statusDiv.className = 'status-message error';
                statusDiv.textContent = '住所が見つかりませんでした。正確な住所を入力してください。';
            }
        })
        .catch(error => {
            statusDiv.className = 'status-message error';
            statusDiv.textContent = 'エラーが発生しました。もう一度お試しください。';
            console.error('Geocoding error:', error);
        });
}

// イベントリスナー設定
function setupEventListeners() {
    // カテゴリーフィルター
    document.getElementById('categoryFilter').addEventListener('change', function(e) {
        currentFilters.category = e.target.value;
        renderEvents();
    });
    
    // 徒歩時間フィルター
    document.getElementById('walkingTimeFilter').addEventListener('change', function(e) {
        currentFilters.walkingTime = e.target.value;
        renderEvents();
    });
    
    // バリアフリー設備フィルター
    document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checked = Array.from(document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked'))
                .map(cb => cb.value);
            currentFilters.accessibility = checked;
            renderEvents();
        });
    });
    
    // 自宅住所設定ボタン
    document.getElementById('homeAddressBtn').addEventListener('click', function() {
        document.getElementById('addressModal').style.display = 'block';
    });
    
    document.getElementById('changeAddressBtn').addEventListener('click', function() {
        document.getElementById('addressModal').style.display = 'block';
    });
    
    document.getElementById('saveAddressBtn').addEventListener('click', saveHomeAddress);
    
    // 連絡先設定ボタン
    document.getElementById('contactSettingsBtn').addEventListener('click', openContactSettings);
    document.getElementById('saveContactBtn').addEventListener('click', saveContactInfo);
    
    // モーダルを閉じる
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

// アクセシビリティ機能設定
function setupAccessibilityControls() {
    let textSize = 'normal';
    let highContrast = false;
    
    document.getElementById('textSizeBtn').addEventListener('click', function() {
        if (textSize === 'normal') {
            textSize = 'large';
            document.body.classList.add('large-text');
            this.textContent = '📝 文字サイズ: 大';
        } else {
            textSize = 'normal';
            document.body.classList.remove('large-text');
            this.textContent = '📝 文字サイズ';
        }
    });
    
    document.getElementById('contrastBtn').addEventListener('click', function() {
        highContrast = !highContrast;
        if (highContrast) {
            document.body.classList.add('high-contrast');
            this.textContent = '🎨 通常モード';
        } else {
            document.body.classList.remove('high-contrast');
            this.textContent = '🎨 コントラスト';
        }
    });
}
