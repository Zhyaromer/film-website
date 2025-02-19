const { db } = require('../../config/Firebase/firebase');
const xss = require('xss');

const getAllMovies = async (req, res) => {
    const { year, genre, sorting } = req.query;
    try {
        let moviesQuery = db.collection('movies');

        if (year) {
            const sanYear = xss(year);
            const years = sanYear.split(',');
            moviesQuery = moviesQuery.where('year', 'in', years);
        }

        if (genre) {
            const sanGenre = xss(genre);
            const genres = sanGenre.split(',');
            moviesQuery = moviesQuery.where('genre', 'array-contains-any', genres);
        }

        const moviesSnapshot = await moviesQuery.get();

        const movies = [];
        moviesSnapshot.forEach(doc => {
            movies.push({ id: doc.id, ...doc.data() });
        });

        if (sorting) {
            const sanSorting = xss(sorting);
            switch (sanSorting) {
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
        return res.status(500).json({ error: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getMovieById = async (req, res) => {
    const { filmId } = req.params;
    const sanFilmId = xss(filmId);

    try {
        const movieDoc = await db.collection('movies').doc(sanFilmId).get();
        if (!movieDoc.exists) {
            return res.status(404).json({ message: 'هیچ فلیمێک نەدۆزرایەوە' });
        }
        const movie = movieDoc.data();
        return res.status(200).json({ movie });
    } catch (error) {
        return res.status(500).json({ error: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getSeriesById = async (req, res) => {
    const { seriesId } = req.params;
    const sanSeriesId = xss(seriesId);
    try {
        const seriesDoc = await db.collection('series').doc(sanSeriesId).get();
        if (!seriesDoc.exists) {
            return res.status(404).json({ message: 'هیچ زنجیرەیەک نەدۆزرایەوە' });
        }
        const series = seriesDoc.data();
        return res.status(200).json({ series });
    } catch (error) {
        return res.status(500).json({ error: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getSimilarMovies = async (req, res) => {
    const { filmId } = req.params;
    const sanFilmId = xss(filmId);
    try {
        const movieDoc = await db.collection('movies').doc(sanFilmId).get();

        if (!movieDoc.exists) {
            return res.status(404).json({ message: 'هیچ فلیمێک نەدۆزرایەوە' });
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
            .filter(m => m.id !== sanFilmId);

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
        return res.status(500).json({ message: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getActorMovies = async (req, res) => {
    const { actor } = req.params;
    const { year, genre, sorting } = req.query;
    const sanActor = xss(actor);

    if (!sanActor) {
        return res.status(400).json({ message: 'هیچ ئەکتەرێک نەدۆزرایەە' });
    }

    try {
        const moviesSnapshot = await db.collection('movies').get();

        let movies = moviesSnapshot.docs
            .filter(doc => {
                const movieData = doc.data();
                return movieData.cast && Array.isArray(movieData.cast) &&
                    movieData.cast.some(castMember =>
                        castMember.name.toLowerCase() === sanActor.toLowerCase()
                    );
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

        if (year) {
            const sanYear = xss(year);
            const yearArray = sanYear.split(',').map(y => y.trim());
            movies = movies.filter(movie =>
                yearArray.includes(movie.year.toString())
            );
        }

        if (genre) {
            const sanGenre = xss(genre);
            const genreArray = sanGenre.split(',').map(g => g.trim());
            movies = movies.filter(movie =>
                movie.genre.some(movieGenre =>
                    genreArray.includes(movieGenre)
                )
            );
        }

        if (sorting) {
            const sanSorting = xss(sorting);
            switch (sanSorting) {
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
        return res.status(500).json({
            message: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە',
            error: error.message
        });
    }
};

const getActorSeries = async (req, res) => {
    const { actor } = req.params;
    const { year, genre, sorting } = req.query;
    const sanActor = xss(actor);

    if (!sanActor) {
        return res.status(400).json({ message: 'هیچ ئەکتەرێک نەدۆزرایەە' });
    }

    try {
        const seriesSnapshot = await db.collection('series').get();

        let series = seriesSnapshot.docs
            .filter(doc => {
                const seriesData = doc.data();
                return seriesData.casts && Array.isArray(seriesData.casts) &&
                    seriesData.casts.some(castMember =>
                        castMember.name.toLowerCase() === sanActor.toLowerCase()
                    );
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

        if (year) {
            const sanYear = xss(year);
            const yearArray = sanYear.split(',').map(y => y.trim());
            series = series.filter(series =>
                yearArray.includes(series.date.year.toString())
            );
        }

        if (genre) {
            const sanGenre = xss(genre);
            const genreArray = sanGenre.split(',').map(g => g.trim());
            series = series.filter(series =>
                series.genres.some(seriesGenre =>
                    genreArray.includes(seriesGenre)
                )
            );
        }

        if (sorting) {
            const sanSorting = xss(sorting);
            switch (sanSorting) {
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
        return res.status(500).json({
            message: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە',
            error: error.message
        });
    }
};

const getCompanyMovies = async (req, res) => {
    const { company } = req.params;
    const { year, genre, sorting } = req.query;
    const sanCompany = xss(company);

    if (!sanCompany) {
        return res.status(400).json({ message: 'هیچ نەدۆزرایەە' });
    }

    try {
        const moviesSnapshot = await db.collection('movies').get();

        let movies = moviesSnapshot.docs
            .filter(doc => {
                const movieData = doc.data();
                return movieData.producer && movieData.producer.toLowerCase() === sanCompany.toLowerCase();
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

        if (year) {
            const sanYear = xss(year);
            const yearArray = sanYear.split(',').map(y => y.trim());
            movies = movies.filter(movie =>
                yearArray.includes(movie.year.toString())
            );
        }

        if (genre) {
            const sanGenre = xss(genre);
            const genreArray = sanGenre.split(',').map(g => g.trim());
            movies = movies.filter(movie =>
                movie.genre.some(movieGenre =>
                    genreArray.includes(movieGenre)
                )
            );
        }

        if (sorting) {
            const sanSorting = xss(sorting);
            switch (sanSorting) {
                case 'popularity':
                    movies.sort((a, b) => (b.view || 0) - (a.view || 0));
                    break;
                case 'newest':
                    movies.date.sort((a, b) => b.year - a.year);
                    break;
                default:
                    break;
            }
        }

        return res.status(200).json({ movies });
    } catch (error) {
        return res.status(500).json({
            message: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە',
            error: error.message
        });
    }
};

const getCompanySeries = async (req, res) => {
    const { company } = req.params;
    const { year, genre, sorting } = req.query;
    const sanCompany = xss(company);

    if (!sanCompany) {
        return res.status(400).json({ message: 'هیچ نەدۆزرایەە' });
    }

    try {
        const seriesSnapshot = await db.collection('series').get();

        let series = seriesSnapshot.docs
            .filter(doc => {
                const seriesData = doc.data();
                return seriesData.producer && seriesData.producer.toLowerCase() === sanCompany.toLowerCase();
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

        if (year) {
            const sanYear = xss(year);
            const yearArray = sanYear.split(',').map(y => y.trim());
            series = series.filter(series =>
                yearArray.includes(series.date.year.toString())
            );
        }

        if (genre) {
            const sanGenre = xss(genre);
            const genreArray = sanGenre.split(',').map(g => g.trim());
            series = series.filter(series =>
                series.genres.some(seriesGenre =>
                    genreArray.includes(seriesGenre)
                )
            );
        }

        if (sorting) {
            const sanSorting = xss(sorting);
            switch (sanSorting) {
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
        return res.status(500).json({
            message: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە',
            error: error.message
        });
    }
};

const getDirectorMovies = async (req, res) => {
    const { director } = req.params;
    const { year, genre, sorting } = req.query;
    const sanDirector = xss(director);

    if (!sanDirector) {
        return res.status(400).json({ message: 'هیچ نەدۆزرایەە' });
    }

    try {
        const moviesSnapshot = await db.collection('movies').get();

        let movies = moviesSnapshot.docs
            .filter(doc => {
                const movieData = doc.data();
                return movieData.director && movieData.director.toLowerCase() === sanDirector.toLowerCase();
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

        if (year) {
            const sanYear = xss(year);
            const yearArray = sanYear.split(',').map(y => y.trim());
            movies = movies.filter(movie =>
                yearArray.includes(movie.year.toString())
            );
        }

        if (genre) {
            const sanGenre = xss(genre);
            const genreArray = sanGenre.split(',').map(g => g.trim());
            movies = movies.filter(movie =>
                movie.genre.some(movieGenre =>
                    genreArray.includes(movieGenre)
                )
            );
        }
        
        if (sorting) {
            const sanSorting = xss(sorting);
            switch (sanSorting) {
                case 'popularity':
                    movies.sort((a, b) => (b.view || 0) - (a.view || 0));
                    break;
                case 'newest':
                    movies.date.sort((a, b) => b.year - a.year);
                    break;
                default:
                    break;
            }
        }

        return res.status(200).json({ movies });
    } catch (error) {
        return res.status(500).json({
            message: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە',
            error: error.message
        });
    }
};

const getDirectorSeries = async (req, res) => {
    const { director } = req.params;
    const { year, genre, sorting } = req.query;
    const sanDirector = xss(director);

    if (!sanDirector) {
        return res.status(400).json({ message: 'هیچ نەدۆزرایەە' });
    }

    try {
        const seriesSnapshot = await db.collection('series').get();

        let series = seriesSnapshot.docs
            .filter(doc => {
                const movieData = doc.data();
                return movieData.director && movieData.director.toLowerCase() === sanDirector.toLowerCase();
            })
            .map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

        if (year) {
            const sanYear = xss(year);
            const yearArray = sanYear.split(',').map(y => y.trim());
            series = series.filter(series =>
                yearArray.includes(series.date.year.toString())
            );
        }

        if (genre) {
            const sanGenre = xss(genre);
            const genreArray = sanGenre.split(',').map(g => g.trim());
            series = series.filter(series =>
                series.genres.some(seriesGenre =>
                    genreArray.includes(seriesGenre)
                )
            );
        }

        if (sorting) {
            const sanSorting = xss(sorting);
            switch (sanSorting) {
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
        return res.status(500).json({
            message: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە',
            error: error.message
        });
    }
};

const getAllSeries = async (req, res) => {
    const { year, genre, sorting } = req.query;

    try {
        let moviesQuery = db.collection('series');

        if (year) {
            const sanYear = xss(year);
            const years = sanYear.split(',');
            moviesQuery = moviesQuery.where('year', 'in', years);
        }

        if (genre) {
            const sanGenre = xss(genre);
            const genres = sanGenre.split(',');
            moviesQuery = moviesQuery.where('genre', 'array-contains-any', genres);
        }

        const moviesSnapshot = await moviesQuery.get();

        const movies = [];
        moviesSnapshot.forEach(doc => {
            movies.push({ id: doc.id, ...doc.data() });
        });

        if (sorting) {
            const sanSorting = xss(sorting);
            switch (sanSorting) {
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
        return res.status(500).json({ error: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
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
        return res.status(500).json({ message: "هەڵەیەک ڕویدا تکایە هەوڵ بدەوە" });
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
        return res.status(500).json({ message: "هەڵەیەک ڕویدا تکایە هەوڵ بدەوە" });
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
        res.status(500).json({
            success: false,
            error: 'Error fetching content'
        });
    }
}

const incrementViewMovies = async (req, res) => {
    const { filmId } = req.params;
    const sanFilmId = xss(filmId);

    try {
        const collectionRef = db.collection("movies");
        const docRef = collectionRef.doc(sanFilmId);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ message: 'هیچ فلیمێک نەدۆزرایەوە' });
        }
        await docRef.update({ view: doc.data().view + 1 });
        return res.status(200)
    } catch (error) {
        return res.status(500).json({ message: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const incrementViewSeries = async (req, res) => {
    const { seriesId } = req.params;
    const sanSeriesId = xss(seriesId);
    try {
        const collectionRef = db.collection("series");
        const docRef = collectionRef.doc(sanSeriesId);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ message: 'هیچ زنجیرەیەک نەدۆزرایەوە' });
        }
        await docRef.update({ view: doc.data().view + 1 });
        return res.status(200)
    } catch (error) {
        return res.status(500).json({ message: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getNewMovies = async (req, res) => {
    try {
        const moviesSnapshot = await db.collection('movies')
            .limit(12)
            .get();

        const movies = moviesSnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
        });

        return res.status(200).json({ movies });
    } catch (error) {
        return res.status(500).json({ error: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getNewSeries = async (req, res) => {
    try {
        const seriesSnapshot = await db.collection('series')
            .limit(5)
            .get();

        const series = seriesSnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
        });

        return res.status(200).json({ series });
    } catch (error) {
        return res.status(500).json({ error: 'هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

module.exports = { getNewSeries, getNewMovies, incrementViewMovies, incrementViewSeries, getTrending, getActorSeries, getDirectorSeries, getCompanySeries, getAllMovies, getSeriesById, getDirectorMovies, getCompanyMovies, getActorMovies, getSimilarMovies, getMovieById, getAllSeries, getRandomMoveandSeries, getNewestMoviesAndSeries };