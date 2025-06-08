import React from 'react'
import { useParams } from 'react-router-dom' // для получения параметров из URL
import { getProducts } from '../services/productService.js' // список товаров
import { useCart } from '../contex/CartContex.jsx'
import { toast } from 'react-toastify'
import './ProductDetailPage.css'


const ProductDetailPage = () => {
  const { id } = useParams() // получаем id из URL
  const products = getProducts() // получаем список всех товаров из productService.js
  const product = products.find(product => product.id === parseInt(id)) // находим продукт по id (parseInt преобразует id из строки в число)

  const { addToCart } = useCart() //получаем функцию добавления в корзину
  const handleAddToCart = () => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  if (!product) {
    // если продукт не найден
    return <p>Product not found!</p>
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price} $</p>
      <p>{product.description}</p>
      {/* Выводим цену, описание товара, и кнопку "Добавить в корзину" */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductDetailPage