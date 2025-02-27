import React, { useState,useEffect } from 'react';
import Pagination from './Pagination.jsx';

const NewsTemplateComponent = ({ newsData }) => {
    const [currentNews, setCurrentNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const isHomePage = window.location.pathname === '/'? true : false;

    const newsInfo = Array.isArray(newsData) ? newsData : (newsData?.news || []);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        if (newsInfo?.length > 0) {
            setCurrentNews(newsInfo.slice(startIndex, endIndex));
        }
    }, [newsInfo, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (newsInfo?.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-white text-xl">هیچ هەواڵێك نەدۆزرایەوە</p>
            </div>
        );
    }

    return (
        <div>
            <div className='flex flex-row flex-wrap justify-center gap-4'>
                {currentNews.map((news, _) => (
                    <div className='w-full sm:w-[40%] lg:w-[30%] p-2'>
                        <div key={news._id} onClick={() => window.location.href = `/newsdetails/${news.id}`} className='bg-[hsl(195,9%,20%)] p-2 rounded-xl shadow-xl cursor-pointer'>
                            <div className='relative h-52 w-full' >
                                <img className='rounded-lg w-full h-full' src={news.img} alt={news.header} />

                                <div className='absolute bottom-0 p-2'>
                                    <div className='flex flex-row justify-center items-center gap-2'>
                                        <div>
                                            <i class="fa-solid fa-eye text-sky-500"></i>
                                        </div>
                                        <div>
                                            <p className='text-white text-base font-semibold'>{news.view}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div dir='rtl' className='p-4'>
                                <h1 className='text-sky-500 mb-4 text-xl font-bold'>{news?.header?.length > 30 ? news?.header?.slice(0, 30) + '...' : news?.header}</h1>
                                <p className='text-white text-lg'>{news?.description?.length > 100 ? news?.description?.slice(0, 100) + '...' : news?.description}</p>
                            </div>

                            <div className='flex justify-center'>
                                <hr className='w-90' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`mb-16 mt-12 ${isHomePage ? 'hidden' : 'block'}`}>
                <Pagination
                    totalItems={newsData.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default NewsTemplateComponent