import React from 'react'

const Red = WrappedComponent => {
  return props => {
    return (
      <div style={{color: 'red'}}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

export default Red
