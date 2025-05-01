import { createSlice, PayloadAction } from '@reduxjs/toolkit';


//тип для одного пользователя
interface User {
  id: string;
  name: string;
}

//тип для состояния пользователей
interface UserState {
  users: User[];
}

//начальное состояние: список пользователей
const initialState: UserState = {
  users: [
    { id: '1', name: 'Anna' },
    { id: '2', name: 'Lisa' },
    { id: '3', name: 'Jon' },
  ],
};

//создание слайса с экшенами(состоянием и редьюсерами)
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // добавление нового пользователя
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },

    // удаление пользователя по id
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});



export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;