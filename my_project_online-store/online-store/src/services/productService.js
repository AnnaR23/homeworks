// "имитируем" загрузгу товаров с сервера

export const getProducts = () => {
  return [
    {
    id: 1,
    name: 'Smartphone Samsung Galaxy',
    category: 'smartphones',
    price: 900,
    image: '/images/smartphone-samsung-galaxy.jpg',
    description: 'Budget and powerful smartphone',
  },
    {
      id: 2,
      name: 'Laptop Asus',
      category: 'laptops',
      price: 350,
      image: '/images/laptop-asus.jpg',
      description: 'Laptop for work',
    },
    {
      id: 3,
      name: 'TV Samsung Smart 4K',
      category: 'electronics',
      price: 300,
      image: '/images/tv-samsung.jpg',
      description: '4K Smart TV mit Wi-Fi and Bluetooth',
    },
  ];
};