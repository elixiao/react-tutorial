/* eslint-disable no-useless-constructor */
/*
  有状态组件，是 es6 类
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/index'
export class Post extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    // 调用 action creator 获取数据
    this.props.getPosts().then(data => {
      this.setState({ posts: data.payload })
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map(it => (
            <li key={it.id}>{it.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 10)
  }
}

export default connect(
  null,
  { getPosts }
)(Post)
