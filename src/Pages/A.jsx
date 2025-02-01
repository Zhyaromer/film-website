import { React, useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/landingpage.css'
import '../index.css'
import Footer from '../components/Layout/Footer.jsx'
import Navigation from '../components/Layout/Navigation.jsx'
import Sliderr from '../components/Layout/Slider.jsx'

const A = () => {
    const movies =
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
            {
                movieName: 'The Batman',
                genre: 'دراما - تاوانکاری',
                year: '2022',
                img: 'https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg'
            },
            {
                movieName: 'Top Gun: Maverick',
                genre: 'ئاکشن - دراما',
                year: '2022',
                img: 'https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_.jpg'
            },
            {
                movieName: 'Encanto',
                genre: 'ئەنیمەیشن',
                year: '2021',
                img: 'https://m.media-amazon.com/images/I/81mvxMI7xSL._AC_UF894,1000_QL80_.jpg'
            },
            {
                movieName: 'The Suicide Squad',
                genre: 'ئاکشن - کۆمیدی',
                year: '2021',
                img: 'https://m.media-amazon.com/images/M/MV5BMWU3Y2NlZmEtMjJjNS00ZWMxLWE1MzctYWYyMjMzMDdkNTE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
            },
            {
                movieName: 'Free Guy',
                genre: 'ئاکشن - کۆمیدی',
                year: '2021',
                img: "https://m.media-amazon.com/images/M/MV5BN2I0MGMxYjUtZTZiMS00MzMxLTkzNWYtMDUyZmUwY2ViYTljXkEyXkFqcGc@._V1_.jpg"
            },
            {
                movieName: 'Scream',
                genre: 'ترسناک',
                year: '2022',
                img: 'https://m.media-amazon.com/images/M/MV5BMmE4ZmE5NTMtZTZmNi00YWZjLTk0MjYtOGViZDdhZWMyZmRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
            },
        ]

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

    return (
        <div className='bg-[#282e30]'>
            <Navigation />

            <Sliderr />

            <div className="mx-auto px-4 py-8">
                <div className="mb-4 mt-4 px-4 flex justify-between items-center">
                    <p className="text-sm md:text-2xl cursor-pointer font-bold text-center text-sky-500"> <i class="fa-solid fa-chevron-left me-1"></i> بینینی هەمووی</p>
                    <h4 className="text-lg md:text-3xl font-bold text-center text-white">نوێترین فیلمەکان</h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4">
                    {movies.map((movie, index) => (
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
                                    <p className="text-sm sm:text-base text-sky-500 font-semibold">{movie.movieName}</p>
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

            <div className="mx-auto px-4 py-4 bg-[hsl(195,9%,10%)]">
                <div className="mb-4 mt-4 px-4 flex justify-between items-center">
                    <p className="text-sm md:text-2xl cursor-pointer font-bold text-center text-sky-500"> <i class="fa-solid fa-chevron-left me-1"></i> بینینی هەمووی</p>
                    <h4 className="text-lg md:text-3xl font-bold text-center text-white">نوێترین زنجیرەکان</h4>
                </div>
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

            <div className="mx-auto px-4 py-4">
                <div className="mb-4 mt-4 px-4 flex justify-between items-center">
                    <p className="text-sm md:text-2xl cursor-pointer font-bold text-center text-sky-500"> <i class="fa-solid fa-chevron-left me-1"></i> بینینی هەمووی</p>
                    <h4 className="text-lg md:text-3xl font-bold text-center text-white">کۆری</h4>
                </div>
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

            <div className="mx-auto px-4 py-4 bg-[hsl(195,9%,10%)]">
                <div className="mb-4 mt-4 px-4 flex justify-between items-center">
                    <p className="text-sm md:text-2xl cursor-pointer font-bold text-center text-sky-500"> <i class="fa-solid fa-chevron-left me-1"></i> بینینی هەمووی</p>
                    <h4 className="text-lg md:text-3xl font-bold text-center text-white">ئەنیمی</h4>
                </div>
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
                                    <p className="text-sm sm:text-base text-sky-500 font-semibold">{movie.movieName}</p>
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

            <div className='flex justify-center items-center mb-12'>
                <div className='bg-gradient-to-r from-sky-500 to-blue-500 w-[90%] h-48 md:w-2/4 mt-12 rounded-full'>
                    <div className='flex flex-col justify-center items-center gap-4 mt-4'>
                        <div>
                            <i class="fa-solid fa-shuffle text-white text-6xl"></i>
                        </div>
                        <div>
                            <h2 className='text-white font-bold text-2xl'>نازانی سەیری چی بکەی؟</h2>
                        </div>
                        <div>
                            <h4 className='text-white text-lg'>با ئێمە فلیمێکت بۆ پێشنیار بکەین</h4>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mb-4 mt-4 px-8 flex justify-between items-center">
                <p className="text-sm md:text-2xl cursor-pointer font-bold text-center text-sky-500"> <i class="fa-solid fa-chevron-left me-1"></i> بینینی هەمووی</p>
                <h4 className="text-lg md:text-3xl font-bold text-center text-white">زنجیرە فیلم</h4>
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="md:w-[50%] w-[100%] mb-4 p-2">
                    <div className="relative rounded-lg shadow-md overflow-hidden group h-48">
                        <img
                            src='https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg'
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="flex justify-self-end items-self-end flex-col absolute font-sans z-20 top-2 right-0 text-right">
                            <div className='bg-gradient-to-r from-black/20 to-black/60 absolute z-40 -top-2 -right-7 px-12 w-[400px] h-[200px] pt-2'>
                                <h1 className="text-2xl text-white">سپایدەرمان </h1>
                                <p className="md:text-xl text-base text-white mt-4">ژمارەی فلیمەکان | 12 </p>
                                <p className="md:text-lg text-base text-white mt-4">ژانەرەکان | ئاكشن - مێژووی</p>
                                <div className="flex justify-evenly items-center mt-4">
                                    <div className='bg-black/40 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="16eff6124a5658f3defb294987d2afed.png" className="w-4 h-4" alt='' />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">  7.8</p>
                                        </div>
                                    </div>

                                    <div className='bg-black/40 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="Rotten_Tomatoes_alternative_logo.svg" className="w-4 h-4" alt='' />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">  7.8</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[50%] w-[100%] mb-4 p-2">
                    <div className="relative rounded-lg shadow-md overflow-hidden group h-48">
                        <img
                            src='  https://occ-0-8407-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDQOzGC_rInp4gFvqFPDF3mcWchowjepe5uTldav_Sx1QgJlpJG-ATT_PcYJbF-y5AtlC9koSScBJPATb4JET65SrkrgOl92SGl.jpg?r=c9b'
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="flex justify-self-end items-self-end flex-col absolute font-sans z-20 top-2 right-0 text-right">
                            <div className='bg-gradient-to-r from-black/20 to-black/60 absolute z-40 -top-2 -right-7 px-12 w-[400px] h-[200px] pt-2'>
                                <h1 className="text-2xl text-white">سپایدەرمان </h1>
                                <p className="md:text-xl text-base text-white mt-4">ژمارەی فلیمەکان | 12 </p>
                                <p className="md:text-lg text-base text-white mt-4">ژانەرەکان | ئاكشن - مێژووی</p>
                                <div className="flex justify-evenly items-center mt-4">
                                    <div className='bg-black/40 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="16eff6124a5658f3defb294987d2afed.png" className="w-4 h-4" alt='' />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">  7.8</p>
                                        </div>
                                    </div>

                                    <div className='bg-black/40 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="Rotten_Tomatoes_alternative_logo.svg" className="w-4 h-4" alt='' />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">  7.8</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[50%] w-[100%] mb-4 p-2">
                    <div className="relative rounded-lg shadow-md overflow-hidden group h-48">
                        <img
                            src='https://pastposters.com/cdn/shop/files/fury-cinema-quad-movie-poster-_1.jpg?v=1730152725'
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="flex justify-self-end items-self-end flex-col absolute font-sans z-20 top-2 right-0 text-right">
                            <div className='bg-gradient-to-r from-black/20 to-black/60 absolute z-40 -top-2 -right-7 px-12 w-[400px] h-[200px] pt-2'>
                                <h1 className="text-2xl text-white">سپایدەرمان </h1>
                                <p className="md:text-xl text-base text-white mt-4">ژمارەی فلیمەکان | 12 </p>
                                <p className="md:text-lg text-base text-white mt-4">ژانەرەکان | ئاكشن - مێژووی</p>
                                <div className="flex justify-evenly items-center mt-4">
                                    <div className='bg-black/40 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="16eff6124a5658f3defb294987d2afed.png" className="w-4 h-4" alt='' />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">  7.8</p>
                                        </div>
                                    </div>

                                    <div className='bg-black/40 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="Rotten_Tomatoes_alternative_logo.svg" className="w-4 h-4" alt='' />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">  7.8</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[50%] w-[100%] mb-4 p-2">
                    <div className="relative rounded-lg shadow-md overflow-hidden group h-48">
                        <img
                            src='https://preview.redd.it/i-found-this-super-cool-star-wars-poster-online-and-set-it-v0-f46xrb44ysn81.jpg?width=1080&crop=smart&auto=webp&s=54a82ab69006fbb6a4d20f0e08b0671e21d88591'
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="flex justify-self-end items-self-end flex-col absolute font-sans z-20 top-2 right-0 text-right">
                            <div className='bg-gradient-to-r from-black/20 to-black/60 absolute z-40 -top-2 -right-7 px-12 w-[400px] h-[200px] pt-2'>
                                <h1 className="text-2xl text-white">سپایدەرمان </h1>
                                <p className="md:text-xl text-base text-white mt-4">ژمارەی فلیمەکان | 12 </p>
                                <p className="md:text-lg text-base text-white mt-4">ژانەرەکان | ئاكشن - مێژووی</p>
                                <div className="flex justify-evenly items-center mt-4">
                                    <div className='bg-black/40 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="16eff6124a5658f3defb294987d2afed.png" className="w-4 h-4" alt='' />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">  7.8</p>
                                        </div>
                                    </div>

                                    <div className='bg-black/40 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="Rotten_Tomatoes_alternative_logo.svg" className="w-4 h-4" alt='' />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">  7.8</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default A