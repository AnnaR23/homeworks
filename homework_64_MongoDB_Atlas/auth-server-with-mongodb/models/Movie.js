// модель фильма("шаблон", по которому мы читаем данные)
import mongoose from 'mongoose';

// описание схемы фильма
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  plot: String,
}, {
  collection: 'movies' // имя коллекции в базе sample_mflix
});

// создаем модель
const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
