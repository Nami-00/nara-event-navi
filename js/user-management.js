/**
 * ならやさしいイベントナビ v6 - 利用者管理機能
 * 複数の利用者を管理し、それぞれに個別の設定を保存
 */

// グローバル変数
let users = []; // 利用者リスト
let currentUserId = null; // 現在選択中の利用者ID
let editingUserId = null; // 編集中の利用者ID
let tempStationCandidates = []; // 一時的な駅候補

// 利用者管理の初期化
function initUserManagement() {
    console.log('利用者管理機能の初期化');
    
    loadUsers();
    
    // 利用者設定ボタン
    document.getElementById('userManagementBtn').addEventListener('click', () => {
        openUserManagementModal();
    });
    
    // 利用者切り替えボタン
    document.getElementById('switchUserBtn').addEventListener('click', () => {
        openUserManagementModal();
    });
    
    // 新規利用者追加ボタン
    document.getElementById('addUserBtn').addEventListener('click', () => {
        openUserEditModal(null);
    });
    
    // 利用者編集フォーム送信
    document.getElementById('userEditForm').addEventListener('submit', handleUserSave);
    
    // キャンセルボタン
    document.getElementById('cancelUserEditBtn').addEventListener('click', () => {
        closeModal('userEditModal');
    });
    
    // 最寄り駅検索ボタン
    document.getElementById('searchStationBtn').addEventListener('click', handleStationSearch);
    
    // 通知方法チェックボックスの変更監視
    document.querySelectorAll('input[name="notificationMethod"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateNotificationDetailsVisibility);
    });
}

// 利用者データの読み込み
function loadUsers() {
    const saved = localStorage.getItem('naraEventNaviUsers');
    if (saved) {
        users = JSON.parse(saved);
        console.log('利用者データ読み込み:', users.length, '人');
    } else {
        users = [];
    }
    
    // 現在の利用者IDを読み込み
    const savedCurrentUserId = localStorage.getItem('naraEventNaviCurrentUser');
    if (savedCurrentUserId && users.find(u => u.id === savedCurrentUserId)) {
        currentUserId = savedCurrentUserId;
        switchToUser(currentUserId);
    }
    
    updateCurrentUserDisplay();
}

// 利用者データの保存
function saveUsers() {
    localStorage.setItem('naraEventNaviUsers', JSON.stringify(users));
    console.log('利用者データ保存完了:', users.length, '人');
}

// 現在の利用者IDを保存
function saveCurrentUserId() {
    if (currentUserId) {
        localStorage.setItem('naraEventNaviCurrentUser', currentUserId);
    } else {
        localStorage.removeItem('naraEventNaviCurrentUser');
    }
}

// 利用者管理モーダルを開く
function openUserManagementModal() {
    displayUsersList();
    openModal('userManagementModal');
}

// 利用者一覧の表示
function displayUsersList() {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '';
    
    if (users.length === 0) {
        usersList.innerHTML = '<p class="no-users">登録されている利用者はいません。<br>「新しい利用者を追加」ボタンから利用者を登録してください。</p>';
        return;
    }
    
    users.forEach(user => {
        const card = createUserCard(user);
        usersList.appendChild(card);
    });
}

