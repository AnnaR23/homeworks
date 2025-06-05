import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './contex/CartContex.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
  <CartProvider> {/* оборачиваем все приложение в провайдер */}
    <ToastContainer position="top-right" autoClose={2000} />
    <BrowserRouter>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{marginRight: '20px'}}>HOME</Link>
        <Link to="/products" style={{ marginRight: '20px'}}>PRODUCTS</Link>
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
  );
}

export default App;
