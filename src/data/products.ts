export type ProductCategory = 
  | 'clothing' 
  | 'electronics' 
  | 'home' 
  | 'transport' 
  | 'realty' 
  | 'services' 
  | 'kids' 
  | 'hobby' 
  | 'sports';

export type Product = {
  id: number;
  name: string;
  fullName: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  images: string[];
  city: string;
  address: string;
  sellerName: string;
  phone: string;
  dateAdded: string;
};

export const products: Product[] = [
  { 
    id: 1, 
    name: 'Сумка кожаная', 
    fullName: 'Кожаная сумка ручной работы',
    description: 'Элегантная кожаная сумка ручной работы. Изготовлена из натуральной кожи высшего качества. Вместительная, с несколькими отделениями и карманами.',
    price: 15000, 
    category: 'clothing', 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa'
    ],
    city: 'Астана',
    address: 'ул. Достык 5',
    sellerName: 'Айнур Смагулова',
    phone: '+77771234567',
    dateAdded: '2025-05-10'
  },
  { 
    id: 2, 
    name: 'Умные часы', 
    fullName: 'Apple Watch Series 7 GPS 45mm',
    description: 'Новые Apple Watch Series 7 с большим дисплеем, быстрой зарядкой и улучшенной защитой от пыли. Отслеживайте свою физическую активность, здоровье и оставайтесь на связи.',
    price: 150000, 
    category: 'electronics', 
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
      'https://images.unsplash.com/photo-1542729779-b55d0404c8be'
    ],
    city: 'Алматы',
    address: 'ул. Абая 44',
    sellerName: 'Ерлан Касымов',
    phone: '+77051234567',
    dateAdded: '2025-05-12'
  },
  { 
    id: 3, 
    name: 'Велосипед горный', 
    fullName: 'Горный велосипед Trek Marlin 7',
    description: 'Горный велосипед Trek Marlin 7 с алюминиевой рамой, дисковыми гидравлическими тормозами и амортизационной вилкой. Идеален для катания по пересеченной местности.',
    price: 180000, 
    category: 'sports', 
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e',
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7',
      'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91'
    ],
    city: 'Астана',
    address: 'пр. Республики 89',
    sellerName: 'Марат Ахметов',
    phone: '+77012345678',
    dateAdded: '2025-05-08'
  },
  { 
    id: 4, 
    name: 'Ноутбук игровой', 
    fullName: 'Игровой ноутбук ASUS ROG Strix G15',
    description: 'Мощный игровой ноутбук ASUS ROG Strix G15 с процессором Intel Core i7, видеокартой NVIDIA GeForce RTX 3070, 16 ГБ оперативной памяти и SSD на 1 ТБ. Идеален для современных игр и тяжелых задач.',
    price: 450000, 
    category: 'electronics', 
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed',
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45',
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6'
    ],
    city: 'Шымкент',
    address: 'ул. Тауке хана 33',
    sellerName: 'Алибек Нурланов',
    phone: '+77771112233',
    dateAdded: '2025-05-15'
  },
  { 
    id: 5, 
    name: 'Квартира 2-комн', 
    fullName: '2-комнатная квартира, 65 м², 5/9 этаж',
    description: 'Просторная 2-комнатная квартира в новом жилом комплексе. Качественный ремонт, встроенная кухня, кондиционер, теплые полы в ванной. Рядом школа, детский сад, супермаркет.',
    price: 25000000, 
    category: 'realty', 
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4'
    ],
    city: 'Алматы',
    address: 'мкр. Самал-2, д. 33',
    sellerName: 'Динара Сатпаева',
    phone: '+77019876543',
    dateAdded: '2025-05-01'
  },
  { 
    id: 6, 
    name: 'Смартфон iPhone', 
    fullName: 'Apple iPhone 14 Pro Max 256GB',
    description: 'Новый iPhone 14 Pro Max с дисплеем Super Retina XDR, процессором A16 Bionic, тройной камерой 48 Мп. В комплекте зарядное устройство, наушники, чехол.',
    price: 650000, 
    category: 'electronics', 
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd',
    images: [
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd',
      'https://images.unsplash.com/photo-1591337676887-a217a6970a8a',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505'
    ],
    city: 'Астана',
    address: 'ул. Кунаева 14/1',
    sellerName: 'Аскар Жумагалиев',
    phone: '+77075554433',
    dateAdded: '2025-05-18'
  },
  { 
    id: 7, 
    name: 'Холодильник', 
    fullName: 'Холодильник Samsung RF50A5002S9',
    description: 'Двухкамерный холодильник Samsung с системой No Frost, объем 500 литров. Энергоэффективность класса A++. Цвет - серебристый. На гарантии 1 год.',
    price: 350000, 
    category: 'home', 
    image: 'https://images.unsplash.com/photo-1635619833085-06c0269d4578',
    images: [
      'https://images.unsplash.com/photo-1635619833085-06c0269d4578',
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30',
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30'
    ],
    city: 'Караганда',
    address: 'пр. Бухар-Жырау 59',
    sellerName: 'Ольга Петрова',
    phone: '+77021234567',
    dateAdded: '2025-05-05'
  },
  { 
    id: 8, 
    name: 'Автомобиль Тойота', 
    fullName: 'Toyota Camry 2023, 2.5 л, автомат',
    description: 'Toyota Camry 2023 года выпуска, пробег 5000 км. Комплектация Престиж, цвет черный металлик. Кожаный салон, подогрев всех сидений, камера заднего вида, климат-контроль.',
    price: 15000000, 
    category: 'transport', 
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd'
    ],
    city: 'Астана',
    address: 'пр. Кабанбай батыра 48',
    sellerName: 'Нурлан Сагинтаев',
    phone: '+77011112233',
    dateAdded: '2025-05-20'
  },
  { 
    id: 9, 
    name: 'Детская коляска', 
    fullName: 'Коляска-трансформер Anex Sport 3 в 1',
    description: 'Детская коляска Anex Sport 3 в 1 (люлька, прогулочный блок, автокресло). Состояние отличное, использовалась 6 месяцев. Цвет - графитовый. В комплекте дождевик, москитная сетка, сумка для мамы.',
    price: 120000, 
    category: 'kids', 
    image: 'https://images.unsplash.com/photo-1591881406586-e9d166140e81',
    images: [
      'https://images.unsplash.com/photo-1591881406586-e9d166140e81',
      'https://images.unsplash.com/photo-1519689680058-324335c77eba',
      'https://images.unsplash.com/photo-1519689680058-324335c77eba'
    ],
    city: 'Алматы',
    address: 'ул. Жандосова 58',
    sellerName: 'Айгуль Нурпеисова',
    phone: '+77054445566',
    dateAdded: '2025-05-11'
  },
  { 
    id: 10, 
    name: 'Телевизор OLED', 
    fullName: 'LG OLED65C1 65" Smart TV',
    description: 'Телевизор LG OLED65C1 с диагональю 65 дюймов, разрешение 4K UHD. Технология OLED, процессор α9 Gen4 AI, поддержка Dolby Vision IQ и Dolby Atmos. Операционная система webOS 6.0.',
    price: 750000, 
    category: 'electronics', 
    image: 'https://images.unsplash.com/photo-1593784991095-a205069533cd',
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069533cd',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79',
      'https://images.unsplash.com/photo-1577979749830-f1d742b96791'
    ],
    city: 'Шымкент',
    address: 'мкр. Нурсат 12',
    sellerName: 'Бауыржан Алиев',
    phone: '+77778889900',
    dateAdded: '2025-05-17'
  },
  { 
    id: 11, 
    name: 'Кофемашина', 
    fullName: 'Кофемашина DeLonghi ECAM 350.55.B',
    description: 'Автоматическая кофемашина DeLonghi с капучинатором. Приготовление эспрессо, капучино, латте макиато одним нажатием. Регулировка крепости и температуры кофе.',
    price: 220000, 
    category: 'home', 
    image: 'https://images.unsplash.com/photo-1585661034799-5a68030665fa',
    images: [
      'https://images.unsplash.com/photo-1585661034799-5a68030665fa',
      'https://images.unsplash.com/photo-1572119865084-43c285814d63',
      'https://images.unsplash.com/photo-1610889556528-9a770e32642f'
    ],
    city: 'Астана',
    address: 'ул. Сыганак 10',
    sellerName: 'Дамир Касымов',
    phone: '+77071234567',
    dateAdded: '2025-05-14'
  },
  { 
    id: 12, 
    name: 'Планшет iPad', 
    fullName: 'Apple iPad Pro 12.9" M2 256GB Wi-Fi',
    description: 'Планшет Apple iPad Pro с дисплеем 12.9", процессором M2, 256 ГБ памяти. Поддержка Apple Pencil 2-го поколения. Цвет - серый космос.',
    price: 480000, 
    category: 'electronics', 
    image: 'https://images.unsplash.com/photo-1604399852419-f67ee7d5f2ef',
    images: [
      'https://images.unsplash.com/photo-1604399852419-f67ee7d5f2ef',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
      'https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df'
    ],
    city: 'Алматы',
    address: 'пр. Достык 132',
    sellerName: 'Тимур Ахметов',
    phone: '+77021112233',
    dateAdded: '2025-05-19'
  },
  { 
    id: 13, 
    name: 'Пылесос робот', 
    fullName: 'Робот-пылесос Xiaomi Roborock S7',
    description: 'Умный робот-пылесос Xiaomi Roborock S7 с функцией влажной уборки. Мощность всасывания 2500 Па, время работы до 180 минут. Управление через приложение.',
    price: 160000, 
    category: 'home', 
    image: 'https://images.unsplash.com/photo-1595777216528-071e0127ccbf',
    images: [
      'https://images.unsplash.com/photo-1595777216528-071e0127ccbf',
      'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73',
      'https://images.unsplash.com/photo-1532884988337-3340a0e6a760'
    ],
    city: 'Караганда',
    address: 'ул. Ерубаева 48',
    sellerName: 'Анна Ким',
    phone: '+77051234567',
    dateAdded: '2025-05-13'
  },
  { 
    id: 14, 
    name: 'Микроволновка', 
    fullName: 'Микроволновая печь Samsung MG30T5018AK',
    description: 'Микроволновая печь Samsung с грилем, объем 30 литров, мощность 900 Вт. Электронное управление, 30 программ приготовления.',
    price: 75000, 
    category: 'home', 
    image: 'https://images.unsplash.com/photo-1574269923091-11aaab8e0f74',
    images: [
      'https://images.unsplash.com/photo-1574269923091-11aaab8e0f74',
      'https://images.unsplash.com/photo-1585659722983-3a681d8ef9b8',
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7'
    ],
    city: 'Астана',
    address: 'пр. Туран 55',
    sellerName: 'Ержан Сулейменов',
    phone: '+77011234567',
    dateAdded: '2025-05-09'
  },
  { 
    id: 15, 
    name: 'Стиральная машина', 
    fullName: 'Стиральная машина LG F2V5HS9B',
    description: 'Стиральная машина LG с фронтальной загрузкой, 9 кг, 1200 об/мин. Технология AI DD, функция пара Steam, инверторный мотор с 10-летней гарантией.',
    price: 230000, 
    category: 'home', 
    image: 'https://images.unsplash.com/photo-1626806787461-102c1f211b8c',
    images: [
      'https://images.unsplash.com/photo-1626806787461-102c1f211b8c',
      'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1',
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce'
    ],
    city: 'Шымкент',
    address: 'ул. Байтурсынова 15',
    sellerName: 'Гульнара Ахметова',
    phone: '+77778889900',
    dateAdded: '2025-05-16'
  },
  { 
    id: 16, 
    name: 'Кондиционер', 
    fullName: 'Кондиционер Mitsubishi Electric MSZ-AP50VG',
    description: 'Инверторный кондиционер Mitsubishi Electric, мощность охлаждения 5 кВт, обогрева 5.8 кВт. Класс энергоэффективности A+++. Wi-Fi управление.',
    price: 320000, 
    category: 'home', 
    image: 'https://images.unsplash.com/photo-1628916113671-02a4a265ae4c',
    images: [
      'https://images.unsplash.com/photo-1628916113671-02a4a265ae4c',
      'https://images.unsplash.com/photo-1581275288578-bfb98aa25dcc',
      'https://images.unsplash.com/photo-1581275288578-bfb98aa25dcc'
    ],
    city: 'Алматы',
    address: 'мкр. Орбита-3, д. 17',
    sellerName: 'Руслан Ибрагимов',
    phone: '+77021234567',
    dateAdded: '2025-05-07'
  },
  { 
    id: 17, 
    name: 'Игровая консоль', 
    fullName: 'Sony PlayStation 5 Digital Edition',
    description: 'Игровая консоль Sony PlayStation 5 Digital Edition, 825 ГБ SSD. В комплекте беспроводной контроллер DualSense. Поддержка 4K и 120 Гц.',
    price: 280000, 
    category: 'electronics', 
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f',
    images: [
      'https://images.unsplash.com/photo-1605901309584-818e25960a8f',
      'https://images.unsplash.com/photo-1607853202273-797f1c22a38e',
      'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13'
    ],
    city: 'Астана',
    address: 'ул. Кенесары 40',
    sellerName: 'Арман Сериков',
    phone: '+77075554433',
    dateAdded: '2025-05-21'
  },
  { 
    id: 18, 
    name: 'Фотоаппарат', 
    fullName: 'Фотоаппарат Canon EOS R6 Kit 24-105mm',
    description: 'Беззеркальный фотоаппарат Canon EOS R6 с объективом 24-105mm. Полнокадровая матрица 20.1 Мп, стабилизация 8 ступеней, 4K видео, Wi-Fi, Bluetooth.',
    price: 950000, 
    category: 'electronics', 
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84',
    images: [
      'https://images.unsplash.com/photo-1516724562728-afc824a36e84',
      'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac',
      'https://images.unsplash.com/photo-1581591524425-c7e0978865fc'
    ],
    city: 'Караганда',
    address: 'пр. Н. Абдирова 19',
    sellerName: 'Максим Иванов',
    phone: '+77011112233',
    dateAdded: '2025-05-18'
  },
  { 
    id: 19, 
    name: 'Диван угловой', 
    fullName: 'Угловой диван-кровать "Милан"',
    description: 'Угловой диван-кровать с механизмом трансформации "Дельфин". Размеры: 280x180x95 см. Обивка - экокожа, цвет - бежевый. Ящик для белья, съемные чехлы.',
    price: 280000, 
    category: 'home', 
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a'
    ],
    city: 'Шымкент',
    address: 'мкр. Самал 15',
    sellerName: 'Азамат Кенжебаев',
    phone: '+77778889900',
    dateAdded: '2025-05-15'
  },
  { 
    id: 20, 
    name: 'Шкаф-купе', 
    fullName: 'Шкаф-купе "Стандарт" трехдверный',
    description: 'Шкаф-купе с тремя дверями, зеркалом. Размеры: 180x60x240 см. Материал - ЛДСП, цвет - венге/дуб сонома. Вместительные полки, штанги для одежды.',
    price: 120000, 
    category: 'home', 
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8',
      'https://images.unsplash.com/photo-1616627561950-9f746e330187'
    ],
    city: 'Астана',
    address: 'ул. Иманова 19',
    sellerName: 'Сауле Бекенова',
    phone: '+77071234567',
    dateAdded: '2025-05-10'
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCity = (city: string): Product[] => {
  return products.filter(product => product.city === city);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(product => product.category === category);
};