// 利用者カードの作成
function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';
    if (user.id === currentUserId) {
        card.classList.add('current-user');
    }
    
    const filterInfo = [];
    if (user.filters) {
        if (user.filters.category && user.filters.category !== 'all') {
            filterInfo.push(`カテゴリー: ${user.filters.category}`);
        }
        if (user.filters.accessibility && user.filters.accessibility.length > 0) {
            filterInfo.push(`設備: ${user.filters.accessibility.join('、')}`);
        }
        if (user.filters.walkTime && user.filters.walkTime !== 'all') {
            filterInfo.push(`徒歩: ${user.filters.walkTime}分以内`);
        }
    }
    
    const notificationInfo = [];
    if (user.notifications) {
        if (user.notifications.email) notificationInfo.push('📧メール');
        if (user.notifications.line) notificationInfo.push('💚LINE');
        if (user.notifications.fax) notificationInfo.push('📠FAX');
        if (user.notifications.mail) notificationInfo.push('📮郵送');
    }
    
    card.innerHTML = `
        <div class="user-card-header">
            <h3>${user.name}</h3>
            ${user.id === currentUserId ? '<span class="current-badge">使用中</span>' : ''}
        </div>
        <div class="user-card-body">
            ${user.homeAddress ? `<p><strong>🏠 自宅:</strong> ${user.homeAddress}</p>` : '<p class="text-muted">自宅住所: 未設定</p>'}
            ${user.nearestStation ? `<p><strong>🚉 最寄り駅:</strong> ${user.nearestStation.name}駅</p>` : ''}
            ${filterInfo.length > 0 ? `<p><strong>🔍 絞り込み:</strong> ${filterInfo.join('、')}</p>` : '<p class="text-muted">絞り込み条件: 未設定</p>'}
            ${notificationInfo.length > 0 ? `<p><strong>🔔 通知:</strong> ${notificationInfo.join('、')}</p>` : '<p class="text-muted">通知方法: 未設定</p>'}
        </div>
        <div class="user-card-footer">
            <button onclick="selectUser('${user.id}')" class="user-select-btn">
                ${user.id === currentUserId ? '✓ 使用中' : 'この利用者を選択'}
            </button>
            <button onclick="editUser('${user.id}')" class="user-edit-btn">編集</button>
            <button onclick="deleteUser('${user.id}')" class="user-delete-btn">削除</button>
        </div>
    `;
    
    return card;
}

// 利用者を選択
function selectUser(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) {
        alert('利用者が見つかりません。');
        return;
    }
    
    currentUserId = userId;
    saveCurrentUserId();
    
    // 利用者の設定を適用
    switchToUser(userId);
    
    // モーダルを閉じる
    closeModal('userManagementModal');
    
    // UIを更新
    updateCurrentUserDisplay();
    displayUsersList();
    
    alert(`${user.name} さんの設定に切り替えました。`);
}

// 利用者に切り替え（設定を適用）
function switchToUser(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    // グローバル設定を更新
    userSettings.homeAddress = user.homeAddress;
    userSettings.homeCoords = user.homeCoords;
    userSettings.nearestStation = user.nearestStation;
    userSettings.savedFilters = user.filters;
    userSettings.notificationMethods = user.notifications;
    
    // 共有機能用に現在の利用者情報を設定
    if (typeof currentRecipient !== 'undefined') {
        currentRecipient = {
            name: user.name,
            email: user.notificationDetails?.email || '',
            line: user.notificationDetails?.line || '',
            fax: user.notificationDetails?.fax || '',
            mailAddress: user.notificationDetails?.mailAddress || ''
        };
    }
    
    // UIを更新
    updateHomeAddressDisplay();
    
    // フィルターを適用
    if (user.filters) {
        applyUserFilters(user.filters);
    } else {
        // フィルターをリセット
        document.getElementById('categoryFilter').value = 'all';
        document.getElementById('walkTimeFilter').value = 'all';
        document.querySelectorAll('input[name="accessibility"]').forEach(cb => {
            cb.checked = false;
        });
    }
    
    // イベントを再表示
    filterEvents();
}

// 利用者のフィルターを適用
function applyUserFilters(filters) {
    // カテゴリー
    if (filters.category) {
        document.getElementById('categoryFilter').value = filters.category;
    }
    
    // 徒歩時間
    if (filters.walkTime) {
        document.getElementById('walkTimeFilter').value = filters.walkTime;
    }
    
    // バリアフリー設備
    document.querySelectorAll('input[name="accessibility"]').forEach(cb => {
        cb.checked = filters.accessibility && filters.accessibility.includes(cb.value);
    });
}

// 現在の利用者表示を更新
function updateCurrentUserDisplay() {
    const currentUserBar = document.getElementById('currentUserBar');
    const currentUserName = document.getElementById('currentUserName');
    
    if (currentUserId) {
        const user = users.find(u => u.id === currentUserId);
        if (user) {
            currentUserBar.style.display = 'block';
            currentUserName.textContent = user.name;
        } else {
            currentUserBar.style.display = 'none';
            currentUserName.textContent = '未選択';
        }
    } else {
        if (users.length > 0) {
            currentUserBar.style.display = 'block';
            currentUserName.textContent = '未選択（利用者を選択してください）';
        } else {
            currentUserBar.style.display = 'none';
        }
    }
}

