import { call, put, takeLatest } from 'redux-saga/effects'

// функция для запроса данных пользователей
function* fetchUsers(): Generator {
  try {
    // выполняем запрос к API
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users')
    const data = yield response.json()

    // если запрос успешен, отправлем экшен с данными
    yield put({ type: 'FETCH_USERS_SUCCESS', payload: data })
  } catch (error: unknown) {
    // если ошибка, отправляем экшен с ошибкой
    if (error instanceof Error) {

      // если это экземпляр Error, используем error.massage
      yield put({ type: 'FETCH_USERS_ERROR', payload: error.message })
    } else {
      yield put({ type: 'FETCH_USERS_FAILURE', payload: 'An unknown error occurred.' })
    }
  }
}


// сага, которая слушает экшен FETCH_USERS_REQUEST и запускает fetchUser
export function* userSaga() {
  yield takeLatest('FETCH_USERS_REQUEST', fetchUsers)
}