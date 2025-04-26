import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../features/userReducer.ts'


// создаем store с редюсером userReducer
export const store = configureStore({
  reducer: {
    users: userReducer// Редюсер для сосотояния пользователей
  }
})

// типы для состояния и dispatch
export type RootState = ReturnType<typeof store.getState>; // тип состояния из store
export type AppDispatch = typeof store.dispatch; // тип dispatch для использования в useDispatch