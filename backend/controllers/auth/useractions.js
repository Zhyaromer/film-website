const { db, FieldValue } = require('../../config/Firebase/firebase');

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

const addComment = async (req, res) => {
    const { uid } = req.user;
    const { filmId, reviewmsg, star, spoiler } = req.body;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: "User not found" });
        }

        const commentData = {
            uid,
            name: userDoc.data().username,
            reviewmsg,
            star,
            spoiler
        };

        const updates = [
            db.collection('users').doc(uid).update({
                comments: FieldValue.arrayUnion(filmId)
            }),
            db.collection('movies').doc(filmId).update({
                comments: FieldValue.arrayUnion(commentData)
            })
        ];

        await Promise.all(updates);
        return res.status(200).json({ message: "Comment added successfully" });
    } catch (error) {
        console.error("Error adding comment:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

//

const saveSeries = async (req, res) => {
    const { uid } = req.user;
    const { seriesId } = req.body;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const savedseries = userDoc.data().savedseries || [];
        if (savedseries.includes(seriesId)) {
            savedseries.splice(savedseries.indexOf(seriesId), 1);
            await db.collection('users').doc(uid).update({ savedseries });
            return res.status(200).json({ message: 'series removed from saved seriess' });
        } else {
            savedseries.push(seriesId);
        }

        await db.collection('users').doc(uid).update({ savedseries });
        return res.status(200).json({ message: 'series saved successfully' });
    } catch (error) {
        console.error('Error saving series:', error);
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

        const savedseries = userDoc.data().savedseries || [];
        return res.status(200).json({ savedseries });
    } catch (error) {
        console.error('Error getting favorited series:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const favSeries = async (req, res) => {
    const { uid } = req.user;
    const { seriesId } = req.body;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const favSeries = userDoc.data().favSeries || [];
        if (favSeries.includes(seriesId)) {
            favSeries.splice(favSeries.indexOf(seriesId), 1);
            await db.collection('users').doc(uid).update({ favSeries });
            return res.status(200).json({ message: 'Movie removed from favorited movies' });
        } else {
            favSeries.push(seriesId);
        }

        await db.collection('users').doc(uid).update({ favSeries });

        return res.status(200).json({ message: 'series favorited successfully' });
    } catch (error) {
        console.error('Error favoriting series:', error);
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

        const favSeries = userDoc.data().favSeries || [];
        return res.status(200).json({ favSeries });
    } catch (error) {
        console.error('Error getting favorited series:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const watchedSeries = async (req, res) => {
    const { uid } = req.user;
    const { seriesId } = req.body;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const watchedSeries = userDoc.data().watchedSeries || [];
        if (watchedSeries.includes(seriesId)) {
            watchedSeries.splice(watchedSeries.indexOf(seriesId), 1);
            await db.collection('users').doc(uid).update({ watchedSeries });
            return res.status(200).json({ message: 'Movie removed from watched Series' });
        } else {
            watchedSeries.push(seriesId);
        }

        await db.collection('users').doc(uid).update({ watchedSeries });

        return res.status(200).json({ message: 'series watched successfully' });
    } catch (error) {
        console.error('Error watching series:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const getwatchedSeries = async (req, res) => {
    const { uid } = req.user;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        const watchedSeries = userDoc.data().watchedSeries || [];
        return res.status(200).json({ watchedSeries });
    } catch (error) {
        console.error('Error getting watched Series:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const addCommentSeries = async (req, res) => {
    const { uid } = req.user;
    const { seriesId, reviewmsg, star, spoiler } = req.body;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: "User not found" });
        }

        const commentData = {
            uid,
            name: userDoc.data().username,
            reviewmsg,
            star,
            spoiler
        };

        const updates = [
            db.collection('users').doc(uid).update({
                Seriescomments: FieldValue.arrayUnion(seriesId)
            }),
            db.collection('series').doc(seriesId).update({
                Seriescomments: FieldValue.arrayUnion(commentData)
            })
        ];

        await Promise.all(updates);
        return res.status(200).json({ message: "Comment added successfully" });
    } catch (error) {
        console.error("Error adding comment:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};


module.exports = { addCommentSeries, watchedSeries, getwatchedSeries, getfavSeries, favSeries, getSavedSeries, saveSeries, saveMovie, favMovie, watchedMovie, getSavedMovies, getfavMovies, getwatchedMovies, addComment };