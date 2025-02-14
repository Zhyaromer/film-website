import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import FilmsCard from '../components/@Layout/FilmsCard.jsx'
import Seriescard from '../components/@Layout/Seriescard.jsx'
import React, { useState, useEffect } from 'react';
import { Settings, X, EyeOff, Eye } from 'lucide-react';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSpinner } from 'react-icons/fa';
import { auth, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from '../Firebase/frontendfb.js';
import ProtectedPages from '../helpers/ProtectedPages.jsx';

const Profile = () => {
    ProtectedPages();
    const [activeSection, setActiveSection] = useState('favorites');
    const [filmordrama, setFilmordrama] = useState('film')
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: user.name,
        username: user.username,
        password: '',
        newPassword: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const renderProfileContent = () => {
        switch (activeSection) {
            case 'favorites':
                return (
                    <div className="p-3 md:p-4 lg:p-6">
                        <div dir="rtl" className="flex justify-start gap-2">
                            <div onClick={() => setFilmordrama('film')} className={`cursor-pointer border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'film' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">فیلمەکان</p>
                            </div>
                            <div onClick={() => setFilmordrama('drama')} className={`cursor-pointer border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'drama' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">زنجیرەکان</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl md:text-3xl text-right font-bold text-white px-6 pt-5 pb-0">لیستی دڵخواز</h2>
                        </div>

                        {filmordrama === 'film' ? (
                            <FilmsCard moviesData={favMovies} />
                        ) : (
                            <Seriescard moviesData={favseries} />
                        )}
                    </div>
                );
            case 'watchLater':
                return (
                    <div className="p-3 md:p-4 lg:p-6">
                        <div dir="rtl" className="flex justify-start gap-2">
                            <div onClick={() => setFilmordrama('film')} className={`cursor-pointer border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'film' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">فیلمەکان</p>
                            </div>
                            <div onClick={() => setFilmordrama('drama')} className={`cursor-pointer border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'drama' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">زنجیرەکان</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl md:text-3xl text-right font-bold text-white px-6 pt-5 pb-0">بینینی دواتر</h2>
                        </div>

                        {filmordrama === 'film' ? (
                            <FilmsCard moviesData={savedMovies} />
                        ) : (
                            <Seriescard moviesData={savedseries} />
                        )}
                    </div>
                );
            case 'watched':
                return (
                    <div className="p-3 md:p-4 lg:p-6">
                        <div dir="rtl" className="flex justify-start gap-2">
                            <div onClick={() => setFilmordrama('film')} className={`cursor-pointer border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'film' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">فیلمەکان</p>
                            </div>
                            <div onClick={() => setFilmordrama('drama')} className={`cursor-pointer border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'drama' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">زنجیرەکان</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl md:text-3xl text-right font-bold text-white px-6 pt-5 pb-0">بینراوەکان</h2>
                        </div>

                        {filmordrama === 'film' ? (
                            <FilmsCard moviesData={watchedMovies} />
                        ) : (
                            <Seriescard moviesData={watchedseries} />
                        )}
                    </div>
                );
            case 'comments':
                return (
                    <div className="p-3 md:p-4 lg:p-6">
                        <div dir="rtl" className="flex justify-start gap-2">
                            <div onClick={() => setFilmordrama('film')} className={`cursor-pointer border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'film' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">فیلمەکان</p>
                            </div>
                            <div onClick={() => setFilmordrama('drama')} className={`cursor-pointer border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'drama' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">زنجیرەکان</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl md:text-3xl text-right font-bold text-white px-6 pt-5 pb-0">پێداچونەوەکان</h2>
                        </div>

                        {filmordrama === 'film' ? (
                            <FilmsCard moviesData={comments} />
                        ) : (
                            <Seriescard moviesData={commentsseries} />
                        )}
                    </div>
                );
            default:
                return null;
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:5000/api/profile/settings`, { withCredentials: true });
            setUser(res.data.userData);
            setForm(res.data.userData);
        }
        fetchUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const user = auth.currentUser;
            if (!user) {
                toast.error('تکایە دووبارە بچۆرەوە ژوورەوە', { transition: Slide, autoClose: 3000 });
                return;
            }

            if (form.password && form.newPassword) {
                if (form.password === form.newPassword) {
                    toast.error('وشەی نهێنی نوێ دەبێت جیاواز بێت لە وشەی نهێنی کۆن', { transition: Slide, autoClose: 3000 });
                    return;
                }

                if (form.newPassword.length < 8) {
                    toast.error('وشەی نهێنیەکەت ئەبێت لە هەشت کارەکتەر زیاتر بێت', { transition: Slide, autoClose: 3000 });
                    return;
                }

                try {
                    const credential = EmailAuthProvider.credential(user.email, form.password);
                    await reauthenticateWithCredential(user, credential);
                    await updatePassword(user, form.newPassword);
                } catch (error) {
                    if (error.code === 'auth/wrong-password') {
                        toast.error('وشەی نهێنیەکەت هەڵەیە', { transition: Slide, autoClose: 3000 });
                    } else {
                        toast.error('هەڵەیەک ڕوویدا لە گۆڕینی وشەی نهێنیدا', { transition: Slide, autoClose: 3000 });
                    }
                    console.error('Password update error:', error);
                    return;
                }
            }

            const requestBody = {
                name: form.name,
                username: form.username
            };

            const res = await axios.post(
                'http://localhost:5000/api/profile/changename',
                requestBody,
                { withCredentials: true }
            );

            if (res.status === 200) {
                setUser(prevUser => ({
                    ...prevUser,
                    name: form.name,
                    username: form.username
                }));
                toast.success('زانیاریەکانت تازە کرانەوە', { transition: Slide, autoClose: 3000 });
                setIsOpen(false);
                form.password = '';
                form.newPassword = '';
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'هەڵەیەک ڕوویدا تکایە دوبارە هەوڵ بدەوە';
            toast.error(errorMessage, { transition: Slide, autoClose: 3000 });
            console.error('Profile update error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const [savedMovies, setSavedMovies] = useState([]);
    const [favMovies, setFavMovies] = useState([]);
    const [watchedMovies, setWatchedMovies] = useState([]);
    const [comments, setComments] = useState([]);

    const [savedseries, setSavedseries] = useState([]);
    const [favseries, setFavseries] = useState([]);
    const [watchedseries, setWatchedseries] = useState([]);
    const [commentsseries, setCommentsseries] = useState([]);

    useEffect(() => {
        const fetchSavedMovies = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/profileandsettings/savedmoviesprofile`, { withCredentials: true });
                setSavedMovies(res.data.movies);
            } catch (error) {
                console.error('Error fetching saved movies:', error);
            }
        }

        const fetchSavedSeries = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/profileandsettings/savedseriesprofile`, { withCredentials: true });
                setSavedseries(res.data.series);
            } catch (error) {
                console.error('Error fetching saved series:', error);
            }
        }

        const fetchfavMovies = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/profileandsettings/favmoviesprofile`, { withCredentials: true });
                setFavMovies(res.data.movies);
                console.log(res.data.movies);
            } catch (error) {
                console.error('Error fetching saved movies:', error);
            }
        }

        const fetchFavSeries = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/profileandsettings/favseriesprofile`, { withCredentials: true });
                setFavseries(res.data.series);
            } catch (error) {
                console.error('Error fetching saved series:', error);
            }
        }

        const fetchwatchedMovies = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/profileandsettings/watchedmoviesprofile`, { withCredentials: true });
                setWatchedMovies(res.data.movies);
            } catch (error) {
                console.error('Error fetching saved movies:', error);
            }
        }

        const fetchWatchedSeries = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/profileandsettings/watchedseriesprofile`, { withCredentials: true });
                setWatchedseries(res.data.series);
            } catch (error) {
                console.error('Error fetching saved series:', error);
            }
        }

        const fetComments = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/profileandsettings/commentedmoviesprofile`, { withCredentials: true });
                setComments(res.data.movies);
            } catch (error) {
                console.error('Error fetching saved movies:', error);
            }
        }

        const fetchCommentsSeries = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/profileandsettings/commentedseriesprofile`, { withCredentials: true });
                setCommentsseries(res.data.series);
            } catch (error) {
                console.error('Error fetching saved comments:', error);
            }
        }

        fetchSavedMovies();
        fetchfavMovies();
        fetchwatchedMovies();
        fetComments();
        fetchCommentsSeries();
        fetchSavedSeries();
        fetchFavSeries();
        fetchWatchedSeries();
    }, []);

    return (
        <div className='bg-[#282e30]'>
            <Navigation />

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#282e30] rounded-lg w-full max-w-md mx-4 relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <form onSubmit={handleSubmit} className="p-6">
                            <h2 className="text-2xl text-sky-500 font-bold mb-6 text-center">تازەکردنەوەی زانیاری </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-base text-sky-500 text-right font-medium mb-1">
                                        ناو
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full bg-[hsl(195,9%,28%)] border text-white placeholder:text-gray-300 border-gray-500 focus:border-0 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                                        required
                                        placeholder="ناوی تەواو"
                                    />
                                </div>

                                <div>
                                    <label className="block text-right text-base font-medium text-sky-500 mb-1">
                                        ناوی بەکارهێنەر
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={form.username}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2  bg-[hsl(195,9%,28%)] border text-white placeholder:text-gray-300 border-gray-500 focus:border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                                        required
                                        placeholder="ناوی بەکارهێنەر"
                                    />
                                </div>

                                <div>
                                    <label className="block text-right text-base font-medium text-sky-500 mb-1">
                                        (ناتوانی ئیمەیڵەکەت بگۆریت)ئیمەیڵ
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        readOnly
                                        className="w-full px-3 py-2  bg-[hsl(195,9%,28%)] border text-white placeholder:text-gray-300 border-gray-500 focus:border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                                        required
                                        placeholder="example@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-right text-base font-medium text-sky-500 mb-1">
                                        وشەی نهێنی
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={form.password}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2  bg-[hsl(195,9%,28%)] border text-white placeholder:text-gray-300 border-gray-500 focus:border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                                            placeholder="وشەی نهێنی"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 text-white"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-right text-base font-medium text-sky-500 mb-1">
                                        دووبارەکردنەوەی وشەی نهێنی

                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="newPassword"
                                            value={form.newPassword}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2  bg-[hsl(195,9%,28%)] border text-white placeholder:text-gray-300 border-gray-500 focus:border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                                            placeholder="دووبارەکردنەوەی وشەی نهێنی"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 text-white"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors mt-6"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="flex items-center justify-center gap-2">
                                                <div>
                                                    <FaSpinner className="text-center animate-spin" size={20} />
                                                </div>
                                                <div>
                                                    تازەکردنەوە
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        "تازەکردنەوە"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="bg-[#282e30] w-full shadow-md">
                <div className="w-full border-b">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-row justify-between items-center p-3 md:p-4">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="p-2 text-white "
                            >
                                <Settings className="w-5 hover:rotate-90 transition-all duration-300 h-5 md:w-6 md:h-6" />
                            </button>
                            <div className="flex gap-2 flex-row items-center  mb-2 sm:mb-0">
                                <div className="text-right">
                                    <h2 className="text-lg text-white lg:text-2xl font-bold">{user.username}</h2>
                                    <p className="text-base text-white lg:text-xl text-gray-600">{user.name}</p>
                                </div>
                                <img
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                    alt="پرۆفایل"
                                    className="lg:w-32 lg:h-32 w-16 h-16 rounded-full border-2 border-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full border-b" dir="rtl">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            <button
                                onClick={() => setActiveSection('favorites')}
                                className={`p-4 text-white font-semibold flex items-center justify-center text-md lg:text-xl ${activeSection === 'favorites' ? 'bg-sky-500 text-white' : ''
                                    } transition-colors duration-300 ease-in-out`}
                            >
                                لیستی دڵخواز
                            </button>
                            <button
                                onClick={() => setActiveSection('watchLater')}
                                className={`p-4 text-white font-semibold flex items-center justify-center text-md lg:text-xl ${activeSection === 'watchLater' ? 'bg-sky-500 text-white' : ''
                                    } transition-colors duration-300 ease-in-out`}
                            >
                                بینینی دواتر
                            </button>
                            <button
                                onClick={() => setActiveSection('watched')}
                                className={`p-4 text-white font-semibold flex items-center justify-center text-md lg:text-xl ${activeSection === 'watched' ? 'bg-sky-500 text-white' : ''
                                    } transition-colors duration-300 ease-in-out`}
                            >
                                بینراو
                            </button>
                            <button
                                onClick={() => setActiveSection('comments')}
                                className={`p-4 text-white font-semibold flex items-center justify-center text-md lg:text-xl ${activeSection === 'comments' ? 'bg-sky-500 text-white' : ''
                                    } transition-colors duration-300 ease-in-out`}
                            >
                                هەڵسەنگاندن
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto w-full">
                    {renderProfileContent()}
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    )
}

export default Profile