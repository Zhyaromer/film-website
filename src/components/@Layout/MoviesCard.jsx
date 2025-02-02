import Pagination from './Pagination.jsx';
import { useState, useEffect } from 'react';

const MoviesCard = () => {
    const [isHomePage, setIsHomePage] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    
    const movies = [
        {
            title: "سپایدەرمان", // Spiderman (Kurdish)
            image: "https://cdn.europosters.eu/image/750/posters/blade-runner-2049-flying-car-i50060.jpg",
            count: 12,
            genres: ["ئاكشن", "مێژووی"], // Action, Historical (Kurdish)
            imdbRating: 7.8,
            rottenTomatoesRating: 7.8,
        },
        {
            title: "سپایدەرمان", // Spiderman (Kurdish) - likely a different movie
            image: "https://occ-0-8407-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDQOzGC_rInp4gFvqFPDF3mcWchowjepe5uTldav_Sx1QgJlpJG-ATT_PcYJbF-y5AtlC9koSScBJPATb4JET65SrkrgOl92SGl.jpg?r=c9b",
            count: 12,
            genres: ["ئاكشن", "مێژووی"], // Action, Historical (Kurdish)
            imdbRating: 7.8,
            rottenTomatoesRating: 7.8,
        },
        {
            title: "سپایدەرمان", // Spiderman (Kurdish) - likely a different movie
            image: "https://pastposters.com/cdn/shop/files/fury-cinema-quad-movie-poster-_1.jpg?v=1730152725",
            count: 12,
            genres: ["ئاكشن", "مێژووی"], // Action, Historical (Kurdish)
            imdbRating: 7.8,
            rottenTomatoesRating: 7.8,
        },
        {
            title: "سپایدەرمان", // Spiderman (Kurdish) - likely a different movie
            image: "https://preview.redd.it/i-found-this-super-cool-star-wars-poster-online-and-set-it-v0-f46xrb44ysn81.jpg?width=1080&crop=smart&auto=webp&s=54a82ab69006fbb6a4d20f0e08b0671e21d88591",
            count: 12,
            genres: ["ئاكشن", "مێژووی"], // Action, Historical (Kurdish)
            imdbRating: 7.8,
            rottenTomatoesRating: 7.8,
        },
    ];
    const [currentMovies, setCurrentMovies] = useState(movies.slice(0, itemsPerPage));

    useEffect(() => {
        const HomePage = () => {
            if (window.location.pathname === '/') {
                return setIsHomePage(true);
            }
            return setIsHomePage(false);
        }
        HomePage();
    }, []);

    const handlePageChange = (page) => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentMovies(movies.slice(startIndex, endIndex));
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-wrap justify-center">
            {currentMovies.map((movie, index) => (
                <div key={index} className="md:w-[50%] w-[100%] mb-4 p-2">
                    <div className="relative rounded-lg shadow-md overflow-hidden group h-48 hover:cursor-pointer">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="flex justify-self-end items-self-end flex-col absolute font-sans z-20 top-2 right-0 text-right">
                            <div className='bg-gradient-to-r from-black/20 to-black/60 absolute z-40 -top-2 -right-7 px-12 w-[400px] h-[200px] pt-2'>
                                <h1 className="text-2xl text-white">{movie.title}</h1>
                                <p className="md:text-xl text-base text-white mt-4">ژمارەی فلیمەکان | {movie.count} </p>
                                <p className="md:text-lg text-base text-white mt-4">ژانەرەکان | {movie.genres.join(" - ")}</p> {/* Join genres with "-" */}
                                <div className="flex justify-evenly items-center mt-4">
                                    <div className='bg-black/40 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="16eff6124a5658f3defb294987d2afed.png" className="w-4 h-4" alt='IMDB Logo' /> {/* Alt text */}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white"> {movie.imdbRating}</p>
                                        </div>
                                    </div>

                                    <div className='bg-black/40 rounded w-16 h-8 border outline-white flex justify-center items-center flex-row gap-1'>
                                        <div>
                                            <img src="Rotten_Tomatoes_alternative_logo.svg" className="w-4 h-4" alt='Rotten Tomatoes Logo' /> {/* Alt text */}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white"> {movie.rottenTomatoesRating}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className={`mb-16 ${isHomePage ? 'hidden' : 'block'}`}>
                <Pagination
                    totalItems={movies.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default MoviesCard;