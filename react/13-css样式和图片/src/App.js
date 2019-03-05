import React, {Component} from 'react'
import jenkins from './jenkins.jpeg'

const divStyle = {
  color: 'red',
  backgroundColor: 'yellow'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={divStyle}>css样式</h1>
        <img src={jenkins} alt="jenkins"/>
      </div>
    )
  }
}

export default App
