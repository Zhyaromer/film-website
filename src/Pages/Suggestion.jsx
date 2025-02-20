import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import Footerfilms from '../components/@Layout/Footerfilms.jsx'
import Seriescard from '../components/@Layout/Seriescard.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Suggestion = () => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    const fetchMoviesAndSeries = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/movies/random');
            setMovies(res.data.movies);
            setSeries(res.data.series);
        } catch (error) {
            toast.error("هەڵەیەک هەیە لە وەرگرتنی زانیاریەکانی فیلمەکان و زنجیرەکان", { transition: Slide });
        }
    };

    useEffect(() => {
        fetchMoviesAndSeries();
    }, []);

    return (
        <div className='bg-[#282e30]'>
            <Navigation />

            <div className='px-4 mb-8'>
                <div className="bg-[hsl(195,9%,8%)] h-30 md:24 flex w-full mt-4 md:mt-10 rounded-lg">
                    <div className="flex w-full flex-col md:flex-row-reverse justify-between items-center gap-0 md:gap-12 md:p-4">
                        <div className="mb-2 mt-4 px-8 md:mb-4 text-right">
                            <h4 className="text-xl md:text-3xl font-bold text-center text-white">پێشنیاری ئێمە</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-end px-5'>
                <button onClick={() => fetchMoviesAndSeries()} className='mt-2 py-2 px-5 md:py-3 md:px-8 text-md md:text-lg font-semibold text-white bg-sky-500 rounded-lg cursor-pointer hover:bg-sky-600 transition-all duration-300 ease-in-out'>پێشنیاری ئێمە</button>
            </div>

            <div className="mt-12 px-8 flex justify-end items-center">
                <h4 className="text-2xl md:text-3xl font-bold text-center text-white">فیلمەکان</h4>
            </div>

            <Footerfilms moviesData={movies}/>

            <div className="mt-4 px-8 flex justify-end items-center">
                <h4 className="text-2xl md:text-3xl font-bold text-center text-white">زنجیرەکان</h4>
            </div>

            <Seriescard moviesData={series}/>

            <Footer />

            <ToastContainer />
        </div>
    )
}

export default Suggestion