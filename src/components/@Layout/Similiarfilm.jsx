const SimiliarFilmsCard = ({ moviesData }) => {
    const movies = Array.isArray(moviesData) ? moviesData : (moviesData?.movies || []);

    return (
        <div>
            <div dir="rtl" className="relative z-30 mx-auto px-4 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4">
                    {movies.map((movie, index) => (
                        <div key={movie.id || index} onClick={() => window.location.href = `/filmdetails/${movie.id}`} className="w-full hover:scale-95 transition-transform duration-300 cursor-pointer">
                            <div className="bg-red-500 rounded-lg shadow-md overflow-hidden group h-64">
                                <div className="h-full w-full relative">
                                    <img
                                        src={movie.posterUrl}
                                        alt={movie.filmtitle}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="mt-2 space-y-2 text-center">
                                <div className="break-all">
                                    <p className="text-sm sm:text-base text-sky-500 font-semibold">
                                        {movie.filmtitle}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                                    <p className='text-white'>{movie.year}</p>
                                    <p className='text-white'>
                                        {movie.genre && Array.isArray(movie.genre)
                                            ? movie.genre.slice(0, 2).join(" - ")
                                            : ''}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SimiliarFilmsCard