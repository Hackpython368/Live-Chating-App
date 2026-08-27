import React from 'react'

const Userprofile = () => {
    return (
        <>
            <div className='flex items-center justify-between g-3 w-9/10 h-15'>
                <div className='relative w-10 h-10 bg-amber-900 rounded-full'>
                    <div className='absolute w-2 h-2 bottom-0 bg-green-600 rounded-full'></div>
                </div>
                <div className='flex flex-col justify-center w-7/9 h-full'>
                    <h1 className='text-black font-bold text-xl'>Vidya Prkash Pandey</h1>
                    <p className='text-gray-400 text-xs'>online </p>
                </div>
            </div>
        </>
    )
}

export default Userprofile