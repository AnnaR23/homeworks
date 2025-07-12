// маршрут для получения фильмов
import express from 'express'
import { getDB } from '../db.js'

const router = express.Router()

// читать фильмы ( с проекцией - выводим только нужные поля)
router.get('/movies', async (req, res) => {
  try {
    const db = getDB()
    const moviesCollection = db.collection('movies') // обращаемся напрямую к коллекции

    const movies = await moviesCollection
      .find({}, { projection: { title: 1, year: 1, plot: 1 } }) // показываем только нужные поля
      .limit(10)
      .toArray() // получаем как массив первые 10 фильмов

    res.json(movies)
  } catch (error) {
    res.status(500).json({ message: 'Error while receiving data' })
  }
})

// добавить один фильм
router.post('/movies', async (req, res) => {
  try {
    const db = getDB()
    const movie = req.body // тело запроса должно содержать title, year, plot
    const result = await db.collection('movies').insertOne(movie)

    res.status(201).json({ message: 'Movie added', id: result.insertId })
  } catch (error) {
    res.status(500).json({ message: 'Error while receiving data' })
  }
})

// добавить несколько фильмов
router.post('/movies/many', async (req, res) => {
  try {
    const db = getDB()
    const movies = req.body // массив фильмов
    const result = await db.collection('movies').insertMany(movies)

    res.status(201).json({ message: 'Movies added', count: result.insertedCount })
  } catch (error) {
    res.status(500).json({ message: 'Error while receiving data' })
  }
})

// обновить один фильм по title
router.patch('/movies/update-one', async (req, res) => {
  try {
    const db = getDB()
    const { title, update } = req.body

    const result = await db.collection('movies').updateOne(
      { title }, // кого обновлять
      { $set: update } // что менять
    )
    res.json({ message: 'Movie updated', modifiedCount: result.modifiedCount })
  } catch (error) {
    res.status(500).json({ message: 'Error updating movie' })
  }
})

// обновить много фильмов по году
router.patch('/movies/update-many', async (req, res) => {
  try {
    const db = getDB()
    const { year, update } = req.body

    const result = await db.collection('movies').updateMany(
      { year },
      { $set: update }
    )

    res.json({ message: 'Movie updated', modifiedCount: result.modifiedCount })
  } catch (error) {
    res.status(500).json({ message: 'Error updating movies' })
  }
})

// заменить один фильм полностью
router.put('/movies/replace-one', async (req, res) => {
  try {
    const db = getDB()
    const { title, replacement } = req.body

    const result = await db.collection('movies').replaceOne(
      { title },
      replacement
    )

    res.json({ message: 'Movie replaced', modifiedCount: result.modifiedCount })
  } catch (error) {
    res.status(500).json({ message: 'Error replacing movie' })
  }
})

// удалить один фильм по title
router.delete('/movies/delete-one', async (req, res) => {
  try {
    const db = getDB()
    const { title } = req.body

    const result = await db.collection('movies').deleteOne({ title })

    res.json({ message: 'Movie deleted successfully', deletedCount: result.deletedCount })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie' })
  }
})

// удалить много фильмов по году
router.delete('/movies/delete-many', async (req, res) => {
  try {
    const db = getDB()
    const { year } = req.body

    const result = await db.collection('movies').deleteMany({ year })

    res.json({ message: 'Movies deleted successfully', deletedCount: result.deletedCount })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movies' })
  }
})


export default router
