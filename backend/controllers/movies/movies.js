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

const getAllSeries = async (req, res) => {
    const series = await db.collection('series').get();
    return res.status(200).json(series.docs.map(doc => doc.data()));
}

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
        while (randomSeries.length < 6) {
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

module.exports = { getAllMovies, getSimilarMovies, getMovieById, getAllSeries, getRandomMoveandSeries, getNewestMoviesAndSeries };