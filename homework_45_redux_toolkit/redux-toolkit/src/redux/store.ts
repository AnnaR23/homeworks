import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';


//создание store
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;//тип состояния
