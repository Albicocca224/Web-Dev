export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  kaspi_link: string;
  category: number;
  like: number;
}

export const products = [
  {
    id: 1,
    category: 1,
    name: 'iPhone XR',
    price: 799,
    description: 'A large phone with one of the best screens',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h98/hec/63756182716446.jpg?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-xr-64gb-chernyi-1004249/?srsltid=AfmBOooZ7YOGSw43ewn6m1-dCSQtZhfWaA-PqXbdxF9pHwiM1aQynGpQ"
    ,like: 0
  },
  {
    id: 2,
    category: 1,
    name: 'iPhone 13 mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h29/h83/64200298430494.jpg?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-13-mini-256gb-sinii-102298484/?c=750000000"
    ,like: 0
  },
  {
    id: 3,
    category: 1,
    name: 'iPhone 12 Pro Max',
    price: 299,
    description: 'A great phone with one of the best cameras',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h3d/hbe/64083803635742.jpg?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-12-pro-max-256gb-seryi-100658022/?c=750000000"
    ,like: 0},
  {
    id: 4,
    category: 1,
    name: 'Samsung Galaxy S22',
    price: 700,
    description: 'FE 5G (256GB, 8GB) 6.5" AMOLED, Snapdragon 865, IP68 Water Resistant',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h85/h78/86009675743262.png?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-256-gb-zelenyi-103667982/?c=750000000"
    ,like: 0},
  {
    id: 5,
    category: 1,
    name: 'Samsung galaxy S23 ',
    price: 999,
    description: 'long battery life, bright display',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000"
    ,like: 0},
  {
    id: 6,
    category: 1,
    name: 'Xiaomi 11T',
    price: 432,
    description: '108mp tripple camera, NFC dual sim',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h45/hd1/64375879204894.jpg?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/xiaomi-11t-8-gb-128-gb-seryi-102860712/?c=750000000"
    ,like: 0},
  {
    id: 7,
    category: 1,
    name: 'Xiaomi redmi 9A',
    price: 299,
    description: '2Gb + 32 gb',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h22/hbc/63754987274270.jpg?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/redmi-9a-2-gb-32-gb-sinii-100399568/?c=750000000"
    ,like: 0},
  {
    id: 8,
    category: 1,
    name: 'Phone Standard',
    price: 1000,
    description: 'Apple iPhone 15 Pro Max',
    img: "https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000"
    ,like: 0},
  {
    id: 9,
    category: 1,
    name: 'One plus nord 4',
    price: 800,
    description: '5G Enabled (5G service only available on T-Mobile and Google Fi)',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h9a/hcd/86777419989022.png?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/oneplus-nord-4-5g-12-gb-256-gb-chernyi-122347470/?c=750000000"
    ,like: 0},
  {
    id: 10,
    category: 1,
    name: 'One plus nord N20',
    price: 500,
    description: '120Hz Fluid Display, Hasselblad Triple Camera, 65W Ultra Fast Charge',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hfc/ha5/65530200391710.jpg?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/oneplus-nord-n20-se-4-gb-64-gb-chernyi-107503551/?c=750000000"
    ,like: 0},
  {
    id: 11,category: 2,
    name: 'HP flagship',
    price: 509,
    description: '120Hz Fluid Display, Hasselblad Triple Camera, 65W Ultra Fast Charge',
    img: "https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=gallery-large",
    kaspi_link : "https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=gallery-medium"
    ,like: 0},
  {
    id: 12,category: 2,
    name: 'HP newest',
    price: 489,
    description: '4-core Intel Pentium N5030(Up to 3.1GHz), 16GB RAM',
    img: "https://resources.cdn-kaspi.kz/img/m/p/p93/pa5/5890834.jpg?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/hp-15-fd01360ci-15-6-24-gb-ssd-1000-gb-win-11-pro-af362ea-uqq-129282080/?c=750000000"
    ,like: 0},
  {
    id: 13,category: 2,
    name: 'Acer Aspire 5',
    price: 399,
    description: ' Full HD IPS Display | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4',
    img: "https://resources.cdn-kaspi.kz/img/m/p/he5/h98/86694805340190.jpg?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/acer-aspire-5-a515-58p-15-6-16-gb-ssd-512-gb-win-11-pro-nx-khjer-07w-122059498/?c=750000000"
    ,like: 0},
  {
    id: 14,category: 2,
    name: 'HP pavilion',
    price: 799,
    description: '11th Gen Intel Core i7-1165G7 Processor, 16 GB RAM',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd0/hda/87361039925278.png?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/hp-pavilion-plus-16-ab0001ci-16-16-gb-ssd-1024-gb-win-11-a9du5ea-124550354/?c=750000000"
    ,like: 0},
  {
    id: 15,category: 2,
    name: 'Lenovo ideapad 5',
    price: 549,
    description: 'Full HD - 1920 x 1080 - Intel Core i5 11th Gen i5-1135G7 Quad-core (4 Core) 2.40 GHz - 16 GB RAM - 512 GB SSD - Graphite Gray',
    img: "https://resources.cdn-kaspi.kz/img/m/p/p5d/p5b/20687138.jpg?format=gallery-large",
    kaspi_link : "https://kaspi.kz/shop/p/lenovo-ideapad-5-2-in-1-14ahp9-14-16-gb-ssd-512-gb-bez-os-83dr005rrk-133568329/?c=750000000"
    ,like: 0},
  {
    id: 16,
    name: "Roku Smart",
    category: 3,
    price: 200,
    description: "TCL 32 inch",
    img:  "https://resources.cdn-kaspi.kz/img/m/p/hd2/hdf/80548027924510.png?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/smart-32g7000-81-sm-chernyi-109729462/?c=750000000",
    like: 0},
  {
    id: 17,
    category: 3,
    name: "Smart Roku",
    price: 539,
    description: "TCL 65 inch",
    img:  "https://resources.cdn-kaspi.kz/img/m/p/h58/h2d/86035937558558.png?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/haier-65-smart-tv-s2-165-sm-chernyi-119481505/?c=750000000"
    ,like: 0},
  {
    id: 18,
    category: 3,
    name: "Sony x85j",
    price: 319,
    description: "Google TV with Native 120HZ Refresh Rate, Dolby Vision HDR",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h3e/hce/84562296209438.jpg?format=gallery-large" ,
    kaspi_link: "https://kaspi.kz/shop/p/sony-kd75x85l-191-sm-chernyi-114806695/?c=750000000"
    ,like: 0},
  {
    id: 19,
    category: 3,
    name: "VIZIO 58inch",
    price: 485,
    description: "4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in",
    img:  "https://resources.cdn-kaspi.kz/img/m/p/he0/h2b/79719167787038.jpg?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/haier-58-s5-147-sm-sinii-109721933/?c=750000000"
    ,like: 0},
  {
    id: 20,
    category: 3,
    name: "Samsung Smart",
    price: 279,
    description: "TV 43 4-Series 4K UHD smart TV",
    img:  "https://resources.cdn-kaspi.kz/img/m/p/h4b/hb0/86147009806366.jpg?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/samsung-qe98qn90dauxce-249-sm-seryi-119904099/?c=750000000"
    ,like: 0},
  {
    id: 21,
    category: 4,
    name: "Samsung galaxy tab A9",
    price : 70,
    description: "tablet, 7 display, 16 GB, latest model (2019 release), Twilight Blue",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000"
    ,like: 0},
  {
    id: 22,
    category: 4,
    name: "Fire 10",
    price : 100,
    description: "kids pro tablet, blue",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h7f/hf8/85479045136414.jpg?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/smart-product-9901-7c-7-kids-tablet-7-djuim-4-gb-128-gb-sinii-117587880/?c=750000000"
    ,like: 0},
  {
    id: 23,
    category: 4,
    name: "Ipad 7",
    price : 50,
    description: "tablet, 7 display, 16 GB, latest model (2019 release), Black",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hfa/h77/86745408634910.png?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000"
    ,like: 0 },
  {
    id: 24,
    category: 4,
    name: "Moderness Tablet 10.1",
    price : 117,
    description: "10.1 Inch Android 10 32GB 6000mAh Battery Quad Core HD Touchscreen Tablets",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h13/h67/85667489218590.png?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/smartbarry-b89-plus-7-djuim-4-gb-128-gb-rozovyi-118159785/?c=750000000"
    ,like: 0 },
  {
    id: 25,
    category: 4,
    name: "Samsung",
    price : 140,
    description: "Tab A7 Lite 8.7 Gray 32GB (SM-T220NZAAXAR)",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hb0/hf7/84176700801054.jpg?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-seryi-113807107/?c=750000000"
    ,like: 0},
  {
    id: 26,
    category: 5,
    name: "Sony ZX",
    price: 14,
    description: "Wired on ear headphones, white",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hcb/ha5/84011021238302.png?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/sony-wh-ch520-bezhevyi-113518244/?c=750000000"
    ,like: 0},
  {
    id: 27,
    category: 5,
    name: "JBL vibe",
    price: 30,
    description: "100 TWS - True Wireless In-Ear Headphones - Purple",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h3e/h87/80522158211102.jpg?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/jbl-tune-520bt-chernyi-110103473/?c=750000000"
    ,like: 0},
  {
    id: 28,
    category: 5,
    name: "Jabra AONIC 50 ",
    price: 60,
    description: "20 Hours Battery Life, Fingertip Controls - Black",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h96/h11/86616456691742.jpg?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/jabra-evolve2-75-link380a-ms-stereo-bezhevyi-121781893/?c=750000000"
    ,like: 0},
  {
    id: 29,
    category: 5,
    name: "Apple EarPods",
    price: 6,
    description: "Lightning Connector - White",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000"
    ,like: 0},
  {
    id: 30,
    category: 5,
    name: "Beats Solo3",
    price: 359,
    description: "Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Rose Gold",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hcf/h11/63764725563422.jpg?format=gallery-large",
    kaspi_link: "https://kaspi.kz/shop/p/beats-solo-3-wireless-rose-zolotistyi-4801921/?c=750000000"
    ,like: 0},
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/