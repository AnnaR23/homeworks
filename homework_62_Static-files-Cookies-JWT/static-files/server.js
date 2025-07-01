import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";
import { dirname } from "path";


const PORT = process.env.PORT || 4000; // порт, на котором запускается сервер
const app = express(); // создание экземпляра приложения Express

// для ES-модулей: получение _dirname и _filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Простая база пользователей в памяти (в реальности БД)
const users = [];

const JWT_SECRET = 'supersecretkey'; // секрет для подписи JWT - хранить в .env в продакшене!

// Мидлвары для отдачи статических файлов из public (favicon, css и другие файлы)
app.use(express.static(path.join(__dirname, 'public')));
// Мидлвары для парсинга(считывания) данных из POST-форм (например логин/регистрация)
app.use(express.urlencoded({ extended: true }));
// Мидлвары для работы с cookies(чтение и установка)
app.use(cookieParser());

// Шаблоны
// настройка PUG как движка для шаблонов  (чтобы отдавать HTML с динамическим содержимым)
app.set('view engine', 'pug');
// путь к папке с шаблонами
app.set('views', path.join(__dirname, 'views'));

// главная страница, передаем текущую тему и user(если есть, из токена)
app.get('/', (req, res) => {
  const theme = req.cookies.theme || 'light'; // тема из куки, по умолчанию light
  const token = req.cookies.token; // JWT токен из куки

  let user = null;

  if (token) {
    try {
      user = jwt.verify(token, JWT_SECRET); // проверяем и декодируем токен
    } catch (e) {
      res.clearCookie('token'); // если токен invalid - удаляем куки
    }
  }

  // рендерим index.pug с передачей темы, пользователя и заголовка
  res.render('index', { title: 'Home Page', theme, user });
});

// GET /register - форма регистрации
app.get('/register', (req, res) => {
  res.render('register', { title: 'Registration' });
});

// POST /register - обработка регистрации
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // добавляем нового пользователя в массив (в реальности - в БД)
  users.push({ username, password });

  // после регистрации, переадресация на страницу логина
  res.redirect('/login');
});

// GET /login - форма входа
app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// POST /login - обработка входа
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // ищем пользователя с таким логином и паролем
  const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!foundUser) {
    // если не нашли - 401 Unauthorized
    return res.status(401).send('Incorrect data');
  }

  // Генерация JWT c payload { username }, сроком на 1 день
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1d' });

  // Сохраняем токен в httpOnly cookie (не доступна JS на клиенте)
  res.cookie('token', token, { httpOnly: true });

  // после успешного логина - редирект на главную стр.
  res.redirect('/');
});

// GET /logout - выход из аккаунта
app.get('/logout', (req, res) => {
  res.clearCookie('token'); // удаляем токен из cookies
  res.redirect('/'); // перенаправляем на главную
});

// GET /set-theme/:theme - смена темы
app.get('/set-theme/:theme', (req, res) => {
  const theme = req.params.theme;

  // Проверяем, что тема либо light, либо dark
  if (theme !== 'light' && theme !== 'dark') {
    return res.status(400).send('Unknown theme');
  }

  // сохраняем тему в cookie с временем жизни 7 дней (в миллисекундах)
  res.cookie('theme', theme, { maxAge: 7 * 24 * 60 * 60 * 1000 });
  // возвращаемся на главную
  res.redirect('/');
});

// Мидлваре для защиты маршрутов, проверяет в JWT куки
function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send('Unauthorized: No token'); //нет токена - 401
  }

  try {
    // проверяем токен и сохраняем данные пользователя в req.user
    const user = jwt.verify(token, JWT_SECRET);
    req.user = user;
    next(); // идем дальше к обработчику маршрута
  } catch (err) {
    res.clearCookie('token'); // если токен просрочен или неверен - удаляем куки
    return res.status(401).send('Unauthorized: Invalid token');
  }
}

// защищенные маршрут /profile - доступен только с валидным JWT
app.get('/profile', authMiddleware, (req, res) => {
  const theme = req.cookies.theme || 'light';

  // рендерим профиль, пердавая пользователя и тему
  res.render('profile', {
    title: 'Profile Page',
  user: req.user,
  theme
  });
});

// запускаем сервер
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});