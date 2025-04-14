import axios from 'axios'// импортируем axios для выполнения HTTP-запросов
import './App.css'
import { useEffect, useState } from 'react'

function App() {
//создаем состояния
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

// useEffect - выполняет код сразу после первого рендера компонента
  useEffect(() => {
// асинхронная функция для загрузки данных
    const getData = async () => {
      try {
// отправляем GET-запрос с помощью axios
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
// если запрос успешен, сохраняем данные в state и меняем состояние Loading
        setData(response.data)
        setLoading(false)
      } catch (err) {
// если произошла ошибка, сохраняем ее в состоянии error
        setError(err.message)
        setLoading(false)
      }
    }

// вызываем функцию загрузки данных
    getData()
  }, []) // []- означает, что код выполнится только один раз


  return (
    <div className="App">
      <h1>{loading ? 'Loading data from API' : 'List of posts'}</h1>
      {loading && <p>Loading...</p>} { /* if loading true, show Loading...*/}
      {error && <p className="error">Error: {error}</p>} {/* if error, show error message*/}

      <ul>
        {/*Рендерим список данных(постов)*/}
        {data.map((post) => (
          <li key={post.id}>{post.title}</li> //каждому элементу даем уникальный ключ
        ))}
      </ul>
    </div>
  )
}

export default App
