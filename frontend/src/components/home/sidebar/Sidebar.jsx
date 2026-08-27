import React from 'react'
import Homebtn from './HomeBtn/Homebtn'
import Messagebtn from './MessageBtn/Messagebtn'
import Groupbtn from './GroupBtn/Groupbtn'
import Notificationbtn from './NotificationBtn/Notificationbtn'
import Settingbtn from './SettingsBtn/Settingbtn'
import Block from './Block/Block'
import Profilebtn from './ProfileBtn/Profilebtn'

const Sidebar = (pars) => {
    return (
        <>
            <div className='flex flex-col bg-[#3A205D] h-6/8 w-1/15 rounded-br-4xl justify-evenly shadow-lg bg-linear-to-r max-lg:w-2/18'>
                <div className='flex flex-col justify-center'>
                    <Block />
                    <Homebtn active={false} />
                    <Groupbtn active={false} />
                    <Messagebtn active={false} />
                    <Notificationbtn active={true} />
                    <Settingbtn active={false} />
                </div>
                
                <Profilebtn />
            </div>
        </>
    )
}

export default Sidebar;