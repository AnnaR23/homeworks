# Auth Server with Passport.js and MongoDB Atlas

📌 **Интеграция MongoDB Atlas с Express-сервером и реализация маршрута для чтения данных.**

## 📦 Описание

Этот проект - сервер на Express.js с авторизацией через Passport.js и интеграцией с базой данных MongoDB Atlas.
Дополнительно реализован маршрут, который позволяет получать данные о фильмах из коллекции MongoDB Atlas.


## 🔧 Технологии

- **Node.js** - серверная платформа
- **Express.js** - фреймворк для Node.js
- **Passport.js** - локальная стратегия авторизации
- **MongoDB Atlas** - облачная база данных
- **Mongoose** - для работы с базой данных
- **dotenv** - для управление конфигурацией
- **Postman** - для тестирования маршрутов


## 🚀 Установка и запуск проекта

 Клонировать репозиторий и перейти в папку проекта:

```bash
git clone https://github.com/AnnaR23/homeworks.git
cd homeworks/homework_64_MongoDB_Atlas/auth-server-with-mongodb 
```
## Установить зависимости
npm install

## Создать файл .env по примеру .env.example:
    .env.example .env

## Внести значения в .env

PORT=3000
SESSION_SECRET=yourSecretKey
MONGO_URI=yourMongoDBConnectionString

## Запустить сервер:
npm run dev

Сервер запустится на: http://localhost:3000/



## API маршруты
### Аутентификация/auth
 `POST /auth/register — регистрация пользователя`
 `POST /auth/login — вход`
 `POST /auth/logout — выход`
 `GET /protected — защищённый маршрут (только для авторизованных)`

### Работа с фильмами(/api/movies)
 `GET /api/movies` - получить список фильмов из MongoDB Atlas (коллекция movies в базе sample_mflix)

# Использование через Postman
 1. Авторизация:
    Зарегистрируйтесь: POST http://localhost:3000/auth/register
    Войдите: POST http://localhost:3000/auth/login
    Проверьте доступ к защищенному маршруту: GET http://localhost:3000/protected
 2. Получение фильмов:GET http://localhost:3000/api/movies
    