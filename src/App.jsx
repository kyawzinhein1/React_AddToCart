import React from 'react'
import Body from './layouts/Body'
import Header from './layouts/header'
import Backdrop from './components/Backdrop'

const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Backdrop/>
    </div>
  )
}

export default App