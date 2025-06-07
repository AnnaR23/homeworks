// "имитируем" загрузгу товаров с сервера

export const getProducts = () => {
  return [
    {
      id: 1,
      name: 'Smartphone Samsung Galaxy',
      category: 'smartphones',
      price: 900,
      image: '/images/smartphone-samsung-galaxy.jpg',
      description: 'Budget and powerful smartphone'
    },
    {
      id: 2,
      name: 'Laptop Asus',
      category: 'laptops',
      price: 350,
      image: '/images/laptop-asus.jpg',
      description: 'Laptop for work'
    },
    {
      id: 3,
      name: 'TV Samsung Smart 4K',
      category: 'televisions',
      price: 300,
      image: '/images/tv-samsung.jpg',
      description: '4K Smart TV mit Wi-Fi and Bluetooth'
    },
    {
      id: 4,
      name: 'Acer Aspire A17-51',
      category: 'laptops',
      price: 800,
      image: '/images/acer_aspire_A17-51.jpg',
      description: 'Universal and functional device'
    },
    {
      id: 5,
      name: 'Dell Inspiron 15-Laptop',
      category: 'laptops',
      price: 350,
      image: '/images/dell.avif',
      description: 'A laptop for everyday use, with an elegant, sophisticated design.'
    },
    {
      id: 6,
      name: 'DYON Smart 43 VX',
      category: 'televisions',
      price: 200,
      image: '/images/dyon.jpg',
      description: '43-inch Full HD TV, Smart TV with Netflix, Prime Video, YouTube and integrated Wi-Fi'
    },
    {
      id: 7,
      name: 'LG OLED evo AI',
      category: 'televisions',
      price: 950,
      image: '/images/lg_oled.avif',
      description: 'The LG OLED TV gives you access to a wide range of streaming services.'
    },
    {
      id: 8,
      name: 'MacBookPro 16',
      category: 'laptops',
      price: 1000,
      image: '/images/MacBook_Pro-16.avif',
      description: 'High performance, excellent screen quality and long battery life'
    },
    {
      id: 9,
      name: 'Smartphone Galaxy X10',
      category: 'smartphones',
      price: 550,
      image: '/images/smartphone-galaxy-X10.avif',
      description: 'The Samsung Galaxy S10\'s display has excellent dynamic range, high brightness, and decent color reproduction.'
    },
    {
      id: 10,
      name: 'TOSHIBA VIDAA Smart TV',
      category: 'televisions',
      price: 400,
      image: '/images/toshiba.jpg',
      description: 'Toshiba 55UV2363DAN 55-inch TV / VIDAA Smart TV (4K UHD, Dolby Vision HDR, Triple Tuner)'
    },
    {
      id: 11,
      name: 'Xiaomi Redmi Silver',
      category: 'smartphones',
      price: 150,
      image: '/images/xiaomi.jpg',
      description: 'Xiaomi Redmi makes reading and browsing easier and reduces the need for constant zooming and scrolling'
    },
    {
      id: 12,
      name: 'Huawei Leica Vario-Summilux - Blue',
      category: 'smartphones',
      price: 200,
      image: '/images/xuawei.jpg',
      description: 'Huawei\'s Leica Vario-Summilux system is designed to deliver high-quality photos and videos'
    }
  ]
}