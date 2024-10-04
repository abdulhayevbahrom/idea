// const mahsulotlarkatalogi = [
//     {
//         id: 1,
//         name: 'Smartfonlar',
//         title: 'Smartfonlar',
//         apple: 'Smartfonlar Apple',
//         samsung: 'Smartfonlar Samsung',
//         huawei: 'Smartfonlar Huawei',
//         xioami: 'Smartfonlar Xiaomi',
//         vivo: 'Smartfonlar VIVO',
//         korsatish: 'Koʻproq koʻrsatish'
//     },
//     {
//         id: 2,
//         name: 'ТВ, аудио и видео',
//         title: 'Audio tizimlar',
//         apple: 'Tyunerlar va TV-pristavkalar',
//         samsung: 'Televizorlar',
//         huawei: 'Kronshteynlar',
//     },
//     {
//         id: 3,
//         name: 'Maishiy texnika',
//         title: 'Iqlim texnikasi',
//         apple: 'Biriktiladigan texnikalar',
//         samsung: 'Katta maishiy texnika',
//         Kondi: 'Konditsionerlar',
//         Ventil: 'Ventilyatorlar',
//         Havo: 'Havo tozalagichlar',
//         tozalagichlar: 'Havo namlagichlar',
//         Suv: 'Suv isitgichlar',
//         Dudboronlar: 'Dudboronlar',
//         Pishirish: 'Pishirish panelini',
//         Pechlar: 'Pechlar',
//         Katta: 'Katta maishiy texnika',
//         Oshxona: 'Oshxona plitalari',
//         yuvish: 'Kir yuvish mashinalari',
//         Sovut: 'Sovutgichlar',
//         Uyuchun: 'Uy uchun kichik texnika',
//         Chang: 'Chang yutgichlar',
//         Dazmol: 'Dazmollar',
//         Tikuv: 'Tikuv mashinalari',
//         Tarozilar: 'Tarozilar',
//         Buglagichlar: 'Bugʻlagichlar',
//         Oshxona: 'Oshxona uchun kichik jihozlar',
//         Mikroto: 'Mikrotolqinli pechlar',
//         Mini: 'Mini pechlar',
//         Blenderlar: 'Blenderlar',
//         Qahva: 'Qahva qaynatgichlar',
//         mayda: 'Qahva maydalagichlar',
//         Koproq: 'Koʻproq koʻrsatish',
//     },
//     {
//         id: 4,
//         Gozallik: 'Gozallik va soglik',
//         tekislagich: 'Soch tekislagichlar',
//         quritgichlar: 'Soch quritgichlar',
//         Soqol: 'Soqol olish mashinalari',
//         Soch: 'Soch toʻgʻrilash vositalari',
//         quritgich: 'Soch quritgich choʻtkalari',
//         Elektr: 'Elektr tish chotkalari',
//         Trimmerlar: 'Trimmerlar',
//         Epilyatorlar: 'Epilyatorlar',
//     },
//     {
//         id: 5,
//         Noutbuklar: 'Noutbuklar va kompyuterlar',
//         Noutbuk: 'Noutbuklar',
//         Routerlar: 'Routerlar',
//         Ryukzaklar: 'Ryukzaklar va sumkalar',
//         Kompyuterlar: 'Kompyuterlar',
//         Tarkibiy: 'Tarkibiy qismlar',
//         Printerlar: 'Printerlar',
//         Monobloklar: 'Monobloklar',
//         Klaviaturalar: 'Klaviaturalar',
//         printerlari: 'KFQ printerlari',
//         Klaviatura: 'Klaviaturalar va sichqonchalar',
//         Printer: 'Printerlar',
//         Sichqonchalar: 'Sichqonchalar',
//         Monitorlar: 'Monitorlar',
//         Malumot: 'Malumot saqlash vositalari va boshqalar',
//         Qattiq: 'Qattiq disklar',
//         Uzaytirgich: 'Uzaytirgichlar',
//         Flesh: 'Flesh xotira',
//     },
//     {
//         id: 6,
//         Gadjetlar: 'Gadjetlar va aksessuarlar',
//         Planshetlar: 'Planshetlar',
//         Smartsoatlar: 'Smart-soatlar',
//         Fitnes: 'Fitnes bilaguzuklar',
//         Quloqchinlar: 'Quloqchinlar',
//         Tashqixotiralar: 'Tashqi xotiralar',
//         Akkumulyatorlar: 'Akkumulyatorlar',
//         Zaryadlash: 'Zaryadlash qurilmalari',
//     },
//     {
//         id: 7,
//         Avto: 'Avto zona',
//         Poklik: 'Poklik va tozalik',
//         Tyuning: 'Tyuning va xavfsizlik',
//         Qulayliklar: 'Qulayliklar va aksessuarlar',
//         Радар: 'Радар-детекторы',
//         Avtomobil: 'Avtomobil gilamchalari',
//         Avtosignal: 'Avtosignalizatsiyalar',
//         Videor: 'Videoregistratorlar',
//     },
//     {
//         id: 8,
//         Sport: 'Sport uchun buyumlar',
//         Velot: 'Velotrenajyorlar',
//         Elektr: 'Elektr trenajyorlar',
//         Беговые: 'Беговые дорожки',
//     },
//     {
//         id: 9,
//         Tamirlash: 'Tamirlash uchun asboblar',
//         Perforatorlar: 'Perforatorlar',
//         Drellar: 'Drellar',
//         Bolgarkalar: 'Bolgarkalar',
//         Maysa: 'Maysa orish qurilmalari',
//         Kesish: 'Kesish va arralash asboblari',
//         Asboblar: 'Asboblar toplami',
//         Stabilizator: 'Stabilizatorlar',
//         Payvandlash: 'Payvandlash apparatlari',
//         Shurup: 'Shurup buragichlar',
//         Issiqlik: 'Issiqlik moslamalari',
//     },
//     {
//         id: 10,
//         Bolalar: 'Bolalar uchun tovarlar',
//         Elektromobillar: 'Elektromobillar'
//     },
//     {
//         Video: 'Video kuzatuv tizimlari',
//         kuzatuv: 'Video kuzatuv tizimlari',
//         tizimlari: 'Video kuzatuv tizimlari Ezviz',
//     },
//     {
//         Ofis: 'Ofis va uy uchun mebel',
//         Statsionar: 'Statsionar telefonlar',
//         Kiyim: 'Kiyim quritgichlar',
//         Dazmol: 'Dazmol stollari',
//         Kreslolar: 'Kreslolar',
//     },
//     {
//         Oshxona: 'Oshxona buyumlari',
//         Choynaklar: 'Choynaklar',
//         Kostryulkalar: 'Kostryulkalar',
//         Tovalar: 'Tovalar',
//         Qozonlar: 'Qozonlar',
//     }
// ]




