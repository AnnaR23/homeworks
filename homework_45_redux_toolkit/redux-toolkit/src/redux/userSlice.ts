import { createSlice } from "@reduxjs/toolkit";



//типы данных для пользователей
interface User {
  id: string;
  name: string;
}

//типы для состояния с пользователями
interface UserState {
  users: User[];
}

//начальное состояние
const initialState: UserState = {
  users: [
    { id: '1', name: 'Anna' },
    { id: '2', name: 'Lisa' },
    { id: '3', name: 'Jon' },
  ],
};

//создание слайса
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});



export default userSlice.reducer;