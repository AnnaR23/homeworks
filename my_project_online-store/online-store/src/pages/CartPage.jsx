import React from 'react'
import { useCart } from '../contex/CartContex.jsx'
import { Line } from 'react-chartjs-2' // Импортируем компонент Line из библиотеки react-chartjs-2, который отображает график.
import { //  Импортируем необходимые модули из chart.js, чтобы react-chartjs-2 мог корректно отобразить график.
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'
import { DateTime } from 'luxon' //  Импорт luxon — библиотеки для работы с датами и временем.
import './CartPage.css'


ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement) // Регистрируем модули chart.js, чтобы можно было строить графики.

const CartPage = () => {
// Здесь будет информация о товарах в корзине.
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED) // Получаем текущую дату и время, отформатированные в удобный вид.
  const { cart, removeFromCart, changeQuantity } = useCart() // Получаем состояние и функции из корзины.
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

// Данные для построения линейного графика.
  const data = {
    labels: ['Total Price'],
    datasets: [
      {
        label: 'Total Cart Value',
        data: [totalPrice],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }
    ]
  }

  return (
    <div className="cart-container">
      <h1> Your Cart</h1>
      <p>Current time: {now}</p>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {/* Перебираем товары и выводим каждый как <li> с уникальным key. */}
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name} - {item.price} $ x {item.quantity}</span>
                <div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  <button onClick={() => changeQuantity(item.id, item.quantity + 1)}>+</button>
                  <button onClick={() => changeQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-
                  </button>
                </div>

              </li>
            ))}
          </ul>

          {/* отображение общего количества товаров и общей стоимости */}
          <div className="summary">
            <h2>Total: {totalPrice} $</h2>
            <p>Total Items: {totalItems}</p>
          </div>

          {/* график с общей суммой */}
          <Line data={data} />

          {/* кнопка для оформления покупки */}
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  )
}

export default CartPage