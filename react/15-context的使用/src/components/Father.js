import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Child from './Child'

export default class Father extends Component {
  render() {
    return (
      <div>
        <input placeholder={this.props.placeholder}/>
        <br/>
        <Child height={this.props.height} width={200} text='背景颜色'/>
        <button value={this.props.value}
                onClick={this.props.handleClick}>
          {this.props.value}
        </button>
      </div>

    )
  }
}

Father.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleClick: PropTypes.func,
  height: PropTypes.number
}
