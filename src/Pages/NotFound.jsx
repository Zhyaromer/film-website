import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-lg mx-auto">
        <div className="animate-bounce">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
        </div>
        
        <div className="space-y-4 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800">
            ئەم پەڕەیە بوونی نییە
          </h2>
          
          <p className="text-xl text-gray-600">
            ببورە، ئەو پەڕەیەی بەدوایدا دەگەڕێیت بوونی نییە یان گواستراوەتەوە
          </p>
          
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-colors duration-200 ease-in-out
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Home className="mr-2 h-5 w-5" />
            <span>گەڕانەوە بۆ سەرەتا</span>
          </button>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-200 rounded-full opacity-50 animate-float" />
          <div className="absolute top-32 -right-16 w-24 h-24 bg-blue-300 rounded-full opacity-50 animate-float-delayed" />
          <div className="absolute -bottom-16 left-32 w-40 h-40 bg-blue-100 rounded-full opacity-50 animate-float" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out 2s infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NotFound;