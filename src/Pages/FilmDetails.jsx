import React, { useState } from 'react';
import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'

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
        <div className='bg-[#282e30]'>
            <Navigation />

            <div className='px-4 mt-10 mb-10'>
                <div className='flex flex-col-reverse lg:flex-row justify-between'>
                    <div dir='rtl' className='w-full sm:w-[75%] flex flex-col justify-start text-right px-4'>
                        <div>
                            <h1 className='text-4xl font-bold text-sky-500'>Spiderman no way home (2024)</h1>
                        </div>

                        <div className='flex gap-4 mt-5'>
                            <div className='flex flex-row gap-2 bg-gray-500/20 border border-sky-500 py-2 px-4 rounded-full hover:bg-gray-600 cursor-pointer transition-all duration-300 ease-in-out'>
                                <div>
                                    <p className='text-white text-md font-semibold'>بینینی دواتر</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <i class="fa-solid fa-bookmark text-xs text-white"></i>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 bg-gray-500/20 border border-sky-500 py-2 px-4 rounded-full hover:bg-gray-600 cursor-pointer transition-all duration-300 ease-in-out'>
                                <div>
                                    <p className='text-white text-md  font-semibold'>لیستی دڵخواز</p>
                                </div>
                                <div>
                                    <i class="fa-regular text-red-500 text-xs fa-heart"></i>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 bg-gray-500/20 border border-sky-500 py-2 px-4 rounded-full hover:bg-gray-600 cursor-pointer transition-all duration-300 ease-in-out'>
                                <div>
                                    <p className='text-white text-md font-semibold'>بینراو</p>
                                </div>
                                <div>
                                    <i class="fa-solid text-green-500 text-xs fa-square-check"></i>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 bg-gray-500/20 border border-sky-500 py-2 px-4 rounded-full hover:bg-gray-600 cursor-pointer transition-all duration-300 ease-in-out'>
                                <div>
                                    <p className='text-white text-md'>2000</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <i class="fa-solid text-sm fa-eye text-white "></i>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-4 mt-5'>
                            <div className='bg-gray-500/20 border border-white text-md text-white rounded py-2 px-4 hover:bg-sky-500 hover:text-white cursor-pointer transition-all duration-300 ease-in-out'>
                                <p className='font-semibold'>ئاکشن | کۆمیدی | تاوانکاری</p>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className='flex flex-row items-center gap-4 text-lg text-white font-semibold'>
                                <div>
                                    <p>178 خولەک</p>
                                </div>
                                <div className='flex flex-row w-[2px] h-[15px] bg-sky-500'></div>
                                <div>
                                    <p>2024-12-12</p>
                                </div>
                                <div className='flex flex-row w-[2px] h-[15px] bg-sky-500'></div>
                                <div>
                                    <p>English</p>
                                </div>
                            </div></div>

                        <div className='mt-4'>
                            <p className='mt-3 text-gray-400 text-xl w-[80%]'>نەلسۆن پێشەنگی تیمێکی تایبەتی دەکات بۆ مەشەقی پەیڤاندن بە تەلابانەکان لە ئەفغانستان. هەندێك بەکاربردنی یارمەتی لە سویەیەکی کەسایەتی فەرمی، ڕووداوەکان زیاتر بەرەو ڕووداوی ئیشە بەرەو کۆمپلیتەسەر و کەیسی</p>
                        </div>

                        <div className='flex flex-row items-center gap-6 mt-3 '>
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
                            <div className="flex flex-row items-start gap-2 text-lg text-white">
                                <div className="flex items-end justify-end">
                                    <p>ئەکتەرەکان:</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="max-w-[500px] flex flex-row flex-wrap gap-2">
                                        {displayedActors.map((actor, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-row gap-2 bg-transparent border border-sky-500 py-1 px-3 rounded-full hover:bg-gray-600 cursor-pointer transition-all duration-300 ease-in-out"
                                            >
                                                <p className="text-white text-sm font-semibold">{actor.name}</p>
                                            </div>
                                        ))}
                                        {hasMore && (
                                            <button
                                                onClick={() => setShowAll(!showAll)}
                                                className="flex tetx-sm w-[100px] flex-row bg-transparent border border-sky-500 py-0 px-3 rounded-full hover:bg-gray-600 cursor-pointer transition-all duration-300 ease-in-out"
                                            >
                                                {showAll ? 'بینینی زیاتر' : `شاردنەوە`}
                                            </button>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-1/4 min-w-[300px] max-h-[450px] md:min-w-[250px] flex justify-end'>
                        <img
                            className='rounded-xl w-full h-auto object-cover aspect-[2/3]'
                            src="https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4126_avengers_infinity_war_movie_poster_web.jpg"
                            alt="Movie poster"
                        />
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default FilmDetails