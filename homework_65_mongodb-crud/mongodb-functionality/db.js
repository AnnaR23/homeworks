// подключение к MongoDB Atlas
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGO_URI // из .env
const client = new MongoClient(uri)

let db

// connectDB() устанавливает соединение
export async function connectDB() {
  try {
    await client.connect()
    db = client.db('sample_mflix') // имя базы данных
    console.log('Connected to MongoDB using MongoDB Driver')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

// getDB() возвращает подключенную базу, чтобы из нее можно было читать данные
export function getDB() {
  return db
}


