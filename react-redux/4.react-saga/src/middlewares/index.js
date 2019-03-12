/*
  redux 中间件
  在中间件内部一定要返回 next(action)
  redux 不明白除了普通js对象之外的任何 action，如果要进行异步操作必须自定义中间件
  redux-thunk 可以返回 function，在这个 function 内部进行网络请求
 */
import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types'
const forbiddenWords = ['spam', 'money']
export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // 词汇过滤逻辑
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        )
        if (foundWord.length) {
          return dispatch({ type: FOUND_BAD_WORD })
        }
      }
      return next(action)
    }
  }
}
