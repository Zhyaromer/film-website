import React, { useState, useEffect } from "react";

const NewsDetailsPage = () => {
  const [views, setViews] = useState(0);

  // Simulate fetching views (e.g., from an API)
  useEffect(() => {
    const fetchViews = () => {
      setTimeout(() => {
        setViews(1200); // Simulated view count
      }, 1000);
    };

    fetchViews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      {/* Header with Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden relative">
        <img
          src="https://via.placeholder.com/1200x300"
          alt="سەردانی هەواڵەکان"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            هەواڵی گرنگ: ڕووداوێکی مەزن جیهانی تەقاندەوە
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg mt-8 rounded-lg">
        {/* Date and Views */}
        <div className="flex justify-between items-center mb-6 text-gray-600">
          <p className="text-sm">٥ی تشرینی یەکەم، ٢٠٢٣</p>
          <p className="text-sm">{views} بینین</p>
        </div>

        {/* News Content */}
        <p className="text-lg leading-relaxed mb-4 text-justify">
          لە ڕووداوێکی چاوەڕواننەکراودا، ڕووداوێکی گەورە ڕوویدا کە جیهانی لە
          شۆکدا هێشت. وردەکارییەکان هێشتا بەردەست نین، بەڵام ڕاپۆرتە سەرەتایییەکان
          پێشبینی دەکەن کە کاریگەرییەکانی ئەم ڕووداوە جیهانی بە تەواوی بەرەوەنگار
          بکات. هەرێمە فەرمییەکان داوایان لە خەڵک کردووە کە ئارام بن و چاوەڕوانی
          نوێترین زانیارییەکان بن.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          شارەزایان لە شیکردنەوەی بارودۆخەکەدان و زانیارییەکان وەک دەردەکەون
          بەردەست دەکەن. بەردەوام بن بۆ نوێترین زانیارییەکان و شیکردنەوەی ورد لەسەر
          ئەم ڕووداوە.
        </p>

        {/* Read More Button */}
        <a
          href="#"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          زیاتر بخوێنەوە
        </a>
      </div>
    </div>
  );
};

export default NewsDetailsPage;