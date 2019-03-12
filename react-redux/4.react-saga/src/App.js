import React, { Component } from 'react'
import Articles from './components/articles'
import Form from './components/form'
import Post from './components/posts'

class App extends Component {
  render() {
    return (
      <div>
        <h2>文章列表</h2>
        <Articles />
        <h2>发表文章</h2>
        <Form />
        <h2>历史文章</h2>
        <Post />
      </div>
    )
  }
}

export default App
