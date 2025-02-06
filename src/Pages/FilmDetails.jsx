import React, { useState } from 'react';
import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import ReviewSection from '../components/@Layout/Reviews.jsx'
import FilmsCard from '../components/@Layout/FilmsCard.jsx'
import { FaFilm } from 'react-icons/fa';

const FilmDetails = () => {

    const actors = [
        {
            "id": 1,
            "name": "Tom Holland"
        },
        {
            "id": 2,
            "name": "Zendaya"
        },
        {
            "id": 3,
            "name": "Jacob Batalon"
        },
        {
            "id": 4,
            "name": "Marisa Tomei"
        },
        {
            "id": 5,
            "name": "Jon Favreau"
        },
        {
            "id": 6,
            "name": "Benedict Cumberbatch"
        },
        {
            "id": 7,
            "name": "Willem Dafoe"
        },
        {
            "id": 8,
            "name": "Alfred Molina"
        },
        {
            "id": 9,
            "name": "Jamie Foxx"
        },
        {
            "id": 10,
            "name": "Tobey Maguire"
        },
        {
            "id": 11,
            "name": "Andrew Garfield"
        },
        {
            "id": 12,
            "name": "Charlie Cox"
        },
        {
            "id": 13,
            "name": "J.K. Simmons"
        },
        {
            "id": 14,
            "name": "Angourie Rice"
        },
        {
            "id": 15,
            "name": "Tony Revolori"
        }
    ]

    const [showAll, setShowAll] = useState(false);

    const displayedActors = showAll ? actors : actors.slice(0, 3);
    const hasMore = actors.length > 3;

    return (
        <div>
            <Navigation />

            <div className='bg-gradient-to-b from-black/90 to-gray-900/100 h-full relative px-4 py-12 '>
                <div className='flex flex-col-reverse lg:flex-row justify-center lg:items-start items-center'>
                    <div dir='rtl' className='relative z-10 w-full sm:w-[100%] flex flex-col justify-center text-right lg:px-4'>
                        <div className='lg:mt-0 mt-10 lg:text-right text-center'>
                            <h1 className='text-4xl font-bold text-sky-500'>Spiderman no way home (2024)</h1>
                        </div>

                        <div className='flex flex-wrap gap-4 mt-5'>
                            <div className='flex flex-row gap-2 items-center bg-gray-500/20 border border-sky-500 py-0 lg:py-2 px-3 lg:px-4 rounded-full hover:bg-gray-600 cursor-pointer transition-all duration-300 ease-in-out'>
                                <div>
                                    <p className='text-white lg:text-lg text-sm font-semibold'>بینینی دواتر</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <i class="fa-solid fa-bookmark text-xs text-white"></i>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 items-center bg-gray-500/20 border border-sky-500 py-1 lg:py-2 px-3 lg:px-4 rounded-full hover:bg-gray-600 cursor-pointer transition-all duration-300 ease-in-out'>
                                <div>
                                    <p className='text-white lg:text-lg text-sm font-semibold'>لیستی دڵخواز</p>
                                </div>
                                <div>
                                    <i class="fa-regular  text-red-500 text-xs fa-heart"></i>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 items-center bg-gray-500/20 border border-sky-500 py-1 lg:py-2 px-3 lg:px-4 rounded-full hover:bg-gray-600 cursor-pointer transition-all duration-300 ease-in-out'>
                                <div>
                                    <p className='text-white lg:text-lg text-sm font-semibold'>بینراو</p>
                                </div>
                                <div>
                                    <i class="fa-solid text-green-500 text-xs fa-square-check"></i>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 items-center bg-gray-500/20 border border-sky-500 py-1 lg:py-2 px-3 lg:px-4 rounded-full hover:bg-gray-600 transition-all duration-300 ease-in-out'>
                                <div>
                                    <p className='text-white lg:text-lg text-sm'>2000</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <i class="fa-solid text-sm fa-eye text-white "></i>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-4 mt-5'>
                            <div className='bg-gray-500/20 text-white border border-white text-sm md:text-md lg:px-4 rounded py-2 px-2 hover:bg-sky-500 hover:text-white transition-all duration-300 ease-in-out'>
                                <p className='font-semibold'>ئاکشن | نهێنی ئامێز | تاوانکاری</p>
                            </div>
                            <div className='bg-gray-500/20 text-white border border-white text-sm md:text-md lg:px-4 rounded py-2 px-2 hover:bg-sky-500 hover:text-white cursor-pointer transition-all duration-300 ease-in-out'>
                                <p className='font-semibold'>بینینی ترایلەر</p>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className='flex flex-row items-center gap-4 text-lg text-white font-semibold'>
                                <div className='flex flex-row w-[2px] h-[15px] bg-sky-500'></div>
                                <div>
                                    <p>178 خولەک</p>
                                </div>
                                <div className='flex flex-row w-[2px] h-[15px] bg-sky-500'></div>
                                <div>
                                    <p>2024-12-12</p>
                                </div>
                                <div className='flex flex-row w-[2px] h-[15px] bg-sky-500'></div>
                                <div>
                                    <p>ئەمریکی</p>
                                </div>
                                <div className='flex flex-row w-[2px] h-[15px] bg-sky-500'></div>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <p className='text-xl font-bold text-sky-500'>کورتە چیرۆک</p>
                            <p className='mt-3 text-gray-300 text-xl lg:w-[80%] w-[97%]'>نەلسۆن پێشەنگی تیمێکی تایبەتی دەکات بۆ مەشەقی پەیڤاندن بە تەلابانەکان لە ئەفغانستان. هەندێك بەکاربردنی یارمەتی لە سویەیەکی کەسایەتی فەرمی، ڕووداوەکان زیاتر بەرەو ڕووداوی ئیشە بەرەو کۆمپلیتەسەر و کەیسی</p>
                        </div>

                        <div className='flex flex-row items-center gap-6 mt-4'>
                            <div className='flex flex-row items-center gap-2 text-lg text-white'>
                                <div>
                                    <p>بودجە:</p>
                                </div>
                                <div>
                                    <p className='text-sky-500'>1 بلیۆن دۆلار</p>
                                </div>
                            </div>
                            <div className='flex flex-row items-center gap-2 text-lg text-white'>
                                <div>
                                    <p >داهات:</p>
                                </div>
                                <div>
                                    <p className='text-sky-500'>3 بلیۆن دۆلار</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className='flex flex-row items-center gap-2 text-lg text-white'>
                                <div>
                                    <p >بەرهەم  هێنان:</p>
                                </div>
                                <div>
                                    <p className='text-sky-500'>Marvel Studios</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className='flex flex-row items-center gap-2 text-lg text-white'>
                                <div>
                                    <p >دەرهێنان:</p>
                                </div>
                                <div>
                                    <p className='text-sky-500'>Jon Watts</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="flex lg:flex-row flex-col items-start gap-2 text-lg text-white">
                                <div className="flex items-end justify-end">
                                    <p>ئەکتەرەکان:</p>
                                </div>

                                <div className="flex flex-col lg:mt-0 mt-2 gap-2">
                                    <div className="max-w-[500px] flex flex-row flex-wrap gap-2">
                                        {displayedActors.map((actor, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-row gap-2 bg-transparent border border-sky-500 py-1 px-3 rounded-full hover:bg-sky-600 cursor-pointer transition-all duration-300 ease-in-out"
                                            >
                                                <p className="text-white text-sm font-semibold">{actor.name}</p>
                                            </div>
                                        ))}
                                        {hasMore && (
                                            <button
                                                onClick={() => setShowAll(!showAll)}
                                                className="flex tetx-sm lg:w-[100px] flex-row bg-transparent border border-sky-500 py-0 px-3 rounded-full hover:bg-gray-600 cursor-pointer transition-all duration-300 ease-in-out"
                                            >
                                                {showAll ? 'شاردنەوە' : `بینینی زیاتر`}
                                            </button>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div dir='rtl' className='flex justify-start pt-12 shadow-lg'>
                            <div className='flex flex-col gap-2 border border-gray-500 rounded-lg p-2 px-4'>
                                <div className='flex flex-wrap flex-row items-center'>
                                    <div className='me-2 lg:me-1'>
                                        <p className='font-semibold text-white'>وەرگێڕان:</p>
                                    </div>
                                    <div className='flex flex-row items-center lg:text-md gap-2 rounded py-2 px-2 lg:px-4 hover:bg-sky-500 cursor-pointer transition-all duration-300 ease-in-out'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src="https://cdn-icons-png.flaticon.com/512/146/146007.png" alt="" />
                                        </div>
                                        <div>
                                            <p className='font-semibold text-white'>ژیار عومەر</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center flex-row lg:text-md gap-2 rounded py-2 px-2 lg:px-4 hover:bg-sky-500 cursor-pointer transition-all duration-300 ease-in-out'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src="https://cdn-icons-png.flaticon.com/512/146/146007.png" alt="" />
                                        </div>
                                        <div>
                                            <p className='font-semibold text-white'>هالان دیاری</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center flex-row lg:text-md gap-2 rounded py-2 px-2 lg:px-4 hover:bg-sky-500 cursor-pointer transition-all duration-300 ease-in-out'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src="https://cdn-icons-png.flaticon.com/512/146/146007.png" alt="" />
                                        </div>
                                        <div>
                                            <p className='font-semibold text-white'>هالان دیاری</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col w-[100%] h-[2px] bg-sky-500 rounded-full'></div>
                                <div className='flex flex-row items-center gap-2 text-white'>
                                    <div>
                                        <p className='font-semibold'>تەکنیک:</p>
                                    </div>
                                    <div className='flex items-center flex-row gap-2 lg:text-md text-white rounded py-2 px-2 lg:px-4 hover:bg-sky-500 hover:text-white cursor-pointer transition-all duration-300 ease-in-out'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src="https://cdn-icons-png.flaticon.com/512/146/146007.png" alt="" />
                                        </div>
                                        <div>
                                            <p className='font-semibold'>ئەحمەد ئەردەلان</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center gap-2 text-white'>
                                    <div>
                                        <p className='font-semibold'>بەرگساز:</p>
                                    </div>
                                    <div className='flex items-center flex-row gap-2 lg:text-md text-white rounded py-2 px-2 lg:px-4 hover:bg-sky-500 hover:text-white cursor-pointer transition-all duration-300 ease-in-out'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src="https://cdn-icons-png.flaticon.com/512/146/146007.png" alt="" />
                                        </div>
                                        <div>
                                            <p className='font-semibold'>دیاکۆ سۆران</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/4 min-w-[340px] h-full md:min-w-[300px] flex flex-col items-center justify-end'>
                        <div className='relative mb-4'>
                            <img
                                className=' rounded-xl  w-full h-auto object-cover aspect-[2/3]'
                                src="https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4126_avengers_infinity_war_movie_poster_web.jpg"
                                alt="Movie poster"
                            />
                            <div className='absolute left-1/2 -translate-x-1/2 -bottom-4 flex flex-row items-center gap-2 text-lg text-white'>
                                <div className="flex justify-evenly items-center  gap-4">
                                    <div className='bg-black/70 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="16eff6124a5658f3defb294987d2afed.png" className="w-4 h-4" alt='IMDB Logo' />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white"> 88</p>
                                        </div>
                                    </div>

                                    <div className='bg-black/70 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="Rotten_Tomatoes_alternative_logo.svg" className="w-4 h-4" alt='Rotten Tomatoes Logo' />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white"> 94</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center gap-4 mt-5'>
                            <div className='flex flex-row items-center gap-3 bg-gray-500/20 border border-white text-md text-white rounded py-3 px-4 hover:bg-sky-500 hover:text-white cursor-pointer transition-all duration-300 ease-in-out'>
                                <div>
                                    <p className='font-semibold'>دابەزاندن</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-download"></i>
                                </div>
                            </div>
                            <div className='flex flex-row items-center gap-3 bg-gray-500/20 border border-white text-md text-white rounded py-3 px-4 hover:bg-sky-500 hover:text-white cursor-pointer transition-all duration-300 ease-in-out'>
                                <div>
                                    <p className='font-semibold'>سەیرکردن</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-film"></i>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <div className='flex flex-row items-center gap-2 mt-4 px-4 py-4 bg-yellow-500/20 w-[100%] border border-yellow-500 text-md text-white rounded hover:bg-yellow-700/80 hover:text-white cursor-pointer transition-all duration-300 ease-in-out'>
                                <div>
                                    <FaFilm />
                                </div>
                                <div>
                                    <p className='font-semibold text-center'>بەشەکانی تری ئەم فلیمە ببینە </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#282e30] pt-16 flex flex-row justify-between items-center px-6 lg:px-8">
                <div>
                    <button className="text-sm lg:text-lg relative z-10 font-semibold text-white bg-sky-500 py-1 px-2 lg:px-6 rounded cursor-pointer hover:bg-sky-600 transition-all duration-300 ease-in-out">
                        دانانی هەڵسەنگاندن
                    </button>
                </div>
                <div>
                    <h2 className="text-xl lg:text-2xl text-sky-500 text-right font-bold">پێداچونەوەکان</h2>
                </div>
            </div>

            <ReviewSection className="bg-[#282e30]" />

            <div className="bg-[#282e30] relative z-50 mb-0 pt-12 px-8 flex justify-end items-center">
                <h4 className="text-lg md:text-3xl font-bold text-center text-white">فلیمی هاوشێوە</h4>
            </div>

            <FilmsCard className="bg-[#282e30]" />

            <Footer />
        </div>
    )
}

export default FilmDetails