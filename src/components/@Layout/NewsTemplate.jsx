import React, { useState } from 'react';
import Pagination from './Pagination.jsx';

const NewsTemplateComponent = () => {
    const newsInfo = [
        {
            title: "سپایدەرمان",
            image: "https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg",
            description: 'لێسلی گرۆڤس جوونیەر، فیزیاناس جەی ڕۆبەرت ئۆپنهایمەری دەستنیشان کرد بۆ کارکردن لەسەر پڕۆژەی ',
            views: 700,
            dateOfNews: 'دوو ڕۆأ لەمەو پێش',
        },
        {
            title: "سپایدەرمان",
            image: "https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg",
            description: 'لێسلی گرۆڤس جوونیەر، فیزیاناس جەی ڕۆبەرت ئۆپنهایمەری دەستنیشان کرد بۆ کارکردن لەسەر پڕۆژەی ',
            views: 900,
            dateOfNews: 'دوو ڕۆأ لەمەو پێش',
        },
        {
            title: "سپایدەرمان",
            image: "https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg",
            description: 'لێسلی گرۆڤس جوونیەر، فیزیاناس جەی ڕۆبەرت ئۆپنهایمەری دەستنیشان کرد بۆ کارکردن لەسەر پڕۆژەی ',
            views: 800,
            dateOfNews: 'دوو ڕۆأ لەمەو پێش',
        },
        {
            title: "سپایدەرمان",
            image: "https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg",
            description: 'لێسلی گرۆڤس جوونیەر، فیزیاناس جەی ڕۆبەرت ئۆپنهایمەری دەستنیشان کرد بۆ کارکردن لەسەر پڕۆژەی ',
            views: 800,
            dateOfNews: 'دوو ڕۆأ لەمەو پێش',
        },
        {
            title: "سپایدەرمان",
            image: "https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg",
            description: 'لێسلی گرۆڤس جوونیەر، فیزیاناس جەی ڕۆبەرت ئۆپنهایمەری دەستنیشان کرد بۆ کارکردن لەسەر پڕۆژەی ',
            views: 800,
            dateOfNews: 'دوو ڕۆأ لەمەو پێش',
        },
        {
            title: "سپایدەرمان",
            image: "https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg",
            description: 'لێسلی گرۆڤس جوونیەر، فیزیاناس جەی ڕۆبەرت ئۆپنهایمەری دەستنیشان کرد بۆ کارکردن لەسەر پڕۆژەی ',
            views: 800,
            dateOfNews: 'دوو ڕۆأ لەمەو پێش',
        },
        {
            title: "سپایدەرمان",
            image: "https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg",
            description: 'لێسلی گرۆڤس جوونیەر، فیزیاناس جەی ڕۆبەرت ئۆپنهایمەری دەستنیشان کرد بۆ کارکردن لەسەر پڕۆژەی ',
            views: 800,
            dateOfNews: 'دوو ڕۆأ لەمەو پێش',
        },
    ];

    const [currentMovies, setCurrentMovies] = useState(newsInfo.slice(0, 6));
    const itemsPerPage = 6;

    const handlePageChange = (_, startIndex, endIndex) => {
        setCurrentMovies(newsInfo.slice(startIndex, endIndex));
    };

    return (
        <div>
            <div className='flex flex-row flex-wrap justify-center gap-4'>
                {currentMovies.map((news, index) => (
                    <div className='w-full sm:w-[40%] lg:w-[30%] p-2'>
                        <div key={index} className='bg-[hsl(195,9%,20%)] p-2 rounded-xl shadow-xl cursor-pointer'>
                            <div >
                                <img className='rounded-lg' src="https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg" alt="" />
                            </div>
                            <div dir='rtl' className='p-4'>
                                <h1 className='text-sky-500 mb-4 text-2xl font-bold'>{news.title}</h1>
                                <p className='text-white text-lg'>{news.description}</p>
                            </div>

                            <div className='flex justify-center'>
                                <hr className='w-90' />
                            </div>

                            <div className='flex flex-row justify-between p-4'>
                                <div className='flex flex-row justify-center items-center gap-2'>
                                    <div>
                                        <i class="fa-solid fa-eye text-sky-500"></i>
                                    </div>
                                    <div>
                                        <p className='text-white text-lg font-semibold'>{news.views}</p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-center items-center gap-2'>
                                    <div>
                                        <p className='text-white text-md font-semibold'>{news.dateOfNews}</p>
                                    </div>
                                    <div>
                                        <i class="fa-solid tetx-md text-sky-500 fa-clock-rotate-left"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`mb-16 mt-12`}>
                <Pagination
                    totalItems={newsInfo.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default NewsTemplateComponent