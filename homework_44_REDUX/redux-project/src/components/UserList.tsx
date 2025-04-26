import React from 'react'
import { useSelector } from 'react-redux'// используем useSelector для получения данных из Redux
import { RootState } from '../types'// тип для сосотояния Redux
import UserItem from './UserItem.jsx'

const UserList: React.FunctionComponent = () => {
// используем useSelector для получения списка пользователей  из store
  const users = useSelector((state: RootState) => state.users)// получаем пользователей из Redux store

//если users не существует, показываем сообщение
  if (!users) {
    return <p>No users yet.</p>
  }

  return (
    <div>
      <h2>List of Users:</h2>
      {users.length === 0 ? (
        <p>No users yet.</p>// если пустой список
      ) : (
        <ul>
          {/*users.map передает каждого пользователя в компонент UserItem*/}
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserList