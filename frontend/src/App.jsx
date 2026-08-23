import React from 'react'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Button from './components/button/Messagebtn'
import Home from './components/home/Home'

const App = () => {
  return (
    <div className='w-screen h-screen text-white'>
      <Navbar />

      <Home active={true} />
    </div>
  )
}

export default App