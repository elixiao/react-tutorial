import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import { forbiddenWordsMiddleware } from '../middlewares'
import createSagaMiddleware from 'redux-saga'
import apiSaga from '../sagas/api-saga'
const initialiseSagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
)
initialiseSagaMiddleware.run(apiSaga)
export default store
