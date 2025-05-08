import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { userReducer } from './userReducer.ts'
import { userSaga } from './sagas/userSaga.ts'


// создаем saga middleware
const sagaMiddleware = createSagaMiddleware()

// создаем Redux store через configureStore
export const store = configureStore({
  reducer: {
    users: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk:false }).concat(sagaMiddleware),
})

// запускаем сагу
sagaMiddleware.run(userSaga)

//типы
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;