# Online Store

## Description
A simple online store where users can browse products and manage a shopping cart.

## Technologies Used
- React
- React Router
- React Context API (for cart state)
- React Toastify (for notifications)
- React Chart.js (for displaying total cart cost)
- Luxon (for date/time display)
- React Idle Timer (to reset cart after inactivity)

## How to Run the Project
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open `http://localhost:5173` in your browser.

## Main Features
- Product browsing with filters (category, price, title)
- Product detail page
- Shopping cart with add/remove/change quantity
- Cart state is saved in LocalStorage
- Total cost graph with Chart.js
- Automatic cart reset after 5 minutes of inactivity
- Notifications (React Toastify) when items are added to the cart

## Documentation

📄 [Manual testing results (TESTING.md)](./TESTING.md)


# Онлайн магазин

## Описание:
Это простой интернет-магазин, где пользователи могут просматривать товары, добавлять их в корзину.

## Используемые технологии:
- React
- React Router
- React Context API (для корзины)
- React Toastify (для уведомлений)
- React Chart.js (для графиков)
- Luxon (для отображения даты, времени)
- React Idle Timer (для сброса корзины при бездействий)

## Как запустить проект:
1. Клонировать репозиторий.
2. Установить зависимости с помощью `npm install`.
3. Запустить проект командой `npm run dev`.
4. Перейти в браузере на `http://localhost:5173`.

## Основные фичи:
- Просмотр товаров с фильтрацией(по категории, цене, названию).
- Страница с подробной информацией о товаре.
- Корзина: добавление, удаление, изменение количества товаров.
- Состояние корзины сохраняется в LocalStorage.
- График общей стоимости корзины (на Chart.js).
- Автоматический сброс корзины после 5 минут бездействия.
- Уведомления при добавлении товаров в корзину (React Toastify).

## Документация

📄 [Результаты ручного тестирования (TESTING.md)](./TESTING.md)