// 利用者編集モーダルを開く
function openUserEditModal(userId) {
    editingUserId = userId;
    
    if (userId) {
        // 既存利用者の編集
        const user = users.find(u => u.id === userId);
        if (!user) {
            alert('利用者が見つかりません。');
            return;
        }
        
        document.getElementById('userEditModalTitle').textContent = '利用者情報の編集';
        
        // フォームに既存データを設定
        document.getElementById('userName').value = user.name;
        document.getElementById('userHomeAddress').value = user.homeAddress || '';
        
        // 通知方法
        document.querySelectorAll('input[name="notificationMethod"]').forEach(cb => {
            cb.checked = user.notifications && user.notifications[cb.value];
        });
        
        // 通知先詳細
        if (user.notifications) {
            document.getElementById('userEmail').value = user.notificationDetails?.email || '';
            document.getElementById('userLine').value = user.notificationDetails?.line || '';
            document.getElementById('userFax').value = user.notificationDetails?.fax || '';
            document.getElementById('userMailAddress').value = user.notificationDetails?.mailAddress || '';
        }
        
        // フィルター
        if (user.filters) {
            document.getElementById('userCategory').value = user.filters.category || 'all';
            document.getElementById('userWalkTime').value = user.filters.walkTime || 'all';
            document.querySelectorAll('input[name="userAccessibility"]').forEach(cb => {
                cb.checked = user.filters.accessibility && user.filters.accessibility.includes(cb.value);
            });
        }
        
        updateNotificationDetailsVisibility();
    } else {
        // 新規利用者の追加
        document.getElementById('userEditModalTitle').textContent = '利用者情報の登録';
        document.getElementById('userEditForm').reset();
        document.getElementById('userStationsArea').style.display = 'none';
    }
    
    closeModal('userManagementModal');
    openModal('userEditModal');
}

// 利用者編集
function editUser(userId) {
    openUserEditModal(userId);
}

// 利用者削除
function deleteUser(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) {
        alert('利用者が見つかりません。');
        return;
    }
    
    if (!confirm(`${user.name} さんを削除してもよろしいですか？`)) {
        return;
    }
    
    users = users.filter(u => u.id !== userId);
    saveUsers();
    
    // 削除した利用者が現在の利用者だった場合
    if (currentUserId === userId) {
        currentUserId = null;
        saveCurrentUserId();
        
        // グローバル設定をリセット
        userSettings.homeAddress = null;
        userSettings.homeCoords = null;
        userSettings.nearestStation = null;
        userSettings.savedFilters = null;
        userSettings.notificationMethods = null;
        
        updateHomeAddressDisplay();
        filterEvents();
    }
    
    displayUsersList();
    updateCurrentUserDisplay();
    
    alert(`${user.name} さんを削除しました。`);
}

// 最寄り駅検索
async function handleStationSearch() {
    const address = document.getElementById('userHomeAddress').value.trim();
    
    if (!address) {
        alert('住所を入力してください。');
        return;
    }
    
    try {
        const coords = await geocodeAddress(address);
        
        if (!coords) {
            alert('住所の取得に失敗しました。正しい住所を入力してください。');
            return;
        }
        
        // 最寄り駅の候補を3つ取得
        tempStationCandidates = findNearestStations(coords, 3);
        displayUserStationCandidates(tempStationCandidates);
        
        document.getElementById('userStationsArea').style.display = 'block';
        
    } catch (error) {
        console.error('住所検索エラー:', error);
        alert('住所の検索に失敗しました。もう一度お試しください。');
    }
}

