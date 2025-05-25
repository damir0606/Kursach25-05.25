// src/products.js

const products = [
  // Смартфоны
  {
    id: 1,
    name: "iPhone 14 Pro",
    category: "Смартфоны",
    price: 799900,
    image: "/images/iphone14pro.jpg",
    description: "Новый iPhone 14 Pro с улучшенной камерой и производительностью.",
    manufacturer: "Apple",
    releaseDate: "2022-09-16",
    specs: {
      display: '6.1" OLED, 1170×2532',
      processor: "A16 Bionic",
      ram: "6 GB",
      storage: "128 / 256 / 512 / 1000 GB",
      camera: "48 MP + 12 MP + 12 MP",
      battery: "3200 mAh",
      weight: "206 g",
      os: "iOS 16"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    category: "Смартфоны",
    price: 699900,
    image: "/images/galaxys23.jpg",
    description: "Флагманский смартфон с ярким дисплеем и мощным процессором.",
    manufacturer: "Samsung",
    releaseDate: "2023-02-17",
    specs: {
      display: '6.1" Dynamic AMOLED, 1080×2340',
      processor: "Snapdragon 8 Gen 2",
      ram: "8 GB",
      storage: "128 / 256 / 512 GB",
      camera: "50 MP + 12 MP + 10 MP",
      battery: "3900 mAh",
      weight: "168 g",
      os: "Android 13"
    }
  },
  {
    id: 3,
    name: "Google Pixel 7",
    category: "Смартфоны",
    price: 549900,
    image: "/images/pixel7.jpg",
    description: "Чистый Android, выдающаяся камера и обновления от Google.",
    manufacturer: "Google",
    releaseDate: "2022-10-13",
    specs: {
      display: '6.3" AMOLED, 1080×2400',
      processor: "Google Tensor G2",
      ram: "8 GB",
      storage: "128 / 256 GB",
      camera: "50 MP + 12 MP",
      battery: "4355 mAh",
      weight: "197 g",
      os: "Android 13"
    }
  },
  {
    id: 4,
    name: "OnePlus 11",
    category: "Смартфоны",
    price: 639900,
    image: "/images/oneplus11.jpg",
    description: "Высокая скорость работы и поддержка быстрой зарядки.",
    manufacturer: "OnePlus",
    releaseDate: "2023-01-07",
    specs: {
      display: '6.7" Fluid AMOLED, 1440×3216',
      processor: "Snapdragon 8 Gen 2",
      ram: "8 / 16 GB",
      storage: "128 / 256 GB",
      camera: "50 MP + 48 MP + 32 MP",
      battery: "5000 mAh",
      weight: "205 g",
      os: "Android 13 (OxygenOS)"
    }
  },
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    category: "Смартфоны",
    price: 529900,
    image: "/images/xiaomi13pro.jpg",
    description: "Отличное соотношение цены и качества, мощный чипсет.",
    manufacturer: "Xiaomi",
    releaseDate: "2023-03-03",
    specs: {
      display: '6.73" AMOLED, 1440×3200',
      processor: "Snapdragon 8 Gen 2",
      ram: "12 GB",
      storage: "256 / 512 GB",
      camera: "50 MP + 50 MP + 50 MP",
      battery: "4820 mAh",
      weight: "210 g",
      os: "Android 13 (MIUI 14)"
    }
  },

  // Ноутбуки
  {
    id: 6,
    name: 'MacBook Pro 16"',
    category: "Ноутбуки",
    price: 1999900,
    image: "/images/macbookpro16.jpg",
    description: "Мощный ноутбук для профессионалов.",
    manufacturer: "Apple",
    releaseDate: "2023-01-24",
    specs: {
      display: '16.2" Liquid Retina XDR, 3456×2234',
      processor: "Apple M2 Pro / M2 Max",
      ram: "16 / 32 / 64 GB",
      storage: "512 GB / 1 TB / 2 TB / 4 TB / 8 TB",
      graphics: "Integrated up to 38-core GPU",
      battery: "100 Wh",
      weight: "2.2 kg",
      os: "macOS Ventura"
    }
  },
  {
    id: 7,
    name: "Dell XPS 13",
    category: "Ноутбуки",
    price: 1299900,
    image: "/images/dellxps13.jpg",
    description: "Компактный ультрабук с тонкими рамками и длительным временем работы от батареи.",
    manufacturer: "Dell",
    releaseDate: "2023-02-15",
    specs: {
      display: '13.4" FHD+ / UHD+, 1920×1200 / 3840×2400',
      processor: "Intel Core i5 / i7 12th Gen",
      ram: "8 / 16 GB",
      storage: "256 / 512 GB / 1 TB SSD",
      graphics: "Intel Iris Xe",
      battery: "52 Wh",
      weight: "1.2 kg",
      os: "Windows 11"
    }
  },
  {
    id: 8,
    name: "HP Spectre x360",
    category: "Ноутбуки",
    price: 1399900,
    image: "/images/hpspectre.jpg",
    description: "Трансформируемый ноутбук 2-в-1 с сенсорным экраном.",
    manufacturer: "HP",
    releaseDate: "2022-11-10",
    specs: {
      display: '13.5" OLED Touch, 3000×2000',
      processor: "Intel Core i7 12th Gen",
      ram: "16 GB",
      storage: "512 GB SSD",
      graphics: "Intel Iris Xe",
      battery: "60 Wh",
      weight: "1.3 kg",
      os: "Windows 11"
    }
  },
  {
    id: 9,
    name: "Lenovo ThinkPad X1 Carbon",
    category: "Ноутбуки",
    price: 1499900,
    image: "/images/thinkpadx1.jpg",
    description: "Легкий бизнес-ноутбук с отличной клавиатурой и надежностью.",
    manufacturer: "Lenovo",
    releaseDate: "2023-03-01",
    specs: {
      display: '14" FHD+ / UHD, 1920×1200 / 3840×2400',
      processor: "Intel Core i7 13th Gen",
      ram: "16 / 32 GB",
      storage: "512 GB / 1 TB SSD",
      graphics: "Intel Iris Xe",
      battery: "57 Wh",
      weight: "1.12 kg",
      os: "Windows 11 Pro"
    }
  },
  {
    id: 10,
    name: "Asus ROG Zephyrus G14",
    category: "Ноутбуки",
    price: 1599900,
    image: "/images/rogzephyrus.jpg",
    description: "Игровой ноутбук с мощной видеокартой и высокой частотой обновления экрана.",
    manufacturer: "ASUS",
    releaseDate: "2023-01-05",
    specs: {
      display: '14" QHD, 2560×1440, 120Hz',
      processor: "AMD Ryzen 9 7940HS",
      ram: "16 / 32 GB",
      storage: "1 TB SSD",
      graphics: "NVIDIA GeForce RTX 4070",
      battery: "76 Wh",
      weight: "1.7 kg",
      os: "Windows 11"
    }
  },

  // Аксессуары
  {
    id: 11,
    name: "Беспроводные наушники",
    category: "Аксессуары",
    price: 79900,
    image: "/images/headphones.jpg",
    description: "Удобные и качественные беспроводные наушники.",
    manufacturer: "Sony",
    releaseDate: "2022-08-20",
    specs: {
      type: "Over-Ear",
      connectivity: "Bluetooth 5.2",
      battery: "30 часов",
      charging: "USB-C",
      weight: "250 g"
    }
  },
  {
    id: 12,
    name: "Внешний SSD 1TB",
    category: "Аксессуары",
    price: 149900,
    image: "/images/ssd1tb.jpg",
    description: "Компактный и быстрый внешний накопитель для данных.",
    manufacturer: "Samsung",
    releaseDate: "2021-05-15",
    specs: {
      interface: "USB 3.2 Gen 2",
      capacity: "1 TB",
      speed: "1050 MB/s",
      dimensions: "88×52×8 mm",
      weight: "30 g"
    }
  },
  {
    id: 13,
    name: "Мышь Logitech MX Master 3",
    category: "Аксессуары",
    price: 74900,
    image: "/images/mxmaster3.jpg",
    description: "Эргономичная мышь с настраиваемыми кнопками и колесиком MagSpeed.",
    manufacturer: "Logitech",
    releaseDate: "2019-09-04",
    specs: {
      connectivity: "Bluetooth / USB Receiver",
      dpi: "200–4000",
      battery: "70 дней",
      weight: "141 g",
      buttons: "7 программируемых"
    }
  },
  {
    id: 14,
    name: "Клавиатура Keychron K2",
    category: "Аксессуары",
    price: 49900,
    image: "/images/keychronk2.jpg",
    description: "Механическая клавиатура с подсветкой и Bluetooth.",
    manufacturer: "Keychron",
    releaseDate: "2020-07-10",
    specs: {
      layout: "75%",
      switch: "Gateron/Keychron Red",
      connectivity: "Bluetooth 5.1 / USB-C",
      battery: "4000 mAh",
      weight: "820 g"
    }
  },
  {
    id: 15,
    name: "Power Bank 20000 mAh",
    category: "Аксессуары",
    price: 39900,
    image: "/images/powerbank20.jpg",
    description: "Портативная зарядка для смартфонов и планшетов.",
    manufacturer: "Anker",
    releaseDate: "2022-03-22",
    specs: {
      capacity: "20000 mAh",
      ports: "USB-A ×2, USB-C ×1",
      output: "18W PD",
      input: "18W PD",
      weight: "360 g"
    }
  }
];

export default products;
