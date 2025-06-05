import React from 'react';
import { useCart } from '../contex/CartContex.jsx';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const CartPage = () => {
  // Здесь будет информация о товарах в корзине
  const { cart, removeFromCart, changeQuantity } = useCart(); // получаем состояние и функции из корзины
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // графики для отображения общей суммы
  const data = {
    labels: ['Total Price'],
    datasets: [
      {
        label: 'Total Cart Value',
        data: [totalPrice],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h1> Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                <div>
                <span>{item.name} - {item.price} $ x {item.quantity}</span>
                  <div>
                <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px'}}>Remove</button>
                <button onClick={() => changeQuantity(item.id, item.quantity + 1)} style={{ marginLeft:'10px' }}>+</button>
                <button onClick={() => changeQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} style={{ marginLeft: '10px'}}>-</button>
                  </div>
                </div>
                  </li>
            ))}
          </ul>

          {/* отображение общего количества товаров и общей стоимости */}
          <h2>Total: {totalPrice} $</h2>
          <p>Total Items: {totalItems}</p>

          {/* график */}
          <Line data={data} />

          {/* кнопка для оформления */}
          <button style={{marginTop: '20px', padding: '10px', backgroundColor: '#CAF50', color: 'white'}}>Remove
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;