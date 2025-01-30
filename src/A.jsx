import { React, useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'
import './css/landingpage.css'
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
    const [issidebarshown, setsidebarshown] = useState(false)
    const [des, setdes] = useState('')
    const [des1, setdes1] = useState('')
    const [des2, setdes2] = useState('')
    const [title, settitle] = useState('')

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

        shortDescription('لە کاتی جەنگی جیهانی دووەم، جێگری ژەنەڕاڵ لێسلی گرۆڤس جوونیەر، فیزیاناس جەی ڕۆبەرت ئۆپنهایمەری دەستنیشان کرد بۆ کارکردن لەسەر پڕۆژەی نهێنی مانهاتن','دو سرباز، کە کارەکەیان ئەم بریتیە لە گەیاندنی پەیامی گرنگ بۆ یەکەمی تر، ژیانەکانەیان بە ریسک دەنەوە بۆ ئەم کارە، بۆ ئەوەی بەرەو پەیامیەکی تەواوەوە کەیانە بەرەو فەرمی تایبەتی بەکارێن','کاپتێن میچ نەلسۆن پێشەنگی تیمێکی تایبەتی دەکات بۆ مەشەقی پەیڤاندن بە تەلابانەکان لە ئەفغانستان. هەندێك بەکاربردنی یارمەتی لە سویەیەکی کەسایەتی فەرمی، ڕووداوەکان زیاتر بەرەو ڕووداوی ئیشە بەرەو کۆمپلیتەسەر و کەیسی');

        // not using it yet due to not setting up the api yet
        shortTitle('marvel avengers - infinity war');
    }, []);

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
                            <div className={`w-full absolute left-0 z-30 bg-sky-500 ${issubshown ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-in-out`}>
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

            <div className="w-full h-[85vh] p-4 px-8 mb-12">
                <Slider {...settings}>
                    <div className="w-full h-full relative">
                        <img className="w-full h-[60vh] md:h-[85vh] rounded object-cover grayscale-[75%] brightness-75 contrast-125"
                            src="https://apollohou.com/wp-content/uploads/img_9027.jpg"
                            alt="" />
                        <div className="absolute font-sans z-20 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h1 className="text-4xl font-bold text-white">Oppenheimer</h1>
                            <p className="text-xl font-bold text-white mt-4">10/8 <i className="fa-solid fa-star text-yellow-400"></i></p>
                            <div dir="rtl" className='w-80 md:w-full'>
                                <p className="text-sm font-semibold text-white mt-4">{des}</p>
                            </div>
                            <p className="text-lg font-semibold text-white text-sky-500 mt-4">ئاكشن - مێژووی</p>
                            <button className="mt-6 text-lg font-semibold text-white bg-sky-500 py-3 px-14 rounded cursor-pointer hover:bg-sky-600 transition-all duration-300 ease-in-out">
                                بینینی زیاتر
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full relative">
                        <img className="w-full h-[60vh] md:h-[85vh] rounded object-cover grayscale-[75%] brightness-75 contrast-125"
                            src="https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg"
                            alt="" />
                        <div className="absolute font-sans z-20 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h1 className="text-4xl font-bold text-white">1917</h1>
                            <p className="text-xl font-bold text-white mt-4">9.5/8 <i className="fa-solid fa-star text-yellow-400"></i></p>
                            <div dir="rtl" className='w-80 md:w-full'>
                                <p className="text-sm font-semibold text-white mt-4">{des1}</p>
                            </div>
                            <p className="text-lg font-semibold text-white text-sky-500 mt-4">ئاكشن - مێژووی</p>
                            <button className="mt-6 text-lg font-semibold text-white bg-sky-500 py-3 px-14 rounded cursor-pointer hover:bg-sky-600 transition-all duration-300 ease-in-out">
                                بینینی زیاتر
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full relative">
                        <img className="w-full h-[60vh] md:h-[85vh] rounded object-cover grayscale-[75%] brightness-75 contrast-125"
                            src="https://m.media-amazon.com/images/I/71g3I5WCClL.jpg"
                            alt="" />
                        <div className="absolute font-sans z-20 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h1 className="text-4xl font-bold text-white">Oppenheimer</h1>
                            <p className="text-xl font-bold text-white mt-4">10/8 <i className="fa-solid fa-star text-yellow-400"></i></p>
                            <div dir="rtl" className='w-80 md:w-full'>
                                <p className="text-sm font-semibold text-white mt-4">{des2}</p>
                            </div>
                            <p className="text-lg font-semibold text-white text-sky-500 mt-4">ئاكشن - مێژووی</p>
                            <button className="mt-6 text-lg font-semibold text-white bg-sky-500 py-3 px-14 rounded cursor-pointer hover:bg-sky-600 transition-all duration-300 ease-in-out">
                                بینینی زیاتر
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="mx-auto px-4 py-8">
                <div className="mb-12 mt-4">
                    <h1 className="text-3xl font-bold text-center">نوێترین فیلمەکان</h1>
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
                            <div className="mt-2 space-y-2">
                                <div dir="rtl" className="flex items-center justify-between break-all">
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