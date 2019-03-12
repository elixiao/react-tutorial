import { ADD_ARTICLE } from '../constants/action-types'
const initialState = {
  articles: []
}
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return { articles: [...state.articles, action.payload] }
  }
  return state
}
export default rootReducer
