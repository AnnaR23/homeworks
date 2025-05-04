import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


//тип для одного пользователя
interface User {
  id: string;
  name: string;
}

//состояние: список пользователей + статус загрузки + возможная ошибка
interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

//начальное состояние
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

// Thunk - асинхронный экшен для загрузки пользователей с API
export const fetchUsers = createAsyncThunk(
'users/fetchUsers',
  async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  // приводим полученные данные к нашему формату
    return data.map((user: { id: number; name: string }) => ({
      id: String(user.id),
      name: user.name,
    }));
  }
);


//создание слайса пользователей
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

  // обработка состояний асинхронного экшена
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = 'Error loading users.';
      });
  },
});



export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;