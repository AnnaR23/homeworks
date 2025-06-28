import express from 'express'


const PORT = process.env.PORT || 4000

const app = express()

// устанавливаем PUG как шаблонизатор
app.set('view engine', 'pug')

// создаем массив пользователей("временная база данных")
const users = [
  { id: '1', name: 'Anna', age: 30 },
  { id: '2', name: 'Alex', age: 35 },
  { id: '3', name: 'Michael', age: 37 }
]

// Главная страница
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Main Page',
    message: 'Welcome to Main Page!',
    content: 'Go to /users, to see the list of users'
  })
})

// список всех пользователей
app.get('/users', (req, res) => {
  res.render('users', { title: 'User list', users })
})

// страница одного пользователя
app.get('/users/:userId', (req, res) => {
  const user = users.find((u) => u.id === req.params.userId)

  if (!user) {
    return res.status(404).render('404', { title: 'User Not Found' })
  }

  res.render('user', { title: `User: ${user.name}`, user })
})


// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})