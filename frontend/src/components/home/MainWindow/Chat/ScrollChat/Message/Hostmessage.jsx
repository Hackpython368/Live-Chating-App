import React from 'react'
import Profileimg from '../../../../navbar/Profile/ProfileImg/Profileimg'

const Hostmessage = () => {
    return (
        <>
            <div className='flex flex-row-reverse gap-3 p-2'>
                <Profileimg />
                <div className='flex flex-col items-end'>
                    <h1 className='text-black text-xs font-bold'>name</h1>
                    <p className='text-black bg-purple-600 inline p-2 rounded'>This is messsage content...</p>
                </div>
            </div>
        </>
    )
}

export default Hostmessage