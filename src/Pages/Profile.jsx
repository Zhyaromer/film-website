import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import FilmsCard from '../components/@Layout/FilmsCard.jsx'
import React, { useState } from 'react';
import { Settings, X, EyeOff, Eye } from 'lucide-react';

const Profile = () => {
    const [activeSection, setActiveSection] = useState('favorites');
    const [filmordrama, setFilmordrama] = useState('film')
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [user, setUser] = useState({
        username: 'zhyar omer',
        name: 'zhika',
        email: 'filmbin@example.com',
        avatar: '/api/placeholder/100/100'
    });

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsOpen(false);
    };

    const renderProfileContent = () => {
        switch (activeSection) {
            case 'favorites':
                return (
                    <div className="p-3 md:p-4 lg:p-6">
                        <div dir="rtl" className="flex justify-start gap-2">
                            <div onClick={() => setFilmordrama('film')} className={`border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'film' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">فیلمەکان</p>
                            </div>
                            <div onClick={() => setFilmordrama('drama')} className={`border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'drama' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">زنجیرەکان</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl md:text-3xl text-right font-bold text-white px-6 pt-5 pb-0">لیستی دڵخواز</h2>
                        </div>
                        <div>
                            <FilmsCard />
                        </div>
                    </div>
                );
            case 'watchLater':
                return (
                    <div className="p-3 md:p-4 lg:p-6">
                        <div dir="rtl" className="flex justify-start gap-2">
                            <div onClick={() => setFilmordrama('film')} className={`border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'film' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">فیلمەکان</p>
                            </div>
                            <div onClick={() => setFilmordrama('drama')} className={`border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'drama' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">زنجیرەکان</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl md:text-3xl text-right font-bold text-white px-6 pt-5 pb-0">بینینی دواتر</h2>
                        </div>
                        <div>
                            <FilmsCard />
                        </div>
                    </div>
                );
            case 'watched':
                return (
                    <div className="p-3 md:p-4 lg:p-6">
                        <div dir="rtl" className="flex justify-start gap-2">
                            <div onClick={() => setFilmordrama('film')} className={`border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'film' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">فیلمەکان</p>
                            </div>
                            <div onClick={() => setFilmordrama('drama')} className={`border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'drama' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">زنجیرەکان</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl md:text-3xl text-right font-bold text-white px-6 pt-5 pb-0">بینراو</h2>
                        </div>
                        <div>
                            <FilmsCard />
                        </div>
                    </div>
                );
            case 'comments':
                return (
                    <div className="p-3 md:p-4 lg:p-6">
                        <div dir="rtl" className="flex justify-start gap-2">
                            <div onClick={() => setFilmordrama('film')} className={`border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'film' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">فیلمەکان</p>
                            </div>
                            <div onClick={() => setFilmordrama('drama')} className={`border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'drama' ? 'bg-sky-500' : ''}`}>
                                <p className="text-white">زنجیرەکان</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl md:text-3xl text-right font-bold text-white px-6 pt-5 pb-0">هەڵسەنگاندنەکان</h2>
                        </div>
                        <div>
                            <FilmsCard />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

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
                                        value={formData.name}
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
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2  bg-[hsl(195,9%,28%)] border text-white placeholder:text-gray-300 border-gray-500 focus:border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                                        required
                                        placeholder="ناوی بەکارهێنەر"
                                    />
                                </div>

                                <div>
                                    <label className="block text-right text-base font-medium text-sky-500 mb-1">
                                        ئیمەیڵ
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
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
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2  bg-[hsl(195,9%,28%)] border text-white placeholder:text-gray-300 border-gray-500 focus:border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                                            required
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
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2  bg-[hsl(195,9%,28%)] border text-white placeholder:text-gray-300 border-gray-500 focus:border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                                            required
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
                                    تازەکردنەوەی
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
                                    src={user.avatar}
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
            <Footer />
        </div>
    )
}

export default Profile