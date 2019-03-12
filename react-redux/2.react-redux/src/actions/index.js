import { ADD_ARTICLE } from '../constants/action-types'

// 这是普通的 action
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}
