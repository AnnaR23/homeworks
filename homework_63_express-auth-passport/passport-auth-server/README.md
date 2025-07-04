# passport-auth-server

📌 **Обновление сервера Express с использованием Passport для авторизации**

## 📦 Описание

Это учебный проект на Node.js и Express.js, реализующий базовую систему авторизации пользователей с использованием библиотеки Passport.js и сессий. Данные пользователей временно хранятся в памяти, без базы данных.

## 🔧 Технологии

- Node.js
- Express.js
- Passport.js (локальная стратегия)
- express-session
- bcrypt (хеширование паролей)
- dotenv (переменные окружения)

---

## 🚀 Установка и запуск

 Клонировать репозиторий:

```bash
git clone https://github.com/AnnaR23/homeworks.git
cd passport-auth-server

npm install
npm start
```
Сервер запустится на: http://localhost:3000/


# Использование через Postman

## Основные маршруты
 `POST /auth/register — регистрация пользователя`
 `POST /auth/login — вход`
 `POST /auth/logout — выход`
 `GET /protected — защищённый маршрут (только для авторизованных)`
