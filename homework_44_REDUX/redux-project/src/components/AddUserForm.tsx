import React, { useState } from 'react'
import { useDispatch } from 'react-redux' //useDispatch для отправки экшенов в Redux store
import { v4 as uuidv4 } from 'uuid'// uuid для генерации уникального id для каждого пользователя
import { User } from '../features/userReducer'// импортируем интерфейс User для типов данных

const AddUserForm: React.FunctionComponent = () => {
  const dispatch = useDispatch()// получаем доступ к dispatch из Redux для отправки экшенов

  const [name, setName] = useState('')// состояние для имени
  const [email, setEmail] = useState('')// состояние для email

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()// предотвращаем перезагрузку страницы при отправке формы

    if (!name || !email) return

    const newUser: User = {
      id: uuidv4(), // генерируем уникальный id для нового пользователя
      name,
      email
    }

    dispatch({ type: 'ADD_USER', payload: newUser })// отправляяем экшен в Redux с типом 'ADD_USER'

    setName('')// очищаем форму
    setEmail('')// очищаем форму
  }

  return (
    <form onSubmit={handleSubmit}> {/*при отправке формы вызываем handleSubmit*/}
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} // обновляем состояние name
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // обновляем состояние email
      />
      <button type="submit">Add User</button>
    </form>
  )
}

export default AddUserForm