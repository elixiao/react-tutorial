import React from 'react'
import Red from '../hoc/Red'

const Hello = props => {
  console.log(props)
  return (
    <div>
      <h2>Hello React</h2>
    </div>
  )
}

export default Red(Hello)
