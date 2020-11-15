import { all, select, takeLatest } from 'redux-saga/effects'

function* saveState() {
  const state = yield select()
  yield localStorage.setItem('state-library', JSON.stringify(state))
}

export default function* rootSaga() {
  yield all([takeLatest('*', saveState)])
}
