import React, {Component} from 'react'
import Books from './Books'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React 书籍列表</h1>
        <Books/>
      </div>
    )
  }
}

export default App
