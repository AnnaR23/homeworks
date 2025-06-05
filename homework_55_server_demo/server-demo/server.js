import http from 'node:http'; // подключаем встроенный модуль http из Node.js

const PORT = 3000;

// создаем сервер. Эта функция будет вызываться при каждом запросе к серверу
const server = http.createServer((req, res) => {// req = request; res = response.
  const { url, method } = req; // деструктуризация объекта запроса - получаем путь и метод ( GET, POST...)

  // здесь обрабатываюся все входящие запросы

  // проверяем путь (url) и метод запроса
  if (url === '/' && method === 'GET') {
    // Отдаем простой текст
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, this is my first server on Node.js');

  } else if (url === '/html' && method === 'GET') {
    // Отдаем HTML- страницу
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Welcome!</h1><p>This is HTML-Page</p>');

  }else if ( url === '/json' && method === 'GET') {
    // Отдаем JSON - формат передачи данных как из API
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const data = {
      message: 'This is a JSON response',
      date: new Date().toLocaleString(), // текущее время (тип: объект Date), (.toLocaleString() - делает дату более читаемой)
    };
    res.end(JSON.stringify(data)); // превращаем объект JS в строку JSON

  } else {
    // если путь не найден
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not Found');
  }
});

// запускаем сервер и слушаем порт 3000
server.listen(PORT,  () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});