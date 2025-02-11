import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

export default function ReviewPopup({ isOpen, onClose, onSubmit }) {
  const [reviewData, setReviewData] = useState({
    reviewmsg: '',
    star: 0,
    spoiler: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reviewData);
    setReviewData({ reviewmsg: '', star: 0, spoiler: false });
    onClose();
  };

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="w-full max-w-lg mx-4 bg-gray-800 rounded-lg" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">زیادکردنی پێداچوونەوە</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
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
  );
}