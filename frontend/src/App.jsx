import React from 'react'
import Navbar from './components/home/navbar/navbar'
import Sidebar from './components/home/sidebar/sidebar'
import Button from './components/home/sidebar/MessageBtn/Messagebtn'
import Home from './components/home/Home'

const App = () => {
  return (
    <div className='relative w-screen h-screen text-white overflow-hidden'>
      <Navbar />

      <Home active={true} />
    </div>
  )
}

export default App