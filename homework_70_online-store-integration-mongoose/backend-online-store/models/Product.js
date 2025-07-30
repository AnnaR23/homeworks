import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true // ускоряет поиск по 'name'
  },
  category: {
    type: String,
    required: true,
    index: true // ускоряет фильтрацию по категории
  },
  price: {
    type: Number,
    required: true,
    min: 0, // ограничение минимума
    max: 2000 // ограничение максимума
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
})

// создаём модель
export default mongoose.model('Product', productSchema)
