import React, { useState, useEffect, useRef } from 'react';
import { Star, MoreVertical, UserCircle2 } from 'lucide-react';

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

const ReviewCard = ({ name, rating, review }) => {
    return (
        <div className="min-w-full lg:min-w-[33.333%] md:min-w-[50%] p-2">
            <div dir="rtl" className="bg-[hsl(195,9%,20%)] shadow-md rounded-lg p-4 border border-gray-400 h-full">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                        <UserCircle2 className="w-10 h-10 text-white" />
                        <span className="font-medium text-white">{name}</span>
                    </div>
                    <button className="text-white rounded-full p-1">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
                <div className="flex items-center mb-2 justify-start">
                    {[...Array(5)].map((_, index) => (
                        <Star
                            key={index}
                            className={`w-5 h-5 ${index  > rating - 1 ? 'text-gray-100' : 'text-sky-500'}`}
                            fill={index > rating - 1 ? 'none' : 'currentColor'}
                        />
                    ))}
                </div>
                <div className="p-3 rounded-lg bg-[hsl(195,9%,15%)] h-48 overflow-y-auto">
                    <p className="text-white text-right">{review}</p>
                </div>
            </div>
        </div>
    );
};

const CustomSlider = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3);
            } else if (window.innerWidth >= 640) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDragStart = (e) => {
        setIsDragging(true);
        setDragStart(e.touches ? e.touches[0].clientX : e.clientX);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;

        const currentPosition = e.touches ? e.touches[0].clientX : e.clientX;
        const diff = dragStart - currentPosition;
        setDragOffset(diff);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;

        const slideWidth = sliderRef.current.offsetWidth / itemsPerPage;
        const dragThreshold = slideWidth / 4;

        if (Math.abs(dragOffset) > dragThreshold) {
            if (dragOffset > 0 && startIndex > 0) {
                setStartIndex(prev => prev - 1);
            } else if (dragOffset < 0 && startIndex < reviews.length - itemsPerPage) {
                setStartIndex(prev => prev + 1);
            }
        }

        setIsDragging(false);
        setDragOffset(0);
    };

    const nextSlide = () => {
        if (!isAnimating && startIndex < reviews.length - itemsPerPage) {
            setIsAnimating(true);
            setStartIndex(prev => prev + 1);
            setTimeout(() => setIsAnimating(false), 300);
        }
    };

    const prevSlide = () => {
        if (!isAnimating && startIndex > 0) {
            setIsAnimating(true);
            setStartIndex(prev => prev - 1);
            setTimeout(() => setIsAnimating(false), 300);
        }
    };

    return (
        <div className="relative bg-[#282e30] p-4" dir="rtl">
            {itemsPerPage > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        disabled={startIndex === 0}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-sky-500 hover:bg-sky-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={startIndex >= reviews.length - itemsPerPage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-sky-500 hover:bg-sky-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                </>
            )}

            <div className=" max-w-8xl mx-auto overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex touch-pan-y select-none transition-transform duration-300 ease-in-out cursor-grab active:cursor-grabbing"
                    style={{
                        transform: `translateX(${(startIndex * (100 / itemsPerPage)) - (dragOffset / (sliderRef.current?.offsetWidth || 1) * 100)}%)`,
                    }}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                >
                    {reviews.map(review => (
                        <ReviewCard
                            key={review.id}
                            name={review.name}
                            rating={review.rating}
                            review={review.review}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomSlider;