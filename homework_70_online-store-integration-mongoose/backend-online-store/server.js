import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors' // позволяет frontend (React) обращаться к backend, даже если у них разные порты
import { connectDB } from './db.js'
import { products } from './services/seedProducts.js'
import * as path from 'node:path' // используется для работы с путями (подключение изображений)
import Product from './models/Product.js'

dotenv.config() // загружаем .env переменные

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000
const app = express()
const __dirname = path.resolve()


// Middlewares
app.use(cors()) // разрешает доступ с других портов
app.use(express.static('public'))
app.use('/productImgs', express.static(path.join(__dirname, 'public/productImgs')))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from server!')
})


// вызываем POST /'seed-products' только один раз, чтобы наполнить базу данными
app.post('/seed-products', async (req, res) => {
  console.log('Маршрут /seed-products вызван')  // <== вот это
  try {
    await Product.deleteMany({})
    console.log('Товары для вставки:', products)
    await Product.insertMany(products)
    console.log('Successfully inserted!')

    res.status(200).json({ message: 'Products seeded successfully.' })
  } catch (error) {
    console.error('Error seeding products:', error)
    res.status(500).json({ error: 'Failed to seed products.' })
  }
})

app.get('/products', async (req, res) => {
  try {
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
    const products = await Product.find(query)

    res.status(200).json(products) // возвращаем их на фронт
  } catch (error) {
    console.error('Error receiving products:', error)
    res.status(500).json({ error: 'Server Error.' })
  }
})

const startServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}
void startServer()

