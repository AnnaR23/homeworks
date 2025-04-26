// тип для одного пользователя
export interface User {
  id: string;// используем строку для ID
  name: string;
  email: string;
}

// типы экшенов
type Action =
  | { type: 'ADD_USER'; payload: User } // добавляем пользователя
  | { type: 'REMOVE_USER'; payload: string }; // удаляем пользователя по ID (string); payload - это ID пользователя

const initialState: User[] = []
// редюсер с типами для Action и состояния
export const userReducer = (state: User[] = initialState, action: Action): User[] => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload]// добавляем нового пользователя в массив

    case 'REMOVE_USER':
      return state.filter((user) => user.id !== action.payload)// фильтруем и удаляем пользователя по id

    default:
      return state // если тип экшена на совпадает, возвращаем текущее состояние
  }
}