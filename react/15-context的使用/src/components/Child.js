import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Child extends Component {
  render() {
    return (
      <div>
        <div style={{
          backgroundColor: this.context.backgroundColor,
          width: this.props.width,
          height: this.props.height
        }}>
          {this.props.text}
        </div>
      </div>

    )
  }
}

Child.contextTypes = {
  backgroundColor: PropTypes.string
}

Child.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.string
}
