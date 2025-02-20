import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/@Layout/Navigation.jsx'
import Footer from '../components/@Layout/Footer.jsx'
import MultiSelect from '../components/@UI/Filtersinput.jsx'
import FilmsCard from '../components/@Layout/FilmsCard.jsx'
import FiltersOption from '../helpers/FiltersOption.jsx'
import { useParams } from 'react-router-dom';
import Seriescard from '../components/@Layout/Seriescard.jsx'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Directors = () => {
    const { genre, year, sorting } = FiltersOption();
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [filmordrama, setFilmordrama] = useState('film')
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedSorting, setSelectedSorting] = useState([]);
    const { director } = useParams();

    const fetchMovies = async (filters) => {
        try {
            let url = `http://localhost:5000/api/movies/director/${director}`;
            const params = new URLSearchParams();
            if (filters.genre.length > 0) {
                params.append('genre', filters.genre.join(','));
            }
            if (filters.year.length > 0) {
                params.append('year', filters.year.join(','));
            }
            if (filters.sorting.length > 0) {
                params.append('sorting', filters.sorting[0].value);
            }

            const queryString = params.toString();
            const finalUrl = queryString ? `${url}?${queryString}` : url;

            const res = await axios.get(finalUrl);
            setMovies(res.data);
        } catch (error) {
            toast.error("هەڵەیەک هەیە لە گرتنی زانیاریەکانی فیلمەکان", { transition: Slide });
        }
    };

    const fetchSeries = async (filters) => {
        try {
            let url = `http://localhost:5000/api/movies/directorSeries/${director}`;
            const params = new URLSearchParams();
            if (filters.genre.length > 0) {
                params.append('genre', filters.genre.join(','));
            }
            if (filters.year.length > 0) {
                params.append('year', filters.year.join(','));
            }
            if (filters.sorting.length > 0) {
                params.append('sorting', filters.sorting[0].value);
            }

            const queryString = params.toString();
            const finalUrl = queryString ? `${url}?${queryString}` : url;

            const res = await axios.get(finalUrl);
            setSeries(res.data.series);
        } catch (error) {
            toast.error("هەڵەیەک هەیە لە گرتنی زانیاریەکانی زنجیرەکان", { transition: Slide });
        }
    };

    useEffect(() => {
        const filters = {
            genre: selectedGenres.map(g => g.value),
            year: selectedYears.map(y => y.value),
            sorting: selectedSorting
        };
        fetchMovies(filters);
        fetchSeries(filters);
    }, [selectedGenres, selectedYears, selectedSorting]);

    return (
        <div className='bg-[#282e30]'>
            <Navigation />

            <div className="flex items-center justify-center mt-4 md:mt-10">
                <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-10 p-4">
                    <div>
                        <label className="block text-md text-right font-semibold text-sky-500 mb-2">ژانەر</label>
                        <MultiSelect
                            options={genre}
                            placeholder="ژانەرێک هەڵبژێرە"
                            onSelectionChange={setSelectedGenres}
                        />
                    </div>
                    <div>
                        <label className="block text-md text-right font-semibold text-sky-500 mb-2">ساڵ</label>
                        <MultiSelect
                            options={year}
                            placeholder="ساڵێک هەڵبژێرە"
                            onSelectionChange={setSelectedYears}
                        />
                    </div>
                    <div>
                        <label className="block text-md text-right font-semibold text-sky-500 mb-2">ڕیزبەندی</label>
                        <MultiSelect
                            options={sorting}
                            placeholder="ڕیزبەندیەک هەڵبژێرە"
                            onSelectionChange={setSelectedSorting}
                            singleSelect={true}
                        />
                    </div>
                </div>
            </div>


            <div>
                <h2 className='text-xl md:text-3xl text-right font-bold text-white px-6 pt-5 pb-0'>
                    {filmordrama === 'film' ? (
                        `(${movies?.movies?.length || 0}) ${director} فیلمەکانی`
                    ) : (
                        `(${series?.length || 0}) ${director} زنجیرەکانی`
                    )}
                </h2>
            </div>

            <div dir="rtl" className="flex justify-start gap-2 px-6 mt-4">
                <div onClick={() => setFilmordrama('film')} className={`cursor-pointer border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'film' ? 'bg-sky-500' : ''}`}>
                    <p className="text-white">فیلمەکان</p>
                </div>
                <div onClick={() => setFilmordrama('drama')} className={`cursor-pointer border rounded-lg border-sky-500 py-1 px-4 ${filmordrama === 'drama' ? 'bg-sky-500' : ''}`}>
                    <p className="text-white">زنجیرەکان</p>
                </div>
            </div>

            {filmordrama === 'film' ? (
                <FilmsCard moviesData={movies?.movies} />
            ) : (
                <Seriescard moviesData={series} />
            )}
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Directors;