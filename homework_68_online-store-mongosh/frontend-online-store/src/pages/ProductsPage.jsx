import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/productService.js' // функция для запроса товаров с сервера
import { Link } from 'react-router-dom'
import './ProductsPage.css'


// функциональный компонент, отображающий список с фильтрацией
const ProductsPage = () => {

// products хранятся в useState
  const [products, setProducts] = useState([]) // список полученых товаров
  const [search, setSearch] = useState('') // строка поиска
  const [category, setCategory] = useState('all') // выбранная категория
  const [maxPrice, setMaxPrice] = useState(2000) // максимальная цена


// загружаем товары при первом рендере и при изменении фильтров
  useEffect(() => {
    async function loadFilterProducts() {
      const filters = {}

      // добавляем параметры только если они заданы
      if (search) filters.search = search
      if (category !== 'all') filters.category = category
      if (maxPrice < 2000) filters.maxPrice = maxPrice


      const data = await getProducts(filters) // отправляем запрос на сервер с фильтрами
      setProducts(data) // сохраняем полученные товары
    }

    loadFilterProducts()
  }, [search, category, maxPrice]) // обновляем при изменении любого фильтра

  // сброс фильтров
  const handleResetFilters = () => {
    setSearch('')
    setCategory('all')
    setMaxPrice(2000)
  }

 // отображенеие страницы каталога: фильтры + список товаров
  return (
    <div className="product-page">
      <h1>Product Catalog</h1>

      {/* Форма фильтрации */}
      <div className="filters">
        {/* Поиск по названию */}
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // обновляем значение поиска
        />

        {/* Фильтр по категории */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Products</option>
          <option value="televisions">Televisions</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>

        {/* Ползунок для фильтрации по цене */}
        <label>
          Max.price: {maxPrice} $
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))} // обновляем диапазоны цен
          />
        </label>
        {/*добавляем кнопку сброса фильтров*/}
        <button onClick={handleResetFilters}>Reset Filters</button>
      </div>


      {/* Список отфильтрованных товаров */}
      <div className="products-list">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map(product => (
            <div key={product._id} className="product-card">
              <img src={`http://localhost:3000/productImgs/${product.image}`} alt={product.name} /> {/* imageUrl */}
              <h3>{product.name}</h3>
              <p>{product.price} $</p>
              <Link to={`/product/${product._id}`}>More details</Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}


export default ProductsPage