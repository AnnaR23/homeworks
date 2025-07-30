import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' // для получения id из URL
import { getProducts } from '../services/productService.js' // функция запроса товаров с сервера
import { useCart } from '../contex/CartContex.jsx' // кастомный хук для доступа к корзине
import { toast } from 'react-toastify' // для показа уведомлений
import './ProductDetailPage.css'


const ProductDetailPage = () => {
  const { id } = useParams() // получаем id продукта из URL
  const [products, setProducts] = useState([]) // храним список всех продуктов
  const [loading, setLoading] = useState(true) // состояние загрузки

  const { addToCart } = useCart() //получаем функцию добавления в корзину

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts() // получаем все продукты
        setProducts(data) // сохраняем в state
        setLoading(false) // отключаем загрузку
      } catch (error) {
        console.error('Error loading products:', error)
      }
    }

    fetchData() // вызываем загрузку при первом рендере
  }, [])


  const product = products.find(p => p._id === id) // находим конкретный товар по его _id из MongoDB

  const handleAddToCart = () => {
    if (!product) return
    addToCart(product) // добавляем в корзину
    toast.success(`${product.name} added to cart`) // всплывающее уведомление
  }

  if (loading)
    return <p>Loading...</p>

  if (!product) {
// если продукт не найден
    return <p>Product not found!</p>
  }

  // разметка страницы товара
  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={`http://localhost:3000/productImgs/${product.image}`} alt={product.name} />
      <p>Price: {product.price} $</p>
      <p>{product.description}</p>
      {/* Выводим цену, описание товара, и кнопку "Добавить в корзину" */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductDetailPage