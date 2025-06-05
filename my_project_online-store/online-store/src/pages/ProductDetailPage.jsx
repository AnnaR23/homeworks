import React from 'react';
import { useParams } from 'react-router-dom'; // для получения параьетров из URL
import { getProducts } from '../services/productService.js'; // список товаров
import { useCart } from '../contex/CartContex.jsx';
import { toast } from 'react-toastify';


const ProductDetailPage = () => {
  const { id } = useParams(); // получаем id из URL
  const products = getProducts();
  const product = products.find(product => product.id === parseInt(id)); // находим продукт по id

  const { addToCart } = useCart(); //получаем функцию добавления в корзину
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  if (!product) {
    return <p>Product not found!</p>; // если продукт не найден
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img
      src={product.image}
      alt={product.name}
      style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
      <p>Price: {product.price} $</p>
      <p>{product.description}</p>
      {/* Выводим цену, описание товара, и кнопку "Добавить в корзину" */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;