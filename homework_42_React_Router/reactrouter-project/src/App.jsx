import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import Layout from './components/Layout.jsx'

// основной компонент приложения
function App() {

  return (
    // Оборачиваем всё приложение в <BrowserRouter>, чтобы включить маршрутизацию с использованием истории браузера (URL меняются без перезагрузки).
    <BrowserRouter>
      <Routes> {/*Контейнер для всех <Route>. Обязательно используется внутри BrowserRouter.*/}
        <Route path="/" element={<Layout/>} >{/*основной шаблон*/}
          <Route index element={<Home/>} /> {/* Дочерний маршрут — главная страница (/).*/}
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contacts/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
