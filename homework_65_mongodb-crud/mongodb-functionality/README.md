# mongodb-functionality - CRUD API with Express and MongoDB Atlas

📌 **Интеграция MongoDB Atlas с Express.js. Реализация аутентификации и полного CRUD-интерфейса для коллекции фильмов.**

---

## 📦 Описание

Этот проект - сервер на Express.js с авторизацией через Passport.js и интеграцией с облачной базой данных MongoDB Atlas.
Реализованы маршруты для:

- регистрации и авторизации пользователей
- получения, создания, обновления и удаления фильмов из коллекции `movies` (база `sample_mflix`)

---

## 🔧 Технологии

- **Node.js** - серверная платформа
- **Express.js** - веб-фреймворк
- **Passport.js** - локальная стратегия авторизации
- **MongoDB Atlas** - облачная база данных
- **MongoDB Node.js Driver** - для работы с базой
- **dotenv** - для работы с переменными окружения
- **Postman** - для тестирования запросов

---

## 🚀 Установка и запуск проекта

### Клонировать репозиторий и перейти в папку проекта:

```bash
git clone https://github.com/AnnaR23/homeworks.git
cd homeworks/homework_65_mongodb-crud/mongodb-functionality
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

### Маршруты авторизации (/auth)

`POST /auth/register — регистрация нового пользователя`
`POST /auth/login — вход в систему`
`POST /auth/logout — выход из системы`
`GET /protected — защищённый маршрут (только после входа)`

### Маршруты фильмов (/api/movies)

Получение данных
`GET /api/movies` - получить первые 10 фильмов с проекцией (только title, year, plot)

Создание данных
`POST /api/movies` добавить один фильм
`POST /api/movies/many` добавить сразу несколько фильмов

Обновление данных
`PATCH /api/movies/update-one` обновить один фильм по title
`PATCH /api/movies/update-many` обновить все фильмы по year
`PUT /api/movies/replace-one` полностью заменить один фильм по title

Удаление данных
`DELETE /api/movies/delete-one` удалить один фильм по title
`DELETE /api/movies/delete-many` удалить все фильмы по year

## Заголовки для всех запросов

Все запросы, где передаются данные (POST, PUT, PATCH, DELETE), должны содержать заголовок:

Content-Type: application/json

# Примеры запросов (Postman)

### POST /api/movies

{
"title": "Inception",
"year": 2010,
"plot": "Dream within a dream"
}

### POST /api/movies/many

[
{ "title": "Avatar", "year": 2009, "plot": "Pandora" },
{ "title": "Titanic", "year": 1997, "plot": "Ship story" }
]

### PATCH /api/movies/update-one

{
"title": "Inception",
"update": { "plot": "New updated plot" }
}

### PATCH /api/movies/update-many

{
"year": 2009,
"update": { "plot": "Updated plot for all" }
}

### PUT /api/movies/replace-one

{
"title": "Avatar",
"replacement": {
"title": "Avatar 2",
"year": 2022,
"plot": "New story on Pandora"
}
}

### DELETE /api/movies/delete-one

{
"title": "Titanic"
}

### DELETE /api/movies/delete-many

{
"year": 1997
}

# Проверка маршрутов

1. Зарегистрируйтесь: POST http://localhost:3000/auth/register
2. Войдите: POST http://localhost:3000/auth/login
3. Проверьте защищенный маршрут: GET http://localhost:3000/protected
4. Работайте с фильмами: GET/POST/PATCH/DELETE через http://localhost:3000/api/movies
