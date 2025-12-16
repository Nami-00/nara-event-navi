/**
 * バリアフリー情報ページ（観光施設 / 公共施設 / 駅）
 * - 3タブ切替
 * - キーワード検索
 * - 分類/状態/設備で絞り込み
 * - Leaflet地図にマーカー表示
 * - イベント一覧と同様の「カード」方式で表示（地図の下）
 *
 * 依存: TOURIST_FACILITIES, PUBLIC_FACILITIES, STATIONS_DATA
 */
(function () {
  'use strict';

  const TAB_KEYS = {
    tourist: 'tourist',
    public: 'public',
    station: 'station'
  };

  const ACCESS_KEYS = [
    { key: 'multipurpose_toilet', label: '多目的トイレ' },
    { key: 'wheelchair_rental', label: '車椅子貸出' },
    { key: 'service_dog_allowed', label: '盲導犬等' },
    { key: 'priority_parking', label: '優先駐車' },
    { key: 'elevator', label: 'エレベータ' },
    { key: 'slope', label: 'スロープ' }
  ];

  // -----------------------------
  // 正規化（表示・検索のため）
  // -----------------------------
  function normalizeTourist(items) {
    return items.map(x => ({
      type: TAB_KEYS.tourist,
      id: x.id,
      name: x.name,
      category: x.category || '',
      address: x.address || '',
      phone: x.phone || '',
      lat: x.lat,
      lon: x.lon,
      extra: { area: x.area },
      accessibility: x.accessibility || {}
    }));
  }

  function normalizePublic(items) {
    return items.map(x => ({
      type: TAB_KEYS.public,
      id: x.id,
      name: x.name,
      category: x.poi_type || '',
      address: x.address || '',
      phone: x.phone || '',
      lat: x.lat,
      lon: x.lon,
      extra: { poi_code: x.poi_code },
      accessibility: x.accessibility || {}
    }));
  }

  function normalizeStations(items) {
    return items.map(x => ({
      type: TAB_KEYS.station,
      id: x.id,
      name: x.name,
      category: `${x.operator || ''} ${x.line || ''}`.trim(),
      address: x.address || '',
      phone: x.phone || '',
      lat: x.lat,
      lon: x.lon,
      extra: { operator: x.operator || '', line: x.line || '' },
      accessibility: x.accessibility || {}
    }));
  }

  function getGlobalArray(name) {
    // const/let で定義されたグローバルは window のプロパティにならないため、
    // まずは直接参照できるかを試し、だめなら window 経由を試す
    try {
      const v = (new Function(`return (typeof ${name} !== 'undefined') ? ${name} : undefined;`))();
      if (Array.isArray(v)) return v;
    } catch (e) { /* ignore */ }
    const w = (window && window[name]) ? window[name] : undefined;
    return Array.isArray(w) ? w : [];
  }

  const DATASETS = {
    tourist: normalizeTourist(getGlobalArray('TOURIST_FACILITIES')),
    public: normalizePublic(getGlobalArray('PUBLIC_FACILITIES')),
    station: normalizeStations(getGlobalArray('STATIONS_DATA'))
  };

  // -----------------------------
  // DOM
  // -----------------------------
  const els = {
    tabButtons: Array.from(document.querySelectorAll('.bf-tab')),
    activeTabLabel: document.getElementById('activeTabLabel'),
    resultCount: document.getElementById('resultCount'),
    searchInput: document.getElementById('searchInput'),
    categoryFilter: document.getElementById('categoryFilter'),
    stateFilter: document.getElementById('stateFilter'),
    accFilters: Array.from(document.querySelectorAll('.acc-filter')),
    cards: document.getElementById('bfCards'),
    map: null
  };

  let currentTab = TAB_KEYS.tourist;
  let currentMarkers = [];
  let markerById = new Map();
  let currentList = [];

  // -----------------------------
  // Utils
  // -----------------------------
  function escapeHtml(s) {
    return String(s ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function fmtCircleCross(v) {
    return v ? '〇' : '×';
  }

  function getSearchQuery() {
    return (els.searchInput?.value || '').trim().toLowerCase();
  }

  function getSelectedAccKeys() {
    return els.accFilters
      .filter(cb => cb.checked)
      .map(cb => cb.value);
  }

  function countTrue(acc) {
    let c = 0;
    ACCESS_KEYS.forEach(k => { if (acc && acc[k.key]) c += 1; });
    return c;
  }

  function matchesQuery(item, q) {
    if (!q) return true;
    const hay = [
      item.name,
      item.category,
      item.address,
      item.extra?.area,
      item.extra?.operator,
      item.extra?.line
    ].filter(Boolean).join(' ').toLowerCase();
    return hay.includes(q);
  }

  function matchesFilters(item) {
    const q = getSearchQuery();
    if (!matchesQuery(item, q)) return false;

    const cat = (els.categoryFilter?.value || '').trim();
    if (cat && (item.category || '') !== cat) return false;

    const state = (els.stateFilter?.value || 'all');
    const t = countTrue(item.accessibility || {});
    if (state === 'any' && t < 1) return false;
    if (state === 'none' && t !== 0) return false;

    const need = getSelectedAccKeys();
    if (need.length > 0) {
      const acc = item.accessibility || {};
      for (const k of need) {
        if (!acc[k]) return false; // チェックした設備が「〇」のものだけ
      }
    }
    return true;
  }

  // -----------------------------
  // Filters UI (category)
  // -----------------------------
  function rebuildCategoryOptions(items) {
    if (!els.categoryFilter) return;
    const prev = els.categoryFilter.value || '';
    const set = new Set();
    items.forEach(it => {
      const c = (it.category || '').trim();
      if (c) set.add(c);
    });
    const opts = Array.from(set).sort((a, b) => a.localeCompare(b, 'ja'));

    els.categoryFilter.innerHTML = [
      '<option value="">すべて</option>',
      ...opts.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
    ].join('');

    // 以前の選択がまだ存在するなら復元
    if (prev && opts.includes(prev)) {
      els.categoryFilter.value = prev;
    } else {
      els.categoryFilter.value = '';
    }
  }

  // -----------------------------
  // Map
  // -----------------------------
  function initMap() {
    if (els.map) return;
    els.map = L.map('bfMap').setView([34.6851, 135.8050], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(els.map);
  }

  function clearMarkers() {
    currentMarkers.forEach(m => m.remove());
    currentMarkers = [];
    markerById.clear();
  }

  function buildPopupHtml(it) {
    const cat = it.category ? `<div class="bf-popup-sub">${escapeHtml(it.category)}</div>` : '';
    const addr = it.address ? `<div class="bf-popup-addr">${escapeHtml(it.address)}</div>` : '';
    const rows = ACCESS_KEYS.map(k => {
      const v = fmtCircleCross(!!(it.accessibility || {})[k.key]);
      return `<div class="bf-popup-row"><span>${escapeHtml(k.label)}</span><strong>${v}</strong></div>`;
    }).join('');
    return `
      <div class="bf-popup">
        <div class="bf-popup-title">${escapeHtml(it.name)}</div>
        ${cat}
        ${addr}
        <div class="bf-popup-grid">${rows}</div>
      </div>
    `;
  }

  function renderMap(items) {
    if (!els.map) return;

    clearMarkers();
    items.forEach(it => {
      if (!Number.isFinite(it.lat) || !Number.isFinite(it.lon)) return;
      const marker = L.marker([it.lat, it.lon]).addTo(els.map);
      marker.bindPopup(buildPopupHtml(it), { maxWidth: 320 });
      currentMarkers.push(marker);
      markerById.set(String(it.id), marker);
    });

    if (currentMarkers.length > 0) {
      const group = L.featureGroup(currentMarkers);
      els.map.fitBounds(group.getBounds().pad(0.15));
    }
  }

  function focusItem(it) {
    if (!els.map) return;
    if (!Number.isFinite(it.lat) || !Number.isFinite(it.lon)) return;
    els.map.setView([it.lat, it.lon], Math.max(els.map.getZoom(), 16), { animate: true });
    const m = markerById.get(String(it.id));
    if (m) m.openPopup();
  }

  // -----------------------------
  // Cards
  // -----------------------------
  function buildAccBadges(it) {
    const acc = it.accessibility || {};
    return ACCESS_KEYS.map(k => {
      const v = fmtCircleCross(!!acc[k.key]);
      return `<span class="bf-badge"><span class="bf-badge-label">${escapeHtml(k.label)}</span><span class="bf-badge-val">${v}</span></span>`;
    }).join('');
  }

  function renderCards(items) {
    if (!els.cards) return;

    if (items.length === 0) {
      els.cards.innerHTML = `<div class="bf-empty">条件に一致するデータがありません。</div>`;
      return;
    }

    els.cards.innerHTML = items.map((it, idx) => {
      const cat = it.category ? escapeHtml(it.category) : '—';
      const addr = it.address ? escapeHtml(it.address) : '—';
      const phone = it.phone ? escapeHtml(it.phone) : '—';
      const badges = buildAccBadges(it);
      return `
        <article class="event-card bf-card" data-idx="${idx}" tabindex="0" role="button" aria-label="${escapeHtml(it.name)}">
          <div class="event-header">
            <div class="event-title">${escapeHtml(it.name)}</div>
            <div class="event-meta">
              <span class="event-category">${cat}</span>
            </div>
          </div>
          <div class="event-body">
            <div class="bf-card-row"><strong>住所：</strong><span>${addr}</span></div>
            <div class="bf-card-row"><strong>電話：</strong><span>${phone}</span></div>
            <div class="bf-badges">${badges}</div>
          </div>
        </article>
      `;
    }).join('');

    const activate = (idx) => {
      const it = items[idx];
      if (!it) return;
      focusItem(it);
    };

    els.cards.querySelectorAll('[data-idx]').forEach(el => {
      el.addEventListener('click', () => activate(Number(el.getAttribute('data-idx'))));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate(Number(el.getAttribute('data-idx')));
        }
      });
    });
  }

  // -----------------------------
  // Update
  // -----------------------------
  function setTab(tabKey) {
    if (!DATASETS[tabKey]) return;
    currentTab = tabKey;

    // tab active
    els.tabButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-tab') === tabKey));

    const label = tabKey === 'tourist' ? '観光施設' : tabKey === 'public' ? '公共施設' : '駅';
    if (els.activeTabLabel) els.activeTabLabel.textContent = label;

    // category options re-build
    rebuildCategoryOptions(DATASETS[tabKey]);

    // reset filters that tend to confuse when tab changes
    if (els.searchInput) els.searchInput.value = '';
    if (els.stateFilter) els.stateFilter.value = 'all';
    els.accFilters.forEach(cb => { cb.checked = false; });

    update();
  }

  function update() {
    const list = (DATASETS[currentTab] || []).filter(matchesFilters);

    currentList = list;
    if (els.resultCount) els.resultCount.textContent = `${list.length}件`;

    renderMap(list);
    renderCards(list);
  }

  // -----------------------------
  // Init
  // -----------------------------
  function init() {
    initMap();

    els.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => setTab(btn.getAttribute('data-tab')));
    });

    els.searchInput?.addEventListener('input', update);
    els.categoryFilter?.addEventListener('change', update);
    els.stateFilter?.addEventListener('change', update);
    els.accFilters.forEach(cb => cb.addEventListener('change', update));

    setTab(currentTab);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
