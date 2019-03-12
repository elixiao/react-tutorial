import { takeEvery, call, put } from 'redux-saga/effects'
import {
  DATA_REQUESTED,
  POST_LOADED,
  API_ERRORED
} from '../constants/action-types'

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga)
}
function* workerSaga() {
  try {
    const payload = yield call(getPosts)
    yield put({ type: POST_LOADED, payload })
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e })
  }
}

function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response =>
    response.json()
  )
}
