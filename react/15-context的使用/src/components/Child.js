import React, { Component, PropTypes } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <div style={{backgroundColor:this.context.backgroundColor,
                    width:this.props.width,
                    height:this.props.height}}>
                    {this.props.text}
                </div>
            </div>

        )
    }
}

Child.contextTypes = {
    backgroundColor:React.PropTypes.string
}

Child.propTypes = {
    width:PropTypes.number,
    height:PropTypes.number,
    text:PropTypes.string
}
