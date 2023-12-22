import React from 'react'
import Nav from '../components/Nav'
import Summary from '../components/Summary'

const header = (props) => {
  return (
    <div>
      <Nav showCartHandler = {props.showCartHandler} />
      <Summary/>
    </div>
  )
}

export default header