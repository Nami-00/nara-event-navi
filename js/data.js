/**
 * ならやさしいイベントナビ v6.0 - データファイル
 * 更新日: 2025-12-16
 * 
 * v6.0の新機能:
 * ① バリアフリー施設情報統合 (473件: 公共施設409件 + 駅11件 + 観光施設53件)
 * ② イベント表示モード & 施設表示モードの切替
 * ③ 統計ダッシュボード追加
 * ④ 施設タイプ・バリアフリー設備フィルタ
 * ⑤ LINE通知設定の改善
 * 
 * v5.6からの継承機能:
 * ① 盲導犬・介助犬・聴導犬同伴可: 施設GeoJSONのservice_dog_allowed=1の場合のみ表示
 * ② イベント絞り込み: 最寄り駅から徒歩〇分の条件追加
 * ③ GeoJSONから64駅すべての正確な座標を取得
 * ④ 会場の最寄り駅を自動計算・表示
 * ⑤ 徒歩時間を時速4km(ゆっくり歩く速度)で計算
 * 
 * イベント数: 27件（全イベント保持）
 * 駅数: 64件
 */


// イベントデータ
const EVENTS_DATA = [
    {
        id: 1,
        name: "奈良公園クリスマスイベント",
        date: "2025-12-14",
        time: "10:00~16:00",
        category: "文化・イベント",
        venue: "奈良公園",
        address: "奈良県奈良市雑司町469",
        lat: 34.684915,
        lng: 135.842827,
        description: "奈良公園でクリスマスイベントを開催します。鹿とのふれあいや音楽イベントなど、家族で楽しめるプログラムが盛りだくさん。",
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
        lng: 135.802094,
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
        lng: 135.848257,
        description: "春日大社の伝統的な節分祭。豆まきや御祈祷が行われます。",
        accessibility: ["多目的トイレ", "段差への対応"],
        contact: "春日大社 0742-22-7788",
        capacity: "制限なし",
        fee: "無料"
    },
    {
        id: 4,
        name: "奈良健康フェスタ 2026",
        date: "2026-03-15",
        time: "10:00~15:00",
        category: "健康・福祉",
        venue: "はぐくみセンター",
        address: "奈良県奈良市三条本町13-1",
        lat: 34.679181,
        lng: 135.817365,
        description: "健康チェックや栄養相談、体操教室など、健康をテーマにした総合イベント。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応", "車椅子貸出", "優先駐車場"],
        contact: "奈良市健康増進課 0742-34-5129",
        capacity: "500名",
        fee: "無料"
    },
    {
        id: 5,
        name: "子育て応援フェア",
        date: "2026-03-22",
        time: "10:00~14:00",
        category: "子育て・教育",
        venue: "奈良市ならまちセンター",
        address: "奈良県奈良市東寺林町38",
        lat: 34.679814,
        lng: 135.830993,
        description: "子育て世代を応援するイベント。育児相談や親子体操、手作りおもちゃ教室など。",
        accessibility: ["多目的トイレ"],
        contact: "奈良市子ども育成課 0742-34-4792",
        capacity: "300名",
        fee: "無料"
    },
    {
        id: 6,
        name: "東大寺 お水取り",
        date: "2026-03-12",
        time: "19:00~",
        category: "文化・イベント",
        venue: "東大寺 二月堂",
        address: "奈良県奈良市雑司町406-1",
        lat: 34.689019,
        lng: 135.839844,
        description: "奈良の春を告げる伝統行事。1250年以上続く火と水の祭典。",
        accessibility: ["段差への対応"],
        contact: "東大寺 0742-22-5511",
        capacity: "制限なし",
        fee: "無料"
    },
    {
        id: 7,
        name: "奈良マラソン 2025",
        date: "2025-12-08",
        time: "08:30~",
        category: "スポーツ",
        venue: "奈良公園周辺（スタート・ゴール:鴻ノ池陸上競技場）",
        address: "奈良県奈良市法蓮町757-3",
        lat: 34.703037,
        lng: 135.829163,
        description: "世界遺産を走る日本有数のマラソン大会。フルマラソンと10km種目があります。",
        accessibility: ["多目的トイレ", "車椅子貸出"],
        contact: "奈良マラソン実行委員会 0742-81-8752",
        capacity: "12,000名",
        fee: "フルマラソン10,000円、10km4,000円"
    },
    {
        id: 8,
        name: "奈良若草山焼き 2026",
        date: "2026-01-25",
        time: "18:15~",
        category: "文化・イベント",
        venue: "若草山",
        address: "奈良県奈良市雑司町",
        lat: 34.691254,
        lng: 135.850891,
        description: "奈良の冬の風物詩。山全体に火が放たれ、幻想的な光景が広がります。",
        accessibility: ["段差への対応"],
        contact: "奈良市観光協会 0742-22-3900",
        capacity: "制限なし",
        fee: "無料"
    },
    {
        id: 9,
        name: "奈良 食と農のフェスティバル",
        date: "2025-12-21",
        time: "10:00~16:00",
        category: "食・グルメ",
        venue: "ならでんフィールド（鴻ノ池陸上競技場）",
        address: "奈良県奈良市法蓮町757-3",
        lat: 34.697341,
        lng: 135.828332,
        description: "奈良の特産品や地元農産物の販売、料理教室などを実施。",
        accessibility: ["多目的トイレ"],
        contact: "奈良市農林課 0742-34-5142",
        capacity: "制限なし",
        fee: "入場無料（飲食・物販は有料）"
    },
    {
        id: 10,
        name: "平城宮跡歴史公園 天平たなばた祭り",
        date: "2026-07-05",
        time: "16:00~21:00",
        category: "文化・イベント",
        venue: "平城宮跡歴史公園",
        address: "奈良県奈良市二条大路南3-5-1",
        lat: 34.691074,
        lng: 135.795456,
        description: "平城京の雰囲気を再現した七夕祭り。燈火イベントや音楽演奏など。",
        accessibility: ["多目的トイレ", "段差への対応"],
        contact: "平城宮跡管理センター 0742-36-8780",
        capacity: "制限なし",
        fee: "無料"
    },
    {
        id: 11,
        name: "奈良シニアいきいきフェスタ",
        date: "2026-02-20",
        time: "10:00~15:00",
        category: "健康・福祉",
        venue: "奈良市北部会館市民文化ホール",
        address: "奈良県奈良市右京1丁目1-4",
        lat: 34.721911,
        lng: 135.790983,
        description: "高齢者の健康と生きがいづくりをテーマにしたイベント。健康チェック、体操教室、趣味の展示など。",
        accessibility: ["多目的トイレ"],
        contact: "奈良市長寿福祉課 0742-34-5439",
        capacity: "500名",
        fee: "無料"
    },
    {
        id: 12,
        name: "新春コンサート 2026",
        date: "2026-01-10",
        time: "14:00~16:00",
        category: "音楽・芸術",
        venue: "奈良市北部会館市民文化ホール",
        address: "奈良県奈良市右京1丁目1-4",
        lat: 34.721911,
        lng: 135.790983,
        description: "新春を祝うクラシックコンサート。地元オーケストラによる演奏。",
        accessibility: ["多目的トイレ"],
        contact: "奈良市北部会館 0742-71-5747",
        capacity: "800名",
        fee: "一般2,000円、高校生以下1,000円"
    },
    {
        id: 13,
        name: "デジタルアート展示会",
        date: "2026-02-01",
        time: "10:00~18:00",
        category: "美術・展示",
        venue: "奈良市北部会館",
        address: "奈良県奈良市右京1丁目1-4",
        lat: 34.707524,
        lng: 135.783516,
        description: "最新のデジタル技術を活用したアート展示。インタラクティブな作品も多数。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応", "車椅子貸出"],
        contact: "奈良市北部会館 0742-71-5747",
        capacity: "200名",
        fee: "一般800円、高校生以下無料"
    },
    {
        id: 14,
        name: "JNO室内楽シリーズ2025（第3回）",
        date: "2025-11-21",
        time: "19:00~",
        category: "音楽・芸術",
        venue: "学園前ホール",
        address: "奈良県奈良市学園北1-11-4",
        lat: 34.708843,
        lng: 135.777221,
        description: "奈良日本フィルハーモニー管弦楽団メンバーによる室内楽コンサート。車椅子での来場の場合は事前連絡が必要。",
        accessibility: ["多目的トイレ", "エレベータ"],
        contact: "奈良市音楽協会 0742-34-4710",
        capacity: "300名",
        fee: "全席自由 一般2,000円"
    },
    {
        id: 15,
        name: "JNO室内楽シリーズ2025（第4回）",
        date: "2025-12-03",
        time: "19:00~",
        category: "音楽・芸術",
        venue: "奈良100年会館",
        address: "奈良県奈良市三条宮前町7-1",
        lat: 34.681824,
        lng: 135.817337,
        description: "奈良日本フィルハーモニー管弦楽団メンバーによる室内楽コンサート。車椅子での来場の場合は事前連絡が必要。",
        accessibility: ["多目的トイレ", "エレベータ", "車椅子貸出"],
        contact: "奈良市音楽協会 0742-34-4710",
        capacity: "400名",
        fee: "全席指定 一般4,000円"
    },
    {
        id: 16,
        name: "JNO室内楽シリーズ2025（第5回）",
        date: "2025-12-15",
        time: "14:00~",
        category: "音楽・芸術",
        venue: "奈良100年会館",
        address: "奈良県奈良市三条宮前町7-1",
        lat: 34.681824,
        lng: 135.817337,
        description: "奈良日本フィルハーモニー管弦楽団メンバーによる室内楽コンサート。車椅子での来場の場合は事前連絡が必要。",
        accessibility: ["多目的トイレ", "エレベータ", "車椅子貸出"],
        contact: "奈良市音楽協会 0742-34-4710",
        capacity: "400名",
        fee: "全席指定 一般4,000円"
    },
    {
        id: 17,
        name: "男女共同参画市民企画講座「親子で楽しもう！クッキング教室」",
        date: "2025-11-30",
        time: "10:00~13:00",
        category: "子育て・教育",
        venue: "西部公民館",
        address: "奈良県奈良市学園南3-1-5",
        lat: 34.696719,
        lng: 135.75023,
        description: "親子で料理を楽しむクッキング教室。事前申込制で、保育サービス（6か月〜就学前、要事前申込）あり。",
        accessibility: ["多目的トイレ", "エレベータ", "車椅子貸出", "優先駐車場", "段差への対応", "盲導犬・介助犬・聴導犬同伴可"],
        contact: "西部公民館 0742-44-0101",
        capacity: "15組",
        fee: "材料費700円"
    },
    {
        id: 18,
        name: "動物愛護フェスティバル",
        date: "2025-11-29",
        time: "10:00~15:00",
        category: "動物・環境",
        venue: "はぐくみセンター1階",
        address: "奈良県奈良市三条本町13-1",
        lat: 34.682551,
        lng: 135.820267,
        description: "動物愛護をテーマにしたイベント。飼育相談、展示、体験コーナーなど。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "奈良市保健所 0742-93-8395",
        capacity: "制限なし",
        fee: "無料"
    },
    {
        id: 19,
        name: "親子料理教室「季節の和食を作ろう」",
        date: "2025-12-14",
        time: "10:00~13:00",
        category: "子育て・教育",
        venue: "平城公民館",
        address: "奈良県奈良市秋篠町1468",
        lat: 34.706211,
        lng: 135.777631,
        description: "親子で季節の和食作りを体験。事前申込制。保育サービス（6か月〜就学前、要事前申込）あり。",
        accessibility: ["多目的トイレ", "車椅子貸出", "盲導犬・介助犬・聴導犬同伴可"],
        contact: "平城公民館 0742-48-3578",
        capacity: "12組",
        fee: "材料費800円"
    },
    {
        id: 20,
        name: "シニアのためのスマートフォン教室（基礎編）",
        date: "2025-12-05",
        time: "13:30~15:30",
        category: "IT・デジタル",
        venue: "奈良市北部会館",
        address: "奈良県奈良市右京1丁目1-4",
        lat: 34.707524,
        lng: 135.783516,
        description: "スマートフォンの基本操作を学ぶ教室。LINE、カメラ、地図アプリなどの使い方を解説。事前申込制。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応", "車椅子貸出"],
        contact: "奈良市北部会館 0742-71-5747",
        capacity: "20名",
        fee: "無料（要事前申込）"
    },
    {
        id: 21,
        name: "健康体操教室「楽しく動いて元気になろう」",
        date: "2025-12-10",
        time: "10:00~11:30",
        category: "健康・福祉",
        venue: "はぐくみセンター2階",
        address: "奈良県奈良市三条本町13-1",
        lat: 34.682551,
        lng: 135.820267,
        description: "シニア向けの健康体操教室。無理なく身体を動かして健康維持。事前申込制。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応", "車椅子貸出"],
        contact: "奈良市健康増進課 0742-34-5129",
        capacity: "30名",
        fee: "無料"
    },
    {
        id: 22,
        name: "児童虐待・DV防止相談会",
        date: "2025-11-15",
        time: "10:00~16:00",
        category: "子育て・福祉",
        venue: "子ども未来部 子育て相談課",
        address: "奈良県奈良市二条大路南1-1-1",
        lat: 34.687217,
        lng: 135.809463,
        description: "児童虐待やDVに関する相談会。電話、Web、チャット、FAXなど多様な相談方法あり。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "子ども・子育て相談ダイヤル 0742-34-4804",
        capacity: "制限なし",
        fee: "無料"
    },
    {
        id: 23,
        name: "地域防災セミナー「災害に備えよう」",
        date: "2025-12-18",
        time: "13:30~15:30",
        category: "防災・安全",
        venue: "奈良市防災センター",
        address: "奈良県奈良市八条5丁目404-1",
        lat: 34.656912,
        lng: 135.812345,
        description: "地震や水害などの災害への備えを学ぶセミナー。家庭でできる防災対策や避難行動を解説。",
        accessibility: ["多目的トイレ", "段差への対応"],
        contact: "奈良市危機管理課 0742-34-4930",
        capacity: "50名",
        fee: "無料（要事前申込）"
    },
    {
        id: 24,
        name: "手作り雑貨マーケット",
        date: "2025-12-22",
        time: "11:00~16:00",
        category: "文化・イベント",
        venue: "ならまちセンター広場",
        address: "奈良県奈良市東寺林町38",
        lat: 34.677851,
        lng: 135.831223,
        description: "地元作家による手作り雑貨やアクセサリーの販売。クリスマスプレゼントにもおすすめ。",
        accessibility: ["多目的トイレ"],
        contact: "ならまちセンター 0742-27-1151",
        capacity: "制限なし",
        fee: "入場無料"
    },
    {
        id: 25,
        name: "奈良の歴史探訪ウォーク",
        date: "2026-01-18",
        time: "09:30~15:00",
        category: "文化・観光",
        venue: "奈良市内各所（集合:近鉄奈良駅前）",
        address: "奈良県奈良市東向中町29",
        lat: 34.681591,
        lng: 135.829163,
        description: "ガイド付きで奈良の歴史的名所を巡るウォーキングツアー。約6kmのコース。",
        accessibility: ["段差への対応"],
        contact: "奈良市観光協会 0742-22-3900",
        capacity: "30名",
        fee: "500円（要事前申込）"
    },
    {
        id: 26,
        name: "新春書き初め大会",
        date: "2026-01-08",
        time: "10:00~12:00",
        category: "文化・イベント",
        venue: "奈良市北部会館",
        address: "奈良県奈良市右京1丁目1-4",
        lat: 34.707524,
        lng: 135.783516,
        description: "新春の書き初め大会。小学生から大人まで参加可能。書道道具の貸出あり。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応", "車椅子貸出"],
        contact: "奈良市北部会館 0742-71-5747",
        capacity: "50名",
        fee: "材料費300円"
    },
    {
        id: 27,
        name: "冬の星空観察会",
        date: "2026-01-24",
        time: "18:30~20:30",
        category: "科学・自然",
        venue: "奈良市青少年野外活動センター",
        address: "奈良県奈良市阪原町25-1",
        lat: 34.753642,
        lng: 135.897321,
        description: "冬の星座を観察する天体観測会。天体望遠鏡を使った観測体験あり。",
        accessibility: [""],
        contact: "奈良市青少年野外活動センター 0742-93-0029",
        capacity: "40名",
        fee: "大人300円、子ども200円（要事前申込）"
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
    lng: 135.74916,
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
    lng: 135.71683,
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
    lng: 135.72342,
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
    lng: 135.78307,
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
    lng: 135.783525,
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
    lng: 135.78317,
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
    lng: 135.78296,
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
    lng: 135.780725,
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
    lng: 135.78279,
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
    lng: 135.78066,
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
    lng: 135.7938771738468,
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
    lng: 135.78952,
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
    lng: 135.79605412772793,
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
    lng: 135.78609,
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
    lng: 135.787515,
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
    lng: 135.79186,
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
    lng: 135.79277051011232,
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
    lng: 135.78465,
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
    lng: 135.77868,
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
    lng: 135.78307,
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
    lng: 135.70887,
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
    lng: 135.707975,
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
    lng: 135.70666278928155,
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
    lng: 135.701015,
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
    lng: 135.704665,
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
    lng: 135.704365,
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
    lng: 135.7086,
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
    lng: 135.700795,
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
    lng: 135.70898,
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
    lng: 135.78313196398645,
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
    lng: 135.81609,
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
    lng: 135.79616,
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
    lng: 135.82928,
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
    lng: 135.7099291152431,
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
    lng: 135.810685,
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
    lng: 135.73473,
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
    lng: 135.749805,
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
    lng: 135.827855,
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
    lng: 135.761275,
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
    lng: 135.78307,
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
    lng: 135.81885,
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
    lng: 135.81035,
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
    lng: 135.869595,
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
    lng: 135.824775,
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
    lng: 135.79035541722692,
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
    lng: 135.7389,
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
    lng: 135.76345,
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
    lng: 135.8285763808963,
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
    lng: 135.81885,
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
    lng: 135.8262,
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
    lng: 135.83041082156174,
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
    lng: 135.82615,
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
    lng: 135.824775,
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
    lng: 135.8069775403838,
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
    lng: 135.8213,
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
    lng: 135.81602,
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
    lng: 135.80626,
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
    lng: 135.824775,
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
    lng: 135.77842507807733,
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
    lng: 135.70275,
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
    lng: 135.802445,
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
    lng: 135.792025,
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
    lng: 135.784505,
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
    lng: 135.788555,
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
