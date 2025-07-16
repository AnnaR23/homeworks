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
- React Idle Timer (для сброса корзины или бездействий)

## Как запустить проект:
1. Клонировать репозиторий.
2. Установить зависимости с помощью `npm install`.
3. Запустить проект командой `npm run dev`.
4. Перейти в браузере на `http://localhost:5173`.

## Основные фичи:
- Просмотр товаров с фильтрацией(по категории, цене, названию).
- Страница с подробной информацией о товаре.
- Корзина с добавлением/удалением товаров и изменением их количества. Сохранение корзины в LocalStorage. 
- График с общей стоимостью корзины. 
- Сброс корзины при бездействии более 5 мин. 
- Уведомление при добавлении товаров.


БЭКЕНД:
ЗАПРОСЫ ДЛЯ ПРОВЕРКИ:
POST  http://localhost:3000/seed-products

GET 
http://localhost:3000/products?category=smartphones
http://localhost:3000/products?category=smartphones&priceMax=800
http://localhost:3000/products?search=Galaxy
http://localhost:3000/products?category=smartphones&priceMin=500&priceMax=1000&search=Galaxy
http://localhost:3000/products — все товары
http://localhost:3000/products?category=laptops
http://localhost:3000/products?search=galaxy
http://localhost:3000/products?priceMin=400&priceMax=1000