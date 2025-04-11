import { useEffect, useState } from 'react'

export default function DataFetchingComponent() {
  const [users, setUsers] = useState([])// состояние для хранения данных
  const [loading, setLoading] = useState(true)// состояние для отслеживания состояния загрузки
  const [error, setError] = useState(null)// состояние для отслеживания ошибок

// useEffect для выполнения запроса при загрузке компонента
  useEffect(() => {
// функция для загрузки данных
    const fetchData = async () => {
      try {
// запрос на сервер
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Error loading data!')
        }
//  получаем данные в формате JSON
        const data = await response.json()
// сохраняем данные в состоянии
        setUsers(data)
        setLoading(false)
      } catch (err) {
// если ошибка, сохраняем ошибку в состоянии
        setError(err.message)
        setLoading(false)
      }
    }

    fetchData()// выполняем функцию при загрузке компонента
  }, []) // пустой массив --> запрос один раз при монтировании компонента

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}: {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}