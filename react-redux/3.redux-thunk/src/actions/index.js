import { ADD_ARTICLE, POST_LOADED } from '../constants/action-types'

// 这是普通的 action
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}

// 这是 redux-thunk 封装过的异步 action
export function getPosts() {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log('这里', json)
        return { type: POST_LOADED, payload: json }
      })
  }
}
