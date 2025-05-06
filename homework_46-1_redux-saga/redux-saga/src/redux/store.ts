import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { userReducer } from './userReducer.ts'
import { userSaga } from './sagas/userSaga.ts'


// комбинируем редьюсеры
const rootReducer = combineReducers({
  users: userReducer
})

// создаем middleware для сагa
const sagaMiddleware = createSagaMiddleware()

// создаем Redux store с подключенным middleware
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// запускаем сагу
sagaMiddleware.run(userSaga)

export type RootState = ReturnType<typeof store.getState>;
export default store