import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import NewsTemplateComponent from '../components/@Layout/NewsTemplate.jsx'
import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/news/newestnews');
                setNews(res.data.newsData);
            } catch (error) {
                toast.error("هەڵەیەک هەیە لە گرتنی زانیاریەکانی هەواڵەکان", { transition: Slide });
            }
        }

        getNews();
    }, []);

    return (
        <div className='bg-[#282e30]'>
            <Navigation />

            <div className="mb-2 mt-4 px-8 md:mb-4 text-right">
                <h4 className="text-xl md:text-3xl font-bold text-right text-white">نوێترین هەواڵەکان</h4>
            </div>

            <NewsTemplateComponent newsData={news} />

            <Footer />
            <ToastContainer />
        </div>
    )
}

export default News