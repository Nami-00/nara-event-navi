// ========================================
// イベントデータ (サンプル)
// ========================================

const EVENTS_DATA = [
    {
        id: 1,
        title: "奈良燈花会 2025",
        date: "2025年8月5日〜14日",
        venue: "奈良公園一帯",
        category: "festival",
        lat: 34.685, 
        lng: 135.843,
        nearestStation: "近鉄奈良駅",
        walkTime: 5,
        accessibility: {
            多目的トイレ: 1,
            車椅子貸出: 1,
            service_dog_allowed: 1,
            優先駐車場: 1,
            エレベータ: 0,
            段差対応: 1
        }
    },
    {
        id: 2,
        title: "なら瑠璃絵",
        date: "2025年2月8日〜14日",
        venue: "奈良公園",
        category: "festival",
        lat: 34.685,
        lng: 135.843,
        nearestStation: "近鉄奈良駅",
        walkTime: 5,
        accessibility: {
            多目的トイレ: 1,
            車椅子貸出: 1,
            service_dog_allowed: 1,
            優先駐車場: 1,
            エレベータ: 0,
            段差対応: 1
        }
    },
    {
        id: 3,
        title: "平城京天平祭",
        date: "2025年5月3日〜5日",
        venue: "平城宮跡歴史公園",
        category: "festival",
        lat: 34.691,
        lng: 135.795,
        nearestStation: "大和西大寺駅",
        walkTime: 15,
        accessibility: {
            多目的トイレ: 1,
            車椅子貸出: 1,
            service_dog_allowed: 1,
            優先駐車場: 1,
            エレベータ: 0,
            段差対応: 1
        }
    },
    {
        id: 4,
        title: "奈良マラソン 2025",
        date: "2025年12月14日",
        venue: "鴻ノ池陸上競技場",
        category: "sports",
        lat: 34.680,
        lng: 135.850,
        nearestStation: "JR奈良駅",
        walkTime: 20,
        accessibility: {
            多目的トイレ: 1,
            車椅子貸出: 1,
            service_dog_allowed: 1,
            優先駐車場: 1,
            エレベータ: 1,
            段差対応: 1
        }
    },
    {
        id: 5,
        title: "奈良国立博物館 特別展",
        date: "2025年7月20日〜9月10日",
        venue: "奈良国立博物館",
        category: "culture",
        lat: 34.683,
        lng: 135.838,
        nearestStation: "近鉄奈良駅",
        walkTime: 8,
        accessibility: {
            多目的トイレ: 1,
            車椅子貸出: 1,
            service_dog_allowed: 1,
            優先駐車場: 1,
            エレベータ: 1,
            段差対応: 1
        }
    },
    {
        id: 6,
        title: "奈良公園 写生大会",
        date: "2025年4月29日",
        venue: "奈良公園",
        category: "culture",
        lat: 34.685,
        lng: 135.843,
        nearestStation: "近鉄奈良駅",
        walkTime: 5,
        accessibility: {
            多目的トイレ: 1,
            車椅子貸出: 1,
            service_dog_allowed: 1,
            優先駐車場: 1,
            エレベータ: 0,
            段差対応: 1
        }
    },
    {
        id: 7,
        title: "東大寺 お水取り",
        date: "2025年3月1日〜14日",
        venue: "東大寺 二月堂",
        category: "culture",
        lat: 34.689,
        lng: 135.848,
        nearestStation: "近鉄奈良駅",
        walkTime: 20,
        accessibility: {
            多目的トイレ: 1,
            車椅子貸出: 0,
            service_dog_allowed: 0,
            優先駐車場: 0,
            エレベータ: 0,
            段差対応: 0
        }
    },
    {
        id: 8,
        title: "奈良町 工芸体験ワークショップ",
        date: "2025年6月15日",
        venue: "奈良町工芸館",
        category: "workshop",
        lat: 34.678,
        lng: 135.832,
        nearestStation: "近鉄奈良駅",
        walkTime: 12,
        accessibility: {
            多目的トイレ: 1,
            車椅子貸出: 0,
            service_dog_allowed: 1,
            優先駐車場: 0,
            エレベータ: 0,
            段差対応: 1
        }
    },
    {
        id: 9,
        title: "若草山 山焼き",
        date: "2025年1月25日",
        venue: "若草山",
        category: "festival",
        lat: 34.687,
        lng: 135.851,
        nearestStation: "近鉄奈良駅",
        walkTime: 25,
        accessibility: {
            多目的トイレ: 1,
            車椅子貸出: 0,
            service_dog_allowed: 1,
            優先駐車場: 1,
            エレベータ: 0,
            段差対応: 0
        }
    },
    {
        id: 10,
        title: "春日大社 万燈籠",
        date: "2025年8月14日〜15日",
        venue: "春日大社",
        category: "festival",
        lat: 34.681,
        lng: 135.848,
        nearestStation: "近鉄奈良駅",
        walkTime: 18,
        accessibility: {
            多目的トイレ: 1,
            車椅子貸出: 1,
            service_dog_allowed: 0,
            優先駐車場: 1,
            エレベータ: 0,
            段差対応: 1
        }
    }
];

// ========================================
// 駅データ
// ========================================

const STATIONS_DATA = [
    {
        id: 1,
        name: "近鉄奈良駅",
        lat: 34.681,
        lng: 135.830,
        lines: ["近鉄奈良線"]
    },
    {
        id: 2,
        name: "JR奈良駅",
        lat: 34.681,
        lng: 135.820,
        lines: ["JR大和路線"]
    },
    {
        id: 3,
        name: "大和西大寺駅",
        lat: 34.694,
        lng: 135.783,
        lines: ["近鉄奈良線", "近鉄京都線", "近鉄橿原線"]
    },
    {
        id: 4,
        name: "新大宮駅",
        lat: 34.685,
        lng: 135.809,
        lines: ["近鉄奈良線"]
    },
    {
        id: 5,
        name: "学園前駅",
        lat: 34.697,
        lng: 135.750,
        lines: ["近鉄奈良線"]
    },
    {
        id: 6,
        name: "富雄駅",
        lat: 34.694,
        lng: 135.735,
        lines: ["近鉄奈良線"]
    },
    {
        id: 7,
        name: "菖蒲池駅",
        lat: 34.698,
        lng: 135.761,
        lines: ["近鉄奈良線"]
    },
    {
        id: 8,
        name: "高の原駅",
        lat: 34.732,
        lng: 135.775,
        lines: ["近鉄京都線"]
    },
    {
        id: 9,
        name: "平城駅",
        lat: 34.718,
        lng: 135.779,
        lines: ["近鉄京都線"]
    },
    {
        id: 10,
        name: "尼ヶ辻駅",
        lat: 34.674,
        lng: 135.786,
        lines: ["近鉄橿原線"]
    },
    {
        id: 11,
        name: "西ノ京駅",
        lat: 34.674,
        lng: 135.777,
        lines: ["近鉄橿原線"]
    }
];

console.log('✅ data.js 読み込み完了');
console.log(`イベント: ${EVENTS_DATA.length}件`);
console.log(`駅: ${STATIONS_DATA.length}件`);
