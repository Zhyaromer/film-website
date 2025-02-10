import React, { useState, useEffect } from 'react';
import { Clock, ChevronDown, PlayCircle, Bookmark, Heart, CheckCircle, Star, MoreVertical, UserCircle2 } from 'lucide-react';
import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import { useParams } from 'react-router-dom';
import FilmsCard from '../components/@Layout/FilmsCard.jsx'
import axios from 'axios';

const Serisdetailss = () => {
    const [activeTab, setActiveTab] = useState('زانیاری');
    const [watchLater, setWatchLater] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [watched, setWatched] = useState(false);
    const [series, setseries] = useState({});


    const movieData = {
        title: 'Breaking Bad (2008)',
        genre: 'سەرکێشێ - ئاکشن - خەیاڵی',
        date: '2008-1-20',
        duration: '50 خولەک',
        director: 'Vince Gilligan',
        producer: 'AMC',
        country: 'ئەمریکا',
        views: 876543,
        ratings: {
            imdb: 9.7,
            rottenTomatoes: 99
        },
        seasons: 5,
        eps: 62,
        cast: ['Marcus Chen', 'Aria Nakamura', 'David Okonkwo'],
        backgroundUrl: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/01/walter-white-breaking-bad-grande.jpg',
        posterUrl: 'https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg',
        synopsis: 'مامۆستایەکی دواناوەندی بەناوی واڵتەر وایت کەوا تووشی نەخۆشی شێرپەنجەی سییەکان دێت، ڕوودەکاتە فرۆشتنی ماددە هۆشبەرەکان بە مەبەستی زامنکردنی داهاتوویەکی باش بۆ خێزانەکەی دوای مردنە چاوەڕوانکراوەکەی.',
        trailer: 'https://youtu.be/XZ8daibM3AE?si=fkemLcMX3qXNPwje',
    };

    const [selectedSeason, setSelectedSeason] = useState("1");
    const [isOpen, setIsOpen] = useState(false);

    const episodes = [
        {
            id: 1,
            title: "Pilot",
            image: "https://images.genius.com/9cb7e19233ebb2693a005c8621504c34.1000x1000x1.jpg",
            season: "1"
        },
        {
            id: 2,
            title: "Cat's in the Bag",
            image: "https://processedmedia.wordpress.com/wp-content/uploads/2011/08/breakingbad_post38_1280x1024_062.jpg?w=1200",
            season: "2"
        },
        {
            id: 3,
            title: "And the Bag's in the River",
            image: "https://i.pinimg.com/736x/12/1d/49/121d497eca520d0ee217c77891e95ce3.jpg",
            season: "3",
        }
    ];

    const seasons = [
        { value: "1", label: "Season 1" },
        { value: "2", label: "Season 2" },
        { value: "3", label: "Season 3" },
        { value: "4", label: "Season 4" },
    ];

    const filteredEpisodes = episodes.filter(episode => episode.season === selectedSeason);


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
            <p className="text-gray-200 text-lg">{series.description}</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                <div onClick={() => window.open(series.trailerUrl, '_blank')} className="cursor-pointer bg-gray-800 p-3 rounded">
                    <i class="fa-brands fa-youtube mx-auto mb-2 text-red-400"></i>
                    <p className="font-bold">بینینی ترایلەر</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <Clock className="mx-auto mb-2 text-green-400" />
                    <p className="font-bold"> {series.filmTime} خولەک</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <i class="fa-solid fa-clock-rotate-left mx-auto mb-2 text-white"></i>
                    <p className="font-bold">{series?.date?.fullDate}</p>
                </div>
            </div>
        </div>
    );

    const renderEps = () => (
        <div className="space-y-4">
            <div className="container mx-auto p-4">
                <div className="relative mb-6">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-between w-48 px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                    >
                        <span>{`Season ${selectedSeason}`}</span>
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                        />
                    </button>

                    {isOpen && (
                        <div className="absolute z-10 w-48 mt-2 bg-gray-800 rounded-lg shadow-lg">
                            {seasons.map((season) => (
                                <button
                                    key={season.value}
                                    onClick={() => {
                                        setSelectedSeason(season.value);
                                        setIsOpen(false);
                                    }}
                                    className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg"
                                >
                                    {season.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredEpisodes.map((episode) => (
                        <div key={episode.id} className="flex flex-col">
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                <img
                                    src={episode.image}
                                    alt={episode.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="mt-2 text-left flex flex-row-reverse">
                                <h2 className="text-xl font-bold text-gray-100">
                                    . {episode.id}
                                </h2>
                                <h2 className="text-xl font-bold text-gray-100">
                                    {episode.title}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderCast = () => (
        <div className="space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">

                {series.casts.map((member, index) => (
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

    const renderTechnical = () => (
        <div className="space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {series.technical.bargTaknik.map((member, index) => (
                    <div key={index} className="flex justify-center items-center gap-4 flex-col cursor-pointer bg-gray-800/60 p-3 rounded">
                        <div>
                            <img className='w-24 h-24 rounded-full' src={member?.imgUrl} alt="" />
                        </div>
                        <div>
                            <p className="font-bold">{member?.name}</p>
                        </div>
                        <div>
                            <p className="font-bold">{member?.role}</p>
                        </div>
                    </div>
                ))}
                {series.technical.translators.map((member, index) => (
                    <div key={index} className="flex justify-center items-center gap-4 flex-col cursor-pointer bg-gray-800/60 p-3 rounded">
                        <div>
                            <img className='w-24 h-24 rounded-full' src={member?.imgUrl} alt="" />
                        </div>
                        <div>
                            <p className="font-bold">{member?.name}</p>
                        </div>
                        <div>
                            <p className="font-bold">{member?.role}</p>
                        </div>
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
                {series.comments.reviews.map((review, index) => (
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
                            <p className="text-white text-right">{review.msg}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const { seriesId } = useParams();

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/movies/seriesDetails/${seriesId}`);
                setseries(res.data.movie);
                console.log(res.data.movie);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMovieData();
    }, [seriesId]);

    return (
        <div>
            <Navigation className="relative z-40" />
            <div className="relative z-0 min-h-screen">
                <div
                    className="fixed inset-0 z-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${series.backgroundUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top'
                    }}
                />
                <div dir="rtl" className="relative z-10 min-h-screen bg-transparent text-white">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid md:grid-cols-[300px_1fr] gap-8">
                            <div>
                                <img
                                    src={series.posterUrl}
                                    alt={series.title}
                                    className="w-full rounded-lg shadow-2xl"
                                />
                            </div>
                            <div>
                                <h1 className="text-4xl text-left lg:text-right font-bold mb-2">{series.title}{` (${series?.date?.year})`}</h1>
                                <div className='flex items-center gap-2 mb-6 mt-6'>
                                    <div>
                                        <p className="text-gray-400 text-xl cursor-pointer">{series?.genres?.join(' - ')}</p>
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
                                            <p className="font-semibold">{series.producer}</p>
                                        </div>
                                        <div className='mb-4'>
                                            <p className="text-gray-400">وڵات</p>
                                            <p className="font-semibold">{series.country}</p>
                                        </div>
                                        <div >
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    <p className="font-semibold">{series.imdbRating}/10</p>
                                                </div>
                                                <div>
                                                    <img className="w-6 h-6" src="https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    <p className="font-semibold">{series.rottenTomatoRating}%</p>
                                                </div>
                                                <div>
                                                    <img className="w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Rotten_Tomatoes_alternative_logo.svg/1031px-Rotten_Tomatoes_alternative_logo.svg.png" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-gray-400">ژمارەی وەرزەکان</p>
                                            <p className="font-semibold">{movieData.seasons}</p>
                                        </div>

                                        <div>
                                            <p className="text-gray-400">ژمارەی ئەڵقەکان</p>
                                            <p className="font-semibold">{movieData.eps}</p>
                                        </div>

                                        <div>
                                            <p className="text-gray-400">دەرهێنان</p>
                                            <p className="font-semibold">{series.director}</p>
                                        </div>


                                        <div>
                                            <p className="text-gray-400 text-right"><i class="fa-solid fa-eye"></i></p>
                                            <p className="font-semibold">5000</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex border-b border-gray-700 mb-4">
                                    {['زانیاری', 'ئەکتەرەکان', 'سەیرکردن', 'هەڵسەنگاندن', 'تەکنیک'].map(tab => (
                                        <button
                                            key={tab}
                                            className={`lg:px-4 px-2 text-md lg:text-xl py-2 capitalize ${activeTab === tab
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
                                    {activeTab === 'سەیرکردن' && renderEps()}
                                    {activeTab === 'هەڵسەنگاندن' && renderReviews()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-50 mb-0 pt-12 px-8 flex justify-end items-center">
                    <h4 className="text-lg md:text-3xl font-bold text-center text-white">زنجیرەی هاوشێوە</h4>
                </div>

                <FilmsCard />
            </div>
            <Footer />
        </div>
    );
};

export default Serisdetailss;