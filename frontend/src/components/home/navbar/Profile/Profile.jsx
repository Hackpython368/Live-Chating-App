import React from 'react';
import Profileimg from './ProfileImg/Profileimg';
import Profilelabel from './ProfileLabel/Profilelabel';

const Profile = () => {
    return (
        <>
            <div className='w-10 h-10'>
                <Profileimg />
                <Profilelabel  />
            </div>
        </>
    )
}

export default Profile