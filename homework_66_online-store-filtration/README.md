# Онлайн магазин с фильтрацией товаров

## Описание:
Это учебный проект онлайн-магазина, где пользователи могут:

   - просматривать каталог товаров,
   - фильтровать товары по категории, цене и названию,
   - просматривать подробную информацию о каждом товаре,
   - добавлять товары в корзину,
   - видеть график общей стоимости корзины,
   - получать уведомления при действиях,
   - автоматически сбрасывать корзину при бездействии более 5 минут.

Проект состоит из фронтенда на React и бэкенда на Node.js + MongoDB.

## Используемые технологии:

### Фронтенд:

- React
- React Router
- Context API (для управления корзиной)
- React Toastify (для уведомлений)
- Chart.js (для графиков)
- Luxon (для отображения даты, времени)
- React Idle Timer (для сброса корзины или бездействий)

### Бэкенд:

- Node.js
- Express
- MongoDB (через native driver)
- dotenv
- CORS

---

## Как запустить проект:

### 1. Клонировать репозиторий:

 ```bash
   git clone https://github.com/AnnaR23/homeworks.git
          cd homework_66_online-store-filtration
   ```

2. Установить зависимости:

    Фронтенд:

    `npm install`.

    Бэкенд:

    cd backend-online-store-filtration 
    `npm install`


3. Настроить переменные окружения:
 - Перейдите в папку `backend-online-store-filtration`
 - Создайте файл `.env` на основе `.env.example`
 - Внутри `.env` укажите строку подключения к MongoDB:
   MONGO_URI=ваша_строка_подключения

# Запустить бэкенд

cd backend-online-store-filtration
node server.js

Бэкенд будет доступен по адресу: http://localhost:3000

# Запустить фронтенд

npm run dev

Фронтенд откроется по адресу: http://localhost:5173


## Наполнение базы данных
- Выполните POST-запрос в Postman или через браузер:
  POST http://localhost:3000/seed-products

# Примеры фильтрации товаров (бэкенд)
  Проверить работу фильтрации, отправив GET-запросы на:
  - http://localhost:3000/products                // все товары
  - http://localhost:3000/products?category=smartphones
  - http://localhost:3000/products?category=smartphones&priceMax=800
  - http://localhost:3000/products?search=Galaxy
  - http://localhost:3000/products?category=smartphones&priceMin=500&priceMax=1000&search=Galaxy
  - http://localhost:3000/products?category=laptops
  - http://localhost:3000/products?priceMin=400&priceMax=1000

# Доступные query-параметры:
- category: категория товара (например, smartphones, laptops)
- search: часть названия товара
- priceMin: минимальная цена
- priceMax: максимальная цена

# Основные фичи
- Каталог товаров с фильтрацией по:
    категории,
    названию,
    диапазону цен.
- Страница подробностей товара.
- Корзина с добавлением, удалением и подсчётом общей стоимости.
- График стоимости корзины (Chart.js).
- Сброс корзины при бездействии (через idle timer).
- Уведомления (toast) при добавлении товара в корзину.
- LocalStorage для сохранения корзины.


