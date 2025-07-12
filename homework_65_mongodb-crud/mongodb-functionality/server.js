import express from 'express'
import session from 'express-session'
import passport from 'passport'
import dotenv from 'dotenv'

import authRoutes from './routes/authRoutes.js' // маршруты для регистрации входа
import moviesRouter from './routes/movies.js' // маршруты для получения фильмов
import './config/passport.js' // настройка паспорта
import { connectDB } from './db.js' // подключение к MongoDB Atlas

dotenv.config() // загружаем переменные из файла .env
// console.log('✅ MONGO_URI используется:', process.env.MONGO_URI);

const PORT = process.env.PORT || 3000
const app = express()

// Middleware - распарсиваем JSON и формы из запросов
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// настраиваем сессии - способ сохранять, кто сейчас "вошел"
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret', // секрет для подписи куки
  resave: false, // не сохраняет сессию в хранилище, если в ней ничего не изменилось
  saveUninitialized: false, // не сохраняет пустую сессию, если пользователь ничего не сделал
  cookie: {
    httpOnly: true, // нельзя прочитать через в JavaScript браузере(защита)
    secure: false // работает даже без HTTPS (true только если HTTPS)
  }
}))


// подключаем Passport (авторизация)
app.use(passport.initialize())
app.use(passport.session())

// подключаем маршруты
app.use('/auth', authRoutes) // регистрация, вход, выход
app.use('/api', moviesRouter) // фильмы из MongoDB Atlas


// главная страница
app.get('/', (req, res) => {
  res.send('<h2>Welcome to the homeworks page! Use POST /auth/register , POST /auth/login, POST /auth/logout and GET /protected to work with authorization.</h2>')
})


// защищенный маршрут, доступен только после входа
app.get('/protected', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Welcome, ${req.user.email}! This is protected content.`)
  } else {
    res.status(401).send('No access')
  }
})

// подключаемся к базе, затем запускаем сервер
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  })
})

