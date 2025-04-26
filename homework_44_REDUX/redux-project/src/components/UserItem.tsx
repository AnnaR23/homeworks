import React from 'react'
import { useDispatch } from 'react-redux'
import { User } from '../features/userReducer.ts'

interface Props {
  user: User;// принимаем объект пользователя как пропс
}

const UserItem: React.FunctionComponent<Props> = ({ user }) => {
  const dispatch = useDispatch()// создаем dispatch для отправки экшена в Redux


  const handleDelete = () => {
    dispatch({ type: 'REMOVE_USER', payload: user.id })// удаляем пользователя по id
  }

  return (
    <li>
      <strong>{user.name}</strong> - {user.email} {/*отображаем имя и email пользователя*/}
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  )
}

export default UserItem