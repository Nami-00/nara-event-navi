const TOURIST_FACILITIES = [
  {
    "id": 1,
    "area": "A",
    "category": "社寺[ST]",
    "name": "東大寺 大仏殿",
    "address": "奈良市雑司町406-1",
    "phone": "0742-22-5511",
    "lat": 34.68906,
    "lon": 135.839844,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 2,
    "area": "A",
    "category": "社寺[ST]",
    "name": "東大寺 二月堂",
    "address": "奈良市雑司町",
    "phone": "0742-22-5511",
    "lat": 34.689545,
    "lon": 135.847492,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 3,
    "area": "A",
    "category": "博物館・美術館[M]",
    "name": "東大寺ミュージアム",
    "address": "奈良市水門町100",
    "phone": "0742-20-5511",
    "lat": 34.688633,
    "lon": 135.839983,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 4,
    "area": "A",
    "category": "社寺[ST]",
    "name": "春日大社",
    "address": "奈良市春日野町160",
    "phone": "0742-22-7788",
    "lat": 34.681906,
    "lon": 135.848244,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 5,
    "area": "A",
    "category": "博物館・美術館[M]",
    "name": "春日大社 国宝殿",
    "address": "奈良市春日野町160",
    "phone": "0742-22-7788",
    "lat": 34.682217,
    "lon": 135.84745,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 6,
    "area": "A",
    "category": "社寺[ST]",
    "name": "興福寺 東金堂",
    "address": "奈良市登大路町48",
    "phone": "0742-22-7755",
    "lat": 34.682658,
    "lon": 135.832303,
    "accessibility": {
      "multipurpose_toilet": false,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 7,
    "area": "A",
    "category": "社寺[ST]",
    "name": "興福寺 中金堂",
    "address": "奈良市登大路町48",
    "phone": "0742-22-7755",
    "lat": 34.683006,
    "lon": 135.83185,
    "accessibility": {
      "multipurpose_toilet": false,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 8,
    "area": "A",
    "category": "博物館・美術館[M]",
    "name": "興福寺 国宝館",
    "address": "奈良市登大路町48",
    "phone": "0742-22-7755",
    "lat": 34.6829,
    "lon": 135.8323,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 9,
    "area": "A",
    "category": "博物館・美術館[M]",
    "name": "奈良国立博物館",
    "address": "奈良市登大路町50",
    "phone": "050-5542-8600",
    "lat": 34.683087,
    "lon": 135.837736,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 10,
    "area": "A",
    "category": "博物館・美術館[M]",
    "name": "奈良県立美術館",
    "address": "奈良市登大路町10-6",
    "phone": "0742-23-3968",
    "lat": 34.683206,
    "lon": 135.831547,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 11,
    "area": "A",
    "category": "文化施設[CF]",
    "name": "奈良県文化会館",
    "address": "奈良市登大路町6-2",
    "phone": "0742-23-8921",
    "lat": 34.682989,
    "lon": 135.830422,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 12,
    "area": "A",
    "category": "観光施設[TF]",
    "name": "奈良公園バスターミナル",
    "address": "奈良市登大路町76",
    "phone": "0742-81-3151",
    "lat": 34.681944,
    "lon": 135.831944,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 13,
    "area": "A",
    "category": "文化施設[CF]",
    "name": "奈良春日野国際フォーラム 甍",
    "address": "奈良市春日野町101",
    "phone": "0742-27-2630",
    "lat": 34.684733,
    "lon": 135.841611,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 14,
    "area": "A",
    "category": "観光施設[TF]",
    "name": "きてみてならSHOP",
    "address": "奈良市登大路町38-1",
    "phone": "0742-26-8828",
    "lat": 34.6827,
    "lon": 135.8312,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 15,
    "area": "A",
    "category": "観光施設[TF]",
    "name": "奈良市近鉄奈良駅総合観光案内所",
    "address": "奈良市東向中町28",
    "phone": "",
    "lat": 34.684006,
    "lon": 135.827944,
    "accessibility": {
      "multipurpose_toilet": false,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 16,
    "area": "B",
    "category": "社寺[ST]",
    "name": "元興寺",
    "address": "奈良市中院町11",
    "phone": "0742-23-1377",
    "lat": 34.677928,
    "lon": 135.831667,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 17,
    "area": "B",
    "category": "社寺[ST]",
    "name": "新薬師寺",
    "address": "奈良市高畑町1352",
    "phone": "0742-22-3736",
    "lat": 34.680181,
    "lon": 135.842303,
    "accessibility": {
      "multipurpose_toilet": false,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 18,
    "area": "B",
    "category": "博物館・美術館[M]",
    "name": "入江泰吉記念奈良市写真美術館",
    "address": "奈良市高畑町600-1",
    "phone": "0742-22-9811",
    "lat": 34.678767,
    "lon": 135.841894,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 19,
    "area": "B",
    "category": "博物館・美術館[M]",
    "name": "なら工藝館",
    "address": "奈良市阿字万字町1-1",
    "phone": "0742-27-0033",
    "lat": 34.681472,
    "lon": 135.828347,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 20,
    "area": "B",
    "category": "博物館・美術館[M]",
    "name": "奈良市杉岡華邨書道美術館",
    "address": "奈良市脇戸町3",
    "phone": "0742-24-4111",
    "lat": 34.6797,
    "lon": 135.8286,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 21,
    "area": "B",
    "category": "文化施設[CF]",
    "name": "奈良市史料保存館",
    "address": "奈良市脇戸町1-1",
    "phone": "0742-27-0169",
    "lat": 34.6801,
    "lon": 135.8283,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 22,
    "area": "B",
    "category": "観光施設[TF]",
    "name": "奈良町にぎわいの家",
    "address": "奈良市中新屋町5",
    "phone": "0742-20-1917",
    "lat": 34.676856,
    "lon": 135.830289,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 23,
    "area": "B",
    "category": "文化施設[CF]",
    "name": "ならまちセンター",
    "address": "奈良市東寺林町38",
    "phone": "0742-27-1151",
    "lat": 34.677111,
    "lon": 135.830639,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 24,
    "area": "B",
    "category": "文化施設[CF]",
    "name": "名勝大乗院庭園文化館",
    "address": "奈良市高畑町1083-1",
    "phone": "0742-24-0808",
    "lat": 34.677764,
    "lon": 135.834825,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 25,
    "area": "B",
    "category": "文化施設[CF]",
    "name": "猿沢イン NARA Visitor Centre & Inn",
    "address": "奈良市池之町3",
    "phone": "0742-81-8585",
    "lat": 34.68,
    "lon": 135.83,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 26,
    "area": "B",
    "category": "観光施設[TF]",
    "name": "奈良市奈良町南観光案内所 鹿の舟",
    "address": "奈良市井上町11",
    "phone": "0742-94-3500",
    "lat": 34.6765,
    "lon": 135.8305,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 27,
    "area": "B",
    "category": "観光施設[TF]",
    "name": "奈良市京終駅観光案内所 ハテノミドリ",
    "address": "奈良市南京終町204-3",
    "phone": "0742-55-0086",
    "lat": 34.6626,
    "lon": 135.8312,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 28,
    "area": "C",
    "category": "社寺[ST]",
    "name": "般若寺",
    "address": "奈良市般若寺町221",
    "phone": "0742-22-6287",
    "lat": 34.702742,
    "lon": 135.842531,
    "accessibility": {
      "multipurpose_toilet": false,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 29,
    "area": "C",
    "category": "社寺[ST]",
    "name": "転害門",
    "address": "奈良市雑司町142-1",
    "phone": "0742-22-5511",
    "lat": 34.693658,
    "lon": 135.831417,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 30,
    "area": "C",
    "category": "観光施設[TF]",
    "name": "奈良市きたまち転害門観光案内所",
    "address": "奈良市手貝町54-1",
    "phone": "0742-24-1940",
    "lat": 34.6939,
    "lon": 135.8312,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 31,
    "area": "D",
    "category": "社寺[ST]",
    "name": "大安寺",
    "address": "奈良市大安寺2-18-1",
    "phone": "0742-61-6312",
    "lat": 34.668889,
    "lon": 135.826667,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 32,
    "area": "D",
    "category": "文化施設[CF]",
    "name": "なら100年会館",
    "address": "奈良市三条宮前町7-1",
    "phone": "0742-34-0100",
    "lat": 34.680833,
    "lon": 135.809167,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 33,
    "area": "D",
    "category": "観光施設[TF]",
    "name": "奈良市総合観光案内所",
    "address": "奈良市三条本町1082",
    "phone": "0742-27-2223",
    "lat": 34.680556,
    "lon": 135.809722,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 34,
    "area": "D",
    "category": "観光施設[TF]",
    "name": "奈良市観光センター NARANICLE",
    "address": "奈良市上三条町23-4",
    "phone": "0742-22-3900",
    "lat": 34.681111,
    "lon": 135.813056,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 35,
    "area": "E",
    "category": "社寺[ST]",
    "name": "法華寺",
    "address": "奈良市法華寺町882",
    "phone": "0742-33-2261",
    "lat": 34.709167,
    "lon": 135.816667,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 36,
    "area": "E",
    "category": "社寺[ST]",
    "name": "海龍王寺",
    "address": "奈良市法華寺町897",
    "phone": "0742-33-5765",
    "lat": 34.709722,
    "lon": 135.816389,
    "accessibility": {
      "multipurpose_toilet": false,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 37,
    "area": "E",
    "category": "文化施設[CF]",
    "name": "平城宮跡 大極殿",
    "address": "奈良市佐紀町710-1",
    "phone": "0742-32-5106",
    "lat": 34.691694,
    "lon": 135.79425,
    "accessibility": {
      "multipurpose_toilet": false,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 38,
    "area": "E",
    "category": "文化施設[CF]",
    "name": "平城宮跡 朱雀門",
    "address": "奈良市二条大路南3-209",
    "phone": "0742-32-5106",
    "lat": 34.689333,
    "lon": 135.791444,
    "accessibility": {
      "multipurpose_toilet": false,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 39,
    "area": "E",
    "category": "文化施設[CF]",
    "name": "奈良文化財研究所 平城宮跡資料館",
    "address": "奈良市二条町2-9-1",
    "phone": "0742-30-6753",
    "lat": 34.690833,
    "lon": 135.794722,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 40,
    "area": "E",
    "category": "文化施設[CF]",
    "name": "平城宮いざない館",
    "address": "奈良市二条大路南3-5-1",
    "phone": "0742-36-8780",
    "lat": 34.689167,
    "lon": 135.791667,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 41,
    "area": "E",
    "category": "文化施設[CF]",
    "name": "天平みはらし館",
    "address": "奈良市二条大路南4-6-1",
    "phone": "0742-35-8201",
    "lat": 34.6875,
    "lon": 135.788889,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 42,
    "area": "E",
    "category": "文化施設[CF]",
    "name": "天平うまし館（遣唐使船）",
    "address": "奈良市二条大路南4-6-1",
    "phone": "0742-35-8201",
    "lat": 34.6875,
    "lon": 135.788889,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 43,
    "area": "E",
    "category": "文化施設[CF]",
    "name": "天平つどい館",
    "address": "奈良市二条大路南4-6-1",
    "phone": "0742-35-8201",
    "lat": 34.6875,
    "lon": 135.788889,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 44,
    "area": "E",
    "category": "文化施設[CF]",
    "name": "天平みつき館",
    "address": "奈良市三条大路1-5-38",
    "phone": "0742-34-5369",
    "lat": 34.688056,
    "lon": 135.792778,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 45,
    "area": "E",
    "category": "文化施設[CF]",
    "name": "平城京左京三条二坊 宮跡庭園",
    "address": "奈良市二条大路南1-3-1",
    "phone": "0742-30-1510",
    "lat": 34.686111,
    "lon": 135.797222,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 46,
    "area": "E",
    "category": "博物館・美術館[M]",
    "name": "奈良市美術館",
    "address": "奈良市三条大路1-691-1",
    "phone": "0742-32-2290",
    "lat": 34.687778,
    "lon": 135.7925,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 47,
    "area": "E",
    "category": "文化施設[CF]",
    "name": "奈良県コンベンションセンター",
    "address": "奈良市西大寺芝町1-1-5",
    "phone": "0742-45-4700",
    "lat": 34.694167,
    "lon": 135.780833,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": false
    }
  },
  {
    "id": 48,
    "area": "F",
    "category": "社寺[ST]",
    "name": "西大寺",
    "address": "奈良市西大寺芝町1-1-5",
    "phone": "0742-45-4700",
    "lat": 34.694444,
    "lon": 135.780833,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": false
    }
  },
  {
    "id": 49,
    "area": "F",
    "category": "社寺[ST]",
    "name": "薬師寺",
    "address": "奈良市西ノ京町457",
    "phone": "0742-33-6001",
    "lat": 34.668528,
    "lon": 135.784722,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 50,
    "area": "F",
    "category": "社寺[ST]",
    "name": "唐招提寺",
    "address": "奈良市五条町13-46",
    "phone": "0742-33-7900",
    "lat": 34.676111,
    "lon": 135.784722,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": true,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 51,
    "area": "G",
    "category": "社寺[ST]",
    "name": "霊山寺",
    "address": "奈良市中町3879",
    "phone": "0742-45-0081",
    "lat": 34.720556,
    "lon": 135.755278,
    "accessibility": {
      "multipurpose_toilet": true,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": false,
      "slope": true
    }
  },
  {
    "id": 52,
    "area": "G",
    "category": "博物館・美術館[M]",
    "name": "大和文華館",
    "address": "奈良市学園南1-11-6",
    "phone": "0742-45-0544",
    "lat": 34.663889,
    "lon": 135.737222,
    "accessibility": {
      "multipurpose_toilet": false,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": false,
      "elevator": true,
      "slope": true
    }
  },
  {
    "id": 53,
    "area": "G",
    "category": "博物館・美術館[M]",
    "name": "松伯美術館",
    "address": "奈良市登美ヶ丘2-1-4",
    "phone": "0742-41-6666",
    "lat": 34.691667,
    "lon": 135.75,
    "accessibility": {
      "multipurpose_toilet": false,
      "ostomate": false,
      "wheelchair_rental": false,
      "service_dog_allowed": false,
      "priority_parking": true,
      "elevator": true,
      "slope": true
    }
  }
];
