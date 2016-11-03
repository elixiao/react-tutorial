import React, {Component, PropTypes}  from 'react'
import ReactDOM from 'react-dom'
import Father from './components/Father'

var height = 500;

class Root extends React.Component {

    getChildContext() {
        return {
            backgroundColor:'yellow'
        }
    }

    render() {
        return (
            <div>
                <Father
                    value='我的按钮'
                    placeholder='请输入你的文字'
                    handleClick={()=> {
                        console.log('按钮被点击了！')
                    }}
                    height={height}/>
            </div>
        )
    }
}


Root.childContextTypes = {
    backgroundColor:React.PropTypes.string
}


ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)