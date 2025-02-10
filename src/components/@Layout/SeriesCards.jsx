import Pagination from './Pagination.jsx'
import { useState, useEffect } from 'react'

const SeriesCards = ({ moviesData }) => {
    const [isSuggestion, setIsSuggestion] = useState(false)
    const [currentMovies, setCurrentMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Add this line
    const itemsPerPage = 6;
    
    const movies = Array.isArray(moviesData) ? moviesData : (moviesData?.movies || []);

    useEffect(() => {
        const isOnSuggestionPages = window.location.pathname === '/suggestion' ||
            window.location.pathname === '/filmdetails' ||
            window.location.pathname === '/seriesdetails';

        if (isSuggestion !== isOnSuggestionPages) {
            setIsSuggestion(isOnSuggestionPages);
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        if (movies.length > 0) {
            setCurrentMovies(movies.slice(startIndex, endIndex));
        }
    }, [movies, currentPage, isSuggestion]); 

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (movies.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-white text-xl">هیچ زنجیرەیەک نەدۆزرایەوە</p>
            </div>
        );
    }

    return (
        <div>
            <div dir="rtl" className="relative z-30 mx-auto px-4 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4">
                    {currentMovies.map((movie, index) => (
                        <div key={movie.id || index} onClick={() => window.location.href = `/seriesdetails/${movie.id}`} className="w-full hover:scale-95 transition-transform duration-300 cursor-pointer">
                            <div className="bg-red-500 rounded-lg shadow-md overflow-hidden group h-64">
                                <div className="h-full w-full relative">
                                    <img
                                        src={movie.posterUrl}
                                        alt={movie.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="mt-2 space-y-2 text-center">
                                <div className="break-all">
                                    <p className="text-sm sm:text-base text-sky-500 font-semibold">
                                        {movie.title}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                                    <p className='text-white'>{movie.date.year}</p>
                                    <p className='text-white'>
                                        {movie.genres && Array.isArray(movie.genres)
                                            ? movie.genres.slice(0, 2).join(" - ")
                                            : ''}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`mb-16 ${isSuggestion ? 'hidden' : 'block'}`}>
                <Pagination
                    totalItems={movies.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default SeriesCards