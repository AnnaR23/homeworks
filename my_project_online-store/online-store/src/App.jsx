import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import { CartProvider } from './contex/CartContex.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IdleTimerProvider } from 'react-idle-timer'


// основной компонент приложения( с него начинается отрисовка всего UI )
function App() {
  // функция вызывается, если пользователь ничего не делает 5 мин
  const handleIdle = () => {
    alert('You were inactive for 5 minutes. Cart will be cleared.')
    localStorage.removeItem('cart')
    window.location.href = '/' // пользователь перенаправляется на главную страницу
  }

  return (
    <IdleTimerProvider timeout={1000 * 60 * 5} onIdle={handleIdle}> {/* оборачиваем приложение в IdleTimerProvider, вызываем функцию onIdle={handleIdle} если пользователь неактивен 5 мин(1000мс*60*5)*/}
      <CartProvider> {/* оборачиваем все приложение, чтобы корзина была доступна в любом компоненте */}
        <ToastContainer position="top-right" autoClose={2000} /> {/* добавляем контейнер для уведомлений (toast) */}
        <BrowserRouter>
          {/* nav-бар со ссылками на страницы, Link - чтобы не происходила перезагрузка стр. */}
          <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <Link to="/" style={{ marginRight: '20px' }}>HOME</Link>
            <Link to="/products" style={{ marginRight: '20px' }}>PRODUCTS</Link>
            <Link to="/cart">CART</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </IdleTimerProvider>
  )
}

export default App
