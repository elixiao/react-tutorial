import {
  ADD_ARTICLE,
  DATA_REQUESTED
} from '../constants/action-types'

// 这是普通的 action
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}

export function getPosts() {
  return { type: DATA_REQUESTED }
}
