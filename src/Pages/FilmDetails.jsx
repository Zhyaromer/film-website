import React, { useState, useEffect } from 'react';
import { Clock, PlayCircle, Bookmark, Heart, CheckCircle, Download, Tv, Star, MoreVertical, UserCircle2 } from 'lucide-react';
import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import FilmsCard from '../components/@Layout/FilmsCard.jsx'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetailsPage = () => {
    const [activeTab, setActiveTab] = useState('زانیاری');
    const [watchLater, setWatchLater] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [watched, setWatched] = useState(false);
    const [film, setFilm] = useState({});

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
            <div>
                <h2 className="text-xl lg:text-2xl text-sky-500 text-right font-bold">کورتەی جیرۆک</h2>
            </div>
            <p className="text-gray-200 text-lg">{film.story}</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                <div onClick={() => window.open(film.trailerUrl, '_blank')} className="cursor-pointer bg-gray-800 p-3 rounded">
                    <i class="fa-brands fa-youtube mx-auto mb-2 text-red-400"></i>
                    <p className="font-bold">بینینی ترایلەر</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <Clock className="mx-auto mb-2 text-green-400" />
                    <p className="font-bold">{film.min} خولەک</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <p>بەرواری بڵاوبوونەوە</p>
                    <p className="font-bold">{film.date}</p>
                </div>
            </div>
        </div>
    );

    const renderCast = () => (
        <div className="space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {film.cast.map((member, index) => (
                    <div key={index} className="flex justify-center items-center gap-4 flex-col cursor-pointer bg-gray-800 p-3 rounded">
                        <div>
                            <img className='w-24 h-24 rounded-full' src={member.imgurl} alt="" />
                        </div>
                        <div>
                            <p className="font-bold">{member.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderTechnical = () => (
        <div className="space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {film.translators.map((member, index) => (
                    <div key={index} className="flex justify-center items-center gap-4 flex-col cursor-pointer bg-gray-800/60 p-3 rounded">
                        <div>
                            <img className='w-24 h-24 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiF_OQ_-RS1ksidGVXXFQ-nJehHFxbHfIoQ&s' alt="" />
                        </div>
                        <div>
                            <p className="font-bold">{member}</p>
                        </div>
                        {/* <div>
                            <p className="font-bold">{member.role}</p>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );

    const renderReviews = () => (
        <div>
            <div className="py-4 flex flex-row-reverse justify-between items-center px-4">
                <div>
                    <button className="text-sm lg:text-lg relative z-10 font-semibold text-white bg-sky-500 py-1 px-2 lg:px-6 rounded cursor-pointer hover:bg-sky-600 transition-all duration-300 ease-in-out">
                        دانانی هەڵسەنگاندن
                    </button>
                </div>
                <div>
                    <h2 className="text-xl lg:text-2xl text-sky-500 text-right font-bold">پێداچونەوەکان</h2>
                </div>
            </div>
            <div className="w-[100%] lg:grid grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0">
                {film.comments.map((review, index) => (
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
                                    className={`w-5 h-5 ${index > review.star - 1 ? 'text-gray-100' : 'text-sky-500'}`}
                                    fill={index > review.star - 1 ? 'none' : 'currentColor'}
                                />
                            ))}
                        </div>
                        <div className="p-3 rounded-lg bg-[hsl(195,9%,15%)] h-48 overflow-y-auto">
                            <p className="text-white text-right">{review.reviewmsg}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const { filmId } = useParams();

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/movies/movie/${filmId}`);
                setFilm(res.data.movie);
                console.log(res.data.movie);
            } catch (error) {
                console.error(error);
            }
        }

        fetchMovieData();
    }, [filmId]);

    const hasMultipleParts = film.otherParts && film.otherParts.length > 0;

    return (
        <div>
            <Navigation className="relative" />
            <div className="relative z-0 min-h-screen">
                <div
                    className="fixed inset-0 z-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${film.imgUrl
                            })`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <div dir="rtl" className="relative z-10 min-h-screen bg-transparent text-white">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid md:grid-cols-[300px_1fr] gap-8">
                            <div>
                                <img
                                    src={film.posterUrl}
                                    alt={film.filmtitle}
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
                                <p
                                    className={`${hasMultipleParts ? 'block' : 'hidden'} cursor-pointer mt-4 w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-3 rounded`}
                                >
                                    <div className={`flex items-center gap-2`}>
                                        <div>
                                            <PlayCircle className="ms-2" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">ئەم فلیمە لە بەشێك زیاتری هەیە</p>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <div>
                                <h1 className="text-4xl text-left lg:text-right font-bold mb-2">{film.filmtitle} {`(${film.year})`}</h1>
                                <div className='flex items-center gap-2 mb-6 mt-6'>
                                    <div>
                                        <p className="text-gray-400 text-xl cursor-pointer"> {film.genre && Array.isArray(film.genre)
                                            ? film.genre.join(" - ")
                                            : ''}</p>
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
                                            <p className="font-semibold">{film.producer}</p>
                                        </div>
                                        <div className='mb-4'>
                                            <p className="text-gray-400">وڵات</p>
                                            <p className="font-semibold">{film.country}</p>
                                        </div>
                                        <div >
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    <p className="font-semibold">{film.imdb}/10</p>
                                                </div>
                                                <div>
                                                    <img className="w-6 h-6" src="https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    <p className="font-semibold">{film.rottenTomatoes}%</p>
                                                </div>
                                                <div>
                                                    <img className="w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Rotten_Tomatoes_alternative_logo.svg/1031px-Rotten_Tomatoes_alternative_logo.svg.png" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-gray-400">دەرهێنان</p>
                                            <p className="font-semibold">{film.director}</p>
                                        </div>

                                        <div>
                                            <p className="text-gray-400 text-right"><i class="fa-solid fa-eye"></i></p>
                                            <p className="font-semibold">{film.view}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex border-b border-gray-700 mb-4">
                                    {['زانیاری', 'ئەکتەرەکان', 'هەڵسەنگاندن', 'تەکنیک'].map(tab => (
                                        <button
                                            key={tab}
                                            className={`px-4 text-lg lg:text-xl py-2 capitalize ${activeTab === tab
                                                ? 'border-b-2 border-sky-500 text-sky-500'
                                                : 'text-white'
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
                                    {activeTab === 'تەکنیک' && renderTechnical()}
                                    {activeTab === 'هەڵسەنگاندن' && renderReviews()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-50 mb-0 pt-12 px-8 flex justify-end items-center">
                    <h4 className="text-lg md:text-3xl font-bold text-center text-white">فلیمی هاوشێوە</h4>
                </div>

                <FilmsCard />
            </div>


            <Footer />
        </div>
    );
};

export default MovieDetailsPage;