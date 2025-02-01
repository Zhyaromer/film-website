import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';

const CustomArrow = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 z-50 bg-sky-500 hover:bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center md:visible invisible ${direction === 'prev' ? 'left-4' : 'right-4'
            }`}
    >
        {direction === 'prev' ? <i class="fa-solid fa-arrow-left"></i> : <i class="fa-solid fa-arrow-right"></i>}
    </button>
);

const Sliderr = () => {
    const [des, setdes] = useState('')
    const [des1, setdes1] = useState('')
    const [des2, setdes2] = useState('')
    const [title, settitle] = useState('')

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

    return (
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
    )
}

export default Sliderr