export const catalogData = [
  {
    title: "Smartfonlar",
    catalogItemData: [
      {
        catalogItemTitle: "Smartfonlar",
        catalogItemLinks: [
          {
            title: "Smartfonlar Apple",
            link: "apple",
          },
          {
            title: "Smartfonlar Samsung",
            link: "samsung",
          },
          {
            title: "Smartfonlar Huawei",
            link: "huawei",
          },
          {
            title: "Smartfonlar Xiaomi",
            link: "xiaomi",
          },
          {
            title: "Smartfonlar Vivo",
            link: "vivo",
          },
        ],
      },
    ],
  },

  {
    title: "TV Audio va video",
    catalogItemData: [
      {
        catalogItemTitle: "Audio tizimlar",
        catalogItemLinks: [],
      },
      {
        catalogItemTitle: "Tyunerlar va TV-pristavkalar",
        catalogItemLinks: [],
      },
      {
        catalogItemTitle: "Televizorlar",
        catalogItemLinks: [],
      },
      {
        catalogItemTitle: "Kronshteynlar",
        catalogItemLinks: [],
      },
    ],
  },

  {
    title: "Maishiy texnika",
    catalogItemData: [
      {
        catalogItemTitle: "Iqlim texnikasi",
        catalogItemLinks: [
          {
            title: "Konditsionerlar",
          },
          {
            title: "Ventilyatorlar",
          },
          {
            title: "Havo tozalagichlar",
          },
          {
            title: "Havo namlagichlar",
          },
          {
            title: "Suv isitgichlar",
          },
        ],
      },
      {
        catalogItemTitle: "Biriktiladigan texnikalar",
        catalogItemLinks: [
          {
            title: "Dudbo'ronlar",
          },
          {
            title: "Pishirish panelini",
          },
          {
            title: "Pechlar",
          },
        ],
      },
      {
        catalogItemTitle: "BKatta maishiy texnika",
        catalogItemLinks: [
          {
            title: "Oshxona plitalari",
          },
          {
            title: "Kir yuvish mashinalari",
          },
          {
            title: "Sovutgichlar",
          },
        ],
      },
      {
        catalogItemTitle: "Uy uchun kichik texnika",
        catalogItemLinks: [
          {
            title: "Chang yutgichlar",
          },
          {
            title: "Dazmollar",
          },
          {
            title: "Tikuv mashinalari",
          },
          {
            title: "Tarozilar",
          },
          {
            title: "Bugʻlagichlar",
          },
        ],
      },
      {
        catalogItemTitle: "Oshxona uchun kichik jihozlar",
        catalogItemLinks: [
          {
            title: "Mikroto'lqinli pechlar",
          },
          {
            title: "Mini pechlar",
          },
          {
            title: "Blenderlar",
          },
          {
            title: "Qahva qaynatgichlar",
          },
          {
            title: "Qahva maydalagichlar",
          },
        ],
      },
    ],
  },
  {
    title: "Go'zallik va so'glik",
    catalogItemData: [
      {
        catalogItemTitle: "Soch tekislagichlar",
        catalogItemLinks: [],
      },
      {
        catalogItemTitle: "Soch toʻgʻrilash vositalari",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Trimmerlar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Soch quritgichlar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Soch quritgich choʻtkalari",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Epilyatorlar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Soqol olish mashinalari",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Elektr tish cho'tkalari",
        catalogItemLinks: []
      }
    ],
  },
  {
    title: "Noutbuklar va kompyuterlar",
    catalogItemData: [
      {
        catalogItemTitle: "Noutbuklar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Routerlar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Ryukzaklar va sumkalar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Kompyuterlar",
        catalogItemLinks: [
          {
            title: "Monobloklar"
          }
        ]
      },
      {
        catalogItemTitle: "Tarkibiy qismlar",
        catalogItemLinks: [
          {
            title: "Klaviaturalar",
            link: "apple",
          },
          {
            title: "Klaviaturalar va sichqonchalar",
            link: "samsung",
          },
          {
            title: "Sichqonchalar",
            link: "huawei",
          },
          {
            title: "Monitorlar",
            link: "xiaomi",
          },
        ],
      },
      {
        catalogItemTitle: "Printerlar",
        catalogItemLinks: [
          {
            title: "KFQ printerlari",
          },
          {
            title: "Printerlar",
          }
        ]
      },
      {
        catalogItemTitle: "Ma'lumot saqlash vositalari va boshqalar",
        catalogItemLinks: [
          {
            title: "Uzaytirgichlar",
          },
          {
            title: "Flesh xotira",
          }
        ]
      },
      {
        catalogItemTitle: "Qattiq disklar",
        catalogItemLinks: []
      },
    ],
  },
  {
    title: "Gadjetlar va aksessuarlar",
    catalogItemData: [
      {
        catalogItemTitle: "Planshetlar",
        catalogItemLinks: [],
      },
      {
        catalogItemTitle: "Smart-soatlar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Fitnes bilaguzuklar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Quloqchinlar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Tashqi xotiralar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Akkumulyatorlar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Zaryadlash qurilmalari",
        catalogItemLinks: []
      },
    ],
  },
  {
    title: "Avto zona",
    catalogItemData: [
      {
        catalogItemTitle: "Poklik va tozalik",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Tyuning va xavfsizlik",
        catalogItemLinks: [
          {
            title: "Радар-детекторы",
          },
          {
            title: "Avtosignalizatsiyalar",
          },
          {
            title: "Videoregistratorlar",
          },
        ],
      },
      {
        catalogItemTitle: "Qulayliklar va aksessuarlar",
        catalogItemLinks: [
          {
            title: "Avtomobil gilamchalari",
          },
        ],
      },
      {
        catalogItemTitle: "Avtotovush",
        catalogItemLinks: [
          {
            title: "Avtomobil akustikasi",
          },
          {
            title: "Avtomagnitolalar",
          },
        ],
      },
    ],
  },
  {
    title: "Ta'mirlash uchun asboblar",
    catalogItemData: [
      {
        catalogItemTitle: "Perforatorlar",
        catalogItemLinks: [],
      },
      {
        catalogItemTitle: "Drellar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Bolgarkalar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Maysa o'rish qurilmalari",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Kesish va arralash asboblari",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Asboblar to'plami",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Stabilizatorlar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Payvandlash apparatlari",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Shurup buragichlar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Issiqlik moslamalari",
        catalogItemLinks: []
      },
    ],
  },
  {
    title: "Bolalar uchun tovarlar",
    catalogItemData: [
      {
        catalogItemTitle: "Elektromobillar",
        catalogItemLinks: []
      }
    ]
  },
  {
    title: "Video kuzatuv tizimlari",
    catalogItemData: [
      {
        catalogItemTitle: "Video kuzatuv tizimlari",
        catalogItemLinks: [
          {
            title: "Video kuzatuv tizimlari Ezviz"
          }
        ]
      }
    ]
  },
  {
    title: "Ofis va uy uchun mebel",
    catalogItemData: [
      {
        catalogItemTitle: "Statsionar telefonlar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Kiyim quritgichlar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Dazmol stollari",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Kreslolar",
        catalogItemLinks: []
      },
    ]
  },
  {
    title: "Oshxona buyumlari",
    catalogItemData: [
      {
        catalogItemTitle: "Choynaklar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Kostryulkalar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Tovalar",
        catalogItemLinks: []
      },
      {
        catalogItemTitle: "Qozonlar",
        catalogItemLinks: []
      },
    ]
  },
];
