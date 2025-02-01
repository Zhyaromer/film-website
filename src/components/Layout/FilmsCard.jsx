import Pagination from './Pagination.jsx'
import { useState } from 'react'
const FilmsCard = () => {
    const movies =
        [
            {
                movieName: 'avengers endgame',
                genre: 'ئاکشن - دراما',
                year: '2019',
                img: 'https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4126_avengers_infinity_war_movie_poster_web.jpg'
            },
            {
                movieName: 'The Godfather',
                genre: 'ئاکشن - تاوانکاری',
                year: '1972',
                img: 'https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/7DkAAOSwlYRa86zV/$_10.JPG?set_id=880000500F'
            },
            {
                movieName: 'The Dark Knight',
                genre: 'ئاکشن - تاوانکاری',
                year: '2008',
                img: 'https://m.media-amazon.com/images/I/A1exRxgHRRL.jpg'
            },
            {
                movieName: 'Inception',
                genre: 'ئاکشن - گەڕان',
                year: '2010',
                img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
            },
            {
                movieName: 'Titanic',
                genre: 'دراما - ڕۆمانسی',
                year: '1997',
                img: 'https://m.media-amazon.com/images/I/71V3V0FE1gS._AC_SL1200_.jpg'
            },
            {
                movieName: 'Spider-Man: No Way Home',
                genre: 'دراما - سەرکێشی',
                year: '2021',
                img: 'https://preview.redd.it/new-poster-for-spider-man-no-way-home-v0-1smp15la6xc81.jpg?width=1080&crop=smart&auto=webp&s=5f997eafffa5da954939301afaa47678c4071cd8'
            },
            {
                movieName: 'The Batman',
                genre: 'دراما - تاوانکاری',
                year: '2022',
                img: 'https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg'
            },
            {
                movieName: 'Top Gun: Maverick',
                genre: 'ئاکشن - دراما',
                year: '2022',
                img: 'https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_.jpg'
            },
            {
                movieName: 'Encanto',
                genre: 'ئەنیمەیشن',
                year: '2021',
                img: 'https://m.media-amazon.com/images/I/81mvxMI7xSL._AC_UF894,1000_QL80_.jpg'
            },
            {
                movieName: 'The Suicide Squad',
                genre: 'ئاکشن - کۆمیدی',
                year: '2021',
                img: 'https://m.media-amazon.com/images/M/MV5BMWU3Y2NlZmEtMjJjNS00ZWMxLWE1MzctYWYyMjMzMDdkNTE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
            },
            {
                movieName: 'Free Guy',
                genre: 'ئاکشن - کۆمیدی',
                year: '2021',
                img: "https://m.media-amazon.com/images/M/MV5BN2I0MGMxYjUtZTZiMS00MzMxLTkzNWYtMDUyZmUwY2ViYTljXkEyXkFqcGc@._V1_.jpg"
            },
            {
                movieName: 'Scream',
                genre: 'ترسناک',
                year: '2022',
                img: 'https://m.media-amazon.com/images/M/MV5BMmE4ZmE5NTMtZTZmNi00YWZjLTk0MjYtOGViZDdhZWMyZmRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
            },
        ]

    // they are typically 24
    const [currentMovies, setCurrentMovies] = useState(movies.slice(0, 6));
    const itemsPerPage = 6;

    const handlePageChange = (page, startIndex, endIndex) => {
        setCurrentMovies(movies.slice(startIndex, endIndex));
    };

    return (
        <div>
            <div className="mx-auto px-4 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4">
                    {currentMovies.map((movie, index) => (
                        <div key={index} className="w-full hover:scale-95 transition-transform duration-300 cursor-pointer">
                            <div className="bg-red-500 rounded-lg shadow-md overflow-hidden group h-64">
                                <div className="h-full w-full relative">
                                    <img
                                        src={movie.img}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="mt-2 space-y-2 text-center">
                                <div dir="rtl" className="break-all">
                                    <p className="text-sm sm:text-base text-sky-500 font-semibold">{movie.movieName}</p>
                                </div>
                                <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                                    <p className='text-white'>{movie.year}</p>
                                    <p className='text-white'>{movie.genre}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-16">
                <Pagination
                    totalItems={movies.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default FilmsCard