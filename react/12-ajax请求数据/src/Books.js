import React, {Component} from 'react'
import axios from 'axios'
import jsonp from 'jsonp'

class Books extends Component {
  state = {
    url: 'https://api.douban.com/v2/book/search?q=react&start=0&count=10',
    books: []
  }

  componentDidMount() {
    this.getByJsonp()
    // this.getByAxios()
  }

  // 用 jsonp 来代替
  getByJsonp() {
    jsonp(this.state.url, null, (err, data) => {
      if (err) {
        console.error(err.message)
      } else {
        console.log(data)
        const books = data.books
        this.setState({books})
      }
    })
  }

  // 访问豆瓣 API 会出现跨域问题
  getByAxios() {
    axios.get(this.state.url)
      .then(res => {
        console.log(res)
      })
  }

  render() {
    const {books} = this.state
    const bookList = books.length ? (
      books.map((book, i) => {
        return (
          <div key={i}>
            <p>书名：{book.title}，作者：{book.author.join(',')}</p>
          </div>
        )
      })
    ) : (
      <div>暂无数据</div>
    )
    return bookList
  }
}

export default Books
