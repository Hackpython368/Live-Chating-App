import React from 'react'
import Sidebar from '../sidebar/sidebar'
import Search from '../navbar/Search'
import Profile from '../navbar/Profile'
import { FaPaperPlane } from "react-icons/fa";
import { IoIosAttach } from "react-icons/io";
import { TiAttachment } from 'react-icons/ti';
import { FaMicrophone } from "react-icons/fa";




const Home = (pars) => {
  return (
    <>
        <div className='flex justify-center h-[90%]'>
            <Sidebar  />
            <div className='w-14/15 h-full'>
                <h1 className='p-2 text-black font-bold'>Chat</h1>
                <div className='flex gap-2 h-full p-5'>
                    <div className='flex flex-col items-center w-3/9 h-9/10 rounded border border-gray-200'>
                        <input className='bg-gray-200 w-9/10 m-2 rounded' placeholder='🔍 Search....'/>
                        <div className='flex items-center justify-between w-9/10 h-15'>
                            <div className='relative w-10 h-10 bg-amber-900 rounded-full'>
                                <div className='absolute w-2 h-2 bottom-0 bg-green-600 rounded-full'></div>
                            </div>
                            <div className='flex flex-col justify-center w-7/9 h-full'>
                                <h1 className='text-black font-bold text-xl'>Name</h1>
                                <p className='text-gray-400 text-xs'>last seen</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-4/12 h-9/10 rounded border border-gray-200'>
                        <div className='flex items-center justify-between w-full border-b-2 border-gray-200 p-5'>
                            <div className='relative w-10 h-10 bg-amber-900 rounded-full'>
                                <div className='absolute w-2 h-2 bottom-0 bg-green-600 rounded-full'></div>
                            </div>
                            <div className='flex flex-col justify-center w-7/9 h-full'>
                                <h1 className='text-black font-bold text-xl'>Name</h1>
                                <p className='text-gray-400 text-xs'>last seen</p>
                            </div>
                        </div>

                        <div className='flex flex-col overflow-y-scroll h-[75%]'>
                            <div className='flex gap-3 p-2'>
                                <Profile />
                                <div className='flex flex-col'>
                                <h1 className='text-black text-xs font-bold'>name</h1>
                                <p className='text-black bg-purple-800 inline p-2 rounded'>This is messsage content...</p>
                                </div>
                            </div>
                            <div className='flex flex-row-reverse gap-3 p-2'>
                                <Profile />
                                <div className='flex flex-col items-end'>
                                <h1 className='text-black text-xs font-bold'>name</h1>
                                <p className='text-black bg-purple-600 inline p-2 rounded'>This is messsage content...</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full h-15 border-t-2 border-gray-200'>
                            <div className='flex justify-center items-center w-[95%] h-10'>
                            <div className='text-2xl'>
                                😎
                            </div>
                            <input type="text" className=' w-100 h-[80%] rounded bg-gray-200' placeholder='Type here......'/>
                            <div className='text-2xl text-gray-300'>
                                <TiAttachment />
                            </div>
                            <div className='text-2xl text-gray-300'>
                                <FaMicrophone />
                            </div>
                            <div className='bg-[#3A205D] flex w-15 h-15 rounded-full justify-center items-center'>
                                <FaPaperPlane />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home