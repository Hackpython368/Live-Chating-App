import React from 'react';
import { TiGroup } from 'react-icons/ti';

const Groupbtn = (pars) => {

    function makeBtnactive(){
        console.log("button clicked");
    }

    if (pars.active) {

        return (
            <>
                <div className='bg-[#F5F7F4]'>

                    <div className='w-full h-4 bg-[#3A205D] rounded-br-2xl'>

                    </div>
                    <div className='flex justify-between bg-[#3A205D]'>
                        <div></div>
                        <div className='bg-[#F5F7F4] w-5/6 px-5 rounded-l-4xl'>

                            <TiGroup className='text-4xl text-black h-10 rounded-4xl' />
                        </div>
                    </div>
                    <div className='w-full h-4 bg-[#3A205D] rounded-tr-2xl'>

                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='bg-[#3A205D]'>

                    <div className='w-full h-4 bg-[#3A205D] rounded-br-2xl'>

                    </div>
                    <div className='flex justify-between bg-[#3A205D]'>
                        <div></div>
                        <div className='bg-[#3A205D] w-5/6 px-5 rounded-l-4xl' onClick={makeBtnactive}>

                            <TiGroup className='text-4xl text-white h-10 rounded-4xl ' />
                        </div>
                    </div>
                    <div className='w-full h-4 bg-[#3A205D] rounded-tr-2xl'>

                    </div>
                </div>
            </>
        )
    }
}

export default Groupbtn