import React, { useState, useEffect } from 'react';
import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const NewsDetails = () => {
    const [News, setNews] = useState({});
    const { newsId } = useParams();

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/news/news/${newsId}`);
                setNews(res.data.newsData);
            } catch (error) {
                toast.error(error.response.data.message || 'هەڵەیەک ڕویدا', { transition: Slide, autoClose: 3000 });
            }
        }

        const incrementView = async () => {
            try {
                await axios.get(`http://localhost:5000/api/news/incrementView/${newsId}`);
            } catch (error) {
                toast.error(error.response.data.message || 'هەڵەیەک ڕویدا', { transition: Slide, autoClose: 3000 });
            }
        }


        incrementView();
        fetchMovieData();
    }, [newsId]);

    return (
        <div>
            <Navigation className="relative" />
            <div className="relative z-0 min-h-screen bg-[#282e30]">
                <div />
                <div dir="rtl" className="relative z-10 min-h-screen bg-transparent text-white">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div>
                                <img
                                    src={News.img}
                                    alt={News.header}
                                    className="w-full h-[300px] rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                        
                        <div className='mt-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4'>
                            <div>
                                <h1 className="text-2xl md:text-3xl text-right font-bold mb-2">{News.header}</h1>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-row items-center gap-1">
                                    <div>
                                        <p className="text-base md:text-lg text-right">{News.view}</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-eye "></i>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-1">
                                    <div>
                                        <p className="text-base md:text-lg text-right">{News.postedDate}</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-calendar-days"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 px-4 md:px-8  w-[90%]">
                            <p className="text-lg md:text-xl text-right">{News.description}</p>
                        </div>
                    </div>
                </div>

            </div>

            <ToastContainer />

            <Footer />
        </div>
    );
};

export default NewsDetails;