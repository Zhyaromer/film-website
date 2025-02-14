import React, { useState, useEffect, useRef,useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MovieSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const movies = [
        {
            title: 'peaky blinders',
            background: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/08/Peaky-Blinders-Season-2.jpg',
            poster: 'https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_.jpg',
            rating: '10/8.2',
            description: 'تۆمی شیلبی، پیاوێکی مەترسیدار، سەرکردایەتیی بەندەی پیکی بلایندەرز دەکات، کە باندێکی تاوانکارییە لە بیرمینگهام.'
        },
        {
            title: 'Breaking bad',
            background: 'https://res.cloudinary.com/jerrick/image/upload/v1687941398/649bf116d076e6001dfaac73.jpg',
            poster: 'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            rating: '9/7.5',
            description: 'والتەر وایت، مامۆستایەکی کیمیا،بۆی دەردەکەوێت تووشی شێرپەنجە بووە'
        },
        {
            title: 'Vikings',
            background: 'https://cdn.europosters.eu/image/750/vikings-blood-lanscape-i24452.jpg',
            poster: 'https://m.media-amazon.com/images/I/919shi8ErxL._AC_UF894,1000_QL80_.jpg',
            rating: '9/7.5',
            description: 'ڕاگنار لۆدبڕۆک، جوتیارێکی نۆرس، هێرشی سەرکەوتووانەی دەکردە ناوچەکانی ئینگلیز'
        },
    ];

    const resetInterval = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % movies.length);
        }, 4000);
    }, [movies.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        resetInterval();
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % movies.length);
        resetInterval();
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
        resetInterval();
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            nextSlide();
        }

        if (touchStart - touchEnd < -75) {
            prevSlide();
        }
    };

    useEffect(() => {
        resetInterval();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [movies.length, resetInterval]);

    useEffect(() => {
        resetInterval();
    }, [resetInterval]);

    return (
        <div
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative z-40 w-full h-[70vh] md:h-[80vh] overflow-hidden"
        >
            {movies.map((movie, index) => (
                <div
                    key={movie.title}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={movie.background}
                        alt={movie.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

                    <div className="relative -mt-5 md:top-0 z-10 flex items-center h-full px-4 md:px-10 max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-48 md:w-64 h-60 md:h-96 object-cover rounded-lg shadow-2xl"
                            />

                            <div className="text-white text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4">
                                    <h2 className="text-2xl md:text-4xl font-bold">{movie.title}</h2>
                                    <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm">
                                        {movie.rating}
                                    </span>
                                </div>
                                <p className="text-base md:text-xl mb-4 max-w-md">{movie.description}</p>
                                <button className="bg-sky-500 font-semibold text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition">
                                    بینینی زیاتر
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-sky-500 transition z-20"
            >
                <ChevronLeft className="text-white" size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-sky-500 transition z-20"
            >
                <ChevronRight className="text-white" size={24} />
            </button>

            <div className="absolute z-50 bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {movies.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-sky-600' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieSlider;