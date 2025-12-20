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
 * 
 * イベント数: 27件（全イベント保持）
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
        lon: 135.842827,
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
        address: "奈良市春日野町160",
        lat: 34.681906,
        lon: 135.848244,
        description: "春日大社の伝統的な節分祭。豆まきや御祈祷が行われます。",
        accessibility: ["多目的トイレ", "優先駐車場"],
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
        lon: 135.817365,
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
        lon: 135.830993,
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
        address: "奈良市雑司町",
        lat: 34.689545,
        lon: 135.847492,
        description: "奈良の春を告げる伝統行事。1250年以上続く火と水の祭典。",
        accessibility: ["多目的トイレ", "段差への対応"],
        contact: "東大寺 0742-22-5511",
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
        lon: 135.828332,
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
        lon: 135.795456,
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
        lon: 135.790983,
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
        lon: 135.790983,
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
        lon: 135.783516,
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
        lon: 135.777221,
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
        lon: 135.817337,
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
        lon: 135.817337,
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
        lon: 135.75023,
        description: "親子で料理を楽しむクッキング教室。事前申込制で、保育サービス（6か月〜就学前、要事前申込）あり。",
        accessibility: ["多目的トイレ", "車椅子貸出", "盲導犬・介助犬・聴導犬同伴可", "優先駐車場", "エレベータ"],
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
        lon: 135.820267,
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
        lon: 135.777631,
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
        lon: 135.783516,
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
        lon: 135.820267,
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
        lon: 135.809463,
        description: "児童虐待やDVに関する相談会。電話、Web、チャット、FAXなど多様な相談方法あり。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "子ども・子育て相談ダイヤル 0742-34-4804",
        capacity: "制限なし",
        fee: "無料"
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
        lon: 135.831223,
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
        lon: 135.829163,
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
        lon: 135.783516,
        description: "新春の書き初め大会。小学生から大人まで参加可能。書道道具の貸出あり。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応", "車椅子貸出"],
        contact: "奈良市北部会館 0742-71-5747",
        capacity: "50名",
        fee: "材料費300円"
    },

    {
        id: 27,
        name: "栄養講座「ヨーグルトの選び方と腸内環境」",
        date: "2025-11-22",
        time: "10:00~11:30",
        category: "健康・講座",
        venue: "東福祉センター",
        address: "奈良県奈良市法蓮町1702-1",
        lat: 34.694818,
        lon: 135.825343,
        description: "講師：森永乳業株式会社。申込：電話で11/12までに東福祉センターへ。対象：市内在住の60歳以上。定員：30人。",
        accessibility: ["多目的トイレ", "盲導犬・介助犬・聴導犬同伴可", "優先駐車場", "エレベータ", "段差への対応"],
        contact: "東福祉センター 0742-24-3151",
        capacity: "",
        fee: ""
    },

    {
        id: 28,
        name: "健康教室「知っておきたい がん予防とがん検診」",
        date: "2025-11-25",
        time: "10:00~11:30",
        category: "健康・講座",
        venue: "南福祉センター",
        address: "奈良県奈良市南永井町45-1",
        lat: 34.647988,
        lon: 135.825898,
        description: "講師：市健康増進課。申込：電話で11/14までに南福祉センターへ。対象：市内在住の60歳以上。定員：30人。",
        accessibility: ["多目的トイレ", "車椅子貸出", "盲導犬・介助犬・聴導犬同伴可", "優先駐車場", "エレベータ", "段差への対応"],
        contact: "南福祉センター 0742-62-3730",
        capacity: "",
        fee: ""
    },

    {
        id: 29,
        name: "困りごと相談",
        date: "2025-11-25",
        time: "13:00~15:00",
        category: "相談",
        venue: "南福祉センター",
        address: "奈良県奈良市南永井町45-1",
        lat: 34.647988,
        lon: 135.825898,
        description: "生活の困りごと等の相談日です。",
        accessibility: ["多目的トイレ", "車椅子貸出", "盲導犬・介助犬・聴導犬同伴可", "優先駐車場", "エレベータ", "段差への対応"],
        contact: "南福祉センター 0742-62-3730",
        capacity: "",
        fee: ""
    },

    {
        id: 30,
        name: "インフルエンザ講座「インフルエンザについて」",
        date: "2025-11-28",
        time: "10:00~11:30",
        category: "健康・講座",
        venue: "南福祉センター",
        address: "奈良県奈良市南永井町45-1",
        lat: 34.647988,
        lon: 135.825898,
        description: "講師：市保健予防課。申込：電話で11/18までに南福祉センターへ。対象：市内在住の60歳以上。定員：50人。",
        accessibility: ["多目的トイレ", "車椅子貸出", "盲導犬・介助犬・聴導犬同伴可", "優先駐車場", "エレベータ", "段差への対応"],
        contact: "南福祉センター 0742-62-3730",
        capacity: "",
        fee: ""
    },

    {
        id: 31,
        name: "青少年を育てる市民の会 演奏会",
        date: "2025-12-06",
        time: "13:00~15:00",
        category: "文化・イベント",
        venue: "南福祉センター",
        address: "奈良県奈良市南永井町45-1",
        lat: 34.647988,
        lon: 135.825898,
        description: "曲目：大学歌など。出演：青少年を育てる市民の会。",
        accessibility: ["多目的トイレ", "車椅子貸出", "盲導犬・介助犬・聴導犬同伴可", "優先駐車場", "エレベータ", "段差への対応"],
        contact: "南福祉センター 0742-62-3730",
        capacity: "",
        fee: ""
    },

    {
        id: 32,
        name: "困りごと相談",
        date: "2025-11-14",
        time: "14:00~15:00",
        category: "相談",
        venue: "西福祉センター",
        address: "奈良県奈良市百楽園1-9-13",
        lat: 34.698481,
        lon: 135.7439,
        description: "生活の困りごと等の相談日です。",
        accessibility: ["多目的トイレ", "車椅子貸出", "盲導犬・介助犬・聴導犬同伴可", "エレベータ", "段差への対応"],
        contact: "西福祉センター 0742-41-3151",
        capacity: "",
        fee: ""
    },

    {
        id: 33,
        name: "健康講座「便秘を予防しよう」",
        date: "2025-11-21",
        time: "10:00~11:30",
        category: "健康・講座",
        venue: "西福祉センター",
        address: "奈良県奈良市百楽園1-9-13",
        lat: 34.698481,
        lon: 135.7439,
        description: "講師：大塚製薬株式会社。申込：電話で11/11までに西福祉センターへ。対象：市内在住の60歳以上。定員：30人。",
        accessibility: ["多目的トイレ", "車椅子貸出", "盲導犬・介助犬・聴導犬同伴可", "エレベータ", "段差への対応"],
        contact: "西福祉センター 0742-41-3151",
        capacity: "",
        fee: ""
    },

    {
        id: 34,
        name: "スマートフォン講座「使い方を教えて」",
        date: "2025-12-03",
        time: "13:30~15:00",
        category: "講座",
        venue: "西福祉センター",
        address: "奈良県奈良市百楽園1-9-13",
        lat: 34.698481,
        lon: 135.7439,
        description: "内容：操作の基本を学びます。申込：電話で11/21までに西福祉センターへ。対象：市内在住の60歳以上。定員：20人。",
        accessibility: ["多目的トイレ", "車椅子貸出", "盲導犬・介助犬・聴導犬同伴可", "エレベータ", "段差への対応"],
        contact: "西福祉センター 0742-41-3151",
        capacity: "",
        fee: ""
    },

    {
        id: 35,
        name: "パソコン初級教室（ワード）",
        date: "2026-01-13",
        time: "10:00~12:00（全4回：1/13,1/20,1/27,2/3）",
        category: "講座",
        venue: "勤労者総合福祉センター",
        address: "奈良県奈良市佐保台西町115",
        lat: 34.713144,
        lon: 135.81108,
        description: "内容：ワードの基本操作。申込：往復はがきで11/27までに勤労者総合福祉センターへ。対象：市内在住・在勤の勤労者。定員：16人。費用：2,000円。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "勤労者総合福祉センター 0742-71-2444",
        capacity: "16人",
        fee: "2,000円"
    },

    {
        id: 36,
        name: "パソコン初級教室（エクセル）",
        date: "2026-01-09",
        time: "10:00~12:00（全4回：1/9,1/16,1/23,1/30）",
        category: "講座",
        venue: "勤労者総合福祉センター",
        address: "奈良県奈良市佐保台西町115",
        lat: 34.713144,
        lon: 135.81108,
        description: "内容：エクセルの基本操作。申込：往復はがきで11/27までに勤労者総合福祉センターへ。対象：市内在住・在勤の勤労者。定員：16人。費用：2,000円。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "勤労者総合福祉センター 0742-71-2444",
        capacity: "16人",
        fee: "2,000円"
    },

    {
        id: 37,
        name: "はじめてのワード",
        date: "2025-12-18",
        time: "13:00~15:00（全8回：12/18,12/25,1/8,1/15,1/22,1/29,2/5）",
        category: "講座",
        venue: "勤労者総合福祉センター",
        address: "奈良県奈良市佐保台西町115",
        lat: 34.713144,
        lon: 135.81108,
        description: "内容：ワード入門。申込：往復はがきで11/28までに勤労者総合福祉センターへ。対象：市内在住・在勤の勤労者。定員：16人。費用：4,000円。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "勤労者総合福祉センター 0742-71-2444",
        capacity: "16人",
        fee: "4,000円"
    },

    {
        id: 38,
        name: "はじめてのエクセル",
        date: "2025-12-16",
        time: "13:00~15:00（全8回：12/16,12/23,1/6,1/13,1/20,1/27,2/3）",
        category: "講座",
        venue: "勤労者総合福祉センター",
        address: "奈良県奈良市佐保台西町115",
        lat: 34.713144,
        lon: 135.81108,
        description: "内容：エクセル入門。申込：往復はがきで11/27までに勤労者総合福祉センターへ。対象：市内在住・在勤の勤労者。定員：16人。費用：4,000円。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "勤労者総合福祉センター 0742-71-2444",
        capacity: "16人",
        fee: "4,000円"
    },

    {
        id: 39,
        name: "エクセル実務（中級）",
        date: "2026-01-06",
        time: "10:00~12:00（全6回：1/6,1/13,1/20,1/27,2/3,2/10）",
        category: "講座",
        venue: "勤労者総合福祉センター",
        address: "奈良県奈良市佐保台西町115",
        lat: 34.713144,
        lon: 135.81108,
        description: "内容：エクセル実務（中級）。申込：往復はがきで11/28までに勤労者総合福祉センターへ。対象：市内在住・在勤の勤労者。定員：16人。費用：3,000円。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "勤労者総合福祉センター 0742-71-2444",
        capacity: "16人",
        fee: "3,000円"
    },

    {
        id: 40,
        name: "おもてなしの英語教室（入門）",
        date: "2025-12-17",
        time: "10:00~11:30（全7回：12/17,12/24,1/7,1/14,1/21,1/28,2/4）",
        category: "講座",
        venue: "勤労者総合福祉センター",
        address: "奈良県奈良市佐保台西町115",
        lat: 34.713144,
        lon: 135.81108,
        description: "内容：英語入門。申込：往復はがきで11/28までに勤労者総合福祉センターへ。対象：市内在住・在勤の勤労者。定員：25人。費用：3,000円。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "勤労者総合福祉センター 0742-71-2444",
        capacity: "25人",
        fee: "3,000円"
    },

    {
        id: 41,
        name: "おもてなしの英語教室（初級）",
        date: "2025-12-17",
        time: "13:30~15:00（全7回：12/17,12/24,1/7,1/14,1/21,1/28,2/4）",
        category: "講座",
        venue: "勤労者総合福祉センター",
        address: "奈良県奈良市佐保台西町115",
        lat: 34.713144,
        lon: 135.81108,
        description: "内容：英語初級。申込：往復はがきで11/28までに勤労者総合福祉センターへ。対象：市内在住・在勤の勤労者。定員：25人。費用：3,000円。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "勤労者総合福祉センター 0742-71-2444",
        capacity: "25人",
        fee: "3,000円"
    },

    {
        id: 42,
        name: "特別陳列「ならまち歳時 春日若宮おん祭」",
        date: "2025-11-19",
        time: "09:00~17:00",
        category: "展示",
        venue: "史料保存館",
        address: "奈良県奈良市脇戸町1-1",
        lat: 34.677756,
        lon: 135.829202,
        description: "開催期間：2025-11-19〜2026-01-18。休館日：月曜（祝日の場合は翌日）、祝日の翌日。",
        accessibility: ["多目的トイレ"],
        contact: "史料保存館 0742-27-0169",
        capacity: "",
        fee: ""
    },

    {
        id: 43,
        name: "史料保存館ミニ展示「南都焼き討ち」",
        date: "2025-11-19",
        time: "09:00~17:00",
        category: "展示",
        venue: "史料保存館",
        address: "奈良県奈良市脇戸町1-1",
        lat: 34.677756,
        lon: 135.829202,
        description: "開催期間：2025-11-19〜2026-01-18。休館日：月曜（祝日の場合は翌日）、祝日の翌日。",
        accessibility: ["多目的トイレ"],
        contact: "史料保存館 0742-27-0169",
        capacity: "",
        fee: ""
    },

    {
        id: 44,
        name: "史料保存館ミニ展示「ほうごんものがたり」",
        date: "2025-11-19",
        time: "09:00~17:00",
        category: "展示",
        venue: "史料保存館",
        address: "奈良県奈良市脇戸町1-1",
        lat: 34.677756,
        lon: 135.829202,
        description: "開催期間：2025-11-19〜2026-01-18。休館日：月曜（祝日の場合は翌日）、祝日の翌日。",
        accessibility: ["多目的トイレ"],
        contact: "史料保存館 0742-27-0169",
        capacity: "",
        fee: ""
    },

    {
        id: 45,
        name: "史料保存館ミニ展示「おん祭と子どもたち」",
        date: "2025-11-19",
        time: "09:00~17:00",
        category: "展示",
        venue: "史料保存館",
        address: "奈良県奈良市脇戸町1-1",
        lat: 34.677756,
        lon: 135.829202,
        description: "開催期間：2025-11-19〜2026-01-18。休館日：月曜（祝日の場合は翌日）、祝日の翌日。",
        accessibility: ["多目的トイレ"],
        contact: "史料保存館 0742-27-0169",
        capacity: "",
        fee: ""
    },

    {
        id: 46,
        name: "特別展「知られざる奈良一刀彫の始祖 岡野松壽」",
        date: "2025-11-28",
        time: "09:00~17:00",
        category: "展示",
        venue: "なら工藝館",
        address: "奈良県奈良市阿字万字町1-1",
        lat: 34.67869,
        lon: 135.82824,
        description: "開催期間：2025-11-28〜2026-01-18。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "なら工藝館 0742-27-0033",
        capacity: "",
        fee: ""
    },

    {
        id: 47,
        name: "伝統工芸手ほどき講座（奈良一刀彫）",
        date: "2025-11-30",
        time: "13:30~15:00",
        category: "講座",
        venue: "なら工藝館",
        address: "奈良県奈良市阿字万字町1-1",
        lat: 34.67869,
        lon: 135.82824,
        description: "講師：春日大社権宮司・岡本彰夫氏。申込：Eメールで11/23までになら工藝館へ（定員30人、定員に達し次第終了）。",
        accessibility: ["多目的トイレ", "エレベータ", "段差への対応"],
        contact: "なら工藝館 0742-27-0033",
        capacity: "30人",
        fee: "300円"
    },
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
