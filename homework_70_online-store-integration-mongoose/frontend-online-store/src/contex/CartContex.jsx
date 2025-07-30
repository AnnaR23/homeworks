import React, { createContext, useContext, useEffect, useState } from 'react'

// создаем контекст для корзины
const CartContext = createContext()


// провайдер для корзины
export const CartProvider = ({ children }) => {
// при инициализации читаем из localStorage, либо пустой массив
  const [cart, setCart] = useState(() => { // получаем строку по ключу 'cart'
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        return JSON.parse(savedCart)
      } catch {
        return [] // если ошибка парсинга, возвращаем пустой массив
      }
    }
    return []
  })

// сохраняем в localStorage при каждом изменении cart
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

// функция для добавления товара в корзину
  const addToCart = (product) => {
    setCart((prevCart) => {
// проверяем, если товар уже есть в корзине, увеличиваем количество
      const existingProduct = prevCart.find((item) => item._id === product._id)
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

// если товар новый, добавляем его в корзину с количеством 1
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

// функция для удаления товара из корзины
  const removeFromCart = (_id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== _id))
  }

// функция для увеличения/уменьшения количества товара
  const changeQuantity = (_id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === _id ? { ...item, quantity: Math.max(1, quantity) } : item))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

// хук для использования контекста
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)
