import { React, useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/landingpage.css'
import '../index.css'
import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import MovieSlider from '../components/@Layout/Slider.jsx'
import axios from 'axios'
import Footerfilms from '../components/@Layout/Footerfilms.jsx'
import Seriescard from '../components/@Layout/Seriescard.jsx'
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();
    const [newestMovies, setNewestMovies] = useState([]);
    const [newestSeries, setNewestSeries] = useState([]);

    useEffect(() => {
        const getNewestMovies = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/movies/newmovies');
                setNewestMovies(res.data.movies);
                console.log(res.data.movies);
            } catch (error) {
                console.error('Error fetching newest movies:', error);
            }
        }

        const getNewestSeries = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/movies/newseries');
                setNewestSeries(res.data.series);
            } catch (error) {
                console.error('Error fetching newest series:', error);
            }
        }

        getNewestMovies();
        getNewestSeries();
    }, []);

    return (
        <div className='bg-[#282e30]'>
            <Navigation />

            <MovieSlider />

            <div className="mx-auto px-4 py-8">
                <div className="mb-4 mt-4 px-4 flex justify-between items-center">
                    <p onClick={() => navigate('/films')} className="text-sm md:text-2xl cursor-pointer font-bold text-center text-sky-500"> <i class="fa-solid fa-chevron-left me-1"></i> بینینی هەمووی</p>
                    <h4 className="text-lg md:text-3xl font-bold text-center text-white">نوێترین فیلمەکان</h4>
                </div>
                <Footerfilms moviesData={newestMovies} />
            </div>

            <div className="mx-auto px-4 py-4 bg-[hsl(195,9%,10%)]">
                <div className="mb-4 mt-4 px-4 flex justify-between items-center">
                    <p onClick={() => navigate('/series')} className="text-sm md:text-2xl cursor-pointer font-bold text-center text-sky-500"> <i class="fa-solid fa-chevron-left me-1"></i> بینینی هەمووی</p>
                    <h4 className="text-lg md:text-3xl font-bold text-center text-white">نوێترین زنجیرەکان</h4>
                </div>
                <Seriescard moviesData={newestSeries} />
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

            <div onClick={() => navigate('/suggestion')} className='flex justify-center items-center mb-12'>
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

            <Footer />
        </div>
    )
}

export default A