import { User } from './features/userReducer.ts'


export interface RootState {
  users: User[];
}