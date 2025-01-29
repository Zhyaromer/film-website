import { React, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'

const A = () => {
    const [isshown, setshown] = useState(true)
    const [issubshown, setsubshown] = useState(false)
    const [issidebarshown, setsidebarshown] = useState(false)

    const movies = Array(12).fill({
        title: 'jobify',
        movieName: 'marvel avengers',
        genre: 'ئاکشن',
        year: '2023'
    });

    return (
        <div>

            <div className='w-full'>
                <div className='flex flex-row justify-between items-center bg-sky-500'>
                    <div className='relative sm:hidden visible bg-sky-500 p-6'>
                        <button onClick={() => setshown(!isshown)}>
                            <span class="block w-6 h-1 bg-white mb-1"></span>
                            <span class="block w-6 h-1 bg-white mb-1"></span>
                            <span class="block w-6 h-1 bg-white"></span>
                        </button>

                        <div className={`absolute left-0 top-0 h-screen bg-sky-500 overflow-hidden ${isshown ? 'w-0' : 'w-64'} transition-all duration-700 ease-in-out`}>
                            <div className='flex w-full flex-wrap flex-col bg-sky-500 justify-center items-center mt-20'>
                                <div className='relative w-full'>
                                    <div onClick={() => setsidebarshown(!issidebarshown)} className='flex justify-around w-full items-center hover:bg-sky-400 hover:rounded cursor-pointer'>
                                        <div className='flex justify-self-start basis-3/4'>
                                            <p className="text-base text-left p-6 w-full text-white font-semibold  transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                <i class="fa-solid fa-house -ms-2 me-1"></i> home
                                            </p>
                                        </div>

                                        <div className='flex justify-center basis-1/4'>
                                            <i class={`fa-solid fa-chevron-down text-white ${issidebarshown ? '-rotate-90 transition-all duration-300 ease-in-out' : 'rotate-0 transition-all duration-300 ease-in-out'}`}></i>
                                        </div>
                                    </div>

                                    <div className={`w-full bg-sky-400 overflow-hidden ${issidebarshown ? 'max-h-48' : 'max-h-0'} transition-all duration-300 ease-in-out`}>
                                        <p className="text-white p-2 cursor-pointer hover:bg-sky-300">Sub-location 1</p>
                                        <p className="text-white p-2 cursor-pointer hover:bg-sky-300">Sub-location 2</p>
                                        <p className="text-white p-2 cursor-pointer hover:bg-sky-300">Sub-location 3</p>
                                    </div>
                                </div>


                                <div>
                                    <p className="text-base p-6 px-16 text-white font-semibold cursor-pointer hover:bg-sky-400 hover:rounded hover:underline hover:decoration-current hover:underline-offset-8 transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                        shop
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base p-6 px-16 text-white font-semibold cursor-pointer hover:bg-sky-400 hover:rounded hover:underline hover:decoration-current hover:underline-offset-8 transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                        contact
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base p-6 px-16 text-white font-semibold cursor-pointer hover:bg-sky-400 hover:rounded hover:underline hover:decoration-current hover:underline-offset-8 transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                        about
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base p-6 px-16 text-white font-semibold cursor-pointer hover:bg-sky-400 hover:rounded hover:underline hover:decoration-current hover:underline-offset-8 transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                        location
                                    </p>
                                </div>
                            </div>
                            <div onClick={() => setshown(!isshown)} className='absolute top-6 right-8 text-2xl text-white cursor-pointer'><i class="fa-solid fa-x"></i></div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-white p-6'>jobify</h2>
                    </div>
                    <div className='sm:flex hidden flex-wrap flex-row justify-center '>
                        <div>
                            <p className="text-base p-6 text-white font-semibold cursor-pointer hover:bg-sky-400 hover:rounded hover:underline hover:decoration-current hover:underline-offset-8 transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                home
                            </p>
                        </div>
                        <div>
                            <p className="text-base p-6 text-white font-semibold cursor-pointer hover:bg-sky-400 hover:rounded hover:underline hover:decoration-current hover:underline-offset-8 transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                shop
                            </p>
                        </div>
                        <div>
                            <p className="text-base p-6 text-white font-semibold cursor-pointer hover:bg-sky-400 hover:rounded hover:underline hover:decoration-current hover:underline-offset-8 transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                contact
                            </p>
                        </div>
                        <div>
                            <p className="text-base p-6 text-white font-semibold cursor-pointer hover:bg-sky-400 hover:rounded hover:underline hover:decoration-current hover:underline-offset-8 transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                about
                            </p>
                        </div>
                        <div className='relative'>
                            <p onClick={() => setsubshown(!issubshown)} className="text-base p-6 text-white font-semibold cursor-pointer hover:bg-sky-400 hover:rounded hover:underline hover:decoration-current hover:underline-offset-8 transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                location
                            </p>
                            <div className={`w-full absolute left-0 bg-sky-500 ${issubshown ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-in-out`}>
                                <p className="text-white p-2 cursor-pointer hover:bg-sky-300">Sub-location 1</p>
                                <p className="text-white p-2 cursor-pointer hover:bg-sky-300">Sub-location 2</p>
                                <p className="text-white p-2 cursor-pointer hover:bg-sky-300">Sub-location 3</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold text-white p-6'>users</h4>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {movies.map((movie, index) => (
                        <div key={index} className="w-full hover:scale-95 transition-transform duration-300 cursor-pointer">
                            <div className="bg-red-500 rounded-lg shadow-md overflow-hidden group">
                                <div className="aspect-[3/4] relative group-">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white p-4">
                                        {movie.title}
                                    </h2>
                                </div>
                            </div>
                            <div className="mt-2 space-y-2">
                                <div className="flex items-center justify-between">
                                    <i className="fa-solid fa-star text-yellow-400"></i>
                                    <p className="text-sm sm:text-base">{movie.movieName}</p>
                                </div>
                                <div className="flex items-center justify-end space-x-2 text-gray-600 text-sm">
                                    <p>{movie.year}</p>
                                    <p>{movie.genre}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default A