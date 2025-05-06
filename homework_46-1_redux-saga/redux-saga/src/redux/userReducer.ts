import { AnyAction } from 'redux'

// тип для одного пользователя
export interface User {
  id: string;
  name: string;
}

// тип для состояния пользователя
export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

//начальное состояние
const initialState: UserState = {
  users: [],
  loading: false,
  error: null
}

//редьюсер
export const userReducer = (state = initialState, action: AnyAction): UserState => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return { ...state, loading: true, error: null } //начинаем загрузку

    case 'FETCH_USERS_SUCCESS':
      return { ...state, loading: false, users: action.payload } //загрузка завершена, обновляем пользователей

    case 'FETCH_USERS_ERROR':
      return { ...state, loading: false, error: action.payload } //если ошибка, сохраняем ее

    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] } //добавляем нового пользователя

    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }

    default:
      return state
  }
}

export default userReducer
