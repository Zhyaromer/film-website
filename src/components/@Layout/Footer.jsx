import { useState } from 'react';

const Footer = () => {
    const [selectedButton, setSelectedButton] = useState(2);
    
    const series =
        [
            {
                movieName: 'avengers endgame',
                genre: 'ئاکشن - دراما',
                year: '2019',
                img: 'https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4126_avengers_infinity_war_movie_poster_web.jpg'
            },
            {
                movieName: 'The Godfather',
                genre: 'ئاکشن - تاوانکاری',
                year: '1972',
                img: 'https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/7DkAAOSwlYRa86zV/$_10.JPG?set_id=880000500F'
            },
            {
                movieName: 'The Dark Knight',
                genre: 'ئاکشن - تاوانکاری',
                year: '2008',
                img: 'https://m.media-amazon.com/images/I/A1exRxgHRRL.jpg'
            },
            {
                movieName: 'Inception',
                genre: 'ئاکشن - گەڕان',
                year: '2010',
                img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
            },
            {
                movieName: 'Titanic',
                genre: 'دراما - ڕۆمانسی',
                year: '1997',
                img: 'https://m.media-amazon.com/images/I/71V3V0FE1gS._AC_SL1200_.jpg'
            },
            {
                movieName: 'Spider-Man: No Way Home',
                genre: 'دراما - سەرکێشی',
                year: '2021',
                img: 'https://preview.redd.it/new-poster-for-spider-man-no-way-home-v0-1smp15la6xc81.jpg?width=1080&crop=smart&auto=webp&s=5f997eafffa5da954939301afaa47678c4071cd8'
            },
        ]

    const mostViewpages = [
        {
            id: 0, text: 'بینراوی ساڵ',
            content: (
                <div className="mx-auto px-4 py-4 mt-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4">
                        {series.map((movie, index) => (
                            <div key={index} className="w-full hover:scale-95 transition-transform duration-300 cursor-pointer">
                                <div className="bg-red-500 rounded-lg shadow-md overflow-hidden group h-64">
                                    <div className="h-full w-full relative">
                                        <img
                                            src={movie.img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 space-y-2 text-center">
                                    <div dir="rtl" className="break-all">
                                        <p className="text-sm sm:text-base font-semibold text-sky-500">{movie.movieName}</p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                                        <p className='text-white'>{movie.year}</p>
                                        <p className='text-white'>{movie.genre}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)
        }
        ,
        {
            id: 1, text: 'بینراوی مانگ', content: (
                <div className="mx-auto px-4 py-4 mt-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4">
                        {series.map((movie, index) => (
                            <div key={index} className="w-full hover:scale-95 transition-transform duration-300 cursor-pointer">
                                <div className="bg-red-500 rounded-lg shadow-md overflow-hidden group h-64">
                                    <div className="h-full w-full relative">
                                        <img
                                            src={movie.img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 space-y-2 text-center">
                                    <div dir="rtl" className="break-all">
                                        <p className="text-sm sm:text-base font-semibold text-sky-500">{movie.movieName}</p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                                        <p className='text-white'>{movie.year}</p>
                                        <p className='text-white'>{movie.genre}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 2, text: 'بینراوی هەفتە'
            , content: (
                <div className="mx-auto px-4 py-4 mt-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4">
                        {series.map((movie, index) => (
                            <div key={index} className="w-full hover:scale-95 transition-transform duration-300 cursor-pointer">
                                <div className="bg-red-500 rounded-lg shadow-md overflow-hidden group h-64">
                                    <div className="h-full w-full relative">
                                        <img
                                            src={movie.img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 space-y-2 text-center">
                                    <div dir="rtl" className="break-all">
                                        <p className="text-sm sm:text-base font-semibold text-sky-500">{movie.movieName}</p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                                        <p className='text-white'>{movie.year}</p>
                                        <p className='text-white'>{movie.genre}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    ];

    const mostViewButtons = [
        { id: 0, text: 'بینراوی ساڵ' },
        { id: 1, text: 'بینراوی مانگ' },
        { id: 2, text: 'بینراوی هەفتە' }
    ];
    return (
        <footer className="w-full bg-[hsl(195,9%,10%)] p-4">
            <div className="flex justify-center md:justify-end items-center gap-6 pr-0 md:pr-4 mt-6">
                {mostViewButtons.map((button) => (
                    <div key={button.id}>
                        <button
                            onClick={() => setSelectedButton(button.id)}
                            className={`bg-transparent border-2 font-bold py-3 px-2 md:py-2 md:px-6 rounded-full transition-colors duration-200 text-sm md:text-xl ${selectedButton === button.id
                                ? 'border-sky-500 text-white'
                                : 'border-gray-500 text-gray-500'
                                }`}
                        >
                            {button.text}
                        </button>
                    </div>
                ))}
            </div>

            {mostViewpages[selectedButton].content}

            <div className="flex flex-col justify-center items-center mt-12 gap-4">
                <div>
                    <p className='text-4xl font-bold text-white'>Kurdish <span className='text-sky-500'>Movie</span></p>
                </div>

                <div className>
                    <p className='text-gray-400'>گەورەترین کۆگای فیلم و زنجیرەی ژێرنووسکراوی کوردی</p>
                </div>

                <div className='flex flex-row justify-center items-center text-center gap-5 mt-4'>
                    <div className='flex justify-center items-center h-10 w-10 border border-white p-2 rounded-full cursor-pointer hover:bg-sky-500 transition-colors duration-500'>
                        <i class="fa-brands fa-facebook-f text-lg text-white"></i>
                    </div>
                    <div className='flex justify-center items-center h-10 w-10 border border-white p-2 rounded-full cursor-pointer hover:bg-sky-500 transition-colors duration-500'>
                        <i class="fa-brands fa-instagram text-lg text-white"></i>
                    </div>
                    <div className='flex justify-center items-center h-10 w-10 border border-white p-2 rounded-full cursor-pointer hover:bg-sky-500 transition-colors duration-500'>
                        <i class="fa-brands fa-snapchat text-lg text-white"></i>
                    </div>
                    <div className='flex justify-center items-center h-10 w-10 border border-white p-2 rounded-full cursor-pointer hover:bg-sky-500 transition-colors duration-500'>
                        <i class="fa-brands fa-tiktok text-lg text-white"></i>
                    </div>
                    <div className='flex justify-center items-center h-10 w-10 border border-white p-2 rounded-full cursor-pointer hover:bg-sky-500 transition-colors duration-500'>
                        <i class="fa-brands fa-telegram text-lg text-white"></i>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <hr className='border-gray-500' />
            </div>

            <div className='mt-6 flex flex-col justify-center'>
                <p className='text-gray-400 text-center mt-4'>هەموو مافێکی پارێزراوە بۆ کوردیش موڤی © 2025</p>
                <div className='flex flex-row gap-4 justify-center'>
                    <p onClick={() => window.location.href = "https://www.facebook.com/zhyaromer999/"} className='text-sky-500 text-center mt-4 font-bold cursor-pointer'>Zhyar omer</p>
                    <p className='text-gray-400 text-center mt-4'>دروستکردنی وێبسایت</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer