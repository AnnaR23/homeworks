import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors' // позволяет frontend (React) обращаться к backend, даже если у них разные порты
import { connectDB, getDB } from './db.js'
import { products } from './services/seedProducts.js'
import * as path from 'node:path' // используется для работы с путями (подключение изображений)


dotenv.config() // загружаем .env переменные

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000
const app = express()
const __dirname = path.resolve()


// Middlewares
app.use(cors()) // разрешает доступ с других портов
app.use(express.static('public'))
app.use('/productImgs', express.static(path.join(__dirname, 'public/productImgs')))


app.get('/', (req, res) => {
  res.send('Hello from Server!')
})

// вызываем POST /'seed-products' только один раз, чтобы наполнить базу данными
app.post('/seed-products', async (req, res) => {
  try {
    const db = getDB() // получаем подключение к базе
    const collection = db.collection('products') // выбираем коллекцию 'products'

// удаляем все документы в коллекции (чтобы не было дубликатов при повторном вызове)
    await collection.deleteMany({})

// вставляем товары из массива 'products' в коллекцию
    await collection.insertMany(products)

    console.log('Successfully inserted!')

    res.status(200).json({ message: 'Products seeded successfully.' })
  } catch (error) {
    console.error('Error seeding products:', error)
    res.status(500).json({ error: 'Failed to seed products.' })
  }
})

app.get('/products', async (req, res) => {
  try {
    const db = getDB() // получаем подключение к базе
    const collection = db.collection('products') // выбираем коллекцию товаров

// извлекаем параметры из строки запроса (query)
    const { category, search, priceMin, priceMax } = req.query

// создаем объект фильтра для MongoDB
    const query = {}

// фильтрация по категориям (laptops, smartphones)
    if (category && category !== 'all') {
      query.category = category
    }

// фильтрация по части названия товара(регистронезависимая)
    if (search) {
      query.name = { $regex: search, $options: 'i' }
    }

// фильтрация по  диапазону цен
    if (priceMin || priceMax) {
      query.price = {}
      if (priceMin) query.price.$gte = parseFloat(priceMin) // минимум
      if (priceMax) query.price.$lte = parseFloat(priceMax) // максимум
    }

// находим все товары, соответствующие фильтру
    const products = await collection.find(query).toArray()

    res.status(200).json(products) // возвращаем их на фронт
  } catch (error) {
    console.error('Error receiving products:', error)
    res.status(500).json({ error: 'Server Error.' })
  }
})


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  })
})