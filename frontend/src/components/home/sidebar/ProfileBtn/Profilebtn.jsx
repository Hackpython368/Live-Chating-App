import React from 'react'
import Profileimg from '../../navbar/Profile/ProfileImg/Profileimg'
import Profilelabel from '../../navbar/Profile/ProfileLabel/Profilelabel'

const profilebtn = () => {
    return (
        <>
            <div className='flex flex-col items-center w-full h-20'>
                <Profileimg />
                <Profilelabel />
            </div>
        </>
    )
}

export default profilebtn