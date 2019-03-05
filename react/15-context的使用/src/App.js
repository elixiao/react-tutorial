import React, {Component} from 'react'
import Father from './components/Father'
import PropTypes from 'prop-types'

// 当你不想在组件树中通过逐层传递 props 或者 state 的方式来传递数据时，可以使用 Context 来实现跨层级的组件数据传递。
class App extends Component {
  getChildContext() {
    return {
      backgroundColor: 'yellow'
    }
  }

  render() {
    return (
      <div>
        <Father
          value='我的按钮'
          placeholder='请输入你的文字'
          handleClick={() => {
            console.log('按钮被点击了！')
          }}
          height={500}/>
      </div>
    )
  }
}

App.childContextTypes = {
  backgroundColor: PropTypes.string
}

export default App
