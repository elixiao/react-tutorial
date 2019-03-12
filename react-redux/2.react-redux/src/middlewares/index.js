/*
  redux 中间件
  在中间件内部一定要返回 next(action)
 */
import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  EMPTY_TITLE
} from '../constants/action-types'
const forbiddenWords = ['spam', 'money']
export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // 词汇过滤逻辑
      if (action.type === ADD_ARTICLE) {
        const title = action.payload.title.trim()
        if (!title) {
          return dispatch({ type: EMPTY_TITLE }) // 标题为空
        }
        const foundWord = forbiddenWords.filter(word => title.includes(word))
        if (foundWord.length) {
          return dispatch({ type: FOUND_BAD_WORD }) // 包含敏感字
        }
      }
      return next(action)
    }
  }
}