// 利用者編集の駅候補表示
function displayUserStationCandidates(stations) {
    const userStationsList = document.getElementById('userStationsList');
    userStationsList.innerHTML = '';
    
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
            <button type="button" onclick="selectUserStation(${station.id})" class="select-station-btn">この駅を選択</button>
        `;
        
        userStationsList.appendChild(card);
    });
}

// 利用者編集で駅を選択
function selectUserStation(stationId) {
    const station = tempStationCandidates.find(s => s.id === stationId);
    if (!station) return;
    
    // 選択した駅を記憶（保存時に使用）
    window.selectedUserStation = station;
    
    alert(`最寄り駅を「${station.name}駅」に設定しました。「保存」ボタンを押して確定してください。`);
}

// 通知先詳細の表示/非表示
function updateNotificationDetailsVisibility() {
    const detailsArea = document.getElementById('userNotificationDetails');
    const methods = {
        'email': 'userEmailArea',
        'line': 'userLineArea',
        'fax': 'userFaxArea',
        'mail': 'userMailArea'
    };
    
    let anyChecked = false;
    
    for (const [method, areaId] of Object.entries(methods)) {
        const checkbox = document.querySelector(`input[name="notificationMethod"][value="${method}"]`);
        const area = document.getElementById(areaId);
        
        if (checkbox && checkbox.checked) {
            anyChecked = true;
            area.style.display = 'block';
        } else {
            area.style.display = 'none';
        }
    }
    
    detailsArea.style.display = anyChecked ? 'block' : 'none';
}

// 利用者保存
async function handleUserSave(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value.trim();
    const homeAddress = document.getElementById('userHomeAddress').value.trim();
    
    if (!name) {
        alert('利用者名を入力してください。');
        return;
    }
    
    // 通知方法の取得
    const notifications = {};
    const notificationDetails = {};
    
    document.querySelectorAll('input[name="notificationMethod"]:checked').forEach(cb => {
        notifications[cb.value] = true;
        
        // 通知先詳細を取得
        switch (cb.value) {
            case 'email':
                notificationDetails.email = document.getElementById('userEmail').value.trim();
                if (!notificationDetails.email) {
                    alert('メールアドレスを入力してください。');
                    throw new Error('Email required');
                }
                break;
            case 'line':
                notificationDetails.line = document.getElementById('userLine').value.trim();
                if (!notificationDetails.line) {
                    alert('LINE IDを入力してください。');
                    throw new Error('LINE ID required');
                }
                break;
            case 'fax':
                notificationDetails.fax = document.getElementById('userFax').value.trim();
                if (!notificationDetails.fax) {
                    alert('FAX番号を入力してください。');
                    throw new Error('FAX number required');
                }
                break;
            case 'mail':
                notificationDetails.mailAddress = document.getElementById('userMailAddress').value.trim();
                if (!notificationDetails.mailAddress) {
                    alert('郵送先住所を入力してください。');
                    throw new Error('Mail address required');
                }
                break;
        }
    });
    
    // フィルターの取得
    const filters = {
        category: document.getElementById('userCategory').value,
        walkTime: document.getElementById('userWalkTime').value,
        accessibility: Array.from(document.querySelectorAll('input[name="userAccessibility"]:checked'))
            .map(cb => cb.value)
    };
    
    // 住所から座標と最寄り駅を取得
    let homeCoords = null;
    let nearestStation = null;
    
    if (homeAddress) {
        try {
            homeCoords = await geocodeAddress(homeAddress);
            if (homeCoords && window.selectedUserStation) {
                nearestStation = window.selectedUserStation;
            }
        } catch (error) {
            console.error('住所の取得エラー:', error);
        }
    }
    
    // 利用者データの作成/更新
    let user;
    if (editingUserId) {
        // 既存利用者の更新
        user = users.find(u => u.id === editingUserId);
        if (user) {
            user.name = name;
            user.homeAddress = homeAddress;
            user.homeCoords = homeCoords;
            user.nearestStation = nearestStation;
            user.notifications = notifications;
            user.notificationDetails = notificationDetails;
            user.filters = filters;
        }
    } else {
        // 新規利用者の追加
        user = {
            id: generateUserId(),
            name: name,
            homeAddress: homeAddress,
            homeCoords: homeCoords,
            nearestStation: nearestStation,
            notifications: notifications,
            notificationDetails: notificationDetails,
            filters: filters,
            createdAt: new Date().toISOString()
        };
        users.push(user);
    }
    
    saveUsers();
    
    // 選択した駅情報をクリア
    window.selectedUserStation = null;
    
    closeModal('userEditModal');
    openUserManagementModal();
    
    alert(`${name} さんの情報を保存しました。`);
}

// 利用者IDの生成
function generateUserId() {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initUserManagement();
    }, 100);
});
