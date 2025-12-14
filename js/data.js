/**
 * ならやさしいイベントナビ v5.6 - データファイル
 * 更新日: 2025-12-14
 * 
 * 新機能:
 * ① 盲導犬・介助犬・聴導犬同伴可: 施設GeoJSONのservice_dog_allowed=1の場合のみ表示
 * ② イベント絞り込み: 最寄り駅から徒歩〇分の条件追加
 * ③ 通知方法: FAX・郵送を追加
 * ④ GeoJSONから64駅すべての正確な座標を取得
 * ⑤ 会場の最寄り駅を自動計算・表示
 * ⑥ 徒歩時間を時速4km(ゆっくり歩く速度)で計算
 */

// イベントデータ
const EVENTS_DATA = [
    {
        id: 1,
        name: "奈良公園クリスマスイベント",
        date: "2025-12-25",
        time: "10:00~18:00",
        category: "文化・イベント",
        venue: "奈良公園",
        address: "奈良県奈良市雑司町",
        lat: 34.685072,
        lon: 135.843146,
        description: "奈良公園で開催される冬のイルミネーションイベント。光と音楽で彩られます。",
        accessibility: ["多目的トイレ", "段差への対応"],
        contact: "奈良公園管理事務所 0742-22-0375",
        capacity: "制限なし",
        fee: "無料"
    },
    {
        id: 2,
        name: "奈良市美術館 新春展覧会",
        date: "2026-01-05",
        time: "09:00~17:00",
        category: "美術・展示",
        venue: "奈良市美術館",
        address: "奈良県奈良市二条大路南1-3-1",
        lat: 34.685235,
        lon: 135.802094,
        description: "新春を祝う日本画と書道の特別展覧会。地元作家の作品を中心に展示します。",
        accessibility: ["多目的トイレ"],
        contact: "奈良市美術館 0742-30-1510",
        capacity: "200名",
        fee: "一般500円、高校生以下無料"
    },
    {
        id: 3,
        name: "春日大社 節分祭",
        date: "2026-02-03",
        time: "11:00~15:00",
        category: "文化・イベント",
        venue: "春日大社",
        address: "奈良県奈良市春日野町160",
        lat: 34.681274,
        lon: 135.848257,
        description: "春日大社の伝統的な節分祭。豆まきや御祈祷が行われます。",
        accessibility: ["多目的トイレ", "段差への対応"],
        contact: "春日大社 0742-22-7788",
        capacity: "制限なし",
        fee: "無料"
    }
];

// 通知方法(③FAX・郵送を追加)
const NOTIFICATION_METHODS = [
    { id: 'email', name: 'メール', icon: '📧' },
    { id: 'sms', name: 'SMS', icon: '📱' },
    { id: 'fax', name: 'FAX', icon: '📠' },
    { id: 'mail', name: '郵送', icon: '📮' }
];


