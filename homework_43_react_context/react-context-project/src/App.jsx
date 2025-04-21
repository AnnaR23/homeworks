import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';// библиотека для генерации уникальных id
import UserContext from './UserContext';
import UserList from './components/UserList';


function App() {
// создаем массив пользователей
  const user = [
    { id: uuidv4(), name: 'Anna'},
    { id: uuidv4(), name: 'Lisa'},
    { id: uuidv4(), name: 'Jon'},
  ];


  return (
    // Context создает общее "хранилище данных". Provider делает данные доступными для вложенных компонентов. Оборачиваем все приложение в провайдер контекста и передаем туда список пользователей.
    <UserContext.Provider value={user}>
      <h1>List of users</h1>
      <UserList /> {/*компонент, который будет использовать данные из контекста*/}
    </UserContext.Provider>
  )
}

export default App;
