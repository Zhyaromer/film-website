import React from 'react';
import { Film, Tv, Award, Star, Calendar } from 'lucide-react';
import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'

const AboutPage = () => {
    return (
        <div>
            <Navigation />
            <div dir="rtl" className="bg-[#282e30] min-h-screen text-white">
                <div className="container mx-auto px-4 py-16">
                    <header className="mb-16 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold  text-sky-500 mb-4">دەربارەی کوردش موڤی</h1>
                        <p className="text-base md:text-xl">باشترین ماڵپەڕ بۆ فیلم و زنجیرە بە زمانی کوردی</p>
                    </header>

                    <div className="flex flex-col items-center px-6 md:px-12 justify-center w-full md:w-[80%] mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-sky-400 mb-6">چیرۆکی ئێمە</h2>
                            <p className="text-lg md:text-xl  mb-4 leading-relaxed">
                                کوردش موڤی لە ساڵی 2018 دامەزرا، کاتێک گروپێک لە گەنجانی خاوەن بەهرە بیرۆکەیان هەبوو بۆ دروستکردنی پلاتفۆرمێک کە فیلم و زنجیرە بە زمانی کوردی پێشکەش بکات. ئامانجمان ئەوە بوو کە کلتووری فیلم بە زمانی کوردی گەشە پێ بدەین.
                            </p>
                            <p className="text-lg md:text-xl  mb-4 leading-relaxed">
                                ئەمڕۆ، کوردش موڤی گەورەترین کۆکراوەی فیلم و زنجیرەیە بە زمانی کوردی، بە زیاتر لە 10,000 کاژێر ناوەڕۆک و نزیکەی 500,000 بەکارهێنەر لە سەرتاسەری جیهان.
                            </p>
                            <p className="text-lg md:text-xl  leading-relaxed">
                                ئێمە شانازی دەکەین بە پێشکەشکردنی دۆبلاژ و ژێرنووسی بەرهەمە جیهانییەکان بە زمانی کوردی، هەروەها پشتگیریکردنی بەرهەمهێنەرە کوردەکان لە ڕێگای پێشکەشکردنی پلاتفۆرمێک بۆ بڵاوکردنەوەی بەرهەمەکانیان.
                            </p>
                        </div>
                    </div>


                    <div className="bg-[#282e30]/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-20 border border-gray-700">
                        <h2 className="text-3xl font-semibold text-sky-500 mb-8 text-center">خزمەتگوزارییەکانی ئێمە</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:bg-gray-700/40 transition-colors duration-300">
                                <Film className=" mb-4 h-12 w-12" />
                                <h3 className="text-xl font-semibold text-sky-400 mb-3">فیلمە جیهانییەکان</h3>
                                <p className="">کۆڵێکشنێکی فراوان لە فیلمە جیهانییەکان بە ژێرنووس و دۆبلاژی کوردی.</p>
                            </div>
                            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:bg-gray-700/40 transition-colors duration-300">
                                <Tv className=" mb-4 h-12 w-12" />
                                <h3 className="text-xl font-semibold text-sky-400 mb-3">زنجیرە درامییەکان</h3>
                                <p className="">باشترین زنجیرە درامییە  کۆری، ئەمریکی و ئەوروپییەکان بە کوالێتی بەرز.</p>
                            </div>
                            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:bg-gray-700/40 transition-colors duration-300">
                                <Award className=" mb-4 h-12 w-12" />
                                <h3 className="text-xl font-semibold text-sky-400 mb-3">بەرهەمی کوردی</h3>
                                <p className="">پشتگیری بەرهەمە ناوخۆییەکان و پێشکەشکردنی پلاتفۆرمێک بۆ بڵاوکردنەوەیان.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-sky-500 mb-8 text-center">ئامارەکانی ئێمە</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 text-center">
                                <Film className="mx-auto  mb-3 h-10 w-10" />
                                <p className="text-4xl font-bold text-white mb-1">5,000+</p>
                                <p className="">فیلم</p>
                            </div>
                            <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 text-center">
                                <Tv className="mx-auto  mb-3 h-10 w-10" />
                                <p className="text-4xl font-bold text-white mb-1">800+</p>
                                <p className="">زنجیرە</p>
                            </div>
                            <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 text-center">
                                <Star className="mx-auto  mb-3 h-10 w-10" />
                                <p className="text-4xl font-bold text-white mb-1">500,000+</p>
                                <p className="">بەکارهێنەر</p>
                            </div>
                            <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 text-center">
                                <Calendar className="mx-auto  mb-3 h-10 w-10" />
                                <p className="text-4xl font-bold text-white mb-1">6</p>
                                <p className="">ساڵی چالاکی</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;