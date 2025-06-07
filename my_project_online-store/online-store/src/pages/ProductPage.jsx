import React, { useState } from 'react'
import { getProducts } from '../services/productService.js'
import { Link } from 'react-router-dom'
import './ProductPage.css'

// объявляем функциональный компонент ProductPage
const ProductPage = () => {
  const products = getProducts() // получаем список всех товаров из productService
// состояния для фильтрации
  const [search, setSearch] = useState('') // для поиска по названию
  const [category, setCategory] = useState('all') // для фильтрации по категориям
  const [maxPrice, setMaxPrice] = useState(1000) // для фильтрации по цене


// функция обработки фильтрации по поиску
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

// функция обработки изменения категории
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

// функция изменения верхнего предела цены
  const handlePriceChange = (e) => {
    setMaxPrice(Number(e.target.value)) // преобразуем в число
  }

// фильтруем товары на основе состояния
  const filteredProducts = products.filter((product) => {
// фильтрация по поисковому запросу
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())

// Фильтрация по категории
    const matchesCategory = category === 'all' || product.category === category

// фильтрация по цене
    const matchesPrice = product.price <= maxPrice

// возвращаем товар, если он соответствует всем условиям
    return matchesSearch && matchesCategory && matchesPrice
  })

// сброс фильтров
  const handleResetFilters = () => {
    setSearch('')
    setCategory('all')
    setMaxPrice(1000)
  }

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
            onChange={handleSearch} // обновляем значение поиска
          />

          {/* Фильтр по категории */}
          <select value={category} onChange={handleCategoryChange}>
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
              onChange={handlePriceChange} // обновляем диапазоны цен
            />
          </label>
          {/*добавляем кнопку сброса фильтров*/}
          <button onClick={handleResetFilters}>Reset Filters</button>
        </div>


        {/* Список отфильтрованных товаров */}
        <div className="products-list">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price} $</p>
                <Link to={`/product/${product.id}`}>More details</Link>
              </div>
            ))
          )}
        </div>
      </div>
  )
}


export default ProductPage