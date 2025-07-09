// маршрут для получения фильмов
import express from 'express';
import Movie from '../models/Movie.js';

const router = express.Router();

// GET/api/'movies - получить первые 10 фильмов
router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find().limit(10); // читаем первые 10
    res.json(movies); // возвращаем данные клиенту
  } catch (error) {
    res.status(500).json({ message:  'Error while receiving data'});
  }
});

export default router;
