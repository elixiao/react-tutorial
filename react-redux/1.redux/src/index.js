import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store/index'
import { addArticle } from './actions/index'
window.store = store
window.addArticle = addArticle

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
