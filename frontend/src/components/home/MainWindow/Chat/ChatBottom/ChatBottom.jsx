import React from 'react'
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa'
import { TiAttachment } from 'react-icons/ti'

const ChatBottom = () => {
    return (
        <>
            <div className='flex flex-col items-center w-full border-t-2 border-gray-200 p-5'>
                <div className='flex justify-center items-center w-full h-10 bg-gray-200 rounded-xl gap-2'>
                    <div className='text-2xl'>
                        😎
                    </div>
                    <input type="text" className=' w-[90%] h-full rounded text-gray-500 focus:outline-0' placeholder='Type here......' />
                    <div className='text-2xl text-gray-300'>
                        <TiAttachment />
                    </div>
                    <div className='text-2xl text-gray-300'>
                        <FaMicrophone />
                    </div>
                    <div className='flex justify-center items-center w-17 h-17'>

                    <div className='bg-[#3A205D] flex w-15 h-15 rounded-full justify-center items-center'>
                        <FaPaperPlane />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatBottom