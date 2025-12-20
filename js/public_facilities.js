const PUBLIC_FACILITIES = [
  {
    "id": 1,
    "poi_code": 1302,
    "poi_type": "市役所・東京都の区役所",
    "name": "市役所",
    "address": "奈良県奈良市二条大路南1-1-1",
    "phone": "0742-34-1111",
    "lat": 34.685072,
    "lon": 135.804848,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 2,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "保健所・教育総合センター",
    "address": "奈良県奈良市三条本町13-1",
    "phone": "0742-34-2303",
    "lat": 34.679181,
    "lon": 135.817365,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 3,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "市民サービスセンター",
    "address": "奈良県奈良市西大寺東町2-4-1",
    "phone": "0742-36-5913",
    "lat": 34.694884,
    "lon": 135.785088,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 4,
    "poi_code": 2009,
    "poi_type": "火葬場",
    "name": "奈良市斎苑旅立ちの杜",
    "address": "奈良県奈良市横井町924-11",
    "phone": "0742-64-9007",
    "lat": 34.66064,
    "lon": 135.85807,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 5,
    "poi_code": 2010,
    "poi_type": "墓地",
    "name": "東山霊苑",
    "address": "奈良県奈良市白毫寺町973",
    "phone": "",
    "lat": 34.669077,
    "lon": 135.849699,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 6,
    "poi_code": 2010,
    "poi_type": "墓地",
    "name": "七条町南山墓地",
    "address": "奈良県奈良市七条西町1-19",
    "phone": "",
    "lat": 34.662867,
    "lon": 135.775394,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 7,
    "poi_code": 2010,
    "poi_type": "墓地",
    "name": "寺山霊苑",
    "address": "奈良県奈良市白毫寺町984-3",
    "phone": "0742-22-7022",
    "lat": 34.670935,
    "lon": 135.852445,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 8,
    "poi_code": 1399,
    "poi_type": "その他行政サービス施設",
    "name": "ボランティアインフォメーションセンター",
    "address": "奈良県奈良市三条本町13-1",
    "phone": "0742-93-8435",
    "lat": 34.679181,
    "lon": 135.817365,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 9,
    "poi_code": 1305,
    "poi_type": "市民活動施設",
    "name": "ボランティアセンター",
    "address": "奈良県奈良市法蓮町1702-1",
    "phone": "0742-26-2270",
    "lat": 34.694688,
    "lon": 135.825121,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 10,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "東寺林連絡所",
    "address": "奈良県奈良市東寺林町38",
    "phone": "0742-26-2871",
    "lat": 34.679814,
    "lon": 135.830993,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 11,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "東市連絡所",
    "address": "奈良県奈良市古市町99-1",
    "phone": "0742-61-7043",
    "lat": 34.653195,
    "lon": 135.841676,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 12,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "大安寺連絡所",
    "address": "奈良県奈良市大安寺4-4-34",
    "phone": "0742-61-7045",
    "lat": 34.670954,
    "lon": 135.812379,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 13,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "辰市連絡所",
    "address": "奈良県奈良市西九条町2-2-44",
    "phone": "0742-61-7046",
    "lat": 34.657924,
    "lon": 135.807817,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 14,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "帯解連絡所",
    "address": "奈良県奈良市山町27-1",
    "phone": "0742-62-3473",
    "lat": 34.643747,
    "lon": 135.828719,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 15,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "精華連絡所",
    "address": "奈良県奈良市高樋町640-1",
    "phone": "0742-62-9200",
    "lat": 34.633288,
    "lon": 135.853798,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 16,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "済美地域ふれあい会館",
    "address": "奈良県奈良市南京終町201-12",
    "phone": "0742-24-5899",
    "lat": 34.670387,
    "lon": 135.828303,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 17,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "柳生地域ふれあい会館",
    "address": "奈良県奈良市丹生町847",
    "phone": "",
    "lat": 34.696546,
    "lon": 135.966642,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 18,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "とみの里地域ふれあい会館",
    "address": "奈良県奈良市中山町西2-1012-1",
    "phone": "0742-51-0178",
    "lat": 34.714375,
    "lon": 135.757795,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 19,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "右京地域ふれあい会館",
    "address": "奈良県奈良市右京3-18",
    "phone": "0742-71-8019",
    "lat": 34.719226,
    "lon": 135.786604,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 20,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "帯解地域ふれあい会館",
    "address": "奈良県奈良市田中町342-1",
    "phone": "",
    "lat": 34.63925,
    "lon": 135.831074,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 21,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "朱雀地域ふれあい会館",
    "address": "奈良県奈良市朱雀2-12",
    "phone": "0742-72-4063",
    "lat": 34.719913,
    "lon": 135.796098,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 22,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "東市地域ふれあい会館",
    "address": "奈良県奈良市古市町99-1",
    "phone": "0742-64-3005",
    "lat": 34.653195,
    "lon": 135.841676,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 23,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "左京地域ふれあい会館",
    "address": "奈良県奈良市左京5-4-1",
    "phone": "0742-72-4011",
    "lat": 34.717644,
    "lon": 135.80917,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 24,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "青和地域ふれあい会館",
    "address": "奈良県奈良市百楽園4-1-20-5",
    "phone": "0742-51-6726",
    "lat": 34.699355,
    "lon": 135.742294,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 25,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "佐保川地域ふれあい会館",
    "address": "奈良県奈良市法蓮町391-4",
    "phone": "0742-93-3226",
    "lat": 34.69067,
    "lon": 135.812125,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 26,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "辰市地域ふれあい会館",
    "address": "奈良県奈良市西九条町2-2-44",
    "phone": "",
    "lat": 34.657924,
    "lon": 135.807817,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 27,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "月瀬地域ふれあい会館",
    "address": "奈良県奈良市月ヶ瀬月瀬356-2",
    "phone": "",
    "lat": 34.703915,
    "lon": 136.022488,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 28,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "西大寺北地域ふれあい会館",
    "address": "奈良県奈良市西大寺東町1-1-15",
    "phone": "0742-33-2271",
    "lat": 34.696145,
    "lon": 135.783575,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 29,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "佐保台地域ふれあい会館",
    "address": "奈良県奈良市佐保台2-902-239",
    "phone": "0742-71-4384",
    "lat": 34.708608,
    "lon": 135.815468,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 30,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "都跡地域ふれあい会館",
    "address": "奈良県奈良市四条大路5-2-45",
    "phone": "0742-32-3235",
    "lat": 34.680486,
    "lon": 135.788956,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 31,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "大安寺西地域ふれあい会館",
    "address": "奈良県奈良市四条大路南町1-22",
    "phone": "",
    "lat": 34.677059,
    "lon": 135.80655,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 32,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "東里地域ふれあい会館",
    "address": "奈良県奈良市須川町776",
    "phone": "0742-95-0900",
    "lat": 34.716249,
    "lon": 135.910292,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 33,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "佐保地域ふれあい会館",
    "address": "奈良県奈良市法蓮町291-3",
    "phone": "0742-77-2687",
    "lat": 34.690209,
    "lon": 135.819917,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 34,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "伏見地域ふれあい会館",
    "address": "奈良県奈良市菅原東1-21‐21",
    "phone": "0742-51-1255",
    "lat": 34.68592,
    "lon": 135.78126,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 35,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "明治地域ふれあい会館",
    "address": "奈良県奈良市北永井町508‐2",
    "phone": "0742-61-7047",
    "lat": 34.655884,
    "lon": 135.826506,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 36,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "二名地域ふれあい会館",
    "address": "奈良県奈良市西登美ヶ丘5-3-9",
    "phone": "",
    "lat": 34.71322,
    "lon": 135.73817,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 37,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "帝塚山地域ふれあい会館",
    "address": "奈良県奈良市帝塚山南2-11-2",
    "phone": "",
    "lat": 34.67592,
    "lon": 135.73095,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 38,
    "poi_code": 802,
    "poi_type": "美術館",
    "name": "入江泰吉記念奈良市写真美術館",
    "address": "奈良県奈良市高畑町600-1",
    "phone": "0742-22-9811",
    "lat": 34.675588,
    "lon": 135.845439,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 39,
    "poi_code": 1016,
    "poi_type": "ホール",
    "name": "音声館",
    "address": "奈良県奈良市鳴川町32-1",
    "phone": "0742-27-7700",
    "lat": 34.676047,
    "lon": 135.828674,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 40,
    "poi_code": 803,
    "poi_type": "記念・資料館",
    "name": "名勝大乗院庭園文化館",
    "address": "奈良県奈良市高畑町1083-1",
    "phone": "0742-24-0808",
    "lat": 34.677722,
    "lon": 135.834473,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 41,
    "poi_code": 802,
    "poi_type": "美術館",
    "name": "杉岡華邨書道美術館",
    "address": "奈良県奈良市脇戸町3",
    "phone": "0742-24-4111",
    "lat": 34.67789,
    "lon": 135.8292,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 42,
    "poi_code": 1016,
    "poi_type": "ホール",
    "name": "ならまちセンター",
    "address": "奈良県奈良市東寺林町38",
    "phone": "0742-27-1151",
    "lat": 34.679814,
    "lon": 135.830993,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 43,
    "poi_code": 1016,
    "poi_type": "ホール",
    "name": "西部会館市民ホール",
    "address": "奈良県奈良市学園南3-1-5",
    "phone": "0742-51-2001",
    "lat": 34.696719,
    "lon": 135.75023,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 44,
    "poi_code": 1016,
    "poi_type": "ホール",
    "name": "なら100年会館",
    "address": "奈良県奈良市三条宮前町7-1",
    "phone": "0742-34-0100",
    "lat": 34.680291,
    "lon": 135.8165,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 45,
    "poi_code": 802,
    "poi_type": "美術館",
    "name": "奈良市美術館",
    "address": "奈良県奈良市二条大路南1-3-1",
    "phone": "0742-30-1510",
    "lat": 34.685235,
    "lon": 135.802094,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 46,
    "poi_code": 1016,
    "poi_type": "ホール",
    "name": "北部会館市民文化ホール",
    "address": "奈良県奈良市右京1-1-4",
    "phone": "0742-71-5747",
    "lat": 34.721911,
    "lon": 135.790983,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 47,
    "poi_code": 699,
    "poi_type": "その他歴史文化",
    "name": "入江泰吉旧居",
    "address": "奈良県奈良市水門町49-2",
    "phone": "0742-27-1689",
    "lat": 34.686955,
    "lon": 135.836622,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 48,
    "poi_code": 1102,
    "poi_type": "陸上競技場",
    "name": "鴻ノ池陸上競技場主競技場",
    "address": "奈良県奈良市法蓮佐保山4-5-1",
    "phone": "0742-22-0001",
    "lat": 34.697341,
    "lon": 135.828332,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 49,
    "poi_code": 1102,
    "poi_type": "陸上競技場",
    "name": "鴻ノ池陸上競技場補助競技場",
    "address": "奈良県奈良市法蓮佐保山4-5-1",
    "phone": "0742-22-0001",
    "lat": 34.699481,
    "lon": 135.830051,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 50,
    "poi_code": 1199,
    "poi_type": "その他スポーツ施設",
    "name": "鴻ノ池陸上競技場投てき練習場",
    "address": "奈良県奈良市法蓮佐保山4-5-1",
    "phone": "0742-22-0001",
    "lat": 34.700585,
    "lon": 135.830887,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 51,
    "poi_code": 1106,
    "poi_type": "多目的運動場",
    "name": "鴻ノ池陸上競技場多目的広場",
    "address": "奈良県奈良市法蓮佐保山4-5-1",
    "phone": "0742-22-0001",
    "lat": 34.700561,
    "lon": 135.832755,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 52,
    "poi_code": 1199,
    "poi_type": "その他スポーツ施設",
    "name": "鴻ノ池陸上競技場ウォーキングコース",
    "address": "奈良県奈良市法蓮佐保山4-5-1",
    "phone": "0742-22-0001",
    "lat": 34.697341,
    "lon": 135.828332,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 53,
    "poi_code": 1103,
    "poi_type": "野球場",
    "name": "鴻ノ池球場",
    "address": "奈良県奈良市法蓮佐保山4-3-1",
    "phone": "0742-26-2453",
    "lat": 34.697865,
    "lon": 135.826917,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 54,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "中央体育館",
    "address": "奈良県奈良市法蓮佐保山4-1-3",
    "phone": "0742-24-1501",
    "lat": 34.695178,
    "lon": 135.828047,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 55,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "中央第二体育館",
    "address": "奈良県奈良市法蓮佐保山4-6-1",
    "phone": "0742-24-1501",
    "lat": 34.6959,
    "lon": 135.828222,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 56,
    "poi_code": 1113,
    "poi_type": "武道場",
    "name": "中央武道場",
    "address": "奈良県奈良市法蓮佐保山4-1-2",
    "phone": "0742-26-1060",
    "lat": 34.694797,
    "lon": 135.827257,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 57,
    "poi_code": 1113,
    "poi_type": "武道場",
    "name": "中央第二武道場",
    "address": "奈良県奈良市法蓮佐保山4-6-3",
    "phone": "0742-27-6163",
    "lat": 34.696282,
    "lon": 135.828509,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 58,
    "poi_code": 1120,
    "poi_type": "弓道場",
    "name": "弓道場",
    "address": "奈良県奈良市法蓮佐保山4-6-2",
    "phone": "0742-27-6163",
    "lat": 34.695886,
    "lon": 135.828676,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 59,
    "poi_code": 1118,
    "poi_type": "相撲場",
    "name": "鴻ノ池相撲場",
    "address": "奈良県奈良市法蓮佐保山4-8-9",
    "phone": "0742-27-6163",
    "lat": 34.698815,
    "lon": 135.829345,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 60,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "西部生涯スポーツセンター体育館",
    "address": "奈良県奈良市中町4860",
    "phone": "0742-52-0100",
    "lat": 34.670277,
    "lon": 135.756314,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 61,
    "poi_code": 1116,
    "poi_type": "テニスコート",
    "name": "西部生涯スポーツセンターコート",
    "address": "奈良県奈良市丸山1-905",
    "phone": "0742-47-4118",
    "lat": 34.66646,
    "lon": 135.750912,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 62,
    "poi_code": 1104,
    "poi_type": "球技場",
    "name": "西部生涯スポーツセンター球技場",
    "address": "奈良県奈良市丸山1-905",
    "phone": "0742-47-4118",
    "lat": 34.667109,
    "lon": 135.751115,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 63,
    "poi_code": 1143,
    "poi_type": "ゲートボール・クロッケー場",
    "name": "西部生涯スポーツセンターゲートボール場",
    "address": "奈良県奈良市丸山1-905",
    "phone": "0742-47-4118",
    "lat": 34.668294,
    "lon": 135.751121,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 64,
    "poi_code": 1199,
    "poi_type": "その他スポーツ施設",
    "name": "西部生涯スポーツセンタークラブハウス",
    "address": "奈良県奈良市丸山1-905",
    "phone": "0742-47-4118",
    "lat": 34.667982,
    "lon": 135.751014,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 65,
    "poi_code": 1107,
    "poi_type": "プール",
    "name": "西部生涯スポーツセンター屋内温水プール",
    "address": "奈良県奈良市中町4860",
    "phone": "0742-51-1521",
    "lat": 34.670277,
    "lon": 135.756314,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 66,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "南部生涯スポーツセンター体育館",
    "address": "奈良県奈良市杏町467-1",
    "phone": "0742-61-7029",
    "lat": 34.662352,
    "lon": 135.802733,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 67,
    "poi_code": 1116,
    "poi_type": "テニスコート",
    "name": "南部生涯スポーツセンターコート",
    "address": "奈良県奈良市杏町467-1",
    "phone": "0742-61-7029",
    "lat": 34.662055,
    "lon": 135.802833,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 68,
    "poi_code": 1104,
    "poi_type": "球技場",
    "name": "南部生涯スポーツセンター球技場",
    "address": "奈良県奈良市杏町467-1",
    "phone": "0742-61-7029",
    "lat": 34.662135,
    "lon": 135.8035,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 69,
    "poi_code": 1106,
    "poi_type": "多目的運動場",
    "name": "南部生涯スポーツセンター多目的コート",
    "address": "奈良県奈良市杏町467-1",
    "phone": "0742-61-7029",
    "lat": 34.662263,
    "lon": 135.802147,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 70,
    "poi_code": 1116,
    "poi_type": "テニスコート",
    "name": "平城第一コート",
    "address": "奈良県奈良市左京2-1",
    "phone": "0742-71-5662",
    "lat": 34.711214,
    "lon": 135.803941,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 71,
    "poi_code": 1104,
    "poi_type": "球技場",
    "name": "平城第一球技場",
    "address": "奈良県奈良市左京2-1",
    "phone": "0742-71-5662",
    "lat": 34.710485,
    "lon": 135.804235,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 72,
    "poi_code": 1116,
    "poi_type": "テニスコート",
    "name": "平城第二コート",
    "address": "奈良県奈良市朱雀2-12",
    "phone": "0742-71-5662",
    "lat": 34.718082,
    "lon": 135.795952,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 73,
    "poi_code": 1104,
    "poi_type": "球技場",
    "name": "平城第二球技場",
    "address": "奈良県奈良市朱雀2-12",
    "phone": "0742-71-5662",
    "lat": 34.71895,
    "lon": 135.795785,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 74,
    "poi_code": 1104,
    "poi_type": "球技場",
    "name": "登美ヶ丘球技場",
    "address": "奈良県奈良市北登美ケ丘1-1761-2",
    "phone": "0742-71-5662",
    "lat": 34.722982,
    "lon": 135.75416,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 75,
    "poi_code": 1104,
    "poi_type": "球技場",
    "name": "奈良阪球技場",
    "address": "奈良県奈良市奈良阪町1367",
    "phone": "0742-26-2996",
    "lat": 34.704823,
    "lon": 135.821421,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 76,
    "poi_code": 1103,
    "poi_type": "野球場",
    "name": "緑ヶ丘球場",
    "address": "奈良県奈良市奈良阪町2851",
    "phone": "0742-26-2996",
    "lat": 34.707376,
    "lon": 135.848703,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 77,
    "poi_code": 1116,
    "poi_type": "テニスコート",
    "name": "黒谷コート",
    "address": "奈良県奈良市中町2877",
    "phone": "0742-52-0100",
    "lat": 34.673879,
    "lon": 135.731415,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 78,
    "poi_code": 1104,
    "poi_type": "球技場",
    "name": "黒谷球技場",
    "address": "奈良県奈良市中町2877",
    "phone": "0742-52-0100",
    "lat": 34.675123,
    "lon": 135.733017,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 79,
    "poi_code": 1116,
    "poi_type": "テニスコート",
    "name": "柏木コート",
    "address": "奈良県奈良市柏木町255-1",
    "phone": "0742-34-3585",
    "lat": 34.666929,
    "lon": 135.796949,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 80,
    "poi_code": 1104,
    "poi_type": "球技場",
    "name": "柏木球技場",
    "address": "奈良県奈良市柏木町255-1",
    "phone": "0742-34-3585",
    "lat": 34.666844,
    "lon": 135.79613,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 81,
    "poi_code": 1116,
    "poi_type": "テニスコート",
    "name": "青山コート",
    "address": "奈良県奈良市青山3-2",
    "phone": "0742-26-2996",
    "lat": 34.70655,
    "lon": 135.834572,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 82,
    "poi_code": 1116,
    "poi_type": "テニスコート",
    "name": "佐保山コート",
    "address": "奈良県奈良市佐保台2-902-374",
    "phone": "0742-26-2996",
    "lat": 34.706725,
    "lon": 135.81736,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 83,
    "poi_code": 1116,
    "poi_type": "テニスコート",
    "name": "鴻ノ池コート",
    "address": "奈良県奈良市法蓮佐保山4-9-1",
    "phone": "0742-27-4880",
    "lat": 34.701389,
    "lon": 135.829916,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 84,
    "poi_code": 1107,
    "poi_type": "プール",
    "name": "青山プール",
    "address": "奈良県奈良市青山3-2",
    "phone": "0742-26-2996",
    "lat": 34.706728,
    "lon": 135.833771,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 85,
    "poi_code": 1107,
    "poi_type": "プール",
    "name": "ならやま屋内温水プール",
    "address": "奈良県奈良市左京5-3-1",
    "phone": "",
    "lat": 34.715816,
    "lon": 135.809836,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 86,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "ならやまコミュニティスポーツ会館",
    "address": "奈良県奈良市朱雀2-12",
    "phone": "080-6058-6489",
    "lat": 34.719323,
    "lon": 135.795884,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 87,
    "poi_code": 1106,
    "poi_type": "多目的運動場",
    "name": "狭川コミュニティスポーツ広場",
    "address": "奈良県奈良市下狭川町2882-2",
    "phone": "090-8149-0991",
    "lat": 34.734742,
    "lon": 135.916682,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 88,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "高の原コミュニティスポーツ会館",
    "address": "奈良県奈良市神功3-6",
    "phone": "090-9205-3023",
    "lat": 34.718914,
    "lon": 135.778247,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 89,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "七条コミュニティスポーツ会館",
    "address": "奈良県奈良市七条1-2-1",
    "phone": "070-7665-4229",
    "lat": 34.66447,
    "lon": 135.783454,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 90,
    "poi_code": 1106,
    "poi_type": "多目的運動場",
    "name": "田原コミュニティスポーツ広場",
    "address": "奈良県奈良市横田町203-1",
    "phone": "090-1282-1259",
    "lat": 34.660719,
    "lon": 135.91072,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 91,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "東市コミュニティスポーツ会館",
    "address": "奈良県奈良市古市町265-1",
    "phone": "090-9205-3009",
    "lat": 34.655248,
    "lon": 135.840496,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 92,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "南紀寺コミュニティスポーツ会館",
    "address": "奈良県奈良市南紀寺町5-54-1",
    "phone": "090-1282-1409",
    "lat": 34.666075,
    "lon": 135.833361,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 93,
    "poi_code": 1106,
    "poi_type": "多目的運動場",
    "name": "邑地コミュニティスポーツ広場",
    "address": "奈良県奈良市邑地町469",
    "phone": "090-8149-0997",
    "lat": 34.715743,
    "lon": 135.979536,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 94,
    "poi_code": 1106,
    "poi_type": "多目的運動場",
    "name": "八条コミュニティスポーツ広場",
    "address": "奈良県奈良市八条1-814-4",
    "phone": "090-9205-3019",
    "lat": 34.664219,
    "lon": 135.80391,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 95,
    "poi_code": 1199,
    "poi_type": "その他スポーツ施設",
    "name": "鴻ノ池スケートボードパーク",
    "address": "奈良県奈良市法蓮佐保山4-8-10",
    "phone": "0742-22-0001",
    "lat": 34.69903,
    "lon": 135.82875,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 96,
    "poi_code": 1199,
    "poi_type": "その他スポーツ施設",
    "name": "鴻ノ池ランニングステーション",
    "address": "奈良県奈良市法蓮佐保山4-4-6",
    "phone": "0742-22-0001",
    "lat": 34.69903,
    "lon": 135.82815,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 97,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "右京コミュニティスポーツ会館",
    "address": "奈良県奈良市右京4-11-1",
    "phone": "070-7665-4228",
    "lat": 34.72126,
    "lon": 135.78591,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 98,
    "poi_code": 1399,
    "poi_type": "その他行政サービス施設",
    "name": "北人権文化センター",
    "address": "奈良県奈良市川上町418-1",
    "phone": "0742-22-7776",
    "lat": 34.696206,
    "lon": 135.837072,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 99,
    "poi_code": 1399,
    "poi_type": "その他行政サービス施設",
    "name": "中人権・コミュニティセンター",
    "address": "奈良県奈良市畑中町4-4",
    "phone": "0742-27-3019",
    "lat": 34.686931,
    "lon": 135.820167,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 100,
    "poi_code": 1399,
    "poi_type": "その他行政サービス施設",
    "name": "東人権文化センター",
    "address": "奈良県奈良市古市町1226",
    "phone": "0742-61-2236",
    "lat": 34.663317,
    "lon": 135.834755,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 101,
    "poi_code": 1399,
    "poi_type": "その他行政サービス施設",
    "name": "南人権文化センター",
    "address": "奈良県奈良市杏町401-1",
    "phone": "0742-61-2029",
    "lat": 34.661353,
    "lon": 135.800547,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 102,
    "poi_code": 1399,
    "poi_type": "その他行政サービス施設",
    "name": "男女共同参画センター",
    "address": "奈良県奈良市杉ヶ町23",
    "phone": "0742-23-3111",
    "lat": 34.677427,
    "lon": 135.821103,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 103,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "西部出張所",
    "address": "奈良県奈良市学園南3-1-5",
    "phone": "0742-44-1005",
    "lat": 34.696719,
    "lon": 135.75023,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 104,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "月ヶ瀬行政センター",
    "address": "奈良県奈良市月ヶ瀬尾山2845",
    "phone": "0743-92-0131",
    "lat": 34.709494,
    "lon": 136.044084,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 105,
    "poi_code": 901,
    "poi_type": "温泉",
    "name": "梅の郷月ヶ瀬温泉",
    "address": "奈良県奈良市月ヶ瀬尾山2681",
    "phone": "0743-92-0388",
    "lat": 34.714169,
    "lon": 136.047192,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 106,
    "poi_code": 803,
    "poi_type": "記念・資料館",
    "name": "月ヶ瀬梅の資料館",
    "address": "奈良県奈良市月ヶ瀬長引21-8",
    "phone": "0743-92-0300",
    "lat": 34.706964,
    "lon": 136.031454,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 107,
    "poi_code": 2614,
    "poi_type": "直売所",
    "name": "月ヶ瀬温泉ふれあい市場",
    "address": "奈良県奈良市月ヶ瀬尾山2681",
    "phone": "0743-92-0801",
    "lat": 34.714533,
    "lon": 136.047038,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 108,
    "poi_code": 2614,
    "poi_type": "直売所",
    "name": "湖畔の里\"つきがせ\"",
    "address": "奈良県奈良市月ヶ瀬\n桃香野4267-5",
    "phone": "0743-92-\n0066",
    "lat": 34.706749,
    "lon": 136.015779,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 109,
    "poi_code": 1010,
    "poi_type": "体験施設",
    "name": "ロマントピア月ヶ瀬",
    "address": "奈良県奈良市月ヶ瀬長引410-1",
    "phone": "0743-92-0810",
    "lat": 34.711392,
    "lon": 136.035639,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 110,
    "poi_code": 1306,
    "poi_type": "産業支援施設",
    "name": "月ヶ瀬農畜産物処理加工施設",
    "address": "奈良県奈良市月ヶ瀬尾山2763−14",
    "phone": "0743-92-0230",
    "lat": 34.710908,
    "lon": 136.046332,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 111,
    "poi_code": 1104,
    "poi_type": "球技場",
    "name": "月ヶ瀬健民運動場",
    "address": "奈良県奈良市月ヶ瀬尾山2778-1",
    "phone": "0743-92-0131",
    "lat": 34.710957,
    "lon": 136.043209,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 112,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "月ヶ瀬体育館",
    "address": "奈良県奈良市月ヶ瀬尾山2509-1",
    "phone": "0743-92-0131",
    "lat": 34.711569,
    "lon": 136.043204,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 113,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "都祁行政センター",
    "address": "奈良県奈良市都祁白石町1026-1",
    "phone": "0743-82-0201",
    "lat": 34.60545,
    "lon": 135.957291,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 114,
    "poi_code": 1305,
    "poi_type": "市民活動施設",
    "name": "都祁交流センター",
    "address": "奈良県奈良市都祁白石町1133",
    "phone": "0743-82-2112",
    "lat": 34.604464,
    "lon": 135.956923,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 115,
    "poi_code": 1110,
    "poi_type": "体育館",
    "name": "都祁体育館",
    "address": "奈良県奈良市都祁白石町1161",
    "phone": "0743-82-2112",
    "lat": 34.605241,
    "lon": 135.955949,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 116,
    "poi_code": 1306,
    "poi_type": "産業支援施設",
    "name": "都祁農畜産物処理加工施設",
    "address": "奈良県奈良市針ヶ別所町1025",
    "phone": "0743-84-0274",
    "lat": 34.623672,
    "lon": 135.963442,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 117,
    "poi_code": 1306,
    "poi_type": "産業支援施設",
    "name": "都祁農林水産物処理加工施設",
    "address": "奈良県奈良市針ヶ別所町1025",
    "phone": "0743-84-0274",
    "lat": 34.623624,
    "lon": 135.96309,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 118,
    "poi_code": 1116,
    "poi_type": "テニスコート",
    "name": "都祁生涯スポーツセンターコート",
    "address": "奈良県奈良市都祁馬場町846-5",
    "phone": "0743-84-2004",
    "lat": 34.627889,
    "lon": 135.952532,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 119,
    "poi_code": 1104,
    "poi_type": "球技場",
    "name": "都祁生涯スポーツセンター球技場",
    "address": "奈良県奈良市都祁馬場町846-5",
    "phone": "0743-84-2004",
    "lat": 34.628591,
    "lon": 135.953209,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 120,
    "poi_code": 1106,
    "poi_type": "多目的運動場",
    "name": "都祁生涯スポーツセンター多目的コート",
    "address": "奈良県奈良市都祁馬場町846-5",
    "phone": "0743-84-2004",
    "lat": 34.628224,
    "lon": 135.954133,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 121,
    "poi_code": 1199,
    "poi_type": "その他スポーツ施設",
    "name": "都祁生涯スポーツセンタークラブハウス",
    "address": "奈良県奈良市都祁馬場町846-5",
    "phone": "0743-84-2004",
    "lat": 34.62767,
    "lon": 135.95312,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 122,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "東部出張所",
    "address": "奈良県奈良市大柳生町4735",
    "phone": "0742-93-0001",
    "lat": 34.716656,
    "lon": 135.921825,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 123,
    "poi_code": 1304,
    "poi_type": "役場支所及び出張所",
    "name": "北部出張所",
    "address": "奈良県奈良市右京1-1-4",
    "phone": "0742-71-1017",
    "lat": 34.721911,
    "lon": 135.790983,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 124,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "若草地域包括支援センター",
    "address": "奈良県奈良市船橋町2番地",
    "phone": "0742-25-2345",
    "lat": 34.68722,
    "lon": 135.8217,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 125,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "三笠地域包括支援センター",
    "address": "奈良県奈良市大宮町2-3-10",
    "phone": "0742-33-6622",
    "lat": 34.682129,
    "lon": 135.814428,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 126,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "春日・飛鳥地域包括支援センター",
    "address": "奈良県奈良市西木辻町110-4",
    "phone": "0742-20-2516",
    "lat": 34.673522,
    "lon": 135.824689,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 127,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "都南地域包括支援センター",
    "address": "奈良県奈良市古市町1327-6",
    "phone": "0742-50-2288",
    "lat": 34.660486,
    "lon": 135.833033,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": true,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 128,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "北部地域包括支援センター",
    "address": "奈良県奈良市右京1-3-4",
    "phone": "0742-70-6777",
    "lat": 34.722666,
    "lon": 135.789273,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 129,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "京西・都跡地域包括支援センター",
    "address": "奈良県奈良市六条2-2-10",
    "phone": "0742-52-3010",
    "lat": 34.668319,
    "lon": 135.776893,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 130,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "伏見地域包括支援センター",
    "address": "奈良県奈良市西大寺新町1-1-1",
    "phone": "0742-36-1671",
    "lat": 34.696503,
    "lon": 135.781414,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 131,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "二名地域包括支援センター",
    "address": "奈良県奈良市鶴舞東町1-20-2",
    "phone": "0742-43-1280",
    "lat": 34.702606,
    "lon": 135.75121,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 132,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "登美ヶ丘地域包括支援センター",
    "address": "奈良県奈良市中登美ケ丘1-1994-3",
    "phone": "0742-51-0012",
    "lat": 34.717384,
    "lon": 135.74904,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 133,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "富雄東地域包括支援センター",
    "address": "奈良県奈良市大倭町2-22",
    "phone": "0742-52-2051",
    "lat": 34.681273,
    "lon": 135.757875,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 134,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "東部地域包括支援センター",
    "address": "奈良県奈良市茗荷町774-1",
    "phone": "0742-81-5720",
    "lat": 34.655374,
    "lon": 135.901353,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 135,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "平城地域包括支援センター",
    "address": "奈良県奈良市押熊町397-1",
    "phone": "0742-53-7757",
    "lat": 34.715408,
    "lon": 135.772246,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 136,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "富雄西地域包括支援センター",
    "address": "奈良県奈良市鳥見町4-3-1",
    "phone": "0742-44-6541",
    "lat": 34.694307,
    "lon": 135.722403,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 137,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "総合福祉センター",
    "address": "奈良市左京5-3-1",
    "phone": "0742-71-0770",
    "lat": 34.715446,
    "lon": 135.809857,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 138,
    "poi_code": 1603,
    "poi_type": "歯科診療所",
    "name": "障害者歯科診療所",
    "address": "奈良市柏木町519-28",
    "phone": "0742‐33‐0008",
    "lat": 34.672804,
    "lon": 135.79985,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 139,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "月ヶ瀬福祉センター",
    "address": "奈良県奈良市月ヶ瀬尾山1124",
    "phone": "0743-92-0204",
    "lat": 34.714821,
    "lon": 136.048147,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 140,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "都祁福祉センター",
    "address": "奈良県奈良市藺生町1922-8",
    "phone": "0743-82-2624",
    "lat": 34.591573,
    "lon": 135.94232,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 141,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "東福祉センター",
    "address": "奈良県奈良市法蓮町1702-1",
    "phone": "0742-24-3151",
    "lat": 34.694818,
    "lon": 135.825343,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 142,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "西福祉センター",
    "address": "奈良県奈良市百楽園1-9-13",
    "phone": "0742-41-3151",
    "lat": 34.698481,
    "lon": 135.7439,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 143,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "南福祉センター",
    "address": "奈良県奈良市南永井町45-1",
    "phone": "0742-62-3730",
    "lat": 34.647988,
    "lon": 135.825898,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 144,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "北福祉センター",
    "address": "奈良県奈良市右京1-1-4",
    "phone": "0742-71-3501",
    "lat": 34.721911,
    "lon": 135.790983,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 145,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "東里老人憩の家",
    "address": "奈良県奈良市須川町776",
    "phone": "",
    "lat": 34.716405,
    "lon": 135.910322,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 146,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "鳥見老人憩の家",
    "address": "奈良県奈良市鳥見町4-4",
    "phone": "",
    "lat": 34.696528,
    "lon": 135.72242,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 147,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "登美ヶ丘老人憩の家",
    "address": "奈良県奈良市中登美ヶ丘1-1994-3",
    "phone": "",
    "lat": 34.71672,
    "lon": 135.749473,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 148,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "横井老人憩の家",
    "address": "奈良県奈良市横井1-620-1",
    "phone": "",
    "lat": 34.653293,
    "lon": 135.832223,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 149,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "杏南老人憩の家",
    "address": "奈良県奈良市杏町424-6",
    "phone": "",
    "lat": 34.659523,
    "lon": 135.800777,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 150,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "杏中老人憩の家",
    "address": "奈良県奈良市杏町387-12",
    "phone": "",
    "lat": 34.662047,
    "lon": 135.800516,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 151,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "八条老人憩の家",
    "address": "奈良県奈良市八条1-823",
    "phone": "",
    "lat": 34.663788,
    "lon": 135.803647,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 152,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "東之阪老人憩の家",
    "address": "奈良県奈良市東之阪町5-60",
    "phone": "",
    "lat": 34.695372,
    "lon": 135.83574,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 153,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "田原老人憩の家",
    "address": "奈良県奈良市横田町191-1",
    "phone": "",
    "lat": 34.661842,
    "lon": 135.910973,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 154,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "狭川老人憩の家",
    "address": "奈良県奈良市西狭川町1088-1",
    "phone": "",
    "lat": 34.73068,
    "lon": 135.910956,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 155,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "古市老人憩の家",
    "address": "奈良県奈良市古市町1482-2",
    "phone": "",
    "lat": 34.664419,
    "lon": 135.835002,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 156,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "大柳生老人憩の家",
    "address": "奈良県奈良市大柳生町1990",
    "phone": "",
    "lat": 34.704438,
    "lon": 135.929619,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 157,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "柳生老人憩の家",
    "address": "奈良県奈良市興ヶ原町670-1",
    "phone": "",
    "lat": 34.736254,
    "lon": 135.97238,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 158,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "梅園老人憩の家",
    "address": "奈良県奈良市紀寺町568-7",
    "phone": "",
    "lat": 34.671681,
    "lon": 135.833608,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 159,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "畑中老人憩の家",
    "address": "奈良県奈良市畑中町4-4",
    "phone": "",
    "lat": 34.686931,
    "lon": 135.820167,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 160,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "石打老人憩の家",
    "address": "奈良県奈良市月ヶ瀬石打1171-1",
    "phone": "",
    "lat": 34.722548,
    "lon": 136.062517,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 161,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "桃香野老人憩の家",
    "address": "奈良県奈良市月ヶ瀬桃香野1197",
    "phone": "",
    "lat": 34.706267,
    "lon": 136.002462,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 162,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "尾山老人憩の家",
    "address": "奈良県奈良市月ヶ瀬尾山348-3",
    "phone": "",
    "lat": 34.713321,
    "lon": 136.043287,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 163,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "田原老人軽作業場",
    "address": "奈良県奈良市茗荷町1171",
    "phone": "",
    "lat": 34.655793,
    "lon": 135.90519,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 164,
    "poi_code": 1501,
    "poi_type": "幼稚園",
    "name": "済美幼稚園",
    "address": "奈良県奈良市西木辻町28",
    "phone": "0742-22-7077",
    "lat": 34.675473,
    "lon": 135.822399,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 165,
    "poi_code": 1501,
    "poi_type": "幼稚園",
    "name": "佐保幼稚園",
    "address": "奈良県奈良市法蓮町757-8",
    "phone": "0742-22-7078",
    "lat": 34.692999,
    "lon": 135.821231,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 166,
    "poi_code": 1501,
    "poi_type": "幼稚園",
    "name": "大安寺幼稚園",
    "address": "奈良県奈良市大安寺1-7-1",
    "phone": "0742-61-7032",
    "lat": 34.669081,
    "lon": 135.815594,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 167,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "平城こども園",
    "address": "奈良県奈良市秋篠町1540-1",
    "phone": "0742-45-4758",
    "lat": 34.711409,
    "lon": 135.779079,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 168,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "伏見こども園",
    "address": "奈良県奈良市菅原町367",
    "phone": "0742-45-4745",
    "lat": 34.687671,
    "lon": 135.775681,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 169,
    "poi_code": 1501,
    "poi_type": "幼稚園",
    "name": "富雄北幼稚園",
    "address": "奈良県奈良市三松1-5-6",
    "phone": "0742-45-0515",
    "lat": 34.698757,
    "lon": 135.731639,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 170,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "東登美ヶ丘こども園",
    "address": "奈良県奈良市東登美ヶ丘4-21-26",
    "phone": "0742-43-3151",
    "lat": 34.719853,
    "lon": 135.756006,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 171,
    "poi_code": 1501,
    "poi_type": "幼稚園",
    "name": "六条幼稚園",
    "address": "奈良県奈良市六条2-14-2",
    "phone": "0742-43-5698",
    "lat": 34.670734,
    "lon": 135.772251,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 172,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "神功こども園（幼児棟）",
    "address": "奈良県奈良市神功4-13-1",
    "phone": "0742-71-4647",
    "lat": 34.719704,
    "lon": 135.777126,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 173,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "朱雀こども園（幼児棟）",
    "address": "奈良県奈良市朱雀6-10-2",
    "phone": "0742-71-5221",
    "lat": 34.717174,
    "lon": 135.797772,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 174,
    "poi_code": 1501,
    "poi_type": "幼稚園",
    "name": "伏見南幼稚園",
    "address": "奈良県奈良市宝来5-5-3",
    "phone": "0742-49-0185",
    "lat": 34.681325,
    "lon": 135.769863,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 175,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "都祁こども園",
    "address": "奈良県奈良市都祁白石町1026-6",
    "phone": "0743-82-0100",
    "lat": 34.606316,
    "lon": 135.95749,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 176,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "月ヶ瀬こども園",
    "address": "奈良県奈良市月ヶ瀬尾山2790",
    "phone": "0743-92-0310",
    "lat": 34.711331,
    "lon": 136.044839,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 177,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "帯解こども園",
    "address": "奈良県奈良市柴屋町20",
    "phone": "0742-61-0554",
    "lat": 34.644662,
    "lon": 135.83003,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 178,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "柳生こども園",
    "address": "奈良県奈良市柳生下町156",
    "phone": "0742-94-0303",
    "lat": 34.737362,
    "lon": 135.951761,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 179,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "都跡こども園",
    "address": "奈良県奈良市四条大路5-2-55",
    "phone": "0742-33-5661",
    "lat": 34.680369,
    "lon": 135.789523,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 180,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "富雄南こども園",
    "address": "奈良県奈良市中町4174",
    "phone": "0742-43-1606",
    "lat": 34.674513,
    "lon": 135.748376,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 181,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "青和こども園",
    "address": "奈良県奈良市百楽園4-1-1",
    "phone": "0742-44-9596",
    "lat": 34.700432,
    "lon": 135.743932,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 182,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "左京こども園",
    "address": "奈良県奈良市左京3-1-2",
    "phone": "0742-72-0581",
    "lat": 34.713953,
    "lon": 135.805029,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 183,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "若草こども園",
    "address": "奈良県奈良市川上町493-1",
    "phone": "0742-22-7019",
    "lat": 34.696811,
    "lon": 135.834306,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 184,
    "poi_code": 1402,
    "poi_type": "保育園",
    "name": "都南保育園",
    "address": "奈良県奈良市横井1-107-1",
    "phone": "0742-61-2870",
    "lat": 34.653963,
    "lon": 135.830946,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 185,
    "poi_code": 1402,
    "poi_type": "保育園",
    "name": "伏見保育園",
    "address": "奈良県奈良市宝来3-9-35",
    "phone": "0742-44-2666",
    "lat": 34.682719,
    "lon": 135.775527,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 186,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "学園南こども園",
    "address": "奈良県奈良市学園南3-15-28",
    "phone": "0742-46-1176",
    "lat": 34.693607,
    "lon": 135.749513,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 187,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "高円こども園",
    "address": "奈良県奈良市古市町1249",
    "phone": "0742-61-0139",
    "lat": 34.662704,
    "lon": 135.835026,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 188,
    "poi_code": 1402,
    "poi_type": "認定こども園",
    "name": "朱雀こども園（乳児棟）",
    "address": "奈良県奈良市朱雀6-9",
    "phone": "0742-71-5185",
    "lat": 34.716102,
    "lon": 135.796732,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 189,
    "poi_code": 1402,
    "poi_type": "保育園",
    "name": "京西保育園",
    "address": "奈良県奈良市六条西1-3-43-1",
    "phone": "0742-43-9023",
    "lat": 34.6716,
    "lon": 135.770904,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 190,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "神功こども園（乳児棟）",
    "address": "奈良県奈良市神功4-25-3",
    "phone": "0742-71-9365",
    "lat": 34.720658,
    "lon": 135.777808,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 191,
    "poi_code": 1405,
    "poi_type": "認定こども園",
    "name": "辰市こども園",
    "address": "奈良県奈良市杏町414-4",
    "phone": "0742-61-7020",
    "lat": 34.659999,
    "lon": 135.800743,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 192,
    "poi_code": 1403,
    "poi_type": "児童館（児童センター）",
    "name": "古市児童館",
    "address": "奈良県奈良市古市町1263",
    "phone": "0742-62-7300",
    "lat": 34.661505,
    "lon": 135.83478,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 193,
    "poi_code": 1403,
    "poi_type": "児童館（児童センター）",
    "name": "横井児童館",
    "address": "奈良県奈良市横井5-337-2",
    "phone": "0742-62-0307",
    "lat": 34.650711,
    "lon": 135.830133,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 194,
    "poi_code": 1403,
    "poi_type": "児童館（児童センター）",
    "name": "東之阪児童館",
    "address": "奈良県奈良市川上町461-1",
    "phone": "0742-27-8263",
    "lat": 34.696876,
    "lon": 135.83603,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 195,
    "poi_code": 1403,
    "poi_type": "児童館（児童センター）",
    "name": "大宮児童館",
    "address": "奈良県奈良市西之阪町5-1",
    "phone": "0742-27-2220",
    "lat": 34.682617,
    "lon": 135.822574,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 196,
    "poi_code": 1406,
    "poi_type": "児童相談所",
    "name": "子どもセンター",
    "address": "奈良県奈良市柏木町263-2",
    "phone": "0742-93-6595",
    "lat": 34.66576,
    "lon": 135.79627,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 197,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "子どもセンター発達支援親子教室",
    "address": "奈良県奈良市柏木町263-2",
    "phone": "0742-33-0850",
    "lat": 34.665444,
    "lon": 135.79674,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 198,
    "poi_code": 1601,
    "poi_type": "病院",
    "name": "市立奈良病院",
    "address": "奈良県奈良市東紀寺町1-50-1",
    "phone": "0742-24-1251",
    "lat": 34.671954,
    "lon": 135.835311,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 199,
    "poi_code": 1602,
    "poi_type": "診療所",
    "name": "田原診療所",
    "address": "奈良県奈良市横田町336-1",
    "phone": "0742-81-0027",
    "lat": 34.658256,
    "lon": 135.910348,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 200,
    "poi_code": 1602,
    "poi_type": "診療所",
    "name": "柳生診療所",
    "address": "奈良県奈良市邑地町2786",
    "phone": "0742-94-0210",
    "lat": 34.719574,
    "lon": 135.979065,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 201,
    "poi_code": 1602,
    "poi_type": "診療所",
    "name": "月ヶ瀬診療所",
    "address": "奈良県奈良市月ヶ瀬尾山2790",
    "phone": "0743-92-0030",
    "lat": 34.711068,
    "lon": 136.044644,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 202,
    "poi_code": 1602,
    "poi_type": "診療所",
    "name": "興東診療所",
    "address": "奈良県奈良市大柳生町4254",
    "phone": "0742-93-0130",
    "lat": 34.716053,
    "lon": 135.92278,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 203,
    "poi_code": 1602,
    "poi_type": "診療所",
    "name": "都祁診療所",
    "address": "奈良県奈良市都祁白石町1084",
    "phone": "0743-82-1411",
    "lat": 34.60388,
    "lon": 135.957412,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 204,
    "poi_code": 1602,
    "poi_type": "診療所",
    "name": "休日夜間応急診療所",
    "address": "奈良県奈良市柏木町519-28",
    "phone": "0742-34-1228",
    "lat": 34.672804,
    "lon": 135.800144,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 205,
    "poi_code": 1603,
    "poi_type": "歯科診療所",
    "name": "休日歯科応急診療所",
    "address": "奈良県奈良市柏木町519-28",
    "phone": "0742-33-4182",
    "lat": 34.672804,
    "lon": 135.799751,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 206,
    "poi_code": 1510,
    "poi_type": "専修学校・各種学校",
    "name": "看護専門学校",
    "address": "奈良県奈良市紀寺町371-2",
    "phone": "0742-81-3301",
    "lat": 34.669231,
    "lon": 135.832682,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 207,
    "poi_code": 1613,
    "poi_type": "その他の医療施設",
    "name": "総合医療検査センター",
    "address": "奈良県奈良市柏木町519-5",
    "phone": "0742-33-7876",
    "lat": 34.673328,
    "lon": 135.799405,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 208,
    "poi_code": 1613,
    "poi_type": "その他の医療施設",
    "name": "都祁保健センター",
    "address": "奈良県奈良市都祁白石町1084",
    "phone": "0743-82-0341",
    "lat": 34.60388,
    "lon": 135.957412,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": true,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 209,
    "poi_code": 2008,
    "poi_type": "その他処理施設",
    "name": "衛生浄化センター",
    "address": "奈良県奈良市奈良市大安寺西2-281",
    "phone": "0742-33-2942",
    "lat": 34.671126,
    "lon": 135.804586,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 210,
    "poi_code": 2006,
    "poi_type": "ごみ焼却場",
    "name": "環境清美センター",
    "address": "奈良県奈良市左京5-2",
    "phone": "0742-71-3000",
    "lat": 34.713855,
    "lon": 135.809562,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 211,
    "poi_code": 2008,
    "poi_type": "その他処理施設",
    "name": "土地改良清美事務所",
    "address": "奈良県奈良市米谷町863",
    "phone": "0742-62-2976",
    "lat": 34.618547,
    "lon": 135.878571,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 212,
    "poi_code": 2008,
    "poi_type": "その他処理施設",
    "name": "奈良阪処分地管理事務所",
    "address": "奈良県奈良市奈良阪町1346",
    "phone": "0742-23-4914",
    "lat": 34.704457,
    "lon": 135.821907,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 213,
    "poi_code": 1001,
    "poi_type": "観光案内所",
    "name": "観光センター",
    "address": "奈良県奈良市奈良市上三条町23-4",
    "phone": "0742-22-3900",
    "lat": 34.682281,
    "lon": 135.825831,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 214,
    "poi_code": 1001,
    "poi_type": "観光案内所",
    "name": "総合観光案内所",
    "address": "奈良県奈良市三条本町1082",
    "phone": "0742-27-2223",
    "lat": 34.68174,
    "lon": 135.819816,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 215,
    "poi_code": 1001,
    "poi_type": "観光案内所",
    "name": "近鉄奈良駅総合観光案内所",
    "address": "奈良県奈良市東向中町29",
    "phone": "0742-24-4858",
    "lat": 34.684102,
    "lon": 135.828092,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 216,
    "poi_code": 623,
    "poi_type": "武家屋敷",
    "name": "旧柳生藩家老屋敷",
    "address": "奈良県奈良市柳生町155-1",
    "phone": "0742-94-0002",
    "lat": 34.732429,
    "lon": 135.950274,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 217,
    "poi_code": 699,
    "poi_type": "その他歴史文化",
    "name": "旧柳生藩陣屋跡",
    "address": "奈良県奈良市柳生町337",
    "phone": "0742-94-0002",
    "lat": 34.728813,
    "lon": 135.952897,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 218,
    "poi_code": 3710,
    "poi_type": "道の駅",
    "name": "針テラス情報館",
    "address": "奈良県奈良市針町345",
    "phone": "0743-82-5633",
    "lat": 34.610431,
    "lon": 135.96322,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 219,
    "poi_code": 624,
    "poi_type": "町屋/町家",
    "name": "ならまち格子の家",
    "address": "奈良県奈良市元興寺町44",
    "phone": "0742-23-4820",
    "lat": 34.675017,
    "lon": 135.830724,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 220,
    "poi_code": 1010,
    "poi_type": "体験施設",
    "name": "奈良町からくりおもちゃ館",
    "address": "奈良県奈良市陰陽町7",
    "phone": "0742-26-5656",
    "lat": 34.677333,
    "lon": 135.828119,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 221,
    "poi_code": 624,
    "poi_type": "町屋/町家",
    "name": "奈良町にぎわいの家",
    "address": "奈良県奈良市中新屋町5",
    "phone": "0742-20-1917",
    "lat": 34.677247,
    "lon": 135.830138,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 222,
    "poi_code": 1001,
    "poi_type": "観光案内所",
    "name": "奈良町南観光案内所『鹿の舟』",
    "address": "奈良県奈良市井上町11",
    "phone": "0742-94-3500",
    "lat": 34.674053,
    "lon": 135.830732,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 223,
    "poi_code": 1001,
    "poi_type": "観光案内所",
    "name": "きたまち鍋屋観光案内所",
    "address": "奈良県奈良市半田横町37-2",
    "phone": "0742-23-1928",
    "lat": 34.687437,
    "lon": 135.829739,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 224,
    "poi_code": 1001,
    "poi_type": "観光案内所",
    "name": "きたまち転害門観光案内所",
    "address": "奈良県奈良市手貝町54-1",
    "phone": "0742-24-1940",
    "lat": 34.691793,
    "lon": 135.834861,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 225,
    "poi_code": 1001,
    "poi_type": "観光案内所",
    "name": "京終駅観光案内所",
    "address": "奈良県奈良市南京終町204-3",
    "phone": "0742-55-0086",
    "lat": 34.66988,
    "lon": 135.828895,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 226,
    "poi_code": 1306,
    "poi_type": "産業支援施設",
    "name": "なら工藝館",
    "address": "奈良県奈良市阿字万字町1-1",
    "phone": "0742-27-0033",
    "lat": 34.67869,
    "lon": 135.82824,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 227,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "勤労者総合福祉センター",
    "address": "奈良県奈良市佐保台西町115",
    "phone": "0742-71-2444",
    "lat": 34.713144,
    "lon": 135.81108,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 228,
    "poi_code": 1499,
    "poi_type": "その他の社会福祉施設",
    "name": "シルバー人材センター",
    "address": "奈良県奈良市八条1-790-1",
    "phone": "0742-50-4004",
    "lat": 34.663773,
    "lon": 135.802189,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 229,
    "poi_code": 1306,
    "poi_type": "産業支援施設",
    "name": "BONCHI",
    "address": "奈良県奈良市橋本町3-1",
    "phone": "0742-27-1111",
    "lat": 34.68165,
    "lon": 135.82922,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 230,
    "poi_code": 1399,
    "poi_type": "その他行政サービス施設",
    "name": "土木管理センター",
    "address": "奈良県奈良市大安寺西2-288-1",
    "phone": "0742-33-3015",
    "lat": 34.670796,
    "lon": 135.803246,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 231,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "春日中学校",
    "address": "奈良県奈良市西木辻町67",
    "phone": "0742-61-7071",
    "lat": 34.673663,
    "lon": 135.820204,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 232,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "三笠中学校",
    "address": "奈良県奈良市三条川西町3-1",
    "phone": "0742-33-1472",
    "lat": 34.680161,
    "lon": 135.806455,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 233,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "若草中学校",
    "address": "奈良県奈良市法蓮町1416-1",
    "phone": "0742-26-3273",
    "lat": 34.69513,
    "lon": 135.831518,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 234,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "伏見中学校",
    "address": "奈良県奈良市西大寺野神町1-6-1",
    "phone": "0742-45-7332",
    "lat": 34.696218,
    "lon": 135.774142,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 235,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "富雄中学校",
    "address": "奈良県奈良市三碓2-3-12",
    "phone": "0742-45-4381",
    "lat": 34.689545,
    "lon": 135.735796,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 236,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "都南中学校",
    "address": "奈良県奈良市南永井町98-1",
    "phone": "0742-61-7070",
    "lat": 34.648727,
    "lon": 135.824439,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 237,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "田原中学校",
    "address": "奈良県奈良市横田町199-1",
    "phone": "0742-81-0021",
    "lat": 34.659809,
    "lon": 135.912298,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 238,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "興東館柳生中学校",
    "address": "奈良県奈良市大柳生町832",
    "phone": "0742-93-0080",
    "lat": 34.712802,
    "lon": 135.9339,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 239,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "登美ヶ丘中学校",
    "address": "奈良県奈良市東登美ケ丘3-1059",
    "phone": "0742-44-3612",
    "lat": 34.71364,
    "lon": 135.761967,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 240,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "ならやま中学校",
    "address": "奈良県奈良市神功2-1",
    "phone": "0742-71-2011",
    "lat": 34.719688,
    "lon": 135.780289,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 241,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "二名中学校",
    "address": "奈良県奈良市二名1-3667-2",
    "phone": "0742-43-9570",
    "lat": 34.706291,
    "lon": 135.737803,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 242,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "京西中学校",
    "address": "奈良県奈良市平松4-3-1",
    "phone": "0742-46-5810",
    "lat": 34.674265,
    "lon": 135.776677,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 243,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "富雄南中学校",
    "address": "奈良県奈良市藤ノ木台1-5-13",
    "phone": "0742-48-1671",
    "lat": 34.68206,
    "lon": 135.752957,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 244,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "平城中学校",
    "address": "奈良県奈良市秋篠町1333",
    "phone": "0742-45-9405",
    "lat": 34.708976,
    "lon": 135.77381,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 245,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "飛鳥中学校",
    "address": "奈良県奈良市高畑町1475-1",
    "phone": "0742-22-1890",
    "lat": 34.675523,
    "lon": 135.849157,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 246,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "登美ヶ丘北中学校",
    "address": "奈良県奈良市北登美ケ丘1-1-1",
    "phone": "0742-43-0176",
    "lat": 34.723654,
    "lon": 135.753343,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 247,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "都跡中学校",
    "address": "奈良県奈良市柏木町13",
    "phone": "0742-33-1378",
    "lat": 34.676373,
    "lon": 135.795971,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 248,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "平城東中学校",
    "address": "奈良県奈良市朱雀6-11",
    "phone": "0742-71-6981",
    "lat": 34.715578,
    "lon": 135.799715,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 249,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "月ヶ瀬中学校",
    "address": "奈良県奈良市月ヶ瀬尾山2551",
    "phone": "0743-92-0020",
    "lat": 34.711197,
    "lon": 136.043928,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 250,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "都祁中学校",
    "address": "奈良県奈良市針町2554",
    "phone": "0743-82-0300",
    "lat": 34.606786,
    "lon": 135.954707,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 251,
    "poi_code": 1504,
    "poi_type": "中学校",
    "name": "富雄第三中学校",
    "address": "奈良県奈良市帝塚山南2-11‐1",
    "phone": "0742-43-9568",
    "lat": 34.67582,
    "lon": 135.732467,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 252,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "椿井小学校",
    "address": "奈良県奈良市椿井町25",
    "phone": "0742-23-7062",
    "lat": 34.680485,
    "lon": 135.82821,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 253,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "飛鳥小学校",
    "address": "奈良県奈良市紀寺町785",
    "phone": "0742-26-3201",
    "lat": 34.675001,
    "lon": 135.836305,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 254,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "鼓阪小学校",
    "address": "奈良県奈良市雑司町97",
    "phone": "0742-26-5006",
    "lat": 34.692085,
    "lon": 135.835757,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 255,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "済美小学校",
    "address": "奈良県奈良市西木辻町5-2",
    "phone": "0742-26-0312",
    "lat": 34.675372,
    "lon": 135.823657,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 256,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "佐保小学校",
    "address": "奈良県奈良市法蓮町280-1",
    "phone": "0742-23-7065",
    "lat": 34.691115,
    "lon": 135.820916,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 257,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "大宮小学校",
    "address": "奈良県奈良市大宮町4-223-1",
    "phone": "0742-33-0031",
    "lat": 34.683768,
    "lon": 135.810839,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 258,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "都跡小学校",
    "address": "奈良県奈良市四条大路5-6-1",
    "phone": "0742-33-1431",
    "lat": 34.680558,
    "lon": 135.787946,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 259,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "大安寺小学校",
    "address": "奈良県奈良市大安寺2-15-1",
    "phone": "0742-61-7067",
    "lat": 34.669031,
    "lon": 135.811275,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 260,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "東市小学校",
    "address": "奈良県奈良市古市町268",
    "phone": "0742-61-6563",
    "lat": 34.656203,
    "lon": 135.841334,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 261,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "平城小学校",
    "address": "奈良県奈良市秋篠町1394",
    "phone": "0742-45-4151",
    "lat": 34.710991,
    "lon": 135.778301,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 262,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "辰市小学校",
    "address": "奈良県奈良市西九条町1-7-1",
    "phone": "0742-61-7069",
    "lat": 34.658998,
    "lon": 135.807012,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 263,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "明治小学校",
    "address": "奈良県奈良市北永井町414",
    "phone": "0742-62-4464",
    "lat": 34.656276,
    "lon": 135.822416,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 264,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "帯解小学校",
    "address": "奈良県奈良市柴屋町9",
    "phone": "0742-62-4411",
    "lat": 34.644723,
    "lon": 135.829066,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 265,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "伏見小学校",
    "address": "奈良県奈良市菅原町370",
    "phone": "0742-45-4488",
    "lat": 34.688056,
    "lon": 135.775101,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 266,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "富雄南小学校",
    "address": "奈良県奈良市中町4185",
    "phone": "0742-45-4631",
    "lat": 34.674484,
    "lon": 135.749455,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 267,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "富雄北小学校",
    "address": "奈良県奈良市富雄北1-13-6",
    "phone": "0742-45-7071",
    "lat": 34.696963,
    "lon": 135.732603,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 268,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "田原小学校",
    "address": "奈良県奈良市横田町199-1",
    "phone": "0742-81-0021",
    "lat": 34.659395,
    "lon": 135.911329,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 269,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "柳生小学校",
    "address": "奈良県奈良市柳生下町138",
    "phone": "0742-94-0223",
    "lat": 34.737976,
    "lon": 135.95098,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 270,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "興東小学校",
    "address": "奈良県奈良市須川町1424",
    "phone": "0742-95-0202",
    "lat": 34.717387,
    "lon": 135.911858,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 271,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "あやめ池小学校",
    "address": "奈良県奈良市あやめ池南9-939-39",
    "phone": "0742-45-7461",
    "lat": 34.692807,
    "lon": 135.757954,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 272,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "鶴舞小学校",
    "address": "奈良県奈良市鶴舞東町2-1",
    "phone": "0742-45-7321",
    "lat": 34.706769,
    "lon": 135.75301,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 273,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "鳥見小学校",
    "address": "奈良県奈良市鳥見町3-11-2",
    "phone": "0742-43-4723",
    "lat": 34.694811,
    "lon": 135.724618,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 274,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "登美ヶ丘小学校",
    "address": "奈良県奈良市西登美ケ丘4-21-1",
    "phone": "0742-44-2661",
    "lat": 34.720265,
    "lon": 135.738919,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 275,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "六条小学校",
    "address": "奈良県奈良市六条2-14-1",
    "phone": "0742-44-2606",
    "lat": 34.670992,
    "lon": 135.771401,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 276,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "青和小学校",
    "address": "奈良県奈良市百楽園4-1-1",
    "phone": "0742-44-2668",
    "lat": 34.70033,
    "lon": 135.742919,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 277,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "東登美ヶ丘小学校",
    "address": "奈良県奈良市東登美ケ丘4-21-33",
    "phone": "0742-43-3850",
    "lat": 34.720649,
    "lon": 135.756031,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 278,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "二名小学校",
    "address": "奈良県奈良市二名1-3716-1",
    "phone": "0742-43-3810",
    "lat": 34.708146,
    "lon": 135.737131,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 279,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "西大寺北小学校",
    "address": "奈良県奈良市西大寺赤田町1-6-1",
    "phone": "0742-43-7433",
    "lat": 34.699182,
    "lon": 135.773497,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 280,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "富雄第三小学校",
    "address": "奈良県奈良市帝塚山南2-11-1",
    "phone": "0742-43-9568",
    "lat": 34.67582,
    "lon": 135.732467,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 281,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "平城西小学校",
    "address": "奈良県奈良市東登美ケ丘3-1093-1",
    "phone": "0742-47-0506",
    "lat": 34.714053,
    "lon": 135.763931,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 282,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "大安寺西小学校",
    "address": "奈良県奈良市大安寺西1-342",
    "phone": "0742-33-6163",
    "lat": 34.674222,
    "lon": 135.805675,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 283,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "三碓小学校",
    "address": "奈良県奈良市西千代ケ丘1-20-9",
    "phone": "0742-47-1546",
    "lat": 34.683249,
    "lon": 135.741626,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 284,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "ならやま小学校",
    "address": "奈良県奈良市神功2-1",
    "phone": "0742-71-2011",
    "lat": 34.719688,
    "lon": 135.780289,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 285,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "朱雀小学校",
    "address": "奈良県奈良市朱雀6-10-1",
    "phone": "0742-71-5220",
    "lat": 34.716191,
    "lon": 135.797991,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 286,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "済美南小学校",
    "address": "奈良県奈良市南京終町676",
    "phone": "0742-62-7872",
    "lat": 34.664134,
    "lon": 135.821552,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 287,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "鼓阪北小学校",
    "address": "奈良県奈良市青山9-3-1",
    "phone": "0742-22-5878",
    "lat": 34.708791,
    "lon": 135.837394,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 288,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "伏見南小学校",
    "address": "奈良県奈良市宝来5-2-1",
    "phone": "0742-49-0180",
    "lat": 34.680739,
    "lon": 135.770056,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 289,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "佐保台小学校",
    "address": "奈良県奈良市佐保台3-902-341",
    "phone": "0742-71-0460",
    "lat": 34.710055,
    "lon": 135.816591,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 290,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "佐保川小学校",
    "address": "奈良県奈良市法蓮町229-1",
    "phone": "0742-35-5856",
    "lat": 34.688718,
    "lon": 135.815574,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 291,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "左京小学校",
    "address": "奈良県奈良市左京3-1-1",
    "phone": "0742-72-0582",
    "lat": 34.713974,
    "lon": 135.805941,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 292,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "月ヶ瀬小学校",
    "address": "奈良県奈良市月ヶ瀬尾山2551",
    "phone": "0743-92-0014",
    "lat": 34.711197,
    "lon": 136.043928,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 293,
    "poi_code": 1503,
    "poi_type": "小学校",
    "name": "都祁小学校",
    "address": "奈良県奈良市都祁白石町974",
    "phone": "0743-82-0053",
    "lat": 34.604904,
    "lon": 135.958867,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 294,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "中部公民館",
    "address": "奈良県奈良市上三条町23-4",
    "phone": "0742-26-6506",
    "lat": 34.682281,
    "lon": 135.825831,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 295,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "西部公民館",
    "address": "奈良県奈良市学園南3-1-5",
    "phone": "0742-44-0101",
    "lat": 34.696719,
    "lon": 135.75023,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 296,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "南部公民館",
    "address": "奈良県奈良市山町27-1",
    "phone": "0742-62-5931",
    "lat": 34.643747,
    "lon": 135.828719,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 297,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "三笠公民館",
    "address": "奈良県奈良市大宮町4-313-3",
    "phone": "0742-33-0515",
    "lat": 34.682917,
    "lon": 135.808682,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 298,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "田原公民館",
    "address": "奈良県奈良市茗荷町1078-1",
    "phone": "0742-81-0888",
    "lat": 34.657079,
    "lon": 135.907704,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 299,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "富雄公民館",
    "address": "奈良県奈良市鳥見町2-9",
    "phone": "0742-43-5386",
    "lat": 34.689225,
    "lon": 135.72684,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 300,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "柳生公民館",
    "address": "奈良県奈良市柳生町340",
    "phone": "0742-94-0504",
    "lat": 34.728165,
    "lon": 135.952935,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 301,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "若草公民館",
    "address": "奈良県奈良市川上町575",
    "phone": "0742-26-0130",
    "lat": 34.692539,
    "lon": 135.83242,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 302,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "登美ヶ丘公民館",
    "address": "奈良県奈良市中登美ヶ丘3-4162-81",
    "phone": "0742-43-7431",
    "lat": 34.719763,
    "lon": 135.748611,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 303,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "興東公民館",
    "address": "奈良県奈良市大柳生町3633",
    "phone": "0742-93-0400",
    "lat": 34.707304,
    "lon": 135.928895,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 304,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "春日公民館",
    "address": "奈良県奈良市南京終町1-86-1",
    "phone": "0742-62-2253",
    "lat": 34.671917,
    "lon": 135.822508,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 305,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "二名公民館",
    "address": "奈良県奈良市学園赤松町3684",
    "phone": "0742-46-9113",
    "lat": 34.705221,
    "lon": 135.73814,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 306,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "京西公民館",
    "address": "奈良県奈良市六条西1-3-43-2",
    "phone": "0742-44-2669",
    "lat": 34.671972,
    "lon": 135.770973,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 307,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "平城西公民館",
    "address": "奈良県奈良市神功4-25",
    "phone": "0742-71-5711",
    "lat": 34.720617,
    "lon": 135.777428,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 308,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "伏見公民館",
    "address": "奈良県奈良市青野町2-13-4",
    "phone": "0742-45-9864",
    "lat": 34.68948,
    "lon": 135.774168,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 309,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "富雄南公民館",
    "address": "奈良県奈良市中町501-3",
    "phone": "0742-48-3066",
    "lat": 34.678572,
    "lon": 135.750493,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 310,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "平城公民館",
    "address": "奈良県奈良市秋篠町1468",
    "phone": "0742-48-3578",
    "lat": 34.706211,
    "lon": 135.777631,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 311,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "飛鳥公民館",
    "address": "奈良県奈良市紀寺町984",
    "phone": "0742-23-2804",
    "lat": 34.675789,
    "lon": 135.835342,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 312,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "都跡公民館",
    "address": "奈良県奈良市五条町204-1",
    "phone": "0742-34-5954",
    "lat": 34.675093,
    "lon": 135.789164,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 313,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "登美ヶ丘南公民館",
    "address": "奈良県奈良市中山町西2-921-1",
    "phone": "0742-47-6375",
    "lat": 34.713117,
    "lon": 135.75464,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 314,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "平城東公民館",
    "address": "奈良県奈良市朱雀6-9-1",
    "phone": "0742-71-9677",
    "lat": 34.71601,
    "lon": 135.797266,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 315,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "月ヶ瀬公民館",
    "address": "奈良県奈良市月ヶ瀬尾山2815",
    "phone": "0743-92-0346",
    "lat": 34.710293,
    "lon": 136.044343,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 316,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "都祁公民館",
    "address": "奈良県奈良市針町2191",
    "phone": "0743-82-1362",
    "lat": 34.612652,
    "lon": 135.955842,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 317,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "西部公民館学園大和分館",
    "address": "奈良県奈良市学園大和町1-187",
    "phone": "",
    "lat": 34.687834,
    "lon": 135.747355,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 318,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "南部公民館精華分館",
    "address": "奈良県奈良市高樋町640-1",
    "phone": "",
    "lat": 34.633288,
    "lon": 135.853798,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 319,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "南部公民館東九条分館",
    "address": "奈良県奈良市東九条町393-4",
    "phone": "",
    "lat": 34.65733,
    "lon": 135.81089,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 320,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "田原公民館横田分館",
    "address": "奈良県奈良市横田町336-1",
    "phone": "",
    "lat": 34.658256,
    "lon": 135.910348,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 321,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "田原公民館水間分館",
    "address": "奈良県奈良市水間町989-1",
    "phone": "",
    "lat": 34.672571,
    "lon": 135.945959,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 322,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "田原公民館杣ノ川分館",
    "address": "奈良県奈良市杣ノ川町698",
    "phone": "",
    "lat": 34.648622,
    "lon": 135.944927,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 323,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "富雄公民館元町分館",
    "address": "奈良県奈良市富雄北2-2-8",
    "phone": "",
    "lat": 34.694908,
    "lon": 135.736454,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 324,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "柳生公民館興ヶ原分館",
    "address": "奈良県奈良市興ヶ原町349-1",
    "phone": "",
    "lat": 34.735511,
    "lon": 135.96781,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 325,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "柳生公民館邑地分館",
    "address": "奈良県奈良市邑地町451-4",
    "phone": "",
    "lat": 34.716301,
    "lon": 135.979146,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 326,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "柳生公民館丹生分館",
    "address": "奈良県奈良市丹生町847",
    "phone": "",
    "lat": 34.697431,
    "lon": 135.965852,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 327,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "柳生公民館北野山分館",
    "address": "奈良県奈良市北野山町724",
    "phone": "",
    "lat": 34.693438,
    "lon": 135.973635,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 328,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "興東公民館狭川分館",
    "address": "奈良県奈良市下狭川町3109-2",
    "phone": "",
    "lat": 34.735,
    "lon": 135.912995,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 329,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "興東公民館大平尾分館",
    "address": "奈良県奈良市大平尾町471",
    "phone": "",
    "lat": 34.682948,
    "lon": 135.926531,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 330,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "春日公民館西木辻分館",
    "address": "奈良県奈良市西木辻町200-67",
    "phone": "",
    "lat": 34.674356,
    "lon": 135.825548,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 331,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "春日公民館大安寺分館",
    "address": "奈良県奈良市大安寺4-4-34",
    "phone": "",
    "lat": 34.670954,
    "lon": 135.812379,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 332,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "春日公民館済美南分館",
    "address": "奈良県奈良市南京終町7-554-3",
    "phone": "",
    "lat": 34.665572,
    "lon": 135.826242,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 333,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "二名公民館二名分館",
    "address": "奈良県奈良市二名1-2400-4",
    "phone": "",
    "lat": 34.70522,
    "lon": 135.733934,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 334,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "京西公民館平松分館",
    "address": "奈良県奈良市平松1-24-1",
    "phone": "",
    "lat": 34.679309,
    "lon": 135.776737,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 335,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "伏見公民館あやめ池分館",
    "address": "奈良県奈良市あやめ池南1-7-62",
    "phone": "",
    "lat": 34.696341,
    "lon": 135.759974,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 336,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "平城公民館歌姫分館",
    "address": "奈良県奈良市歌姫町1094",
    "phone": "",
    "lat": 34.703758,
    "lon": 135.79565,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 337,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "飛鳥公民館白毫寺分館",
    "address": "奈良県奈良市白毫寺町58-2",
    "phone": "",
    "lat": 34.671041,
    "lon": 135.846882,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 338,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "都跡公民館佐紀分館",
    "address": "奈良県奈良市佐紀町3089",
    "phone": "",
    "lat": 34.698612,
    "lon": 135.7935,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 339,
    "poi_code": 1307,
    "poi_type": "公民館",
    "name": "生涯学習センター",
    "address": "奈良県奈良市杉ヶ町23",
    "phone": "0742-26-8811",
    "lat": 34.677427,
    "lon": 135.821103,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": true,
      "service_dog_allowed": true,
      "priority_parking": true,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 340,
    "poi_code": 1125,
    "poi_type": "林間学校施設",
    "name": "青少年野外活動センター",
    "address": "奈良県奈良市阪原町25-1",
    "phone": "0742-93-0029",
    "lat": 34.713152,
    "lon": 135.936577,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 341,
    "poi_code": 1152,
    "poi_type": "キャンプ場",
    "name": "黒髪山キャンプフィールド",
    "address": "奈良県奈良市奈良阪町1731",
    "phone": "0742-71-8730",
    "lat": 34.700826,
    "lon": 135.813852,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 342,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "飛鳥バンビーホーム",
    "address": "奈良県奈良市紀寺町785",
    "phone": "0742-22-0567",
    "lat": 34.675001,
    "lon": 135.836305,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 343,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "済美バンビーホーム",
    "address": "奈良県奈良市西木辻町5-2",
    "phone": "0742-26-1039",
    "lat": 34.675372,
    "lon": 135.823657,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 344,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "佐保バンビーホーム",
    "address": "奈良県奈良市法蓮町280-1",
    "phone": "0742-22-8585",
    "lat": 34.691115,
    "lon": 135.820916,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 345,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "鼓阪バンビーホーム",
    "address": "奈良県奈良市雑司町97",
    "phone": "0742-22-3883",
    "lat": 34.692085,
    "lon": 135.835757,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 346,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "大宮バンビーホーム",
    "address": "奈良県奈良市大宮町4-223-1",
    "phone": "0742-33-3381",
    "lat": 34.683768,
    "lon": 135.810839,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 347,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "東市バンビーホーム",
    "address": "奈良県奈良市古市町268",
    "phone": "0742-62-4343",
    "lat": 34.656203,
    "lon": 135.841334,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 348,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "鶴舞バンビーホーム",
    "address": "奈良県奈良市鶴舞東町2-1",
    "phone": "0742-44-3080",
    "lat": 34.706769,
    "lon": 135.75301,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 349,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "伏見バンビーホーム",
    "address": "奈良県奈良市菅原町370",
    "phone": "0742-43-1312",
    "lat": 34.688056,
    "lon": 135.775101,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 350,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "都跡バンビーホーム",
    "address": "奈良県奈良市四条大路5-6-1",
    "phone": "0742-33-0761",
    "lat": 34.680558,
    "lon": 135.787946,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 351,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "平城バンビーホーム",
    "address": "奈良県奈良市秋篠町1394",
    "phone": "0742-43-2007",
    "lat": 34.710991,
    "lon": 135.778301,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 352,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "富雄北バンビーホーム",
    "address": "奈良県奈良市富雄北1-13-6",
    "phone": "0742-43-4724",
    "lat": 34.696963,
    "lon": 135.732603,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 353,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "鳥見バンビーホーム",
    "address": "奈良県奈良市鳥見町3-11-2",
    "phone": "0742-43-4722",
    "lat": 34.694811,
    "lon": 135.724618,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 354,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "辰市バンビーホーム",
    "address": "奈良県奈良市西九条町1-7-1",
    "phone": "0742-61-1260",
    "lat": 34.658998,
    "lon": 135.807012,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 355,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "六条バンビーホーム",
    "address": "奈良県奈良市六条2-14-1",
    "phone": "0742-43-9066",
    "lat": 34.670992,
    "lon": 135.771401,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 356,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "登美ケ丘バンビーホーム",
    "address": "奈良県奈良市西登美ケ丘4-21-1",
    "phone": "0742-46-0359",
    "lat": 34.720265,
    "lon": 135.738919,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 357,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "大安寺バンビーホーム",
    "address": "奈良県奈良市大安寺2-15-1",
    "phone": "0742-61-7850",
    "lat": 34.669031,
    "lon": 135.811275,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 358,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "西大寺北バンビーホーム",
    "address": "奈良県奈良市西大寺赤田町1-6-1",
    "phone": "0742-46-3151",
    "lat": 34.699182,
    "lon": 135.773497,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 359,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "明治バンビーホーム",
    "address": "奈良県奈良市北永井町414",
    "phone": "0742-62-7318",
    "lat": 34.656276,
    "lon": 135.822416,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 360,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "青和バンビーホーム",
    "address": "奈良県奈良市百楽園4-1-1",
    "phone": "0742-47-1783",
    "lat": 34.70033,
    "lon": 135.742919,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 361,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "ならやまバンビーホーム",
    "address": "奈良県奈良市神功2-1",
    "phone": "0742-71-6392",
    "lat": 34.72026,
    "lon": 135.77986,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 362,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "大安寺西バンビーホーム",
    "address": "奈良県奈良市大安寺西1-342",
    "phone": "0742-33-7782",
    "lat": 34.674222,
    "lon": 135.805675,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 363,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "朱雀バンビーホーム",
    "address": "奈良県奈良市朱雀6-10-1",
    "phone": "0742-71-1244",
    "lat": 34.716191,
    "lon": 135.797991,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 364,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "三碓バンビーホーム",
    "address": "奈良県奈良市西千代ケ丘1-20-9",
    "phone": "0742-44-0206",
    "lat": 34.683249,
    "lon": 135.741626,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 365,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "済美南バンビーホーム",
    "address": "奈良県奈良市南京終町676",
    "phone": "0742-62-7591",
    "lat": 34.664134,
    "lon": 135.821552,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 366,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "あやめ池バンビーホーム",
    "address": "奈良県奈良市あやめ池南9-939-39",
    "phone": "0742-48-2284",
    "lat": 34.692807,
    "lon": 135.757954,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 367,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "伏見南バンビーホーム",
    "address": "奈良県奈良市宝来5-2-1",
    "phone": "0742-48-2254",
    "lat": 34.680739,
    "lon": 135.770056,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 368,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "平城西バンビーホーム",
    "address": "奈良県奈良市東登美ケ丘3-1093-1",
    "phone": "0742-49-1972",
    "lat": 34.714053,
    "lon": 135.763931,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 369,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "鼓阪北バンビーホーム",
    "address": "奈良県奈良市青山9-3-1",
    "phone": "0742-22-4502",
    "lat": 34.708791,
    "lon": 135.837394,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 370,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "佐保台バンビーホーム",
    "address": "奈良県奈良市佐保台3-902-341",
    "phone": "0742-71-4602",
    "lat": 34.710055,
    "lon": 135.816591,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 371,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "富雄第三バンビーホーム",
    "address": "奈良県奈良市帝塚山南2-11-1",
    "phone": "0742-41-0254",
    "lat": 34.67582,
    "lon": 135.732467,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 372,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "二名バンビーホーム",
    "address": "奈良県奈良市二名1-3716-1",
    "phone": "0742-49-0638",
    "lat": 34.708146,
    "lon": 135.737131,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 373,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "佐保川バンビーホーム",
    "address": "奈良県奈良市法蓮町229-1",
    "phone": "0742-36-5654",
    "lat": 34.688718,
    "lon": 135.815574,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 374,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "椿井バンビーホーム",
    "address": "奈良県奈良市椿井町25",
    "phone": "0742-23-4645",
    "lat": 34.680485,
    "lon": 135.82821,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 375,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "左京バンビーホーム",
    "address": "奈良県奈良市左京3-1-1",
    "phone": "0742-72-0632",
    "lat": 34.713974,
    "lon": 135.805941,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 376,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "富雄南バンビーホーム",
    "address": "奈良県奈良市中町4185",
    "phone": "0742-41-3555",
    "lat": 34.674484,
    "lon": 135.749455,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 377,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "東登美ケ丘バンビーホーム",
    "address": "奈良県奈良市東登美ケ丘4-21-33",
    "phone": "0742-43-2024",
    "lat": 34.720649,
    "lon": 135.756031,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 378,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "帯解バンビーホーム",
    "address": "奈良県奈良市柴屋町28-4",
    "phone": "0742-64-2037",
    "lat": 34.644723,
    "lon": 135.829066,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 379,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "都祁バンビーホーム",
    "address": "奈良県奈良市都祁白石町974",
    "phone": "0743-82-0600",
    "lat": 34.604904,
    "lon": 135.958867,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 380,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "月ヶ瀬バンビーホーム",
    "address": "奈良県奈良市月ヶ瀬尾山2551",
    "phone": "0743-92-0085",
    "lat": 34.7104,
    "lon": 136.04369,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 381,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "柳生バンビーホーム",
    "address": "奈良県奈良市柳生下町138",
    "phone": "0742-94-0224",
    "lat": 34.737976,
    "lon": 135.95098,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 382,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "田原バンビーホーム",
    "address": "奈良県奈良市横田町199-1",
    "phone": "0742-81-0223",
    "lat": 34.659395,
    "lon": 135.911329,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 383,
    "poi_code": 1404,
    "poi_type": "学童保育クラブ",
    "name": "興東バンビーホーム",
    "address": "奈良県奈良市須川町1424",
    "phone": "0742-95-0303",
    "lat": 34.717387,
    "lon": 135.911858,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 384,
    "poi_code": 803,
    "poi_type": "記念・資料館",
    "name": "史料保存館",
    "address": "奈良県奈良市脇戸町1-1",
    "phone": "0742-27-0169",
    "lat": 34.677756,
    "lon": 135.829202,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 385,
    "poi_code": 803,
    "poi_type": "記念・資料館",
    "name": "上深川歴史民俗資料館",
    "address": "奈良県奈良市上深川町511",
    "phone": "",
    "lat": 34.64348,
    "lon": 135.984171,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 386,
    "poi_code": 1513,
    "poi_type": "研究施設",
    "name": "埋蔵文化財調査センター",
    "address": "奈良県奈良市大安寺西2-281",
    "phone": "0742-33-1821",
    "lat": 34.670286,
    "lon": 135.803574,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 387,
    "poi_code": 603,
    "poi_type": "史跡",
    "name": "平城京左京三条二坊宮跡庭園",
    "address": "奈良県奈良市三条大路1-5-37",
    "phone": "",
    "lat": 34.68378,
    "lon": 135.80233,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 388,
    "poi_code": 603,
    "poi_type": "史跡",
    "name": "菅原はにわ窯公園",
    "address": "奈良県奈良市西大寺国見町3-9",
    "phone": "",
    "lat": 34.685,
    "lon": 135.78331,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 389,
    "poi_code": 801,
    "poi_type": "博物館",
    "name": "昔のくらし館",
    "address": "奈良県奈良市五条町204-1",
    "phone": "",
    "lat": 34.67488,
    "lon": 135.78907,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 390,
    "poi_code": 1399,
    "poi_type": "その他行政サービス施設",
    "name": "都祁学校給食センター",
    "address": "奈良県奈良市都祁友田町1798",
    "phone": "0743-82-1691",
    "lat": 34.604291,
    "lon": 135.95185,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 391,
    "poi_code": 1599,
    "poi_type": "その他の教育文化施設",
    "name": "教育支援センター「HOP」",
    "address": "奈良県奈良市三条本町13-1",
    "phone": "0742-93-8199",
    "lat": 34.67937,
    "lon": 135.81801,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 392,
    "poi_code": 1599,
    "poi_type": "その他の教育文化施設",
    "name": "公設フリースクール「HOP青山」",
    "address": "奈良県奈良市青山9-3-2",
    "phone": "0742-31-9076",
    "lat": 34.70881,
    "lon": 135.83597,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 393,
    "poi_code": 1599,
    "poi_type": "その他の教育文化施設",
    "name": "公設フリースクール「HOPあやめ池」",
    "address": "奈良県奈良市あやめ池南9-948-1",
    "phone": "0742-31-0001",
    "lat": 34.693,
    "lon": 135.75612,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 394,
    "poi_code": 1505,
    "poi_type": "高等学校・中等教育学校",
    "name": "一条高等学校・附属中学校",
    "address": "奈良県奈良市法華寺町1351",
    "phone": "0742-33-7075",
    "lat": 34.69246,
    "lon": 135.810915,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 395,
    "poi_code": 1512,
    "poi_type": "図書館",
    "name": "中央図書館",
    "address": "奈良県奈良市東寺林町38",
    "phone": "0742-26-6101",
    "lat": 34.679814,
    "lon": 135.830993,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 396,
    "poi_code": 1512,
    "poi_type": "図書館",
    "name": "西部図書館",
    "address": "奈良県奈良市鶴舞西町1-21",
    "phone": "0742-45-5669",
    "lat": 34.705683,
    "lon": 135.749983,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 397,
    "poi_code": 1512,
    "poi_type": "図書館",
    "name": "北部図書館",
    "address": "奈良県奈良市右京1-1-4",
    "phone": "0742-72-2291",
    "lat": 34.721911,
    "lon": 135.790983,
    "accessibility": {
      "multipurpose_toilet": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 398,
    "poi_code": 1214,
    "poi_type": "消防署",
    "name": "消防局第2庁舎",
    "address": "奈良県奈良市八条5-404-1",
    "phone": "0742-35-1106",
    "lat": 34.669419,
    "lon": 135.801519,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 399,
    "poi_code": 1214,
    "poi_type": "消防署",
    "name": "消防局・南消防署",
    "address": "奈良県奈良市八条5-404-1",
    "phone": "0742-35-1199",
    "lat": 34.669716,
    "lon": 135.801039,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 400,
    "poi_code": 1215,
    "poi_type": "消防署分署",
    "name": "南消防署西大寺分署",
    "address": "奈良県奈良市二条町2-1-1",
    "phone": "0742-33-4605",
    "lat": 34.693708,
    "lon": 135.786128,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 401,
    "poi_code": 1214,
    "poi_type": "消防署",
    "name": "中央消防署",
    "address": "奈良県奈良市西木辻町43-1",
    "phone": "0742-22-7051",
    "lat": 34.675129,
    "lon": 135.821165,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 402,
    "poi_code": 1215,
    "poi_type": "消防署分署",
    "name": "中央消防署佐保分署",
    "address": "奈良県奈良市法蓮町926-4",
    "phone": "0742-22-7055",
    "lat": 34.693496,
    "lon": 135.823445,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 403,
    "poi_code": 1215,
    "poi_type": "消防署分署",
    "name": "中央消防署南部分署",
    "address": "奈良県奈良市横井5-497-3",
    "phone": "0742-61-7025",
    "lat": 34.648414,
    "lon": 135.832512,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 404,
    "poi_code": 1214,
    "poi_type": "消防署",
    "name": "西消防署",
    "address": "奈良県奈良市鶴舞西町1-19",
    "phone": "0742-45-7621",
    "lat": 34.705188,
    "lon": 135.749925,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 405,
    "poi_code": 1215,
    "poi_type": "消防署分署",
    "name": "西消防署富雄分署",
    "address": "奈良県奈良市三碓6-10-40",
    "phone": "0742-47-7119",
    "lat": 34.683845,
    "lon": 135.737381,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 406,
    "poi_code": 1214,
    "poi_type": "消防署",
    "name": "北消防署",
    "address": "奈良県奈良市右京2-1-1",
    "phone": "0742-71-9119",
    "lat": 34.715112,
    "lon": 135.791431,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 407,
    "poi_code": 1214,
    "poi_type": "消防署",
    "name": "東消防署",
    "address": "奈良県奈良市針町647-1",
    "phone": "0743-82-0513",
    "lat": 34.611954,
    "lon": 135.958902,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 408,
    "poi_code": 1215,
    "poi_type": "消防署分署",
    "name": "東消防署東部分署",
    "address": "奈良県奈良市大柳生町1232",
    "phone": "0742-93-0119",
    "lat": 34.709413,
    "lon": 135.933648,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 409,
    "poi_code": 1215,
    "poi_type": "消防署分署",
    "name": "東消防署月ヶ瀬分署",
    "address": "奈良県奈良市月ヶ瀬尾山3395-2",
    "phone": "0743-92-0945",
    "lat": 34.710753,
    "lon": 136.045649,
    "accessibility": {
      "multipurpose_toilet": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  }
];
