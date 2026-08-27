import React from 'react'
import Hostmessage from './Message/Hostmessage'
import Sendermessage from './Message/Sendermessage'

const Scrollchat = () => {
    return (
        <>
            <div className='flex flex-col overflow-y-scroll h-[85%]'>
                <Sendermessage />
                <Hostmessage />
            </div>
        </>
    )
}

export default Scrollchat