import React from 'react'
import PageHeading from './PageHeading/PageHeading'
import ChatHeader from './Chat/ChatHeader/ChatHeader'
import ChatBottom from './Chat/ChatBottom/ChatBottom'
import Scrollchat from './Chat/ScrollChat/Scrollchat'
import Profilelabel from '../navbar/Profile/ProfileLabel/Profilelabel'
import Searchclient from './SearchClient/Searchclient'

const Mainwindow = () => {
    return (
        <>
            <div className='w-full h-[90%] '>
                <PageHeading />
                <div className='flex gap-2 h-full p-5'>
                    <Searchclient />
                    <div className='flex flex-col justify-between w-6/12 h-9/10 rounded border border-gray-200 max-lg:w-full'>
                        <ChatHeader />

                        <Scrollchat />

                        <ChatBottom />
                    </div>



                        <div className='flex flex-col items-center w-4/12 h-9/10 rounded max-lg:hidden'>
                            <div className='relative w-70 aspect-square bg-white flex flex-col justify-center items-center mt-[50%] border-2 border-gray-200'>

                                <div className='bg-red-400 absolute w-full rounded-full aspect-square top-[-50%] overflow-hidden'>
                                    <img src="https://imgs.search.brave.com/BpWxg6tgALzkvxqMdiUi002SE0SYPR6Or3Sjt4uWdvI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL2Nvb2wtbmVv/bi1ibHVlLXByb2Zp/bGUtcGljdHVyZS11/OXk5eWRvOTcxazlt/ZGNmLmpwZw" alt="" />
                                </div>

                                <div className='w-[80%] h-[65%] bg-white shadow-2xl shadow-gray-300 rounded-2xl bottom-[90%] z-10 text-black flex flex-col justify-center items-center'>
                                    <Profilelabel />
                                    <h2 className='text-gray-300 font-bold'>Full-stack Developer</h2>
                                    <h2 className='mt-5'>📍 Lucknow , Utter Pradesh</h2>
                                    <div className='flex gap-2 mt-2'>
                                        <div className='flex w-10 aspect-square items-center justify-center rounded-full overflow-hidden'>
                                            <img src="https://imgs.search.brave.com/yq3kDIhYoYbQAo8739YE5dqH9npbmpHgINsybDlucc8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9saW5rZWRpbi1p/Y29uLnN2Zw" alt="" className='h-fit scale-[1]' />
                                        </div>
                                        <div className='w-10 aspect-square bg-green-300 rounded-full overflow-hidden'>
                                            <img src="https://i.pinimg.com/736x/23/38/43/2338430f02a2e0cdac1877e4023aa2dc.jpg" alt="" className='h-fit scale-[1]' />

                                        </div>
                                        <div className='w-10 aspect-square bg-green-300 rounded-full overflow-hidden'>
                                            <img src="https://imgs.search.brave.com/LDuSPARgFeTMiSCpbKap6m_K4asornsonj_yWXsaj7U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2VlL0xvZ29fZGVf/RmFjZWJvb2sucG5n" alt="" className='h-fit scale-[1]' />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-5 w-70 border-2 border-gray-200 flex justify-center gap-1'>
                                <div className='flex flex-col items-end'>
                                    <p className='text-gray-300'>Phone: </p>
                                    <p className='text-gray-300'>Email: </p>
                                    <p className='text-gray-300'>DOB: </p>
                                </div>

                                <div>

                                    <p className='text-black'>+91 93934 763XX</p>
                                    <p className='text-black'>sherayaM43@gmail.com</p>
                                    <p className='text-black'>24/05/2009</p>
                                </div>
                            </div>


                        </div>

                </div>
            </div>
        </>
    )
}

export default Mainwindow