import React from 'react';
import Box from '@mui/material/Box'; // Компонент для обертки с размерами
import { DataGrid } from '@mui/x-data-grid'; // Компонент для таблицы

// Описание колонок для таблицы
const columns = [
  { field: 'id', headerName: 'ID', width: 90 }, // Колонка для ID
  {
    field: 'firstName', // Название поля данных
    headerName: 'First Name', // Заголовок колонки
    width: 150, // Ширина колонки
    editable: true, // Ячейки этой колонки можно редактировать
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number', // Тип данных - число
    width: 110,
    editable: true,
  },
];

// Данные для таблицы
const rows = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', age: 14 }, // объект
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 31 },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 31 },
  { id: 4, firstName: 'Arya', lastName: 'Stark', age: 11 },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: 30 },
];


// Основной компонент, который отображает таблицу
export default function DataTable() {
  return (
    // Box - это компонент из Material UI, который позволяет оборачивать другие элементы и задавать им размеры
    <Box sx={{ height: 400, width: '100%' }}>
      {/* DataGrid -  компонент таблицы. Передаем rows и columns*/}
      <DataGrid
        rows={rows}        // Данные для таблицы
        columns={columns}  // Описание колонок
        pageSize={5}       // Колличество строк на одной странице.(если данных больше, будет пагинация(разбиение на страницы))
        checkboxSelection  // Включаем возможность выбора строк с чекбоксами
      />
    </Box>
  );
}