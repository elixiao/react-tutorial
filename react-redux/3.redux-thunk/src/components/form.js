import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions/index'

// 将外部行为 disptch 传递给组件 props
function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

class ConnectedForm extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const { title } = this.state
    const id = +new Date()
    this.props.addArticle({ title, id })
    this.setState({ title: '' })
  }
  render() {
    const { title } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">文章标题：</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <button type="submit">添加</button>
        </div>
      </form>
    )
  }
}

// 如果不存在 mapStateToProps，connect 函数的第一个参数一定是 null，否则会报错：dispatch is not a function.
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm)
export default Form
