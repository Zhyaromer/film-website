import React, { useState } from 'react';
import { Clock, PlayCircle, Bookmark, Heart, CheckCircle, Download, Tv, Star, MoreVertical, UserCircle2 } from 'lucide-react';

const MovieDetailsPage = () => {
    const [activeTab, setActiveTab] = useState('زانیاری');
    const [watchLater, setWatchLater] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [watched, setWatched] = useState(false);

    const movieData = {
        title: 'Spider man : No way home (2021)',
        genre: 'سەرکێشێ - ئاکشن - خەیاڵی',
        date: '2021-12-15',
        duration: '258 خولەک',
        director: 'Jon watts',
        producer: 'Marvel Studios',
        country: 'ئەمریکا',
        views: 24561,
        ratings: {
            imdb: 8.7,
            rottenTomatoes: 92
        },
        cast: ['Marcus Chen', 'Aria Nakamura', 'David Okonkwo'],
        posterUrl: 'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg',
        backgroundUrl: 'https://occ-0-8407-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDQOzGC_rInp4gFvqFPDF3mcWchowjepe5uTldav_Sx1QgJlpJG-ATT_PcYJbF-y5AtlC9koSScBJPATb4JET65SrkrgOl92SGl.jpg?r=c9b',
        synopsis: 'دوای ئاشکرابوونس ناسنامەی "سپایدرەمان" پیتەر داوای له دکتۆر "سترەینج" دەکات یارمەتی بدات تا بگەڕێتەوە ژیانە ئاسایییەکەی. بەڵام هەڵەیەک لە جادووەکەی دکتۆر "سترەینج" دەبێتە هۆی شێواندنی فرە گەردوونی',
        trailer: 'https://youtu.be/JfVOs4VSpmA?si=8Z9M-ScFciGU3WSE',
        reviews: [
            { name: 'CinemaToday', quote: 'A mind-bending masterpiece of modern sci-fi' },
            { name: 'FilmWire', quote: 'Breathtaking visuals and compelling narrative' }
        ]
    };

    const castMembers = [
        {
            name: "Tom Holland",
            photo: "https://hips.hearstapps.com/hmg-prod/images/tom-holland-attends-the-los-angeles-premiere-of-sony-news-photo-1683915930.jpg?crop=0.596xw:0.894xh;0.226xw,0.106xh&resize=1200:*"
        },
        {
            name: "Benedict Cumberbatch",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYAfu0kG389lUu25CUX5yRjHXmtN2s4ORqg&s"
        },
        {
            name: "Zendaya",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8c4o19zp0i2ztJIke2VkvbA64DhpNdVIGQ&s"
        },
        {
            name: "Jacob Batalon",
            photo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Jacob_Batalon_%2828035642754%29_%28cropped%29.jpg"
        },
        {
            name: "Marisa Tomei",
            photo: "https://m.media-amazon.com/images/M/MV5BZTJiNTYxMGYtYzM5OS00N2EzLTk0NDktZjkwZGIyMzlmYWU2XkEyXkFqcGc@._V1_.jpg"
        },
        {
            name: "Jon Favreau",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Jon_Favreau_2016.jpeg/1200px-Jon_Favreau_2016.jpeg"
        },
        {
            name: "Willem Dafoe",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5AxkRXIDEgNolo8gEBeAxzerpSuq3ByJng&s"
        },
        {
            name: "Alfred Molina",
            photo: "https://static.independent.co.uk/2022/11/25/16/shutterstock_editorial_12866542o.jpg"
        },
        {
            name: "Tobey Maguire",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHU0gPKpbl4Ly5Uk-Hlhg7szYqBbPnSl7RHDvVcjAZ2EFu2YhBROPce5jpKs5pa1aYxgvtP7QiAVTS9UhaDkEBdQ"
        },
        {
            name: "Andrew Garfield",
            photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQABvLfxHx7OiVWX1GKXyCdbHf8HwKkZ88iwx_Pv9L2LJntjkknjKuRlVAd2GRoVcchBUGCusxf7zx8Elpy4FzUmQ"
        }
    ];

    const reviews = [
        {
            id: 1,
            name: "حەسەن ڕەزا",
            rating: 3,
            review: "نگی تیمێکی تایبەتی دەکات بۆ مەشەقی پەیڤاندن بە تەلابانەکان لە ئەفغانستان. هەندێك بەکاربردنی یارمەتی لە سویەیەکی",
        },
        {
            id: 2,
            name: "محەمەد ڕزگار",
            rating: 3,
            review: "نگی تیمێکی تایبەتی دەکات بۆ مەشەقی پەیڤاندن بە تەلابانەکان لە ئەفغانستان. هەندێك بەکاربردنی یارمەتی لە سویەیەکی",
        },
        {
            id: 3,
            name: "Sarah Kim",
            rating: 3,
            review: "نگی تیمێکی تایبەتی دەکات بۆ مەشەقی پەیڤاندن بە تەلابانەکان لە ئەفغانستان. هەندێك بەکاربردنی یارمەتی لە سویەیەکی",
        },
        {
            id: 4,
            name: "Alex Wong",
            rating: 5,
            review: "Exceptional quality and customer service Exceptional quality and customer service Exceptional quality and customer service",
        },
        {
            id: 5,
            name: "Jessica Lee",
            rating: 3,
            review: "Solid performance with great features.",
        }
    ];

    const ActionButton = ({ icon: Icon, active, onClick, label, text }) => (
        <button
            className={`flex items-center justify-center p-2 rounded-full 
        ${active ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'}`}
            onClick={onClick}
            title={label}
        >
            <div className="flex items-center gap-2">
                <div>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <p className="font-semibold lg:text-base text-xs">{text}</p>
                </div>
            </div>
        </button>
    );

    const renderOverview = () => (
        <div className="space-y-4">
            <p className="text-gray-300">{movieData.synopsis}</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                <div onClick={() => window.open(movieData.trailer, '_blank')} className="cursor-pointer bg-gray-800 p-3 rounded">
                    <i class="fa-brands fa-youtube mx-auto mb-2 text-red-400"></i>
                    <p className="font-bold">بینینی ترایلەر</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <Clock className="mx-auto mb-2 text-green-400" />
                    <p className="font-bold">{movieData.duration}</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <i class="fa-solid fa-clock-rotate-left mx-auto mb-2 text-white"></i>
                    <p className="font-bold">{movieData.date}</p>
                </div>
            </div>
        </div>
    );

    const renderCast = () => (
        <div className="space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">

                {castMembers.map((member, index) => (
                    <div key={index} className="flex justify-center items-center gap-4 flex-col cursor-pointer bg-gray-800 p-3 rounded">
                        <div>
                            <img className='w-24 h-24 rounded-full' src={member.photo} alt="" />
                        </div>
                        <div>
                            <p className="font-bold">{member.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderReviews = () => (
        <div className="w-[100%] lg:grid grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0">
            {reviews.map((review, index) => (
                <div key={index} dir="rtl" className="bg-[hsl(195,9%,20%)] shadow-md rounded-lg p-4 border border-gray-400 h-full">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                            <UserCircle2 className="w-10 h-10 text-white" />
                            <span className="font-medium text-white cursor-pointer">{review.name}</span>
                        </div>
                        <button className="text-white rounded-full p-1">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="flex items-center mb-2 justify-start">
                        {[...Array(5)].map((_, index) => (
                            <Star
                                key={index}
                                className={`w-5 h-5 ${index > review.rating - 1 ? 'text-gray-100' : 'text-sky-500'}`}
                                fill={index > review.rating - 1 ? 'none' : 'currentColor'}
                            />
                        ))}
                    </div>
                    <div className="p-3 rounded-lg bg-[hsl(195,9%,15%)] h-48 overflow-y-auto">
                        <p className="text-white text-right">{review.review}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div
            dir="rtl"
            className="min-h-screen bg-gray-900 text-white"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${movieData.backgroundUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-[300px_1fr] gap-8">
                    <div>
                        <img
                            src={movieData.posterUrl}
                            alt={movieData.title}
                            className="w-full rounded-lg shadow-2xl"
                        />
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <button className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 rounded">
                                <div className="flex items-center gap-2">
                                    <div>
                                        <Tv className="mr-2" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">سەیرکردن</p>
                                    </div>
                                </div>
                            </button>
                            <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded">
                                <div className="flex items-center gap-2">
                                    <div>
                                        <Download className="mr-2" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">دابەزاندن</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <a
                            href={movieData.trailer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-3 rounded"
                        >
                            <div className="flex items-center gap-2">
                                <div>
                                    <PlayCircle className="ms-2" />
                                </div>
                                <div>
                                    <p className="font-semibold">ئەم فلیمە لە بەشێك زیاتری هەیە</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <h1 className="text-4xl text-left lg:text-right font-bold mb-2">{movieData.title}</h1>
                        <div className='flex items-center gap-2 mb-6 mt-6'>
                            <div>
                                <p className="text-gray-400 text-xl cursor-pointer">{movieData.genre}</p>
                            </div>
                        </div>

                        <div className="flex gap-4 mb-4">
                            <ActionButton
                                icon={Bookmark}
                                active={watchLater}
                                onClick={() => setWatchLater(!watchLater)}
                                label="Watch Later"
                                text={'بینینی دواتر'}
                            />
                            <ActionButton
                                icon={Heart}
                                active={favorite}
                                onClick={() => setFavorite(!favorite)}
                                label="Favorite"
                                text={'لیستی دڵخوازی'}
                            />
                            <ActionButton
                                icon={CheckCircle}
                                active={watched}
                                onClick={() => setWatched(!watched)}
                                label="Watched"
                                text={'بینراو'}
                            />
                        </div>

                        <div className="bg-gray-800 p-4 rounded mb-4">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                <div>
                                    <p className="text-gray-400">بەرهەمهێنان</p>
                                    <p className="font-semibold">{movieData.producer}</p>
                                </div>
                                <div className='mb-4'>
                                    <p className="text-gray-400">وڵات</p>
                                    <p className="font-semibold">{movieData.country}</p>
                                </div>
                                <div >
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <p className="font-semibold">{movieData.ratings.imdb}/10</p>
                                        </div>
                                        <div>
                                            <img className="w-6 h-6" src="https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <p className="font-semibold">{movieData.ratings.rottenTomatoes}%</p>
                                        </div>
                                        <div>
                                            <img className="w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Rotten_Tomatoes_alternative_logo.svg/1031px-Rotten_Tomatoes_alternative_logo.svg.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-400">دەرهێنان</p>
                                    <p className="font-semibold">{movieData.director}</p>
                                </div>

                                <div>
                                    <p className="text-gray-400 text-right"><i class="fa-solid fa-eye"></i></p>
                                    <p className="font-semibold">{movieData.views}</p>
                                </div>

                            </div>
                        </div>

                        <div className="flex border-b border-gray-700 mb-4">
                            {['زانیاری', 'ئەکتەرەکان', 'هەڵسەنگاندن'].map(tab => (
                                <button
                                    key={tab}
                                    className={`px-4 py-2 capitalize ${activeTab === tab
                                        ? 'border-b-2 border-blue-500 text-blue-500'
                                        : 'text-gray-400'
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div>
                            {activeTab === 'زانیاری' && renderOverview()}
                            {activeTab === 'ئەکتەرەکان' && renderCast()}
                            {activeTab === 'هەڵسەنگاندن' && renderReviews()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage;