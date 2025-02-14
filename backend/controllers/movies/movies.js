const { db } = require('../../config/Firebase/firebase');

const getAllMovies = async (req, res) => {
    try {
        const { year, genre, sorting } = req.query;
        console.log(genre)
        let moviesQuery = db.collection('movies');

        if (year) {
            const years = year.split(',');
            console.log(years)
            moviesQuery = moviesQuery.where('year', 'in', years);
        }

        if (genre) {
            const genres = genre.split(',');
            console.log(genres)
            moviesQuery = moviesQuery.where('genre', 'array-contains-any', genres);
        }

        const moviesSnapshot = await moviesQuery.get();

        const movies = [];
        moviesSnapshot.forEach(doc => {
            movies.push({ id: doc.id, ...doc.data() });
        });

        if (sorting) {
            switch (sorting) {
                case 'popularity':
                    movies.sort((a, b) => (b.view || 0) - (a.view || 0));
                    break;
                case 'newest':
                    movies.sort((a, b) => b.year - a.year);
                    break;
                default:
                    break;
            }
        }

        return res.status(200).json({ movies });
    } catch (error) {
        console.error('Error fetching movies:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getMovieById = async (req, res) => {
    const { filmId } = req.params;
    const movieDoc = await db.collection('movies').doc(filmId).get();
    if (!movieDoc.exists) {
        return res.status(404).json({ message: 'Movie not found' });
    }
    const movie = movieDoc.data();
    return res.status(200).json({ movie });
};

const getSeriesById = async (req, res) => {
    const { seriesId } = req.params;
    const movieDoc = await db.collection('series').doc(seriesId).get();
    if (!movieDoc.exists) {
        return res.status(404).json({ message: 'Movie not found' });
    }
    const movie = movieDoc.data();
    return res.status(200).json({ movie });
};

const getSimilarMovies = async (req, res) => {
    try {
        const { filmId } = req.params;
        const movieDoc = await db.collection('movies').doc(filmId).get();

        if (!movieDoc.exists) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        const movie = movieDoc.data();
        const genres = movie.genre;

        const moviesSnapshot = await db.collection('movies')
            .where('genre', 'array-contains-any', genres)
            .get();

        const movies = moviesSnapshot.docs
            .map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            .filter(m => m.id !== filmId);

        const moviesWithScores = movies.map(m => {
            const matchingGenres = m.genre.filter(g => genres.includes(g));
            return {
                ...m,
                matchScore: matchingGenres.length
            };
        });

        const sortedMovies = moviesWithScores
            .sort((a, b) => {
                if (b.matchScore !== a.matchScore) {
                    return b.matchScore - a.matchScore;
                }
                return 0;
            })
            .slice(0, 6);

        return res.status(200).json({
            similarMovies: sortedMovies.map(({ matchScore, ...movie }) => movie)
        });
    } catch (error) {
        console.error('Error getting similar movies:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const getActorMovies = async (req, res) => {
    try {
        const { actor } = req.params;
        const { year, genre, sorting } = req.query;
        const moviesSnapshot = await db.collection('movies').get();

        let movies = moviesSnapshot.docs
            .filter(doc => {
                const movieData = doc.data();
                return movieData.cast && Array.isArray(movieData.cast) &&
                    movieData.cast.some(castMember =>
                        castMember.name.toLowerCase() === actor.toLowerCase()
                    );
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

        if (year) {
            const yearArray = year.split(',').map(y => y.trim());
            movies = movies.filter(movie =>
                yearArray.includes(movie.year.toString())
            );
        }

        if (genre) {
            const genreArray = genre.split(',').map(g => g.trim());
            movies = movies.filter(movie =>
                movie.genre.some(movieGenre =>
                    genreArray.includes(movieGenre)
                )
            );
        }

        if (sorting) {
            switch (sorting) {
                case 'popularity':
                    movies.sort((a, b) => (b.view || 0) - (a.view || 0));
                    break;
                case 'newest':
                    movies.sort((a, b) => b.year - a.year);
                    break;
                default:
                    break;
            }
        }

        return res.status(200).json({ movies });
    } catch (error) {
        console.error('Error in getActorMovies:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

const getActorSeries = async (req, res) => {
    try {
        const { actor } = req.params;
        const { year, genre, sorting } = req.query;
        const seriesSnapshot = await db.collection('series').get();

        let series = seriesSnapshot.docs
            .filter(doc => {
                const seriesData = doc.data();
                return seriesData.casts && Array.isArray(seriesData.casts) &&
                    seriesData.casts.some(castMember =>
                        castMember.name.toLowerCase() === actor.toLowerCase()
                    );
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

        if (year) {
            const yearArray = year.split(',').map(y => y.trim());
            series = series.filter(series =>
                yearArray.includes(series.date.year.toString())
            );
        }

        if (genre) {
            const genreArray = genre.split(',').map(g => g.trim());
            series = series.filter(series =>
                series.genres.some(seriesGenre =>
                    genreArray.includes(seriesGenre)
                )
            );
        }

        if (sorting) {
            switch (sorting) {
                case 'popularity':
                    series.sort((a, b) => (b.view || 0) - (a.view || 0));
                    break;
                case 'newest':
                    series.date.sort((a, b) => b.year - a.year);
                    break;
                default:
                    break;
            }
        }

        return res.status(200).json({ series });
    } catch (error) {
        console.error('Error in getActorseries:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

const getCompanyMovies = async (req, res) => {
    try {
        const { company } = req.params;
        const { year, genre, sorting } = req.query;
        console.log(company);
        const moviesSnapshot = await db.collection('movies').get();

        let movies = moviesSnapshot.docs
            .filter(doc => {
                const movieData = doc.data();
                return movieData.producer && movieData.producer.toLowerCase() === company.toLowerCase();
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

        if (year) {
            const yearArray = year.split(',').map(y => y.trim());
            movies = movies.filter(movie =>
                yearArray.includes(movie.year.toString())
            );
        }

        if (genre) {
            const genreArray = genre.split(',').map(g => g.trim());
            movies = movies.filter(movie =>
                movie.genre.some(movieGenre =>
                    genreArray.includes(movieGenre)
                )
            );
        }
        if (sorting) {
            switch (sorting) {
                case 'newest':
                    movies.sort((a, b) => b.year - a.year);
                    break;
                case 'oldest':
                    movies.sort((a, b) => a.year - b.year);
                    break;
                case 'rating-high':
                    movies.sort((a, b) => b.rating - a.rating);
                    break;
                case 'rating-low':
                    movies.sort((a, b) => a.rating - b.rating);
                    break;
                case 'title-asc':
                    movies.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'title-desc':
                    movies.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                default:
                    movies.sort((a, b) => b.year - a.year);
            }
        }

        return res.status(200).json({ movies });
    } catch (error) {
        console.error('Error in getActorMovies:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

const getCompanySeries = async (req, res) => {
    try {
        const { company } = req.params;
        const { year, genre, sorting } = req.query;
        const seriesSnapshot = await db.collection('series').get();

        let series = seriesSnapshot.docs
            .filter(doc => {
                const seriesData = doc.data();
                return seriesData.producer && seriesData.producer.toLowerCase() === company.toLowerCase();
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

        if (year) {
            const yearArray = year.split(',').map(y => y.trim());
            series = series.filter(series =>
                yearArray.includes(series.date.year.toString())
            );
        }

        if (genre) {
            const genreArray = genre.split(',').map(g => g.trim());
            series = series.filter(series =>
                series.genres.some(seriesGenre =>
                    genreArray.includes(seriesGenre)
                )
            );
        }

        if (sorting) {
            switch (sorting) {
                case 'popularity':
                    series.sort((a, b) => (b.view || 0) - (a.view || 0));
                    break;
                case 'newest':
                    series.date.sort((a, b) => b.year - a.year);
                    break;
                default:
                    break;
            }
        }

        return res.status(200).json({ series });
    } catch (error) {
        console.error('Error in getActorseries:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

const getDirectorMovies = async (req, res) => {
    try {
        const { director } = req.params;
        console.log(director);
        const { year, genre, sorting } = req.query;
        const moviesSnapshot = await db.collection('movies').get();

        let movies = moviesSnapshot.docs
            .filter(doc => {
                const movieData = doc.data();
                return movieData.director && movieData.director.toLowerCase() === director.toLowerCase();
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

        if (year) {
            const yearArray = year.split(',').map(y => y.trim());
            movies = movies.filter(movie =>
                yearArray.includes(movie.year.toString())
            );
        }

        if (genre) {
            const genreArray = genre.split(',').map(g => g.trim());
            movies = movies.filter(movie =>
                movie.genre.some(movieGenre =>
                    genreArray.includes(movieGenre)
                )
            );
        }
        if (sorting) {
            switch (sorting) {
                case 'newest':
                    movies.sort((a, b) => b.year - a.year);
                    break;
                case 'oldest':
                    movies.sort((a, b) => a.year - b.year);
                    break;
                case 'rating-high':
                    movies.sort((a, b) => b.rating - a.rating);
                    break;
                case 'rating-low':
                    movies.sort((a, b) => a.rating - b.rating);
                    break;
                case 'title-asc':
                    movies.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'title-desc':
                    movies.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                default:
                    movies.sort((a, b) => b.year - a.year);
            }
        }

        return res.status(200).json({ movies });
    } catch (error) {
        console.error('Error in getActorMovies:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

const getDirectorSeries = async (req, res) => {
    try {
        const { director } = req.params;
        const { year, genre, sorting } = req.query;
        const seriesSnapshot = await db.collection('series').get();

        let series = seriesSnapshot.docs
            .filter(doc => {
                const movieData = doc.data();
                return movieData.director && movieData.director.toLowerCase() === director.toLowerCase();
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        if (year) {
            const yearArray = year.split(',').map(y => y.trim());
            series = series.filter(series =>
                yearArray.includes(series.date.year.toString())
            );
        }

        if (genre) {
            const genreArray = genre.split(',').map(g => g.trim());
            series = series.filter(series =>
                series.genres.some(seriesGenre =>
                    genreArray.includes(seriesGenre)
                )
            );
        }

        if (sorting) {
            switch (sorting) {
                case 'popularity':
                    series.sort((a, b) => (b.view || 0) - (a.view || 0));
                    break;
                case 'newest':
                    series.date.sort((a, b) => b.year - a.year);
                    break;
                default:
                    break;
            }
        }

        return res.status(200).json({ series });
    } catch (error) {
        console.error('Error in getActorseries:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

const getAllSeries = async (req, res) => {
    try {
        const { year, genre, sorting } = req.query;
        console.log(sorting)
        let moviesQuery = db.collection('series');

        if (year) {
            const years = year.split(',');
            console.log(years)
            moviesQuery = moviesQuery.where('year', 'in', years);
        }

        if (genre) {
            const genres = genre.split(',');
            console.log(genres)
            moviesQuery = moviesQuery.where('genre', 'array-contains-any', genres);
        }

        const moviesSnapshot = await moviesQuery.get();

        const movies = [];
        moviesSnapshot.forEach(doc => {
            movies.push({ id: doc.id, ...doc.data() });
        });

        if (sorting) {
            switch (sorting) {
                case 'popularity':
                    movies.sort((a, b) => (b.view || 0) - (a.view || 0));
                    break;
                case 'newest':
                    movies.sort((a, b) => b.date.year - a.date.year);
                    break;
                default:
                    break;
            }
        }

        return res.status(200).json({ movies });
    } catch (error) {
        console.error('Error fetching movies:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getRandomMoveandSeries = async (req, res) => {
    try {
        const moviesSnapshot = await db.collection('movies').get();
        const seriesSnapshot = await db.collection('series').get();

        const movies = moviesSnapshot.docs.map(doc => doc.data());
        const series = seriesSnapshot.docs.map(doc => doc.data());

        const randomMovies = [];
        const randomSeries = [];

        const selectedMovieIndices = new Set();
        while (randomMovies.length < 6) {
            const randomIndex = Math.floor(Math.random() * movies.length);
            if (!selectedMovieIndices.has(randomIndex)) {
                randomMovies.push(movies[randomIndex]);
                selectedMovieIndices.add(randomIndex);
            }
        }

        const selectedSeriesIndices = new Set();
        while (randomSeries.length < 4) {
            const randomIndex = Math.floor(Math.random() * series.length);
            if (!selectedSeriesIndices.has(randomIndex)) {
                randomSeries.push(series[randomIndex]);
                selectedSeriesIndices.add(randomIndex);
            }
        }

        return res.status(200).json({ movies: randomMovies, series: randomSeries });
    } catch (error) {
        console.error("Error getting random movies and series:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

const getNewestMoviesAndSeries = async (req, res) => {
    try {
        const fetchNewestDocuments = async (collectionName, count) => {
            const snapshot = await db.collection(collectionName)
                .orderBy('createdAt', 'desc')
                .limit(count)
                .get();
            return snapshot.docs.map(doc => doc.data());
        };

        const newestMovies = await fetchNewestDocuments('movies', 12);
        const newestSeries = await fetchNewestDocuments('series', 6);

        return res.status(200).json({ movies: newestMovies, series: newestSeries });

    } catch (error) {
        console.error("Error getting newest movies and series:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

const getTrending = async (req, res) => {
    try {
        const [moviesSnapshot, seriesSnapshot] = await Promise.all([
            db.collection('movies')
                .orderBy('view', 'desc')
                .limit(6)
                .get(),
            db.collection('series')
                .orderBy('view', 'desc')
                .limit(6)
                .get()
        ]);

        const movies = moviesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        const series = seriesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

       return res.status(200).json({ movies, series });
    } catch (error) {
        console.error('Error fetching most viewed:', error);
        res.status(500).json({
            success: false,
            error: 'Error fetching content'
        });
    }
}

const incrementViewMovies = async (req, res) => {
    try {
        const { filmId } = req.params;
        const collectionRef = db.collection("movies");
        const docRef = collectionRef.doc(filmId);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ message: 'Document not found' });
        }
        await docRef.update({ view: doc.data().view + 1 });
        return res.status(200).json({ message: 'View count incremented successfully' });
    } catch (error) {
        console.error('Error incrementing view:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const incrementViewSeries = async (req, res) => {
    try {
        const { seriesId } = req.params;
        const collectionRef = db.collection("series");
        const docRef = collectionRef.doc(seriesId);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ message: 'Document not found' });
        }
        await docRef.update({ view: doc.data().view + 1 });
        return res.status(200).json({ message: 'View count incremented successfully' });
    } catch (error) {
        console.error('Error incrementing view:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {incrementViewMovies, incrementViewSeries, getTrending, getActorSeries, getDirectorSeries, getCompanySeries, getAllMovies, getSeriesById, getDirectorMovies, getCompanyMovies, getActorMovies, getSimilarMovies, getMovieById, getAllSeries, getRandomMoveandSeries, getNewestMoviesAndSeries };