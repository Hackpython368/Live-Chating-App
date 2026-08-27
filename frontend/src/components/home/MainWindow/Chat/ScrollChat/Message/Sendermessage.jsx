import React from 'react'
import Profileimg from '../../../../navbar/Profile/ProfileImg/Profileimg'

const Sendermessage = () => {
    return (
        <>
            <div className='flex gap-3 p-2'>
                <Profileimg />
                <div className='flex flex-col'>
                    <h1 className='text-black text-xs font-bold'>name</h1>
                    <p className='text-black bg-purple-800 inline p-2 rounded'>This is messsage content...</p>
                </div>
            </div>
        </>
    )
}

export default Sendermessage