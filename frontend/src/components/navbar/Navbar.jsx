import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Profile from './Profile'

const Navbar = () => {
  return (
    <>
        <div className='bg-[#3A205D] h-1/9 w-full flex items-center justify-between px-7 relative'>
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