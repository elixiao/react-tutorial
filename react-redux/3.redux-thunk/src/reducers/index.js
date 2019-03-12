import { ADD_ARTICLE, POST_LOADED } from '../constants/action-types'
const initialState = {
  articles: [
    {
      id: +new Date(),
      title: '示例文章'
    }
  ],
  posts: []
}
function rootReducer(state = initialState, action) {
  console.log('进来了吗？', action)
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] }
    case POST_LOADED:
      return { ...state, posts: [...state.posts, action.payload] }
    default:
      return state
  }
}
export default rootReducer
