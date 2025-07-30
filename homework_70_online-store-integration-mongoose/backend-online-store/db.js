// подключение к Mongoose
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// загружает переменные категории
dotenv.config()

// eslint-disable-next-line no-undef
const uri = process.env.MONGO_URI // из .env

// connectDB() устанавливает соединение
export async function connectDB() {

  try {
    await mongoose.connect(uri, {
      dbName: 'shopDB'
    })

    console.log('Connected to MongoDB using Mongoose')
  } catch (error) {
    console.error('Mongoose connection error:', error)
    process.exit(1)
  }
}