const STATIONS_DATA = [
  {
    id: 1,
    name: '学研奈良登美ヶ丘',
    line: 'けいはんな線',
    operator: '近畿日本鉄道',
    lat: 34.726385,
    lon: 135.74916,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: true
    }
  },
  {
    id: 2,
    name: '白庭台',
    line: 'けいはんな線',
    operator: '近畿日本鉄道',
    lat: 34.72103,
    lon: 135.71683,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 3,
    name: '学研北生駒',
    line: 'けいはんな線',
    operator: '近畿日本鉄道',
    lat: 34.724845,
    lon: 135.72342,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 4,
    name: '大和西大寺',
    line: '橿原線',
    operator: '近畿日本鉄道',
    lat: 34.69365,
    lon: 135.78307,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: true
    }
  },
  {
    id: 5,
    name: '尼ヶ辻',
    line: '橿原線',
    operator: '近畿日本鉄道',
    lat: 34.681105,
    lon: 135.783525,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: true
    }
  },
  {
    id: 6,
    name: '西ノ京',
    line: '橿原線',
    operator: '近畿日本鉄道',
    lat: 34.67065,
    lon: 135.78317,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: true
    }
  },
  {
    id: 7,
    name: '九条',
    line: '橿原線',
    operator: '近畿日本鉄道',
    lat: 34.65941,
    lon: 135.78296,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 8,
    name: '近鉄郡山',
    line: '橿原線',
    operator: '近畿日本鉄道',
    lat: 34.64605,
    lon: 135.780725,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 9,
    name: '平端',
    line: '橿原線',
    operator: '近畿日本鉄道',
    lat: 34.60671,
    lon: 135.78279,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 10,
    name: '筒井',
    line: '橿原線',
    operator: '近畿日本鉄道',
    lat: 34.62024,
    lon: 135.78066,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 11,
    name: '山田川',
    line: '京都線',
    operator: '近畿日本鉄道',
    lat: 34.737780555217114,
    lon: 135.7938771738468,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 12,
    name: '狛田',
    line: '京都線',
    operator: '近畿日本鉄道',
    lat: 34.78044,
    lon: 135.78952,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 13,
    name: '木津川台',
    line: '京都線',
    operator: '近畿日本鉄道',
    lat: 34.74664908112095,
    lon: 135.79605412772793,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 14,
    name: '三山木',
    line: '京都線',
    operator: '近畿日本鉄道',
    lat: 34.79864,
    lon: 135.78609,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 15,
    name: '近鉄宮津',
    line: '京都線',
    operator: '近畿日本鉄道',
    lat: 34.79162,
    lon: 135.787515,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 16,
    name: '高の原',
    line: '京都線',
    operator: '近畿日本鉄道',
    lat: 34.72371,
    lon: 135.79186,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: true
    }
  },
  {
    id: 17,
    name: '新祝園',
    line: '京都線',
    operator: '近畿日本鉄道',
    lat: 34.760319542697715,
    lon: 135.79277051011232,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 18,
    name: '平城',
    line: '京都線',
    operator: '近畿日本鉄道',
    lat: 34.701465,
    lon: 135.78465,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 19,
    name: '興戸',
    line: '京都線',
    operator: '近畿日本鉄道',
    lat: 34.80832,
    lon: 135.77868,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 20,
    name: '大和西大寺',
    line: '京都線',
    operator: '近畿日本鉄道',
    lat: 34.69365,
    lon: 135.78307,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: true
    }
  },
  {
    id: 21,
    name: '南生駒',
    line: '生駒線',
    operator: '近畿日本鉄道',
    lat: 34.665505,
    lon: 135.70887,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 22,
    name: '一分',
    line: '生駒線',
    operator: '近畿日本鉄道',
    lat: 34.675415,
    lon: 135.707975,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 23,
    name: '菜畑',
    line: '生駒線',
    operator: '近畿日本鉄道',
    lat: 34.68558541184476,
    lon: 135.70666278928155,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 24,
    name: '勢野北口',
    line: '生駒線',
    operator: '近畿日本鉄道',
    lat: 34.6061,
    lon: 135.701015,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 25,
    name: '竜田川',
    line: '生駒線',
    operator: '近畿日本鉄道',
    lat: 34.61719,
    lon: 135.704665,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 26,
    name: '平群',
    line: '生駒線',
    operator: '近畿日本鉄道',
    lat: 34.62927,
    lon: 135.704365,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 27,
    name: '東山',
    line: '生駒線',
    operator: '近畿日本鉄道',
    lat: 34.648705,
    lon: 135.7086,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 28,
    name: '元山上口',
    line: '生駒線',
    operator: '近畿日本鉄道',
    lat: 34.640605,
    lon: 135.700795,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 29,
    name: '萩の台',
    line: '生駒線',
    operator: '近畿日本鉄道',
    lat: 34.65698,
    lon: 135.70898,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 30,
    name: '平端',
    line: '天理線',
    operator: '近畿日本鉄道',
    lat: 34.60667370059856,
    lon: 135.78313196398645,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 31,
    name: '前栽',
    line: '天理線',
    operator: '近畿日本鉄道',
    lat: 34.601145,
    lon: 135.81609,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 32,
    name: '二階堂',
    line: '天理線',
    operator: '近畿日本鉄道',
    lat: 34.60203,
    lon: 135.79616,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 33,
    name: '天理',
    line: '天理線',
    operator: '近畿日本鉄道',
    lat: 34.60119,
    lon: 135.82928,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 34,
    name: '東生駒',
    line: '奈良線',
    operator: '近畿日本鉄道',
    lat: 34.69182253977662,
    lon: 135.7099291152431,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 35,
    name: '新大宮',
    line: '奈良線',
    operator: '近畿日本鉄道',
    lat: 34.685425,
    lon: 135.810685,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: false,
      barrier_free: true
    }
  },
  {
    id: 36,
    name: '富雄',
    line: '奈良線',
    operator: '近畿日本鉄道',
    lat: 34.694205,
    lon: 135.73473,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: true
    }
  },
  {
    id: 37,
    name: '学園前',
    line: '奈良線',
    operator: '近畿日本鉄道',
    lat: 34.697015,
    lon: 135.749805,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: true
    }
  },
  {
    id: 38,
    name: '近鉄奈良',
    line: '奈良線',
    operator: '近畿日本鉄道',
    lat: 34.68397,
    lon: 135.827855,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: false
    }
  },
  {
    id: 39,
    name: '菖蒲池',
    line: '奈良線',
    operator: '近畿日本鉄道',
    lat: 34.697925,
    lon: 135.761275,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: false,
      barrier_free: true
    }
  },
  {
    id: 40,
    name: '大和西大寺',
    line: '奈良線',
    operator: '近畿日本鉄道',
    lat: 34.69365,
    lon: 135.78307,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: true
    }
  },
  {
    id: 41,
    name: '奈良',
    line: '関西線',
    operator: '西日本旅客鉄道',
    lat: 34.680495,
    lon: 135.81885,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: true
    }
  },
  {
    id: 42,
    name: '平城山',
    line: '関西線',
    operator: '西日本旅客鉄道',
    lat: 34.71053,
    lon: 135.81035,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 43,
    name: '加茂',
    line: '関西線',
    operator: '西日本旅客鉄道',
    lat: 34.75257,
    lon: 135.869595,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 44,
    name: '木津',
    line: '関西線',
    operator: '西日本旅客鉄道',
    lat: 34.735595,
    lon: 135.824775,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 45,
    name: '郡山',
    line: '関西線',
    operator: '西日本旅客鉄道',
    lat: 34.64811982182291,
    lon: 135.79035541722692,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 46,
    name: '法隆寺',
    line: '関西線',
    operator: '西日本旅客鉄道',
    lat: 34.60155,
    lon: 135.7389,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 47,
    name: '大和小泉',
    line: '関西線',
    operator: '西日本旅客鉄道',
    lat: 34.622195,
    lon: 135.76345,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 48,
    name: '京終',
    line: '桜井線',
    operator: '西日本旅客鉄道',
    lat: 34.669966858865116,
    lon: 135.8285763808963,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 49,
    name: '奈良',
    line: '桜井線',
    operator: '西日本旅客鉄道',
    lat: 34.680495,
    lon: 135.81885,
    accessibility: {
      multipurpose_toilet: true,
      wheelchair_rental: false,
      service_dog_allowed: true,
      priority_parking: false,
      elevator: true,
      barrier_free: true
    }
  },
  {
    id: 50,
    name: '帯解',
    line: '桜井線',
    operator: '西日本旅客鉄道',
    lat: 34.643215,
    lon: 135.8262,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 51,
    name: '天理',
    line: '桜井線',
    operator: '西日本旅客鉄道',
    lat: 34.600372931219304,
    lon: 135.83041082156174,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 52,
    name: '櫟本',
    line: '桜井線',
    operator: '西日本旅客鉄道',
    lat: 34.62111,
    lon: 135.82615,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 53,
    name: '木津',
    line: '奈良線',
    operator: '西日本旅客鉄道',
    lat: 34.735595,
    lon: 135.824775,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 54,
    name: '玉水',
    line: '奈良線',
    operator: '西日本旅客鉄道',
    lat: 34.80069027889142,
    lon: 135.8069775403838,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 55,
    name: '上狛',
    line: '奈良線',
    operator: '西日本旅客鉄道',
    lat: 34.750475,
    lon: 135.8213,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 56,
    name: '棚倉',
    line: '奈良線',
    operator: '西日本旅客鉄道',
    lat: 34.774635,
    lon: 135.81602,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 57,
    name: '山城多賀',
    line: '奈良線',
    operator: '西日本旅客鉄道',
    lat: 34.817595,
    lon: 135.80626,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 58,
    name: '木津',
    line: '片町線',
    operator: '西日本旅客鉄道',
    lat: 34.735595,
    lon: 135.824775,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 59,
    name: '同志社前',
    line: '片町線',
    operator: '西日本旅客鉄道',
    lat: 34.8055573456256,
    lon: 135.77842507807733,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 60,
    name: '藤阪',
    line: '片町線',
    operator: '西日本旅客鉄道',
    lat: 34.81444,
    lon: 135.70275,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 61,
    name: '西木津',
    line: '片町線',
    operator: '西日本旅客鉄道',
    lat: 34.73813,
    lon: 135.802445,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 62,
    name: '祝園',
    line: '片町線',
    operator: '西日本旅客鉄道',
    lat: 34.76019,
    lon: 135.792025,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 63,
    name: 'JR三山木',
    line: '片町線',
    operator: '西日本旅客鉄道',
    lat: 34.79847,
    lon: 135.784505,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  },
  {
    id: 64,
    name: '下狛',
    line: '片町線',
    operator: '西日本旅客鉄道',
    lat: 34.780575,
    lon: 135.788555,
    accessibility: {
      multipurpose_toilet: false,
      wheelchair_rental: false,
      service_dog_allowed: false,
      priority_parking: false,
      elevator: false,
      barrier_free: false
    }
  }
];
