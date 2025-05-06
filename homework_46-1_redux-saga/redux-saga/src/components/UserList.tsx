import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' // для получения данных из store
import { RootState } from '../redux/store' // тип RootState для правильной работы useSelector
import { v4 as uuidv4 } from 'uuid'
import { User } from '../redux/userReducer.ts'
import UserItem from './UserItem.tsx'


// компонент, отображающий список пользователей
function UserList() {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users.users)// доступ к данным пользователя
  const loading = useSelector((state: RootState) => state.users.loading)
  const error = useSelector((state: RootState) => state.users.error)


  // загружаем пользователей при первом рендере компонента
  useEffect(() => {
    dispatch({ type: 'FETCH_USERS_REQUEST' }) // запрос на получение пользователей
  }, [dispatch])

  // функция для добавления нового пользователя
  const handleAddUser = () => {
    const newUser: User = {
      id: uuidv4(), // генерируем уникальный id
      name: `User ${users.length + 1}`
    }
    dispatch({ type: 'ADD_USER', payload: newUser }) // отправляем экшен добавления
  }


  return (
    <div>
      {/*кнопка для загрузки пользователей*/}
      <button onClick={() => dispatch({ type: 'FETCH_USERS_REQUEST' })}>
        {loading ? 'Loading...' : 'Fetch users'}
      </button>

      {/*кнопка для добавления пользователя*/}
      <button onClick={handleAddUser}>AddUser</button>

      {/*ошибка загрузки*/}
      {error && <p>Error: {error}</p>}

      {/*отображаем пользователей*/}
      <ul>
        {/*проходим по массиву пользователя и отображаем их с помощью компонента UserItem*/}
        {users.map((user: User) => (
          <li key={user.id}>
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList