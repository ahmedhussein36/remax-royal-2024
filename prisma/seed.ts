import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const compounds: any[] = [
    {
        "compoundId": 530,
        "name": "سيلفر ساندز",
        "is_super": true,
        "slug": "530-سيلفر-ساندز-الساحل-الشمالي",
        "properties_count": 4,
        "image": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/medium_3A-Back-01-S1.jpg",
        "min_price": 38103000,
        "max_price": 178189000,
        "min_unit_area": 206,
        "max_unit_area": 298,
        "available_bathrooms": [
            3,
            4
        ],
        "available_bedrooms": [
            3,
            4
        ],
        "currency": "جم",
        "developerId": 85,
        "areaId": 3,
        "sponsored": 0,
        "max_installment_years": 6,
        "min_down_payment": 3810300,
        "min_ready_by": "2027-01-01",
        "properties_ids": [
            47278,
            47279,
            47358,
            48146
        ],
        "sum_10_properties_min_price": 932171000,
        "lat": 31.18973063,
        "long": 27.59368658,
        "has_offer": false,
        "has_launches": false,
        "is_launch": false,
        "offer_title": null,
        "limited_time_offer": true,
        "property_types": [
            "شقة",
            "فيلا",
            "توين هاوس",
            "شاليه"
        ],
        "advertising_image_path": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/Silvertown_Ora.jpg",
        "property_types_count": [
            {
                "id": 21,
                "name": "شقة",
                "count": 1,
                "total": 1,
                "rank": 1
            },
            {
                "id": 1,
                "name": "فيلا",
                "count": 7,
                "total": 7,
                "rank": 2
            },
            {
                "id": 6,
                "name": "توين هاوس",
                "count": 1,
                "total": 1,
                "rank": 3
            },
            {
                "id": 5,
                "name": "شاليه",
                "count": 9,
                "total": 9,
                "rank": 7
            }
        ],
        "favorite": false,
        "property_types_count_highlighted": {
            "highlighted": [],
            "rest": [
                {
                    "id": 21,
                    "name": "شقة",
                    "count": 1,
                    "total": 1,
                    "rank": 1
                },
                {
                    "id": 1,
                    "name": "فيلا",
                    "count": 7,
                    "total": 7,
                    "rank": 2
                },
                {
                    "id": 6,
                    "name": "توين هاوس",
                    "count": 1,
                    "total": 1,
                    "rank": 3
                },
                {
                    "id": 5,
                    "name": "شاليه",
                    "count": 9,
                    "total": 9,
                    "rank": 7
                }
            ]
        }
    },
    {
        "compoundId": 1037,
        "name": "اكاسا ميا",
        "is_super": false,
        "slug": "1037-اكاسا-ميا",
        "properties_count": 4,
        "image": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/acasa_mia_02.png",
        "min_price": 6000000,
        "max_price": 8643024,
        "min_unit_area": 105,
        "max_unit_area": 160,
        "available_bathrooms": [
            2,
            3
        ],
        "available_bedrooms": [
            2,
            3
        ],
        "currency": "جم",
        "developerId": 336,
        "areaId": 2,
        "sponsored": 0,
        "max_installment_years": 8,
        "min_down_payment": 600000,
        "min_ready_by": "2028-01-29",
        "properties_ids": [
            45901,
            48234,
            48566,
            48567
        ],
        "sum_10_properties_min_price": 49517275,
        "lat": 30.07826662,
        "long": 31.54943837,
        "has_offer": false,
        "has_launches": false,
        "is_launch": false,
        "offer_title": null,
        "limited_time_offer": true,
        "property_types": [
            "شقة"
        ],
        "advertising_image_path": "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/compound/advertising_image/1037/acasamia.jpg",
        "property_types_count": [
            {
                "id": 21,
                "name": "شقة",
                "count": 4,
                "total": 4,
                "rank": 1
            }
        ],
        "favorite": false,
        "property_types_count_highlighted": {
            "highlighted": [],
            "rest": [
                {
                    "id": 21,
                    "name": "شقة",
                    "count": 4,
                    "total": 4,
                    "rank": 1
                }
            ]
        }
    },
    {
        "compoundId": 827,
        "name": "ريفرز",
        "is_super": false,
        "slug": "827-ريفرز",
        "properties_count": 17,
        "image": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/827/Screenshot_2023-02-28_192904.png",
        "min_price": 9214000,
        "max_price": 42354000,
        "min_unit_area": 120,
        "max_unit_area": 250,
        "available_bathrooms": [
            3,
            4,
            5
        ],
        "available_bedrooms": [
            2,
            3,
            4,
            5
        ],
        "currency": "جم",
        "developerId": 33,
        "areaId": 1,
        "sponsored": 0,
        "max_installment_years": 8,
        "min_down_payment": 921400,
        "min_ready_by": "2028-08-01",
        "properties_ids": [
            38905,
            38906,
            38908,
            38909,
            38910,
            38911,
            38912,
            38913,
            39001,
            40013
        ],
        "sum_10_properties_min_price": 98053000,
        "lat": 30.07251077,
        "long": 30.85613251,
        "has_offer": false,
        "has_launches": false,
        "is_launch": false,
        "offer_title": "",
        "limited_time_offer": true,
        "property_types": [
            "شقة",
            "فيلا",
            "توين هاوس",
            "تاون هاوس",
            "دوبلكس"
        ],
        "advertising_image_path": null,

        "property_types_count": [
            {
                "id": 21,
                "name": "شقة",
                "count": 10,
                "total": 10,
                "rank": 1
            },
            {
                "id": 1,
                "name": "فيلا",
                "count": 6,
                "total": 6,
                "rank": 2
            },
            {
                "id": 6,
                "name": "توين هاوس",
                "count": 3,
                "total": 3,
                "rank": 3
            },
            {
                "id": 7,
                "name": "تاون هاوس",
                "count": 4,
                "total": 4,
                "rank": 4
            },
            {
                "id": 3,
                "name": "دوبلكس",
                "count": 2,
                "total": 2,
                "rank": 5
            }
        ],
        "favorite": false,
        "property_types_count_highlighted": {
            "highlighted": [],
            "rest": [
                {
                    "id": 21,
                    "name": "شقة",
                    "count": 10,
                    "total": 10,
                    "rank": 1
                },
                {
                    "id": 1,
                    "name": "فيلا",
                    "count": 6,
                    "total": 6,
                    "rank": 2
                },
                {
                    "id": 6,
                    "name": "توين هاوس",
                    "count": 3,
                    "total": 3,
                    "rank": 3
                },
                {
                    "id": 7,
                    "name": "تاون هاوس",
                    "count": 4,
                    "total": 4,
                    "rank": 4
                },
                {
                    "id": 3,
                    "name": "دوبلكس",
                    "count": 2,
                    "total": 2,
                    "rank": 5
                }
            ]
        }
    },
    {
        "compoundId": 84,
        "name": "فوكا باي",
        "is_super": false,
        "slug": "84-فوكا-باي",
        "properties_count": 14,
        "image": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/medium_mWlfcnewzlOLFWs0xhWIYMRtk6SihM.jpg",
        "min_price": 12672000,
        "max_price": 177577000,
        "min_unit_area": 50,
        "max_unit_area": 542,
        "available_bathrooms": [
            1,
            2,
            3,
            4,
            7
        ],
        "available_bedrooms": [
            1,
            2,
            3,
            4,
            6
        ],
        "currency": "جم",
        "developerId": 33,
        "areaId": 3,
        "sponsored": 0,
        "max_installment_years": 8,
        "min_down_payment": 1267200,
        "min_ready_by": "2026-12-30",
        "properties_ids": [
            46096,
            46097,
            46098,
            46100,
            46101,
            46103,
            46105,
            46106,
            46107,
            46108
        ],
        "sum_10_properties_min_price": 155126000,
        "lat": 31.08491717,
        "long": 27.93477544,
        "has_offer": false,
        "has_launches": false,
        "is_launch": false,
        "offer_title": "",
        "limited_time_offer": true,
        "property_types": [
            "فيلا",
            "بينت هاوس",
            "شاليه"
        ],
        "advertising_image_path": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/Fokabay.png",
        "property_types_count": [
            {
                "id": 1,
                "name": "فيلا",
                "count": 5,
                "total": 5,
                "rank": 2
            },
            {
                "id": 4,
                "name": "بينت هاوس",
                "count": 2,
                "total": 2,
                "rank": 6
            },
            {
                "id": 5,
                "name": "شاليه",
                "count": 9,
                "total": 9,
                "rank": 7
            }
        ],
        "favorite": false,
        "property_types_count_highlighted": {
            "highlighted": [],
            "rest": [
                {
                    "id": 1,
                    "name": "فيلا",
                    "count": 5,
                    "total": 5,
                    "rank": 2
                },
                {
                    "id": 4,
                    "name": "بينت هاوس",
                    "count": 2,
                    "total": 2,
                    "rank": 6
                },
                {
                    "id": 5,
                    "name": "شاليه",
                    "count": 9,
                    "total": 9,
                    "rank": 7
                }
            ]
        }
    },
    {
        "compoundId": 452,
        "name": "دي باي ",
        "is_super": false,
        "slug": "452-دي-باي-الساحل-الشمالي-تطوير-مصر",
        "properties_count": 3,
        "image": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/medium_d-b-2.jpg",
        "min_price": 16394000,
        "max_price": 120568000,
        "min_unit_area": 110,
        "max_unit_area": 370,
        "available_bathrooms": [
            2,
            5,
            6
        ],
        "available_bedrooms": [
            3,
            4,
            5
        ],
        "currency": "جم",
        "developerId": 33,
        "areaId": 3,
        "sponsored": 0,
        "max_installment_years": 7,
        "min_down_payment": 1639400,
        "min_ready_by": "2028-12-30",
        "properties_ids": [
            46092,
            46093,
            46095
        ],
        "sum_10_properties_min_price": 368626000,
        "lat": 31.08190054,
        "long": 28.39811325,
        "has_offer": false,
        "has_launches": false,
        "is_launch": false,
        "offer_title": "مقدم 5٪؜ و بعد ثلاث اشهر 5٪ ",
        "limited_time_offer": true,
        "property_types": [
            "فيلا",
            "توين هاوس",
            "شاليه"
        ],
        "advertising_image_path": "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/compound/advertising_image/452/Dbay.png",
        "property_types_count": [
            {
                "id": 1,
                "name": "فيلا",
                "count": 1,
                "total": 1,
                "rank": 2
            },
            {
                "id": 6,
                "name": "توين هاوس",
                "count": 1,
                "total": 1,
                "rank": 3
            },
            {
                "id": 5,
                "name": "شاليه",
                "count": 4,
                "total": 4,
                "rank": 7
            }
        ],
        "favorite": false,
        "property_types_count_highlighted": {
            "highlighted": [],
            "rest": [
                {
                    "id": 1,
                    "name": "فيلا",
                    "count": 1,
                    "total": 1,
                    "rank": 2
                },
                {
                    "id": 6,
                    "name": "توين هاوس",
                    "count": 1,
                    "total": 1,
                    "rank": 3
                },
                {
                    "id": 5,
                    "name": "شاليه",
                    "count": 4,
                    "total": 4,
                    "rank": 7
                }
            ]
        }
    },
    {
        "compoundId": 728,
        "name": "لا سيرينا بالم بيتش",
        "is_super": false,
        "slug": "728-لا-سيرينا-بالم-بيتش",
        "properties_count": 19,
        "image": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/medium_1.jpg",
        "min_price": 2420000,
        "max_price": 22000000,
        "min_unit_area": 40,
        "max_unit_area": 300,
        "available_bathrooms": [
            1,
            2,
            3,
            4
        ],
        "available_bedrooms": [
            0,
            1,
            2,
            3,
            4,
            6
        ],
        "currency": "جم",
        "developerId": 215,
        "areaId": 4,
        "sponsored": 0,
        "max_installment_years": 8,
        "min_down_payment": 378500,
        "min_ready_by": "2024-05-31",
        "properties_ids": [
            42327,
            42329,
            42342,
            48260,
            48261,
            48584,
            48585,
            48586,
            48587,
            48588
        ],
        "sum_10_properties_min_price": 25230000,
        "lat": 29.74148235,
        "long": 32.39290953,
        "has_offer": false,
        "has_launches": false,
        "is_launch": false,
        "offer_title": null,
        "limited_time_offer": true,
        "property_types": [
            "فيلا",
            "دوبلكس",
            "شاليه",
            "إستوديو"
        ],
        "advertising_image_path": null,
        "property_types_count": [
            {
                "id": 1,
                "name": "فيلا",
                "count": 2,
                "total": 2,
                "rank": 2
            },
            {
                "id": 3,
                "name": "دوبلكس",
                "count": 3,
                "total": 3,
                "rank": 5
            },
            {
                "id": 5,
                "name": "شاليه",
                "count": 15,
                "total": 15,
                "rank": 7
            },
            {
                "id": 9,
                "name": "إستوديو",
                "count": 1,
                "total": 1,
                "rank": 8
            }
        ],
        "favorite": false,
        "property_types_count_highlighted": {
            "highlighted": [],
            "rest": [
                {
                    "id": 1,
                    "name": "فيلا",
                    "count": 2,
                    "total": 2,
                    "rank": 2
                },
                {
                    "id": 3,
                    "name": "دوبلكس",
                    "count": 3,
                    "total": 3,
                    "rank": 5
                },
                {
                    "id": 5,
                    "name": "شاليه",
                    "count": 15,
                    "total": 15,
                    "rank": 7
                },
                {
                    "id": 9,
                    "name": "إستوديو",
                    "count": 1,
                    "total": 1,
                    "rank": 8
                }
            ]
        }
    },
    {
        "compoundId": 725,
        "name": "كايب باي لا سيرينا",
        "is_super": false,
        "slug": "725-كايب-باي-لا-سيرينا-السخنه",
        "properties_count": 21,
        "image": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/medium_1.jpg",
        "min_price": 3550000,
        "max_price": 6240000,
        "min_unit_area": 60,
        "max_unit_area": 120,
        "available_bathrooms": [
            1,
            2
        ],
        "available_bedrooms": [
            1,
            2,
            3
        ],
        "currency": "جم",
        "developerId": 215,
        "areaId": 4,
        "sponsored": 0,
        "max_installment_years": 9,
        "min_down_payment": 532500,
        "min_ready_by": "2027-12-31",
        "properties_ids": [
            31910,
            31911,
            31912,
            31913,
            31914,
            31915,
            31918,
            31919,
            31920,
            31921
        ],
        "sum_10_properties_min_price": 38000000,
        "lat": 29.74776084,
        "long": 32.39029169,
        "has_offer": false,
        "has_launches": false,
        "is_launch": false,
        "offer_title": null,
        "limited_time_offer": true,
        "property_types": [
            "شاليه"
        ],
        "advertising_image_path": null,
        "property_types_count": [
            {
                "id": 5,
                "name": "شاليه",
                "count": 22,
                "total": 22,
                "rank": 7
            }
        ],
        "favorite": false,
        "property_types_count_highlighted": {
            "highlighted": [],
            "rest": [
                {
                    "id": 5,
                    "name": "شاليه",
                    "count": 22,
                    "total": 22,
                    "rank": 7
                }
            ]
        }
    },
    {
        "compoundId": 490,
        "name": "البوسكو سيتي",
        "is_super": true,
        "slug": "490-البوسكو-سيتي-القاهرة-الجديدة",
        "properties_count": 19,
        "image": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/medium_Screenshot_9.png",
        "min_price": 7584250,
        "max_price": 57450380,
        "min_unit_area": 107,
        "max_unit_area": 459,
        "available_bathrooms": [
            2,
            3,
            4,
            6
        ],
        "available_bedrooms": [
            2,
            3,
            5
        ],
        "currency": "جم",
        "developerId": 55,
        "areaId": 10,
        "sponsored": 0,
        "max_installment_years": 9,
        "min_down_payment": 379213,
        "min_ready_by": "2027-11-29",
        "properties_ids": [
            32995,
            33210,
            34110,
            36147,
            39158,
            39160,
            39161,
            39163,
            39164,
            39165
        ],
        "sum_10_properties_min_price": 76296887,
        "lat": 30.0701153,
        "long": 31.66105271,
        "has_offer": true,
        "has_launches": true,
        "is_launch": false,
        "offer_title": "",
        "limited_time_offer": true,
        "property_types": [
            "شقة",
            "فيلا",
            "توين هاوس",
            "تاون هاوس",
            "دوبلكس"
        ],
        "advertising_image_path": "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/compound/advertising_image/490/La_Radura.jpg",
        "property_types_count": [
            {
                "id": 21,
                "name": "شقة",
                "count": 17,
                "total": 17,
                "rank": 1
            },
            {
                "id": 1,
                "name": "فيلا",
                "count": 5,
                "total": 5,
                "rank": 2
            },
            {
                "id": 6,
                "name": "توين هاوس",
                "count": 1,
                "total": 1,
                "rank": 3
            },
            {
                "id": 7,
                "name": "تاون هاوس",
                "count": 2,
                "total": 2,
                "rank": 4
            },
            {
                "id": 3,
                "name": "دوبلكس",
                "count": 4,
                "total": 4,
                "rank": 5
            }
        ],
        "favorite": false,
        "property_types_count_highlighted": {
            "highlighted": [],
            "rest": [
                {
                    "id": 21,
                    "name": "شقة",
                    "count": 17,
                    "total": 17,
                    "rank": 1
                },
                {
                    "id": 1,
                    "name": "فيلا",
                    "count": 5,
                    "total": 5,
                    "rank": 2
                },
                {
                    "id": 6,
                    "name": "توين هاوس",
                    "count": 1,
                    "total": 1,
                    "rank": 3
                },
                {
                    "id": 7,
                    "name": "تاون هاوس",
                    "count": 2,
                    "total": 2,
                    "rank": 4
                },
                {
                    "id": 3,
                    "name": "دوبلكس",
                    "count": 4,
                    "total": 4,
                    "rank": 5
                }
            ]
        }
    },
    {
        "compoundId": 1067,
        "name": "نمق",
        "is_super": false,
        "slug": "1067-ان-ام-كيو",
        "properties_count": 19,
        "image": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/1698844259443.jpg",
        "min_price": 9643000,
        "max_price": 34000000,
        "min_unit_area": 91,
        "max_unit_area": 295,
        "available_bathrooms": [
            0,
            2,
            3,
            4,
            5,
            6
        ],
        "available_bedrooms": [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        "currency": "جم",
        "developerId": 342,
        "areaId": 26,
        "sponsored": 0,
        "max_installment_years": 8,
        "min_down_payment": 482150,
        "min_ready_by": "2028-12-30",
        "properties_ids": [
            45790,
            45791,
            45797,
            45803,
            45805,
            45808,
            45809,
            45810,
            45811,
            47688
        ],
        "sum_10_properties_min_price": 130663000,
        "lat": 29.9935966,
        "long": 30.996094,
        "has_offer": true,
        "has_launches": false,
        "is_launch": false,
        "offer_title": "",
        "limited_time_offer": true,
        "property_types": [
            "شقة",
            "فيلا",
            "توين هاوس",
            "تاون هاوس",
            "دوبلكس",
            "مكتب"
        ],
        "advertising_image_path": null,
        "property_types_count": [
            {
                "id": 21,
                "name": "شقة",
                "count": 8,
                "total": 8,
                "rank": 1
            },
            {
                "id": 1,
                "name": "فيلا",
                "count": 3,
                "total": 3,
                "rank": 2
            },
            {
                "id": 6,
                "name": "توين هاوس",
                "count": 1,
                "total": 1,
                "rank": 3
            },
            {
                "id": 7,
                "name": "تاون هاوس",
                "count": 1,
                "total": 1,
                "rank": 4
            },
            {
                "id": 3,
                "name": "دوبلكس",
                "count": 4,
                "total": 4,
                "rank": 5
            },
            {
                "id": 8,
                "name": "مكتب",
                "count": 2,
                "total": 2,
                "rank": 10
            }
        ],
        "favorite": false,
        "property_types_count_highlighted": {
            "highlighted": [],
            "rest": [
                {
                    "id": 21,
                    "name": "شقة",
                    "count": 8,
                    "total": 8,
                    "rank": 1
                },
                {
                    "id": 1,
                    "name": "فيلا",
                    "count": 3,
                    "total": 3,
                    "rank": 2
                },
                {
                    "id": 6,
                    "name": "توين هاوس",
                    "count": 1,
                    "total": 1,
                    "rank": 3
                },
                {
                    "id": 7,
                    "name": "تاون هاوس",
                    "count": 1,
                    "total": 1,
                    "rank": 4
                },
                {
                    "id": 3,
                    "name": "دوبلكس",
                    "count": 4,
                    "total": 4,
                    "rank": 5
                },
                {
                    "id": 8,
                    "name": "مكتب",
                    "count": 2,
                    "total": 2,
                    "rank": 10
                }
            ]
        }
    },
    {
        "compoundId": 411,
        "name": "كيان",
        "is_super": false,
        "slug": "411-كيان",
        "properties_count": 5,
        "image": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/medium_IVIaiJIa7R2lxNIGZs5An15bAqQfMZ.jpg",
        "min_price": 3376105,
        "max_price": 8648091,
        "min_unit_area": 60,
        "max_unit_area": 135,
        "available_bathrooms": [
            1,
            2
        ],
        "available_bedrooms": [
            1,
            2,
            3
        ],
        "currency": "جم",
        "developerId": 112,
        "areaId": 1,
        "sponsored": 0,
        "max_installment_years": 5,
        "min_down_payment": 1012832,
        "min_ready_by": "2025-12-30",
        "properties_ids": [
            39938,
            39941,
            45338,
            45872,
            46654
        ],
        "sum_10_properties_min_price": 57120727,
        "lat": 30.00041279,
        "long": 30.90360577,
        "has_offer": false,
        "has_launches": false,
        "is_launch": false,
        "offer_title": null,
        "limited_time_offer": true,
        "property_types": [
            "شقة",
            "دوبلكس"
        ],
        "advertising_image_path": null,
        "property_types_count": [
            {
                "id": 21,
                "name": "شقة",
                "count": 6,
                "total": 6,
                "rank": 1
            },
            {
                "id": 3,
                "name": "دوبلكس",
                "count": 1,
                "total": 1,
                "rank": 5
            }
        ],
        "favorite": false,
        "property_types_count_highlighted": {
            "highlighted": [],
            "rest": [
                {
                    "id": 21,
                    "name": "شقة",
                    "count": 6,
                    "total": 6,
                    "rank": 1
                },
                {
                    "id": 3,
                    "name": "دوبلكس",
                    "count": 1,
                    "total": 1,
                    "rank": 5
                }
            ]
        }
    },
    {
        "compoundId": 754,
        "name": "ناينتي افينيو",
        "is_super": null,
        "slug": "754-ناينتي-افينيو",
        "properties_count": 15,
        "image": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/medium_1.png",
        "min_price": 9282161,
        "max_price": 19774911,
        "min_unit_area": 90,
        "max_unit_area": 190,
        "available_bathrooms": [
            2,
            3
        ],
        "available_bedrooms": [
            1,
            2,
            3
        ],
        "currency": "جم",
        "developerId": 221,
        "areaId": 2,
        "sponsored": 0,
        "max_installment_years": 7,
        "min_down_payment": 928217,
        "min_ready_by": "2024-07-30",
        "properties_ids": [
            41953,
            43950,
            43953,
            44476,
            46575,
            46576,
            48082,
            48083,
            48085,
            48086
        ],
        "sum_10_properties_min_price": 113376422,
        "lat": 0.0,
        "long": 0.0,
        "has_offer": false,
        "has_launches": false,
        "is_launch": false,
        "offer_title": null,
        "limited_time_offer": true,
        "property_types": [
            "شقة"
        ],
        "advertising_image_path": "https://res.cloudinary.com/dpzvseigo/image/upload/v1707820916/compounds/90Avenue.png",
        "property_types_count": [
            {
                "id": 21,
                "name": "شقة",
                "count": 18,
                "total": 18,
                "rank": 1
            }
        ],
        "favorite": false,
        "property_types_count_highlighted": {
            "highlighted": [],
            "rest": [
                {
                    "id": 21,
                    "name": "شقة",
                    "count": 18,
                    "total": 18,
                    "rank": 1
                }
            ]
        }
    }
]

const SubmitData = async () => {
    await prisma.compound.createMany({
        data: compounds.map((compound) => {
            return {
                compoundId: compound.compoundId,
                name: compound.name,
                is_super: compound.is_super,
                slug: compound.slug,
                properties_count: compound.properties_count,
                image: compound.image,
                min_price: compound.min_price,
                max_price: compound.max_price,
                min_unit_area: compound.min_unit_area,
                max_unit_area: compound.max_unit_area,
                available_bathrooms: compound.available_bathrooms,
                available_bedrooms: compound.available_bedrooms,
                currency: compound.currency,
                developerId: compound.developerId,
                areaId: compound.areaId,
                sponsored: compound.sponsored,
                max_installment_years: compound.max_installment_years,
                min_down_payment: compound.min_down_payment,
                min_ready_by: compound.min_ready_by,
                properties_ids: compound.properties_ids,
                sum_10_properties_min_price: compound.sum_10_properties_min_price,
                lat: compound.lat,
                long: compound.long,
                has_offer: compound.has_offer,
                has_launches: compound.has_launches,
                is_launch: compound.is_launch,
                offer_title: compound.offer_title,
                limited_time_offer: compound.limited_time_offer,
                property_types: compound.property_types,
                advertising_image_path: compound.advertising_image_path,
                property_types_count: compound.property_types_count,
                favorite: compound.favorite,
                property_types_count_highlighted: compound.property_types_count_highlighted,
            };
        })
    });
};

SubmitData().then(async () => {
    await prisma.$disconnect()
})
    .catch((e) => {
        console.log(e);
        process.exit(1);
    });

