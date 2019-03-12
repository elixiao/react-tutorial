/*
  无状态组件，纯视图组件，只需要使用 mapStateToProps 即可
 */
import React from 'react'
import { connect } from 'react-redux'

// 将外部 state 传递给组件 props
const mapStateToProps = state => {
  return { articles: state.articles }
}

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(el => (
      <li key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
)
const Articles = connect(mapStateToProps)(ConnectedList)
export default Articles
