import React, { useState, useEffect, useCallback } from 'react';
import { Clock, ChevronDown, Bookmark, Heart, CheckCircle, Star, X, UserCircle2 } from 'lucide-react';
import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Serisdetailss = () => {
    const [activeTab, setActiveTab] = useState('زانیاری');
    const [watchLater, setWatchLater] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [watched, setWatched] = useState(false);
    const [series, setseries] = useState({});
    const [seasonsList, setSeasonsList] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [howmanyseasons, sethowmanyseasons] = useState(0);
    const [howmanyeps, sethowmanyeps] = useState(0);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState("1");
    const [isOpen, setIsOpen] = useState(false);
    const [showSpoiler, setShowSpoiler] = useState(false);
    const { seriesId } = useParams();

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
        <div className="p-4">
            <div className="relative mb-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-48 px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                    {`Season ${selectedSeason}`}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                    <div className="absolute z-10 w-48 mt-2 bg-gray-800 rounded-lg shadow-lg">
                        {seasonsList.map((season) => (
                            <button
                                key={season.value}
                                onClick={() => handleSeasonChange(season.value)}
                                className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg"
                            >
                                {season.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="space-y-2">
                {episodes.map((episode) => (
                    <div
                        key={episode.id}
                        className="p-4 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 w-8 text-center">
                                {episode.id}
                            </div>
                            <div className="flex-grow">
                                {episode.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderCast = () => (
        <div className="space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">

                {series.casts.map((member, index) => (
                    <div key={index} onClick={() => window.location.href = `/actors/${member.name}`} className="flex justify-center items-center gap-4 flex-col cursor-pointer bg-gray-800 p-3 rounded">
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

    const updateEpisodes = useCallback((seasonNum) => {
        const seasonKey = `season${seasonNum}`;
        if (series.seasons[seasonKey]) {
            const episodesList = Object.entries(series.seasons[seasonKey].episodes)
                .map(([_, episode]) => ({
                    id: episode.epNumber,
                    title: episode.epTitle,
                    url: episode.epUrl
                }))
                .sort((a, b) => a.id - b.id);
            setEpisodes(episodesList);
        }
    }, [series]);

    useEffect(() => {
        const fetchSeriesData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/movies/seriesDetails/${seriesId}`);
                const seriesData = res?.data?.series;

                if (seriesData?.seasons) {
                    setseries(seriesData);

                    const seasons = Object.keys(seriesData.seasons).map(season => ({
                        value: parseInt(season.replace('season', '')),
                        label: `Season ${season.replace('season', '')}`
                    }));
                    setSeasonsList(seasons);

                    if (!selectedSeason && seasons.length > 0) {
                        setSelectedSeason(seasons[0].value);
                    }

                    const seasonCount = Object.keys(seriesData.seasons).length;
                    sethowmanyseasons(seasonCount);

                    let episodeCount = 0;
                    Object.values(seriesData.seasons).forEach(season => {
                        episodeCount += Object.keys(season.episodes).length;
                    });
                    sethowmanyeps(episodeCount);
                }
            } catch (error) {
                toast.error(error.response?.data?.message || 'هەڵەیەک ڕویدا',
                    { transition: Slide, autoClose: 3000 });
            }
        };

        fetchSeriesData();
    }, [seriesId]);

    useEffect(() => {
        if (series?.seasons && selectedSeason) {
            updateEpisodes(selectedSeason);
        }
    }, [selectedSeason, series]);

    const handleSeasonChange = (seasonNum) => {
        setSelectedSeason(seasonNum);
        setIsOpen(false);
        updateEpisodes(seasonNum);
    };

    const [reviewData, setReviewData] = useState({
        reviewmsg: '',
        star: 0,
        spoiler: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/useractions/addcommentseries', {
                seriesId,
                reviewmsg: reviewData.reviewmsg,
                star: reviewData.star,
                spoiler: reviewData.spoiler
            }, { withCredentials: true });

            if (res.status === 200) {
                setIsReviewModalOpen(false);
                toast.success('پێداچونەوەکەتەوە', { transition: Slide, autoClose: 3000 });
            }
        } catch (error) {
            toast.error(error.response.data.message, { transition: Slide, autoClose: 3000 });
        }
    }

    const renderReviews = () => (
        <div>
            <div className="py-4 flex flex-row-reverse justify-between items-center px-4">
                <div onClick={() => setIsReviewModalOpen(true)}>
                    <button className="text-sm lg:text-lg relative z-10 font-semibold text-white bg-sky-500 py-1 px-2 lg:px-6 rounded cursor-pointer hover:bg-sky-600 transition-all duration-300 ease-in-out">
                        دانانی هەڵسەنگاندن
                    </button>
                </div>
                <div>
                    <h2 className="text-xl lg:text-2xl text-sky-500 text-right font-bold">پێداچونەوەکان</h2>
                </div>

            </div>
            <div className="w-[100%] lg:grid grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0">
                {series.Seriescomments?.map((review, index) => (
                    <div key={index} dir="rtl" className="bg-[hsl(195,9%,20%)] shadow-md rounded-lg p-4 border border-gray-400 h-full">
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center gap-2">
                                <UserCircle2 className="w-10 h-10 text-white" />
                                <span className="font-medium text-white cursor-pointer">{review.name}</span>
                            </div>
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
                        <div className="relative p-3 rounded-lg bg-[hsl(195,9%,15%)] h-48 overflow-y-auto">
                            {review?.spoiler ? (
                                !showSpoiler ? (
                                    <button
                                        onClick={() => setShowSpoiler(true)}
                                        className="text-2xl w-full h-full flex items-center justify-center text-sky-500"
                                    >
                                        سپۆیلەکە ببینە
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => setShowSpoiler(false)}
                                            className="text-xl text-sky-400 hover:text-sky-500 mb-2"
                                        >
                                            سپۆیلەرەکە بشارەوە
                                        </button>
                                        <p className="text-white text-right">{review.reviewmsg}</p>
                                    </>
                                )
                            ) : (
                                <p className="text-white text-right">{review.reviewmsg}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>


            <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 ${isReviewModalOpen ? 'visible' : 'hidden'} `}            >
                <div className="w-full max-w-lg mx-4 bg-gray-800 rounded-lg" onClick={e => e.stopPropagation()}>
                    <div className="flex items-center justify-between p-4 border-b border-gray-700">
                        <h2 className="text-xl font-semibold text-white">زیادکردنی پێداچوونەوە</h2>
                        <button onClick={() => setIsReviewModalOpen(false)} className="text-gray-400 hover:text-white">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-4 space-y-4">
                        <textarea
                            value={reviewData.reviewmsg}
                            onChange={(e) => setReviewData(prev => ({ ...prev, reviewmsg: e.target.value }))}
                            placeholder="سەرجەمی پێداچوونەوەکەت لێرە بنوسە"
                            className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400"
                            rows={4}
                            dir="rtl"
                        />

                        <div className="flex justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <button
                                    key={value}
                                    type="button"
                                    onClick={() => setReviewData(prev => ({ ...prev, star: value }))}
                                    className="p-1"
                                >
                                    <Star
                                        className={`w-8 h-8 ${reviewData.star >= value ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
                                    />
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="spoiler"
                                checked={reviewData.spoiler}
                                onChange={(e) => setReviewData(prev => ({ ...prev, spoiler: e.target.checked }))}
                                className="w-4 h-4 rounded bg-gray-700 border-gray-600"
                            />
                            <label htmlFor="spoiler" className="text-white">
                                پێداچوونەوەکە سپۆیلەری لەخۆ دەگرێت؟
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                        >
                            زیادکردن
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

    const saveSeries = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/useractions/saveSeries', { seriesId: seriesId }, { withCredentials: true });
            if (res.status === 200) {
                setWatchLater(!watchLater);
                toast.success(res.data.message, { transition: Slide, autoClose: 3000 });
            }
        } catch (error) {
            if (error.response?.status === 401) {
                toast.error('تکایە سەرەتا بچۆرە ژورەوە', { transition: Slide, autoClose: 3000 });
            }
            toast.error(error.response.data.message, { transition: Slide, autoClose: 3000 });
        }
    }

    const favSeries = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/useractions/favSeries', { seriesId: seriesId }, { withCredentials: true });
            if (res.status === 200) {
                setFavorite(!favorite);
                toast.success(res.data.message, { transition: Slide, autoClose: 3000 });
            }
        } catch (error) {
            if (error.response?.status === 401) {
                toast.error('تکایە سەرەتا بچۆرە ژورەوە', { transition: Slide, autoClose: 3000 });
            }
            toast.error(error.response.data.message, { transition: Slide, autoClose: 3000 });
        }
    }

    const watchedSeries = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/useractions/watchedSeries', { seriesId: seriesId }, { withCredentials: true });
            if (res.status === 200) {
                setWatched(!watched);
                toast.success(res.data.message, { transition: Slide, autoClose: 3000 });
            }
        } catch (error) {
            if (error.response?.status === 401) {
                toast.error('تکایە سەرەتا بچۆرە ژورەوە', { transition: Slide, autoClose: 3000 });
            }
            toast.error(error.response.data.message, { transition: Slide, autoClose: 3000 });
        }
    }

    useEffect(() => {
        const checkSavedStatus = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/useractions/savedseries',
                    { withCredentials: true }
                );
                const isSaved = response.data.savedseries.includes(seriesId);
                setWatchLater(isSaved);
            } catch (error) {
                if (error.response?.status !== 401) {
                    toast.error(error.response?.data?.message || 'هەڵەیەک ڕویدا', { transition: Slide, autoClose: 3000 });
                }
            }
        };

        const checkFavStatus = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/useractions/favseries',
                    { withCredentials: true }
                );
                const isSaved = response.data.favSeries.includes(seriesId);
                setFavorite(isSaved);
            } catch (error) {
                if (error.response?.status !== 401) {
                    toast.error(error.response?.data?.message || 'هەڵەیەک ڕویدا', { transition: Slide, autoClose: 3000 });
                }
            }
        };

        const checkWatchedStatus = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/useractions/watchedseries',
                    { withCredentials: true }
                );
                const isSaved = response.data.watchedSeries.includes(seriesId);
                setWatched(isSaved);
            } catch (error) {
                if (error.response?.status !== 401) {
                    toast.error(error.response?.data?.message || 'هەڵەیەک ڕویدا', { transition: Slide, autoClose: 3000 });
                }
            }
        };

        const incrementView = async () => {
            try {
                await axios.get(`http://localhost:5000/api/movies/incrementViewSeries/${seriesId}`, {}, { withCredentials: true });
            } catch (error) {
                if (error.response?.status !== 401) {
                    toast.error(error.response?.data?.message || 'هەڵەیەک ڕویدا', { transition: Slide, autoClose: 3000 });
                }
            }
        }

        incrementView();
        checkSavedStatus();
        checkFavStatus();
        checkWatchedStatus();
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
                                        onClick={saveSeries}
                                        label="Watch Later"
                                        text={'بینینی دواتر'}
                                    />
                                    <ActionButton
                                        icon={Heart}
                                        active={favorite}
                                        onClick={favSeries}
                                        label="Favorite"
                                        text={'لیستی دڵخوازی'}
                                    />
                                    <ActionButton
                                        icon={CheckCircle}
                                        active={watched}
                                        onClick={watchedSeries}
                                        label="Watched"
                                        text={'بینراو'}
                                    />
                                </div>

                                <div className="bg-gray-800 p-4 rounded mb-4">
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div>
                                            <p className="text-gray-400">بەرهەمهێنان</p>
                                            <p onClick={() => window.location.href = `/company/${series.producer}`} className="cursor-pointer font-semibold">{series.producer}</p>
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
                                            <p className="font-semibold">{howmanyseasons}</p>
                                        </div>

                                        <div>
                                            <p className="text-gray-400">ژمارەی ئەڵقەکان</p>
                                            <p className="font-semibold">{howmanyeps}</p>
                                        </div>

                                        <div >
                                            <p className="text-gray-400">دەرهێنان</p>
                                            <p onClick={() => window.location.href = `/directors/${series.director}`} className="cursor-pointer font-semibold">{series.director}</p>
                                        </div>


                                        <div>
                                            <p className="text-gray-400 text-right"><i class="fa-solid fa-eye"></i></p>
                                            <p className="font-semibold">{series.view}</p>
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
            </div>
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default Serisdetailss;