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
            title: "Smartfonlar apple",
            link: "apple",
          },
          {
            title: "Smartfonlar samsung",
            link: "samsung",
          },
          {
            title: "Smartfonlar xiaomi",
            link: "xiaomi",
          },
          {
            title: "Smartfonlar huawei",
            link: "huawei",
          },
          {
            title: "Smartfonlar vivo",
            link: "vivo",
          },
          {
            title: "Smartfonlar korsatish",
            link: "korsatish",
          },
          {
            title: "Smartfonlar sony",
            link: "sony",
          },
          {
            title: "Smartfonlar nokia",
            link: "nokia",
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
        catalogItemLinks: [
          {
            title: "Sambufer",
            link: "/",
          },
          {
            title: "Music center",
            link: "/",
          },
        ],
      },
      {
        catalogItemTitle: "Kronshteynlar",
        catalogItemLinks: [
          {
            title: "Sambufer",
            link: "/",
          },
          {
            title: "Music center",
            link: "/",
          },
        ],
      },
      {
        catalogItemTitle: "Tyunerlar va TV-pristavkalar",
        catalogItemLinks: [
          {
            title: "Sambufer",
            link: "/",
          },
          {
            title: "Music center",
            link: "/",
          },
        ],
      },
      {
        catalogItemTitle: "Televizorlar",
        catalogItemLinks: [
          {
            title: "Sambufer",
            link: "/",
          },
          {
            title: "Music center",
            link: "/",
          },
        ],
      },
    ],
  },
];
