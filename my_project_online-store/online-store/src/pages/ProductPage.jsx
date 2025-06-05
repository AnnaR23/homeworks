import React, { useState } from 'react';
import { getProducts } from '../services/productService.js';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const products = getProducts();
  // состояния для фильтрации
  const [search, setSearch] = useState(''); // для поиска по названию
  const [category, setCategory] = useState('all'); // для фильтрации по категориям
  const [maxPrice, setMaxPrice] = useState(1000); // для фильтрации по цене


  // функция обработки фильтрации по поиску
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // функция обработки изменения категории
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // функция изменения верхнего предела цены
  const handlePriceChange = (e) => {
    setMaxPrice(Number(e.target.value)); // преобразуем в число
  };

  // фильтруем товары на основе состояния
  const filteredProducts = products.filter((product) => {
    // фильтрация по поисковому запросу
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());

    // Фильтрация по категории
    const matchesCategory = category === 'all' || product.category === category;

    // фильтрация по цене
    const matchesPrice = product.price <= maxPrice;

    // возвращаем товар, если он соответствует всем условиям
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // сброс фильтров
const handleResetFilters = () => {
  setSearch('');
  setCategory('all');
  setMaxPrice(1000);
};

  return (
    <div>
      <div style={{ padding: '20px' }}>
      <h1>Product Catalog</h1>

      {/* Форма фильтрации */}
        <div style={{ marginBottom: '20px' }}>
          {/* Поиск по названию */}
      <input
      type="text"
      placeholder="Search by name"
      value={search}
      onChange={handleSearch} // обновляем значение поиска
        style={{ marginRight: '10px' }}
      />

      {/* Фильтр по категории */}
      <select value={category} onChange={handleCategoryChange} style={{ marginRight: '10px' }} >
        <option value="all">All Products</option>
        <option value="electronics">Electronics</option>
        <option value="laptops">Laptops</option>
        <option value="smartphones">Smartphones</option>
        {/*можно добавить другие категории*/}
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
        style={{ marginLeft: '10px' }}
        />
          </label>

          {/*добавляем кнопку сброса фильтров*/}
          <button onClick={handleResetFilters}>Reset Filters</button>
        </div>




      {/* Список отфильтрованных товаров */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
          ) : (
          filteredProducts.map(product => (
          <div key={product.id}
          style={{
          border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            width: '200px',
          }}
          >
            <img src={product.image} alt={product.name}
            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />

            <h3>{product.name}</h3>
            <p>{product.price} $</p>
            <Link to={`/product/${product.id}`}>More details</Link>
          </div>
        ))
      )}
      </div>
    </div>
  </div>
  );
};



export default ProductPage;