import React from 'react'
import { IoIosNotifications } from 'react-icons/io';

const Notificationbtn = (pars) => {
  if (pars.active){

        return (
            <>
                <div className='bg-[#F5F7F4]'>

            <div className='w-full h-4 bg-[#3A205D] rounded-br-2xl'>

            </div>
            <div className='flex justify-between bg-[#3A205D]'>
                <div></div>
                <div className='bg-[#F5F7F4] w-5/6 px-5 rounded-l-4xl'>

                    <IoIosNotifications className='text-4xl text-black h-10 rounded-4xl ' />
                </div>
            </div>
            <div className='w-full h-4 bg-[#3A205D] rounded-tr-2xl'>

            </div>
        </div>
            </>
        )
    }else{
        return (
            <>
            <div className='bg-[#3A205D]'>

            <div className='w-full h-4 bg-[#3A205D]'>

            </div>
            <div className='flex justify-between bg-[#3A205D]'>
                <div></div>
                <div className='w-5/6 px-5'>

                    <IoIosNotifications className='text-4xl' />
                </div>
            </div>
            <div className='w-full h-4 bg-[#3A205D]'>

            </div>
        </div>
            </>
        )
    }
}

export default Notificationbtn