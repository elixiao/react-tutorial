import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import accountReducer from './account'

const reducer = combineReducers({
  form: reduxFormReducer, // redux-form 的 reducer 字段名默认是 form
  account: accountReducer
})

export default reducer
