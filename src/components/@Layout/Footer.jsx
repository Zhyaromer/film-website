import { useState, useEffect } from 'react';
import FilmsCard from '../@Layout/FilmsCard.jsx'
import Seriescard from '../@Layout/Seriescard.jsx'
import axios from 'axios';

const Footer = () => {
    const [selectedButton, setSelectedButton] = useState(1);
    const [mostViewedMovies, setMostViewedMovies] = useState([]);
    const [mostViewedSeries, setMostViewedSeries] = useState([]);

    useEffect(() => {
        const fetchMostViewed = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/movies/trending');
                setMostViewedMovies(response.data.movies);
                setMostViewedSeries(response.data.series);
            } catch (error) {
                console.error('Error fetching most viewed movies:', error);
            }
        };

        fetchMostViewed();
    }, [])

    const mostViewpages = [
        {
            id: 0, text: 'پربینەرترین زنجیرە',
            content: (
                <Seriescard moviesData={mostViewedSeries} />)
        }
        ,
        {
            id: 1, text: 'پربینەرترین فیلم', content: (
                <FilmsCard moviesData={mostViewedMovies} />
            )
        }
    ];

    const mostViewButtons = [
        { id: 0, text: 'پربینەرترین زنجیرە' },
        { id: 1, text: 'پربینەرترین فیلم' },
    ];
    return (
        <footer className="relative z-50 w-full bg-[hsl(195,9%,10%)] p-4">
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