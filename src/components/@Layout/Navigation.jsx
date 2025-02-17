import React, { useState } from 'react';
import Onauth from '../../helpers/Onauth.jsx'
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { auth, signOut } from '../../Firebase/frontendfb.js';

const Navigation = () => {
    const [isshown, setshown] = useState(true)
    const [issidebarshown, setsidebarshown] = useState(false)
    const [issearchxshown, setsearchxshown] = useState(false)
    const [isuseropen, setisuseropen] = useState(false)
    const user = Onauth()
    const navigate = useNavigate()

    const logingOut = async () => {
        try {
            await signOut(auth);
            document.cookie = `${`idToken`}=; Max-Age=0; path=/;`;
            toast.success('لە هەژمارەکەت چویتە دەر', { transition: Slide, autoClose: 3000 })
        } catch (error) {
            toast.error('کێشەیەک ڕویدا تکایە هەوڵبدەوە', { transition: Slide, autoClose: 3000 })
        }
    }

    return (
        <div className='relative z-50 w-full shadow-xs shadow-[hsl(195,9%,0%)]'>
            <div className={`absolute top-0 left-0 right-0 lg:hidden flex w-full ${issearchxshown ? 'visible' : 'invisible'}`}>
                <input
                    dir='rtl'
                    type="input"
                    placeholder='گەڕان'
                    className='bg-[hsl(195,9%,28%)] absolute z-20 w-full px-12 py-5 text-white focus:outline-none placeholder:text-white'
                />
                <i className="fa-solid text-white text-xl fa-magnifying-glass absolute right-4 top-4 z-20"></i>
                <i onClick={() => setsearchxshown(!issearchxshown)} className="fa-solid text-white text-xl fa-x absolute left-4 top-4 z-20 cursor-pointer"></i>
            </div>
            <nav className="w-full h-16 bg-[hsl(195,9%,20%)] flex flex-row-reverse items-center md:justify-start justify-between px-4">
                <div className='flex flex-row lg:flex-row-reverse gap-8 items-center justify-end lg:justify-start w-4/5'>
                    <div className='flex flex-row justify-center text-center items-center'>
                        <p className='text-xl font-bold text-white'>Kurdish <span className='text-sky-500'>Movie</span></p>
                    </div>

                    <div className='lg:flex hidden flex-row-reverse justify-start space-x-6 space-x-reverse'>
                        <div className='relative'>
                            <p onClick={navigate.bind(this, '/films')} className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                فیلم
                            </p>
                        </div>
                        <div className='relative'>
                            <p onClick={navigate.bind(this, '/series')} className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                زنجیرە
                            </p>
                        </div>
                        <div onClick={navigate.bind(this, '/films')} className='relative'>
                            <p className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                ئەنیمی
                            </p>
                        </div>
                        <div onClick={navigate.bind(this, '/suggestion')} className='relative'>
                            <p className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                پێشنیاری ئێمە
                            </p>
                        </div>
                        <div onClick={navigate.bind(this, '/news')} className='relative'>
                            <p className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                هەواڵ
                            </p>
                        </div>
                        <div onClick={navigate.bind(this, '/about')} className='relative'>
                            <p className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                دەربارە
                            </p>
                        </div>
                        <div onClick={navigate.bind(this, '/contact')} className='relative'>
                            <p className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                پەیوەندی کردن
                            </p>
                        </div>
                    </div>

                    <div className='relative mb-1 flex justify-end lg:hidden visible'>
                        <button className='mt-1' onClick={() => setshown(!isshown)}>
                            <span className="block w-6 h-1 bg-white mb-1"></span>
                            <span className="block w-6 h-1 bg-white mb-1"></span>
                            <span className="block w-6 h-1 bg-white"></span>
                        </button>

                        <div className={`fixed z-50 -right-4 top-0 h-screen bg-[#282e30] overflow-hidden ${isshown ? 'w-0' : 'w-64'} transition-all duration-300 ease-in-out`}>
                            <div className='flex w-full flex-wrap flex-col justify-center items-center mt-16'>
                                <div className='relative w-full'>
                                    <div onClick={navigate.bind(this, '/films')} className='px-3 flex w-full items-center justify-around hover:bg-sky-400 hover:rounded cursor-pointer'>
                                        <div className='flex text-center justify-self-end basis-3/4'>
                                            <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                فیلم <i className="fa-solid fa-film ms-1 me-1"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='relative w-full'>
                                    <div onClick={navigate.bind(this, '/series')} className='px-3 flex w-full items-center justify-end hover:bg-sky-400 hover:rounded cursor-pointer'>
                                        <div className='flex text-center justify-self-end basis-3/4'>
                                            <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                زنجیرە <i className="fa-solid fa-house ms-1 me-1"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='relative w-full'>
                                    <div onClick={navigate.bind(this, '/films')} className='px-3 flex w-full items-center justify-end hover:bg-sky-400 hover:rounded cursor-pointer'>
                                        <div className='flex text-center justify-self-end basis-3/4'>
                                            <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                ئەنیمی <i className="fa-solid fa-house ms-1 me-1"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='relative w-full'>
                                    <div onClick={navigate.bind(this, '/suggestion')} className='px-3 flex w-full items-center justify-end hover:bg-sky-400 hover:rounded cursor-pointer'>
                                        <div className='flex text-center justify-self-end basis-3/4'>
                                            <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                پێشنیاری ئێمە <i className="fa-solid fa-house ms-1 me-1"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='relative w-full'>
                                    <div  onClick={navigate.bind(this, '/news')} className='px-3 flex w-full items-center justify-end hover:bg-sky-400 hover:rounded cursor-pointer'>
                                        <div className='flex text-center justify-self-end basis-3/4'>
                                            <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                هەواڵ <i className="fa-solid fa-house ms-1 me-1"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='relative w-full'>
                                    <div onClick={navigate.bind(this, '/about')} className='px-3 flex w-full items-center justify-end hover:bg-sky-400 hover:rounded cursor-pointer'>
                                        <div className='flex text-center justify-self-end basis-3/4'>
                                            <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                دەربارە <i className="fa-solid fa-house ms-1 me-1"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='relative w-full'>
                                    <div onClick={navigate.bind(this, '/contact')} className='px-3 flex w-full items-center justify-end hover:bg-sky-400 hover:rounded cursor-pointer'>
                                        <div className='flex text-center justify-self-end basis-3/4'>
                                            <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                پەیوەندی کردن <i className="fa-solid fa-house ms-1 me-1"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => setshown(!isshown)} className='absolute top-6 left-8 text-2xl text-white cursor-pointer'>
                                <i className="fa-solid fa-x"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex text-left flex-row-reverse gap-4 items-center justify-end md:w-3/5 lg:w-2/6'>
                    <div className='flex flex-row text-center items-center justify-center'>
                        <div className='relative md:flex hidden'>
                            <input
                                dir='rtl'
                                type="input"
                                placeholder='گەڕان'
                                className='bg-[hsl(195,9%,28%)] rounded-full px-12 py-2 text-white focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 placeholder:text-white'
                            />
                            <i className="fa-solid text-white text-xl fa-magnifying-glass absolute right-4 top-2 z-20"></i>
                        </div>
                        <div onClick={() => setsearchxshown(!issearchxshown)} className='md:hidden flex rounded cursor-pointer bg-[hsl(195,9%,8%)] py-1 px-2 hover:bg-[hsl(195,9%,28%)]'>
                            <i className="fa-solid text-white text-xl fa-magnifying-glass"></i>
                        </div>
                    </div>

                    <div onClick={() => setisuseropen(!isuseropen)} className='relative flex flex-row items-center justify-start'>
                        <h3 className={`cursor-pointer text-2xl font-bold ${user ? 'text-sky-500' : 'text-white'} p-2`}>
                            <i className="fa-solid fa-user"></i>
                        </h3>
                        {user ? (
                            <div className={`absolute ${isuseropen ? 'block' : 'hidden'} text-right left-0 group-hover:block bg-gray-800 text-white rounded-lg shadow-lg p-0 top-full right-0 mt-2 w-48 z-50`}>
                                <div onClick={() => window.location.href = '/profile'} className='cursor-pointer p-4 hover:bg-gray-700 flex flex-row-reverse justify-between items-center gap-2'>
                                    <div>
                                        <p onClick={() => window.location.href = '/profile'} className="font-semibold">پرۆفایل</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid text-gray-500 fa-user-gear"></i>
                                    </div>
                                </div>

                                <div onClick={() => logingOut()} className='cursor-pointer p-4 hover:bg-gray-700 flex flex-row-reverse justify-between items-center gap-2'>
                                    <div>
                                        <p onClick={() => logingOut()} className="font-semibold">چونەدەرەوە</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid text-red-500 fa-right-from-bracket"></i>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={`absolute ${isuseropen ? 'block' : 'hidden'} text-right left-0 group-hover:block bg-gray-800 text-white rounded-lg shadow-lg p-0 top-full right-0 mt-2 w-48 z-50`}>
                                <a href="/login" className="block p-4 hover:bg-gray-700">چوونەژورەوە</a>
                                <a href="/register" className="block p-4 hover:bg-gray-700">دروستکردنی هەژمار</a>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <ToastContainer />
        </div>
    )
}

export default Navigation