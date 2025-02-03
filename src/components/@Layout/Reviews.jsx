import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, MoreVertical, UserCircle2 } from 'lucide-react';

const CustomArrow = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 z-50 bg-sky-500 hover:bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center md:visible invisible ${direction === 'prev' ? ' -left-4' : ' -right-4'
            }`}
    >
        {direction === 'prev' ? <i class="fa-solid fa-arrow-left"></i> : <i class="fa-solid fa-arrow-right"></i>}
    </button>
);

const reviews = [
    {
        id: 1,
        name: "حەسەن ڕەزا",
        rating: 5,
        review: "نگی تیمێکی تایبەتی دەکات بۆ مەشەقی پەیڤاندن بە تەلابانەکان لە ئەفغانستان. هەندێك بەکاربردنی یارمەتی لە سویەیەکی",
        color: "bg-blue-50"
    },
    {
        id: 2,
        name: "محەمەد ڕزگار",
        rating: 4,
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
        review: "Exceptional quality and customer service. I was skeptical at first, but this product has completely won me over. The attention to detail is remarkable, and it has exceeded my expectations in every way possible.",
    },
    {
        id: 5,
        name: "Jessica Lee",
        rating: 4,
        review: "Solid performance with great features. The product integrates well with my existing setup and provides excellent value. I appreciate the thoughtful design and user-friendly interface.",
    }
];

const ReviewCard = ({ name, rating, review}) => {
    return (
        <div className="px-2">
            <div className="bg-[hsl(195,9%,20%)] shadow-md rounded-lg p-4 border border-gray-100 h-full">
                <div className="flex justify-between items-center mb-3">
                    <button className="text-white rounded-full p-1">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                    <div className="flex items-center space-x-3">
                        <span className="font-medium text-white">{name}</span>
                        <UserCircle2 className="w-10 h-10 text-white" />
                    </div>
                </div>
                <div className="flex items-center mb-2 justify-end">
                    {[...Array(5)].map((_, index) => (
                        <Star
                            key={index}
                            className={`w-5 h-5 ${index < rating ? 'text-sky-500' : 'text-gray-300'}`}
                            fill={index < rating ? 'currentColor' : 'none'}
                        />
                    ))}
                </div>
                <div className={`p-3 rounded-lg bg-[hsl(195,9%,15%)] h-48 overflow-y-auto`}>
                    <p className="text-white text-right">{review}</p>
                </div>
            </div>
        </div>
    );
};

const ReviewSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1.5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="bg-[#282e30] p-4 flex flex-col items-center">
            <div className="w-full max-w-8xl">
                <Slider {...settings}>
                    {reviews.map(review => (
                        <ReviewCard
                            key={review.id}
                            name={review.name}
                            rating={review.rating}
                            review={review.review}
                            color={review.color}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ReviewSection;