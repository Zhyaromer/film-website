const { db } = require('../../config/Firebase/firebase');

const getSavedMovies = async (req, res) => {
    const { uid } = req.user;
    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const savedMovieIds = userDoc.data().savedMovies || [];
        if (savedMovieIds.length === 0) {
            return res.status(200).json({ movies: [] });
        }

        const moviePromises = savedMovieIds.map(async (movieId) => {
            const movieDoc = await db.collection('movies')
                .doc(movieId)
                .get();

            if (!movieDoc.exists) {
                return null;
            }

            const movieData = movieDoc.data();
            return {
                id: movieDoc.id,
                filmtitle: movieData.filmtitle,
                genre: movieData.genre,
                posterUrl: movieData.posterUrl,
                year: movieData.year
            };
        });

        const movies = await Promise.all(moviePromises);
        const validMovies = movies.filter(movie => movie !== null);
        return res.status(200).json({ movies: validMovies });
    } catch (error) {
        console.error('Error fetching saved movies:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const getfavMovies = async (req, res) => {
    const { uid } = req.user;
    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const favMovieIds = userDoc.data().favMovies || [];
        if (favMovieIds.length === 0) {
            return res.status(200).json({ movies: [] });
        }

        const moviePromises = favMovieIds.map(async (movieId) => {
            const movieDoc = await db.collection('movies')
                .doc(movieId)
                .get();

            if (!movieDoc.exists) {
                return null;
            }

            const movieData = movieDoc.data();
            return {
                id: movieDoc.id,
                filmtitle: movieData.filmtitle,
                genre: movieData.genre,
                posterUrl: movieData.posterUrl,
                year: movieData.year
            };
        });

        const movies = await Promise.all(moviePromises);
        const validMovies = movies.filter(movie => movie !== null);
        return res.status(200).json({ movies: validMovies });
    } catch (error) {
        console.error('Error fetching favorited movies:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const getWatchedMovies = async (req, res) => {
    const { uid } = req.user;
    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const watcheddMovieIds = userDoc.data().watchedMovies || [];
        if (watcheddMovieIds.length === 0) {
            return res.status(200).json({ movies: [] });
        }

        const moviePromises = watcheddMovieIds.map(async (movieId) => {
            const movieDoc = await db.collection('movies')
                .doc(movieId)
                .get();

            if (!movieDoc.exists) {
                return null;
            }

            const movieData = movieDoc.data();
            return {
                id: movieDoc.id,
                filmtitle: movieData.filmtitle,
                genre: movieData.genre,
                posterUrl: movieData.posterUrl,
                year: movieData.year
            };
        });

        const movies = await Promise.all(moviePromises);
        const validMovies = movies.filter(movie => movie !== null);
        return res.status(200).json({ movies: validMovies });
    } catch (error) {
        console.error('Error fetching watched movies:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const getCommentedMovies = async (req, res) => {
    const { uid } = req.user;
    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const commentedMovieIds = userDoc.data().comments || [];
        if (commentedMovieIds.length === 0) {
            return res.status(200).json({ movies: [] });
        }

        const moviePromises = commentedMovieIds.map(async (movieId) => {
            const movieDoc = await db.collection('movies')
                .doc(movieId)
                .get();

            if (!movieDoc.exists) {
                return null;
            }

            const movieData = movieDoc.data();
            return {
                id: movieDoc.id,
                filmtitle: movieData.filmtitle,
                genre: movieData.genre,
                posterUrl: movieData.posterUrl,
                year: movieData.year
            };
        });

        const movies = await Promise.all(moviePromises);
        const validMovies = movies.filter(movie => movie !== null);
        return res.status(200).json({ movies: validMovies });
    } catch (error) {
        console.error('Error fetching commented movies:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const getSavedSeries = async (req, res) => {
    const { uid } = req.user;
    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const savedSeriesIds = userDoc.data().savedseries || [];
        if (savedSeriesIds.length === 0) {
            return res.status(200).json({ series: [] });
        }

        const seriesPromises = savedSeriesIds.map(async (seriesId) => {
            const seriesDoc = await db.collection('series')
                .doc(seriesId)
                .get();

            if (!seriesDoc.exists) {
                return null;
            }

            const seriesData = seriesDoc.data();
            return {
                id: seriesDoc.id,
                filmtitle: seriesData.title,
                genre: seriesData.genres,
                posterUrl: seriesData.posterUrl,
                year: seriesData.date.year
            };
        });

        const series = await Promise.all(seriesPromises);
        const validMovies = series.filter(serie => serie !== null);
        return res.status(200).json({ series: validMovies });
    } catch (error) {
        console.error('Error fetching saved series:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const getfavSeries = async (req, res) => {
    const { uid } = req.user;
    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const favSeriesIds = userDoc.data().favSeries || [];
        if (favSeriesIds.length === 0) {
            return res.status(200).json({ series: [] });
        }

        const SeriesPromises = favSeriesIds.map(async (seriesId) => {
            const seriesDoc = await db.collection('series')
                .doc(seriesId)
                .get();

            if (!seriesDoc.exists) {
                return null;
            }

            const seriesData = seriesDoc.data();
            return {
                id: seriesDoc.id,
                filmtitle: seriesData.title,
                genre: seriesData.genres,
                posterUrl: seriesData.posterUrl,
                year: seriesData.date.year
            };
        });

        const series = await Promise.all(SeriesPromises);
        const validSeries = series.filter(series => series !== null);
        return res.status(200).json({ series: validSeries });
    } catch (error) {
        console.error('Error fetching favorited series:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const getWatchedSeries = async (req, res) => {
    const { uid } = req.user;
    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const watcheddseriesIds = userDoc.data().watchedSeries || [];
        if (watcheddseriesIds.length === 0) {
            return res.status(200).json({ series: [] });
        }

        const SeriesPromises = watcheddseriesIds.map(async (seriesId) => {
            const seriesDoc = await db.collection('series')
                .doc(seriesId)
                .get();

            if (!seriesDoc.exists) {
                return null;
            }

            const seriesData = seriesDoc.data();
            return {
                id: seriesDoc.id,
                filmtitle: seriesData.title,
                genre: seriesData.genres,
                posterUrl: seriesData.posterUrl,
                year: seriesData.date.year
            };
        });

        const series = await Promise.all(SeriesPromises);
        const validSeries = series.filter(series => series !== null);
        return res.status(200).json({ series: validSeries });
    } catch (error) {
        console.error('Error fetching watched series:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const getCommentedSeries = async (req, res) => {
    const { uid } = req.user;
    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const commentedSeriesIds = userDoc.data().Seriescomments || [];
        if (commentedSeriesIds.length === 0) {
            return res.status(200).json({ series: [] });
        }

        const SeriesPromises = commentedSeriesIds.map(async (seriesId) => {
            const seriesDoc = await db.collection('series')
                .doc(seriesId)
                .get();

            if (!seriesDoc.exists) {
                return null;
            }

            const seriesData = seriesDoc.data();
            return {
                id: seriesDoc.id,
                filmtitle: seriesData.title,
                genre: seriesData.genres,
                posterUrl: seriesData.posterUrl,
                year: seriesData.date.year
            };
        });

        const series = await Promise.all(SeriesPromises);
        const validSeries = series.filter(series => series !== null);
        return res.status(200).json({ series: validSeries });
    } catch (error) {
        console.error('Error fetching commented movies:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { getSavedMovies, getfavMovies, getWatchedMovies, getCommentedMovies, getSavedSeries, getfavSeries, getWatchedSeries, getCommentedSeries };

