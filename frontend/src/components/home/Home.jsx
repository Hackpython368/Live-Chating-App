import React from 'react'
import Sidebar from './sidebar/sidebar'
import Mainwindow from './MainWindow/Mainwindow';




const Home = (pars) => {
  return (
    <>
        <div className='flex justify-center h-full bg-[#F5F7F4]'>
            <Sidebar  />
            <Mainwindow />
        </div>
    </>
  )
}

export default Home