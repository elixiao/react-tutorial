import React, {Component} from 'react'

class Books extends Component {
  render() {
    const books = this.props.books.map(book => {
      return (
        <div>
          <p>{book.name}</p>
        </div>
      )
    })
    return (
      <div>{books}</div>
    )
  }
}
export default Books
