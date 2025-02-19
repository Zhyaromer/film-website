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
import NewsTemplateComponent from '../components/@Layout/NewsTemplate';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [newestMovies, setNewestMovies] = useState([]);
    const [newestSeries, setNewestSeries] = useState([]);
    const [newestNews, setNewestNews] = useState([]);

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

        const getNewestNews = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/news/newestnewshome');
                setNewestNews(res.data.newsData);
            } catch (error) {
                console.error('Error fetching newest series:', error);
            }
        }

        getNewestMovies();
        getNewestSeries();
        getNewestNews();
    }, []);

    return (
        <div className='bg-[#282e30]'>
            <Navigation />

            <MovieSlider series={newestSeries} />

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

            <div className="mx-auto px-4 py-8">
                <div className="mb-4 mt-4 px-4 flex justify-between items-center">
                    <p onClick={() => navigate('/news')} className="text-sm md:text-2xl cursor-pointer font-bold text-center text-sky-500"> <i class="fa-solid fa-chevron-left me-1"></i> بینینی هەمووی</p>
                    <h4 className="text-lg md:text-3xl font-bold text-center text-white">نوێترین هەواڵەکان</h4>
                </div>
               <NewsTemplateComponent newsData={newestNews} />
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

export default Home