import React from 'react'
import Homebtn from '../button/Homebtn'
import Messagebtn from '../button/Messagebtn'
import Groupbtn from '../button/Groupbtn'
import Notificationbtn from '../button/Notificationbtn'
import Settingbtn from '../button/Settingbtn'
import Block from './Block'

const Sidebar = (pars) => {
    return (
        <>
            {console.log(pars)}
            <div className='flex flex-col bg-[#3A205D] h-7/8 w-1/15 rounded-br-4xl justify-evenly'>
                <div className='flex flex-col justify-center'>
                    <Block />
                    <Homebtn active={false} />
                    <Groupbtn active={true} />
                    <Messagebtn active={false} />
                    <Notificationbtn active={false} />
                    <Settingbtn active={false} />
                </div>
                <div className='flex flex-col items-center w-full h-20'>
                    <div className='w-10 bg-red-700 h-10 rounded-full'>
                    </div>
                    <h1 className=''>Name</h1>
                </div>
            </div>
        </>
    )
}

export default Sidebar;