import React, {Component} from 'react'
import Books from './Books'

class App extends Component {
  state = {
    books: [
      {name: 'React'},
      {name: 'Angular'},
      {name: 'Vue'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Books books={this.state.books}/>
      </div>
    )
  }
}

export default App
