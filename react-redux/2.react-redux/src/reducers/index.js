import { ADD_ARTICLE } from '../constants/action-types'
const initialState = {
  articles: [
    {
      id: +new Date(),
      title: '示例文章'
    }
  ]
}
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return { articles: [...state.articles, action.payload] }
    default:
      return state
  }
}
export default rootReducer
