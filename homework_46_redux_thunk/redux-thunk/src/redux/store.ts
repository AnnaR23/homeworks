import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';


//создание Redux store с использованием Redux Toolkit
export const store = configureStore({
  reducer: {
    users: userReducer, // подключаем редьюсер пользователей
  },
});

export type RootState = ReturnType<typeof store.getState>;//тип состояния
export type AppDispatch = typeof store.dispatch;
