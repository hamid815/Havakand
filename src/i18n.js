import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        // Header
        menu: "Menyu",
        about: "Biz haqimizda",
        address: "Manzil",
        contact: "Aloqa",
        b2b: "B2B uchun",
        phone: "+998 95 435 30 02",

        // Menyu
        menu_title: "Menyu",
        croissant: "Kruassan",
        pastries: "Pishiriqlar",
        baguette: "Baget",
        bread: "Non",
        cinnabon: "Sinnabon",

        // Slider
        slide1_title: "HAVAKAND BAKERY - ASL FRANSUZ TA'MI O'ZBEKISTONDA",
        slide1_text:
          "Eng sifatli mahsulotlardan tayyorlangan kruassan, bulochka, non...",
        slide2_title: "Ertalab 4:00 dan boshlab kechikmasdan yetkazib beramiz",
        slide2_text:
          "Cafe, restoran, supermarketlar uchun erta tongdan tezkor yetkazish",
        slide3_title: "Bongard fransuz pechlari yordamida tayyorlanadi",
        slide3_text: "An'anaviy retseptlar + zamonaviy ishlab chiqarish",
        slide4_title: "B2B Korporativ Hamkorlar uchun maxsus takliflar",
        slide4_text: "Moslashtirilgan to'lov va yetkazish shartlari",
        more_info: "Batafsil ma'lumot →",

        // Top Products
        top_products: "Top mahsulotlar",
        order: "Buyurtma",

        product1_name: "Klassik kruassan",
        product1_desc:
          "Nozik qatlamli, fransuz sariyog'li klassik kruasan - har bir luqmasi lazzatga to'la",

        product2_name: "Qishloqcha tartin",
        product2_desc:
          "Rustik uslubda tayyorlangan, yog' surtilgan qarsildoq non - tabiiy va to'yimli",

        product3_name: "Pistachio kruassan",
        product3_desc:
          "Yumshoq dolchinli rulet va ichida nutella kremi - har bir buramda!",

        product4_name: "Nutellali cinnamon",
        product4_desc:
          "Yumshoq dolchinli rulet va ichida nutella kremi - har bir buramda!",

        product5_name: "Qaymoq kremli cinnamon",
        product5_desc:
          "Dolchinli sinabon qaymoq kremi bilan - har luqmasi mehr bilan",

        product6_name: "Makli qatlamli pishiriq",
        product6_desc: "Yumshoq va tiniq qatlamlar orasida xushbo'y mak",

        product7_name: "Chiabatta klassik",
        product7_desc:
          "Qarsildoq qobiq va yumshoq ichki qismga ega italyan noni",

        // Bakery
        bakery_title: "Bakery",

        bakery1_name: "Baget klassik",
        bakery1_desc:
          "Nozik qatlamli, fransuz sariyog'li klassik kruasan - har bir luqmasi lazzatga to'la",

        bakery2_name: "Tartin grechkali",
        bakery2_desc:
          "Grechka, qaymoq va tabiiy non uyg'unligi - to'yimli va sog'lom tartin",

        bakery3_name: "Qishloqcha tartin",
        bakery3_desc:
          "Qarsildoq non ustida sariyog' va qishloq ta'mi bilan to'yimli tartin",

        bakery4_name: "Klassik tartin",
        bakery4_desc:
          "Minimalist va to'yimli: klassik tartin tabiiy ta'mni sevuvchilar uchun",

        bakery5_name: "Arpali tartin",
        bakery5_desc:
          "To'yimli arpa, yumshoq asos va tabiiy ta'm uyg'unligidagi sog'lom tartin",

        bakery6_name: "Pistali tartin",
        bakery6_desc: "Kungaboqar pistali tartin tabiiy noni",

        bakery7_name: "Daniya noni",
        bakery7_desc:
          "Urug'lar bilan boyitilgan, vitamin va tolaga boy sog'lom tamaddi uchun ajoyib tanlov",

        bakery8_name: "Chiabatta",
        bakery8_desc:
          "Tashqi tomoni qarsildoq, ichi esa havodor va yumshoq italyan noni",

        bakery9_name: "Xokkaydo",
        bakery9_desc:
          "Yapon uslubidagi silliq, yengil va juda yumshoq sutli non",

        // Kruassan
        croissant_title: "Kruassan",

        croissant1_name: "Klassik kruassan",
        croissant1_desc:
          "Nozik qatlamli, fransuz sariyog'li klassik kruasan - har bir luqmasi lazzatga to'la",

        croissant2_name: "Pistachio kruassan",
        croissant2_desc:
          "Pista kremi bilan to'ldirilgan yumshoq va ko'p qatlamli kruasan",

        croissant3_name: "Bodomli kruassan",
        croissant3_desc:
          "Qarsildoq qatlamlar orasida yumshoq bodomli haqiqiy fransuzcha zavq",

        croissant4_name: "Nutellali kruassan",
        croissant4_desc: "Klassik fransuz kruassani Nutella bilan boyitilgan",

        // Pishiriqlar
        pastries_title: "Pishiriqlar",

        pastry1_name: "Tvorogli qatlama pishiriq",
        pastry1_desc:
          "Yumshoq va tiniq qatlamlar orasida nozik tvorog - iliq va bejirim pishiriq",

        pastry2_name: "Makli qatlamli pishiriq",
        pastry2_desc: "Yumshoq va tiniq qatlamlar orasida xushbo'y mak",

        pastry3_name: "Djemli qatlamli danish",
        pastry3_desc: "Yumshoq qatlamli pishiriq va markazida mevali djem",

        pastry4_name: "Pan shokoladli",
        pastry4_desc:
          "Qarsildoq qatlamli xamir ichida shokolad - klassik fransuz shirinligi",

        pastry5_name: "Pan svizzer",
        pastry5_desc: "Havodor qatlamli sariyog'li xamir, nozik krem",

        pastry6_name: "Qaymoq kremli cinnamon",
        pastry6_desc:
          "Dolchinli sinabon qaymoq kremi bilan - har luqmasi mehr bilan",

        pastry7_name: "Nutellali cinnamon",
        pastry7_desc:
          "Yumshoq dolchinli rulet va ichida nutella kremi - har bir buramda!",

        // BIZ HAQIMIZDA
        about_title: "Biz haqimizda",
        about_subtitle: "havakand bakery",
        about_text:
          "Havakand Bakery — bu an'anaviy ta’m va zamonaviy yondashuv uyg‘unligi. Mahsulotlarimiz tabiiy tarkibi, maxsus fermentatsiyadan o‘tgan asoslari va Fransiyadan keltirilgan yuqori sifatli masalliqlari bilan ajralib turadi. Biz sog‘lom va foydali pishiriqlarni qadrlovchilar uchun ishlaymiz — har bir nonimizda g‘amxo‘rlik va mukammallik mujassam.",
        about_btn: "Batafsil",

        about_france_title: "Fransiya texnologiyasi asosida",
        about_france_text:
          "Non mahsulotlarimiz Fransiya texnologiyasi asosida, Bongard sanoat pechlarida pishiriladi. Bu texnologiya tufayli mahsulotlarimiz doimo yumshoq, tiniq qobiq bilan va mukammal ta’mda tayyorlanadi.",

        about_natural_title: "Drojasiz eng sara mahsulotlardan",
        about_natural_text:
          "Bizning kruassan va pishiriqlarimiz sun’iy qo‘shimchalarsiz, drojasiz xamirdan tayyorlanadi. Tayyorlash jarayonida faqat tabiiy va yuqori sifatli mahsulotlardan, jumladan haqiqiy fransuz sariyog‘i hamda sinchiklab tanlangan ingredientlardan foydalaniladi.",

        about_staff_title: "20+ YILLIK TAJRIBALI PERSONAL",
        about_staff_text:
          "Bread by muslim — ko‘p yillik tajribaga ega bo‘lgan nonvoyimiz va kruassan bo‘yicha boshqa mutaxassislarimiz mahsulotlarimiz ta’mi va eng yuqori sifatni ta’minlashda yordam berishadi.",

        // HAVAKAND BAKERY
        hav_title: "Havakand",
        hav_subtitle: "Bakery",
        hav_collection: "Havakand collection",
        hav_categories: {
          kruassan: "KRUASSAN",
          nonlar: "NONLAR",
          sinnamon: "SINNAMON",
          pansizer: "PANSIZER",
          panshokolad: "PANSHOKOLAD",
          baget: "BAGET",
          chiabatta: "CHIABATTA",
        },
        hav_b2b_title: "B2B uchun",
        hav_b2b_text:
          "Havakand Bakery — bu an’anaviy ta’m va zamonaviy yondashuv uyg‘unligi. Mahsulotlarimiz tabiiy tarkibi, maxsus fermentatsiyadan o‘tgan asoslari va Fransiyadan keltirilgan yuqori sifatli masalliqlari bilan ajralib turadi. Biz sog‘lom va foydali pishiriqlarni qadrlovchilar uchun ishlaymiz — har bir nonimizda g‘amxo‘rlik va mukammallik mujassam.",

        // MIJOZLAR
        clients_title: "Mijozlarimiz",
        clients: {
          restoran: "Restoran",
          coffee: "Coffee shoplar",
          mehmonxona: "Mehmonxonalar",
          cafe: "Cafe",
          akvapark: "Akvapark",
        },
        // BUYURTMA
      order: {
  title: "buyurtma uchun ariza qoldiring",
  name: "Ismingiz",
  phone: "Telefon raqamingiz",
  info: "Qo'shimcha ma'lumot",
  question: "Qanday mahsulot kerak?",
  products: {
    kruassan: "Kruassan",
    nonlar: "Nonlar",
    pishiriqlar: "Pishiriqlar",
    others: "Boshqalar",
  },
  btnOrder: "Buyurtma",   // 🔥 tugma uchun qo‘shildi
  send: "Jo'natish",
  steps: {
    step1: {
      number: "1-Qadam",
      title: "Degustatsiya",
      desc: "Sifatimizni o'zingiz baholang. Bizning kruassan va nonmahsulotlarimizni degustatsiya qilib ko'ring — qaroringizni ishonch bilan qabul qiling",
    },
    step2: {
      number: "2-Qadam",
      title: "Kelishuv bosqichi",
      desc: "Sizga qulay bo'lgan hamkorlik modelini tanlaymiz. Narx, to'lov va yetkazib berish bo'yicha umumiy kelishuvga erishamiz",
    },
    step3: {
      number: "3-Qadam",
      title: "Yetkazib berish",
      desc: "Har kuni kechqurun mahsulot tayyorlash jarayoni boshlanadi. Tongda, soat 04:00 da pechdan chiqqan yangi kruassan va nonlar 07:00 dan boshlab mijozlarimizga yetkaziladi. Har doim issiq va yangi!",
    },
  },
},

        // FOOTER
        footer: {
          instagram: {
            followBtn: "Obuna bo'ling",
            followTitle: "INSTAGRAM SAHIFAMIZGA OBUNA BO'LING",
            followDesc:
              "Yangiliklarimiz, maxsus takliflarimizdan doim xabardor bo'lish uchun",
            goToInstagram: "Instagramga o'tish",
            likes: "1953",
            hearts: "454",
          },
          blog: {
            title: "Blog",
            items: [
              {
                name: "Eng mazali kruassan qaysi?",
                desc: "Havakand bakery - fistashka kremli, vanil kremli, nutella kremli kruassanlarni taklif etadi va har birining o'z uslubi va o'zgacha ta'mi bor",
              },
              {
                name: "Sariyog' emas, bu - san'at",
                desc: "Elle & Vire brendi, 1945-yildan buyon fransuz pazandaligi timsoliga aylangan. Ayniqsa, ularning sariyog'i (beurre) - dunyo bo'ylab professional oshpazlar va shirinlik ustalarining ishonchli tanlovidir",
              },
              {
                name: "Ertalabki mukammal nonushta uchun 5 ta pishiriq",
                desc: "Nonushtaga mos ideal pishiriqlar: kruassan, sinnabon, makli pishiriq yoki jemli",
              },
            ],
          },
          nav: {
            title: "Navigatsiya",
            home: "Asosiy sahifa",
            menu: "Menyu",
            about: "Biz haqimizda",
            address: "Manzil",
            contact: "Aloqa",
            b2b: "B2B uchun",
          },
          menu: {
            title: "Menyu",
            kruassan: "Kruassan",
            bakery: "Pishiriqlar",
            baget: "Baget",
            bread: "Non",
            sinnabon: "Sinnabon",
          },
          call: {
            title: "Call center",
          },
          socials: {
            title: "Ijtimoiy tarmoqlar",
          },
        },
      },
    },
    ru: {
      translation: {
        // Header
        menu: "Меню",
        about: "О нас",
        address: "Адрес",
        contact: "Контакты",
        b2b: "Для B2B",
        phone: "+998 95 435 30 02",

        // Меню
        menu_title: "Меню",
        croissant: "Круассан",
        pastries: "Выпечка",
        baguette: "Багет",
        bread: "Хлеб",
        cinnabon: "Синнабон",

        // Слайдер
        slide1_title:
          "HAVAKAND BAKERY – НАСТОЯЩИЙ ФРАНЦУЗСКИЙ ВКУС В УЗБЕКИСТАНЕ",
        slide1_text:
          "Круассаны, булочки, хлеб – только из самых качественных ингредиентов",
        slide2_title: "Доставка без опозданий начиная с 4:00 утра",
        slide2_text:
          "Для кафе, ресторанов и супермаркетов — быстрая утренняя доставка",
        slide3_title: "Выпекаем на французских печах Bongard",
        slide3_text: "Традиционные рецепты + современное производство",
        slide4_title: "Специальные предложения для B2B партнёров",
        slide4_text: "Индивидуальные условия оплаты и доставки",
        more_info: "Подробнее →",

        // Топ продукты
        top_products: "Топ продукты",
        order: "Заказать",

        product1_name: "Классический круассан",
        product1_desc:
          "Нежный слоёный круассан на французском сливочном масле — каждая крошка полна вкуса",

        product2_name: "Деревенский тартин",
        product2_desc:
          "Хрустящий хлеб в деревенском стиле с маслом — натуральный и сытный",

        product3_name: "Фисташковый круассан",
        product3_desc:
          "Мягкий рулет с корицей и кремом нутелла — наслаждение в каждом кусочке!",

        product4_name: "Синабон с нутеллой",
        product4_desc:
          "Мягкий рулет с корицей и нутеллой внутри — вкус в каждом завитке!",

        product5_name: "Синабон со сливочным кремом",
        product5_desc:
          "Синабон с корицей и сливочным кремом — каждая порция с заботой",

        product6_name: "Маковый слоёный пирог",
        product6_desc: "Мягкие и хрустящие слои с ароматным маком",

        product7_name: "Классическая чиабатта",
        product7_desc:
          "Итальянский хлеб с хрустящей корочкой и мягкой серединкой",

        // RU
        bakery_title: "Выпечка",

        bakery1_name: "Классический багет",
        bakery1_desc:
          "Нежный слоёный круассан на французском сливочном масле — каждая крошка полна вкуса",

        bakery2_name: "Тартин с гречкой",
        bakery2_desc:
          "Сочетание гречки, сливок и натурального хлеба — сытный и полезный тартин",

        bakery3_name: "Деревенский тартин",
        bakery3_desc:
          "Хрустящий хлеб с маслом и деревенским вкусом — сытный тартин",

        bakery4_name: "Классический тартин",
        bakery4_desc:
          "Минимализм и сытность: классический тартин для любителей натурального вкуса",

        bakery5_name: "Тартин с ячменем",
        bakery5_desc:
          "Полезный ячмень, мягкая основа и натуральный вкус — здоровый тартин",

        bakery6_name: "Тартин с фисташками",
        bakery6_desc: "Натуральный хлеб с семенами подсолнечника и фисташками",

        bakery7_name: "Датский хлеб",
        bakery7_desc:
          "Обогащён семенами, богат витаминами и клетчаткой — отличный выбор для полезного перекуса",

        bakery8_name: "Чиабатта",
        bakery8_desc:
          "Хрустящая корочка и воздушная мягкая середина — итальянский хлеб",

        bakery9_name: "Хоккайдо",
        bakery9_desc: "Японский молочный хлеб — гладкий, лёгкий и очень мягкий",

        // RU
        croissant_title: "Круассан",

        croissant1_name: "Классический круассан",
        croissant1_desc:
          "Нежный слоёный круассан на французском сливочном масле — каждая крошка полна вкуса",

        croissant2_name: "Фисташковый круассан",
        croissant2_desc: "Мягкий и многослойный круассан с фисташковым кремом",

        croissant3_name: "Миндальный круассан",
        croissant3_desc:
          "Хрустящие слои с нежным миндальным вкусом — настоящее французское удовольствие",

        croissant4_name: "Круассан с Нутеллой",
        croissant4_desc:
          "Классический французский круассан с добавлением Nutella",

        // RU
        pastries_title: "Выпечка",

        pastry1_name: "Слойка с творогом",
        pastry1_desc:
          "Мягкие и хрустящие слои с нежным творогом — тёплая и изящная выпечка",

        pastry2_name: "Слойка с маком",
        pastry2_desc: "Мягкие и воздушные слои с ароматным маком",

        pastry3_name: "Датская слойка с джемом",
        pastry3_desc: "Слоёная выпечка с фруктовым джемом в центре",

        pastry4_name: "Пан шоколад",
        pastry4_desc:
          "Хрустящее слоёное тесто с шоколадом внутри — классический французский десерт",

        pastry5_name: "Пан свиззер",
        pastry5_desc: "Воздушное слоёное тесто с маслом и нежным кремом",

        pastry6_name: "Синнабон со сливочным кремом",
        pastry6_desc:
          "Синнабон с корицей и сливочным кремом — каждая порция с любовью",

        pastry7_name: "Синнабон с Нутеллой",
        pastry7_desc:
          "Мягкий рулет с корицей и кремом Нутелла — в каждом кусочке!",

        // RU
        about_title: "О нас",
        about_subtitle: "havakand bakery",
        about_text:
          "Havakand Bakery — это гармония традиционного вкуса и современного подхода. Наша продукция отличается натуральным составом, специальной ферментацией и высококачественными ингредиентами, привезёнными из Франции. Мы работаем для ценителей здоровой и полезной выпечки — в каждом нашем хлебе воплощены забота и совершенство.",
        about_btn: "Подробнее",

        about_france_title: "На основе французских технологий",
        about_france_text:
          "Наша выпечка готовится по французской технологии в промышленных печах Bongard. Благодаря этому изделия всегда получаются мягкими, с хрустящей корочкой и идеальным вкусом.",

        about_natural_title: "Лучшие продукты без дрожжей",
        about_natural_text:
          "Наши круассаны и выпечка готовятся без искусственных добавок и дрожжей. В процессе используются только натуральные и качественные продукты, включая настоящий французский сливочный масло и тщательно отобранные ингредиенты.",

        about_staff_title: "20+ ЛЕТ ОПЫТА У ПЕРСОНАЛА",
        about_staff_text:
          "Bread by muslim — наш пекарь с многолетним опытом и другие специалисты по круассанам помогают обеспечивать вкус и высочайшее качество нашей продукции.",

        // RU
        hav_title: "Havakand",
        hav_subtitle: "Bakery",
        hav_collection: "Коллекция Havakand",
        hav_categories: {
          kruassan: "КРУАССАН",
          nonlar: "ХЛЕБ",
          sinnamon: "СИННАМОН",
          pansizer: "ПАНСИЗЕР",
          panshokolad: "ПАНШОКОЛАД",
          baget: "БАГЕТ",
          chiabatta: "ЧИАБАТТА",
        },
        hav_b2b_title: "Для B2B",
        hav_b2b_text:
          "Havakand Bakery — это гармония традиционного вкуса и современного подхода. Наша продукция отличается натуральным составом, специальной ферментацией и высококачественными ингредиентами из Франции. Мы работаем для ценителей здоровой и полезной выпечки — в каждом нашем хлебе воплощены забота и совершенство.",

        // RU
        clients_title: "Наши клиенты",
        clients: {
          restoran: "Ресторан",
          coffee: "Кофейни",
          mehmonxona: "Гостиницы",
          cafe: "Кафе",
          akvapark: "Аквапарк",
        },
        // RU
        order: {
          title: "Оставьте заявку на заказ",
          name: "Ваше имя",
          phone: "Ваш телефон",
          info: "Дополнительная информация",
          question: "Какой продукт нужен?",
          products: {
            kruassan: "Круассан",
            nonlar: "Хлеба",
            pishiriqlar: "Выпечка",
            others: "Другие",
          },
          btnOrder: "Заказать",
          send: "Отправить",
          steps: {
            step1: {
              number: "Шаг 1",
              title: "Дегустация",
              desc: "Оцените наше качество сами. Попробуйте наши круассаны и хлебобулочные изделия — принимайте решение с уверенностью",
            },
            step2: {
              number: "Шаг 2",
              title: "Этап соглашения",
              desc: "Мы подберем удобную для вас модель сотрудничества. Достигнем общего согласия по цене, оплате и доставке",
            },
            step3: {
              number: "Шаг 3",
              title: "Доставка",
              desc: "Каждый вечер начинается процесс приготовления продукции. Утром, в 04:00, свежие круассаны и хлеба выходят из печи и с 07:00 доставляются нашим клиентам. Всегда горячие и свежие!",
            },
          },
        },
        // RU
        footer: {
          instagram: {
            followBtn: "Подписаться",
            followTitle: "ПОДПИШИТЕСЬ НА НАШ INSTAGRAM",
            followDesc:
              "Будьте всегда в курсе наших новостей и специальных предложений",
            goToInstagram: "Перейти в Instagram",
            likes: "1953",
            hearts: "454",
          },
          blog: {
            title: "Блог",
            items: [
              {
                name: "Какой круассан самый вкусный?",
                desc: "Havakand bakery предлагает круассаны с фисташковым кремом, ванильным кремом, нутеллой — у каждого свой стиль и неповторимый вкус",
              },
              {
                name: "Это не масло, это — искусство",
                desc: "Бренд Elle & Vire с 1945 года является символом французской кулинарии. Особенно их масло (beurre) — надежный выбор шеф-поваров и кондитеров по всему миру",
              },
              {
                name: "5 идеальных выпечек для завтрака",
                desc: "Идеальные варианты для завтрака: круассан, синнабон, маффин или с джемом",
              },
            ],
          },
          nav: {
            title: "Навигация",
            home: "Главная страница",
            menu: "Меню",
            about: "О нас",
            address: "Адрес",
            contact: "Контакты",
            b2b: "Для B2B",
          },
          menu: {
            title: "Меню",
            kruassan: "Круассан",
            bakery: "Выпечка",
            baget: "Багет",
            bread: "Хлеб",
            sinnabon: "Синнабон",
          },
          call: {
            title: "Call center",
          },
          socials: {
            title: "Социальные сети",
          },
        },
      },
    },
  },
  lng: "uz",
  fallbackLng: "uz",
  interpolation: { escapeValue: false },
});

export default i18n;
