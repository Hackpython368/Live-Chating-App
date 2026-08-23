import React from 'react'
import { FaHome } from 'react-icons/fa'

const Homebtn = (pars) => {
  if (pars.active){

        return (
            <>
                <div className='bg-white'>

            <div className='w-full h-4 bg-[#3A205D] rounded-br-full'>

            </div>
            <div className='flex justify-between bg-[#3A205D]'>
                <div></div>
                <div className='bg-white w-5/6 px-5 rounded-l-full'>

                    <FaHome className='text-4xl text-black h-10 rounded-4xl ' />
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
            <div className='bg-white'>

            <div className='w-full h-4 bg-[#3A205D] '>

            </div>
            <div className='flex justify-between bg-[#3A205D]'>
                <div></div>
                <div className='w-5/6 px-5 '>

                    <FaHome className='text-4xl h-10 ' />
                </div>
            </div>
            <div className='w-full h-4 bg-[#3A205D]'>

            </div>
        </div>
            </>
        )
    }
}

export default Homebtn