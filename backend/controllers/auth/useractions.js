const { db } = require('../../config/Firebase/firebase');

const saveMovie = async (req, res) => {
    const { uid } = req.user;
    const { movieId } = req.body;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const savedMovies = userDoc.data().savedMovies || [];
        if (savedMovies.includes(movieId)) {
            savedMovies.splice(savedMovies.indexOf(movieId), 1);
            await db.collection('users').doc(uid).update({ savedMovies });
            return res.status(200).json({ message: 'Movie removed from saved movies' });
        } else {
            savedMovies.push(movieId);
        }

        await db.collection('users').doc(uid).update({ savedMovies });

        return res.status(200).json({ message: 'Movie saved successfully' });
    } catch (error) {
        console.error('Error saving movie:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const getSavedMovies = async (req, res) => {
    const { uid } = req.user;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const savedMovies = userDoc.data().savedMovies || [];
        return res.status(200).json({ savedMovies });
    } catch (error) {
        console.error('Error getting saved movies:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const favMovie = async (req, res) => {
    const { uid } = req.user;
    const { movieId } = req.body;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const favMovies = userDoc.data().favMovies || [];
        if (favMovies.includes(movieId)) {
            favMovies.splice(favMovies.indexOf(movieId), 1);
            await db.collection('users').doc(uid).update({ favMovies });
            return res.status(200).json({ message: 'Movie removed from favorited movies' });
        } else {
            favMovies.push(movieId);
        }

        await db.collection('users').doc(uid).update({ favMovies });

        return res.status(200).json({ message: 'Movie favorited successfully' });
    } catch (error) {
        console.error('Error favoriting movie:', error);
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

        const favMovies = userDoc.data().favMovies || [];
        return res.status(200).json({ favMovies });
    } catch (error) {
        console.error('Error getting favorited movies:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const watchedMovie = async (req, res) => {
    const { uid } = req.user;
    const { movieId } = req.body;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const watchedMovies = userDoc.data().watchedMovies || [];
        if (watchedMovies.includes(movieId)) {
            watchedMovies.splice(watchedMovies.indexOf(movieId), 1);
            await db.collection('users').doc(uid).update({ watchedMovies });
            return res.status(200).json({ message: 'Movie removed from watched movies' });
        } else {
            watchedMovies.push(movieId);
        }

        await db.collection('users').doc(uid).update({ watchedMovies });

        return res.status(200).json({ message: 'Movie watched successfully' });
    } catch (error) {
        console.error('Error watching movie:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const getwatchedMovies = async (req, res) => {
    const { uid } = req.user;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const watchedMovies = userDoc.data().watchedMovies || [];
        return res.status(200).json({ watchedMovies });
    } catch (error) {
        console.error('Error getting watched movies:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { saveMovie, favMovie, watchedMovie, getSavedMovies, getfavMovies, getwatchedMovies };