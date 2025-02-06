const { db } = require('../../config/Firebase/firebase');

const getAllMovies = async (req, res) => {
    const movies = await db.collection('movies').get();
    return res.status(200).json(movies.docs.map(doc => doc.data()));
}

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

module.exports = { getAllMovies, getAllSeries, getRandomMoveandSeries, getNewestMoviesAndSeries };