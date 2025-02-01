import { React, useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/landingpage.css'
import '../index.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 z-50 bg-sky-500 hover:bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center md:visible invisible ${direction === 'prev' ? 'left-4' : 'right-4'
            }`}
    >
        {direction === 'prev' ? <i class="fa-solid fa-arrow-left"></i> : <i class="fa-solid fa-arrow-right"></i>}
    </button>
);

const A = () => {
    const [isshown, setshown] = useState(true)
    const [issubshown, setsubshown] = useState(false)
    const [issubshown2, setsubshown2] = useState(false)
    const [issidebarshown, setsidebarshown] = useState(false)
    const [issidebarshown2, setsidebarshown2] = useState(false)
    const [issearchxshown, setsearchxshown] = useState(false)
    const [des, setdes] = useState('')
    const [des1, setdes1] = useState('')
    const [des2, setdes2] = useState('')
    const [title, settitle] = useState('')
    const [selectedButton, setSelectedButton] = useState(2);

    const mostViewButtons = [
        { id: 0, text: 'بینراوی ساڵ' },
        { id: 1, text: 'بینراوی مانگ' },
        { id: 2, text: 'بینراوی هەفتە' }
    ];

    const settings = {
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />
    };

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

    useEffect(() => {
        const shortDescription = (text1, text2, text3) => {
            const shortText1 = text1.substring(0, 100) + ' ...';
            setdes(shortText1)
            const shortText2 = text2.substring(0, 100) + ' ...';
            setdes1(shortText2)
            const shortText3 = text3.substring(0, 100) + ' ...';
            setdes2(shortText3)
        }

        const shortTitle = (text) => {
            const shortText = text.substring(0, 20) + ' ...';
            settitle(shortText)
        }

        shortDescription('لە کاتی جەنگی جیهانی دووەم، جێگری ژەنەڕاڵ لێسلی گرۆڤس جوونیەر، فیزیاناس جەی ڕۆبەرت ئۆپنهایمەری دەستنیشان کرد بۆ کارکردن لەسەر پڕۆژەی نهێنی مانهاتن', 'دو سرباز، کە کارەکەیان ئەم بریتیە لە گەیاندنی پەیامی گرنگ بۆ یەکەمی تر، ژیانەکانەیان بە ریسک دەنەوە بۆ ئەم کارە، بۆ ئەوەی بەرەو پەیامیەکی تەواوەوە کەیانە بەرەو فەرمی تایبەتی بەکارێن', 'کاپتێن میچ نەلسۆن پێشەنگی تیمێکی تایبەتی دەکات بۆ مەشەقی پەیڤاندن بە تەلابانەکان لە ئەفغانستان. هەندێك بەکاربردنی یارمەتی لە سویەیەکی کەسایەتی فەرمی، ڕووداوەکان زیاتر بەرەو ڕووداوی ئیشە بەرەو کۆمپلیتەسەر و کەیسی');

        // not using it yet due to not setting up the api yet
        shortTitle('marvel avengers - infinity war');
    }, []);

    return (
        <div className='bg-[#282e30]'>
            <div className='w-full'>
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
                <nav className="w-full h-16 bg-[#282e30] flex flex-row-reverse items-center md:justify-start justify-between px-4">
                    <div className='flex flex-row lg:flex-row-reverse gap-8 items-center justify-end lg:justify-start w-4/5'>
                        <div className='flex flex-row justify-center text-center items-center'>
                            <p className='text-xl font-bold text-white'>Kurdish <span className='text-sky-500'>Movie</span></p>
                        </div>

                        <div className='lg:flex hidden flex-row-reverse justify-start space-x-6 space-x-reverse'>
                            <div className='relative'>
                                <p onClick={() => {
                                    if (issubshown2) {
                                        setsubshown2(!issubshown2);
                                        setsubshown(!issubshown);
                                    } else {
                                        setsubshown(!issubshown);
                                    }
                                }} className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                    فیلمەکان
                                </p>
                                <div dir='rtl' className={`w-40 text-center absolute -left-14 top-11 z-30 bg-[#282e30] ${issubshown ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-in-out`}>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">سەرجەم فیلمەکان</p>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">بۆلیود</p>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">هۆلیود</p>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">کۆری</p>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">ئەنیمی</p>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">فارسی</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <p className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                    زنجیرەکان
                                </p>
                            </div>
                            <div className='relative'>
                                <p className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                    زنجیرە فیلم
                                </p>
                            </div>
                            <div className='relative'>
                                <p className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                    ئەنیمی
                                </p>
                            </div>
                            <div className='relative'>
                                <p className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                    کوردی
                                </p>
                            </div>
                            <div className='relative'>
                                <p className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                    پێداچونەوە
                                </p>
                            </div>
                            <div className='relative'>
                                <p onClick={() => {
                                    if (issubshown) {
                                        setsubshown(!issubshown);
                                        setsubshown2(!issubshown2);
                                    } else {
                                        setsubshown2(!issubshown2);
                                    }
                                }} className="text-base text-white hover:text-sky-500 font-semibold cursor-pointer transition-all duration-200 ease-in-out">
                                    زیاتر
                                </p>
                                <div dir="rtl" className={`w-40 absolute -left-16 top-11 z-30 bg-[#282e30] ${issubshown2 ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-in-out text-center`}>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">دەرهێنەران</p>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">ئەکتەرەکان</p>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">IMDb باشترینی 250</p>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">دەربارە</p>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">ستاف</p>
                                    <p className="text-white p-2 cursor-pointer hover:bg-sky-500">پەیوەندی کردن</p>
                                </div>
                            </div>
                        </div>
                        {/* Mobile Menu Items */}
                        <div className='relative mb-1 flex justify-end lg:hidden visible'>
                            <button className='mt-1' onClick={() => setshown(!isshown)}>
                                <span className="block w-6 h-1 bg-white mb-1"></span>
                                <span className="block w-6 h-1 bg-white mb-1"></span>
                                <span className="block w-6 h-1 bg-white"></span>
                            </button>

                            <div className={`fixed z-50 -right-4 top-0 h-screen bg-[#282e30] overflow-hidden ${isshown ? 'w-0' : 'w-64'} transition-all duration-300 ease-in-out`}>
                                <div className='flex w-full flex-wrap flex-col justify-center items-center mt-16'>
                                    <div className='relative w-full'>
                                        <div onClick={() => setsidebarshown(!issidebarshown)} className='px-3 flex w-full items-center justify-around hover:bg-sky-400 hover:rounded cursor-pointer'>
                                            <div className='flex justify-start ms-4 basis-1/4'>
                                                <i className={`fa-solid fa-chevron-down text-white ${issidebarshown ? 'rotate-90 transition-all duration-300 ease-in-out' : 'rotate-0 transition-all duration-300 ease-in-out'}`}></i>
                                            </div>
                                            <div className='flex text-center justify-self-end basis-3/4'>
                                                <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                    فیلم <i className="fa-solid fa-film ms-1 me-1"></i>
                                                </p>
                                            </div>
                                        </div>

                                        <div dir='rtl' className={`w-full bg-[hsl(195,9%,24%)] overflow-hidden ${issidebarshown ? 'max-h-50' : 'max-h-0'} transition-all duration-300 ease-in-out -me-4`}>
                                            <p className="text-white p-2 pr-4 cursor-pointer hover:bg-sky-500">سەرجەم فیلمەکان</p>
                                            <p className="text-white p-2 pr-4 cursor-pointer hover:bg-sky-500">بۆلیود</p>
                                            <p className="text-white p-2 pr-4 cursor-pointer hover:bg-sky-500">هۆلیود</p>
                                            <p className="text-white p-2 pr-4 cursor-pointer hover:bg-sky-500">ئەنیمی</p>
                                            <p className="text-white p-2 pr-4 cursor-pointer hover:bg-sky-500">کۆری</p>
                                            <p className="text-white p-2 pr-4 pb-2 cursor-pointer hover:bg-sky-500">فارسی</p>
                                        </div>
                                    </div>

                                    <div className='relative w-full'>
                                        <div className='px-3 flex w-full items-center justify-end hover:bg-sky-400 hover:rounded cursor-pointer'>
                                            <div className='flex text-center justify-self-end basis-3/4'>
                                                <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                    زنجیرە <i className="fa-solid fa-house ms-1 me-1"></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative w-full'>
                                        <div className='px-3 flex w-full items-center justify-end hover:bg-sky-400 hover:rounded cursor-pointer'>
                                            <div className='flex text-center justify-self-end basis-3/4'>
                                                <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                    زنجیرە فیلم <i className="fa-solid fa-house ms-1 me-1"></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative w-full'>
                                        <div className='px-3 flex w-full items-center justify-end hover:bg-sky-400 hover:rounded cursor-pointer'>
                                            <div className='flex text-center justify-self-end basis-3/4'>
                                                <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                    ئەنیمی <i className="fa-solid fa-house ms-1 me-1"></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative w-full'>
                                        <div className='px-3 flex w-full items-center justify-end hover:bg-sky-400 hover:rounded cursor-pointer'>
                                            <div className='flex text-center justify-self-end basis-3/4'>
                                                <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                    کوردی <i className="fa-solid fa-house ms-1 me-1"></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative w-full'>
                                        <div className='px-3 flex w-full items-center justify-end hover:bg-sky-400 hover:rounded cursor-pointer'>
                                            <div className='flex text-center justify-self-end basis-3/4'>
                                                <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                    پێداچونەوە <i className="fa-solid fa-house ms-1 me-1"></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative w-full'>
                                        <div onClick={() => setsidebarshown2(!issidebarshown2)} className='px-3 flex w-full items-center justify-around hover:bg-sky-400 hover:rounded cursor-pointer'>
                                            <div className='flex justify-start ms-4 basis-1/4'>
                                                <i className={`fa-solid fa-chevron-down text-white ${issidebarshown2 ? 'rotate-90 transition-all duration-300 ease-in-out' : 'rotate-0 transition-all duration-300 ease-in-out'}`}></i>
                                            </div>
                                            <div className='flex text-center justify-self-end basis-3/4'>
                                                <p className="text-base text-right p-4 w-full text-white font-semibold transition-all duration-300 ease-in-out md:text-xl lg:text-2xl xl:text-2xl">
                                                    زیاتر <i className="fa-solid fa-house ms-1 me-1"></i>
                                                </p>
                                            </div>
                                        </div>

                                        <div dir='rtl' className={`w-full bg-[hsl(195,9%,24%)] overflow-hidden ${issidebarshown2 ? 'max-h-50' : 'max-h-0'} transition-all duration-300 ease-in-out -me-4`}>
                                            <p className="text-white p-2 pr-4 cursor-pointer hover:bg-sky-500">دەرهێنەران</p>
                                            <p className="text-white p-2 pr-4 cursor-pointer hover:bg-sky-500">ئەکتەرەکان</p>
                                            <p className="text-white p-2 pr-4 cursor-pointer hover:bg-sky-500">250 باشترینی IMDb</p>
                                            <p className="text-white p-2 pr-4 cursor-pointer hover:bg-sky-500">دەربارە</p>
                                            <p className="text-white p-2 pr-4 cursor-pointer hover:bg-sky-500">ستاف</p>
                                            <p className="text-white p-2 pr-4 cursor-pointer hover:bg-sky-500">پەیوەندی کردن</p>
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

                        <div className='flex flex-row items-center justify-start'>
                            <h3 className='cursor-pointer text-2xl font-bold text-white p-2'>
                                <i className="fa-solid fa-user"></i>
                            </h3>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="w-full h-[85vh] p-4 px-8 -mb-12 md:mb-12 ">
                <Slider {...settings}>
                    <div className="w-full h-full rounded relative">
                        <img className="w-full h-[70vh] md:h-[85vh] rounded object-center grayscale-[75%] brightness-75 contrast-125"
                            src="https://apollohou.com/wp-content/uploads/img_9027.jpg"
                            alt="" />
                        <div className="absolute font-sans z-20 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h1 className="text-4xl font-bold text-white">Oppenheimer</h1>
                            <p className="text-xl font-bold text-white mt-4">10/8 <i className="fa-solid fa-star text-yellow-400"></i></p>
                            <div dir="rtl" className='w-50 md:w-full'>
                                <p className="text-sm font-semibold text-white mt-4">{des}</p>
                            </div>
                            <p className="text-lg font-semibold text-sky-500 mt-4">ئاكشن - مێژووی</p>
                            <button className="mt-6 text-lg font-semibold text-white bg-sky-500 py-3 px-8 rounded cursor-pointer hover:bg-sky-600 transition-all duration-300 ease-in-out">
                                بینینی زیاتر
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full rounded relative">
                        <img className="w-full h-[70vh] md:h-[85vh] rounded object-center grayscale-[75%] brightness-75 contrast-125"
                            src="https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg"
                            alt="" />
                        <div className="absolute font-sans z-20 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h1 className="text-4xl font-bold text-white">1917</h1>
                            <p className="text-xl font-bold text-white mt-4">9.5/8 <i className="fa-solid fa-star text-yellow-400"></i></p>
                            <div dir="rtl" className='w-50 md:w-full'>
                                <p className="text-sm font-semibold text-white mt-4">{des1}</p>
                            </div>
                            <p className="text-lg font-semibold text-sky-500 mt-4">ئاكشن - مێژووی</p>
                            <button className="mt-6 text-lg font-semibold text-white bg-sky-500 py-2 px-8 rounded cursor-pointer hover:bg-sky-600 transition-all duration-300 ease-in-out">
                                بینینی زیاتر
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full rounded relative">
                        <img className="w-full h-[70vh] md:h-[85vh] rounded object-center grayscale-[75%] brightness-75 contrast-125"
                            src="https://m.media-amazon.com/images/I/71g3I5WCClL.jpg"
                            alt="" />
                        <div className="absolute font-sans z-20 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h1 className="text-4xl font-bold text-white">12 Strong man</h1>
                            <p className="text-xl font-bold text-white mt-4">9/10 <i className="fa-solid fa-star text-yellow-400"></i></p>
                            <div dir="rtl" className='w-50 md:w-full'>
                                <p className="text-sm font-semibold text-white mt-4">{des2}</p>
                            </div>
                            <p className="text-lg font-semibold text-sky-500 mt-4">ئاكشن - مێژووی</p>
                            <button className="mt-6 text-lg font-semibold text-white bg-sky-500 py-3 px-8 rounded cursor-pointer hover:bg-sky-600 transition-all duration-300 ease-in-out">
                                بینینی زیاتر
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>

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

            <footer className="w-full bg-[hsl(195,9%,10%)] p-4">
                <div className="flex justify-center md:justify-end items-center gap-6 pr-0 md:pr-4 mt-6">
                    {mostViewButtons.map((button) => (
                        <div key={button.id}>
                            <button
                                onClick={() => setSelectedButton(button.id)}
                                className={`bg-transparent border font-bold py-3 px-2 md:py-2 md:px-6 rounded-full transition-colors duration-200 text-sm md:text-xl ${selectedButton === button.id
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
        </div>
    )
}

export default A