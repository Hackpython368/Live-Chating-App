import React from 'react'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import Profile from './Profile/Profile'

const Navbar = () => {
  return (
    <>
        <div className='bg-[#3A205D] min-h-[15%] h-1/9 w-full flex items-center justify-between px-7 shadow-lg  bg-linear-to-r'>
        <div className='flex w-4xl justify-between items-center'>
          <Logo />

          <Search />
        </div>
            <Profile />
      </div>
    </>
  )
}

export default Navbar