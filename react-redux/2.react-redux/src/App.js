import React, { Component } from 'react'
import Articles from './components/articles'
import Form from './components/form'

class App extends Component {
  render() {
    return (
      <div>
        <h2>文章列表</h2>
        <Articles />
        <h2>发表文章</h2>
        <Form />
      </div>
    )
  }
}

export default App
