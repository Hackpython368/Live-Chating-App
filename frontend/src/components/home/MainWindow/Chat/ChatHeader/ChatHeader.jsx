import React from 'react'

const ChatHeader = () => {
    return (
        <>
            <div className='flex items-center justify-start gap-5 w-full border-b-2 border-gray-200 p-5'>
                <div className='relative w-10 h-10 bg-amber-900 rounded-full'>
                    <div className='absolute w-2 h-2 bottom-0 bg-green-600 rounded-full'></div>
                </div>
                <div className='flex flex-col justify-center w-7/9 h-full'>
                    <h1 className='text-black font-bold text-xl'>Name</h1>
                    <p className='text-gray-400 text-xs'>last seen</p>
                </div>
            </div>
        </>
    )
}

export default ChatHeader