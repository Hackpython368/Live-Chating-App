import React from 'react';
import { TiGroup }  from 'react-icons/ti';

const Groupbtn = (pars) => {
  if (pars.active){

        return (
            <>
                <div className='bg-white'>

            <div className='w-full h-4 bg-[#3A205D] rounded-br-2xl'>

            </div>
            <div className='flex justify-between bg-[#3A205D]'>
                <div></div>
                <div className='bg-white w-5/6 px-5 rounded-l-4xl'>

                    <TiGroup className='text-4xl text-black h-10 rounded-4xl ' />
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

            <div className='w-full h-4 bg-[#3A205D] hover:rounded-br-2xl'>

            </div>
            <div className='flex justify-between bg-[#3A205D]'>
                <div></div>
                <div className='hover:bg-white w-5/6 px-5 hover:rounded-l-4xl'>

                    <TiGroup className='text-4xl hover:text-black h-10 hover:rounded-4xl ' />
                </div>
            </div>
            <div className='w-full h-4 bg-[#3A205D] hover:rounded-tr-2xl'>

            </div>
        </div>
            </>
        )
    }
}

export default Groupbtn