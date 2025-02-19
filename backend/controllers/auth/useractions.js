const { db, FieldValue } = require('../../config/Firebase/firebase');
const xss = require('xss')

const saveMovie = async (req, res) => {
    const { uid } = req.user;
    const { movieId } = req.body;
    const xssMovieId = xss(movieId);

    if (!xssMovieId) {
        return res.status(400).json({ message: 'ئایدی فلیمەکە داواکراوە' });
    }

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const savedMovies = userDoc.data().savedMovies || [];
        if (savedMovies.includes(xssMovieId)) {
            savedMovies.splice(savedMovies.indexOf(xssMovieId), 1);
            await db.collection('users').doc(uid).update({ savedMovies });
            return res.status(200).json({ message: 'ئەم فلیمە لە بەشی بینینی دواتر سڕایەوە' });
        } else {
            savedMovies.push(xssMovieId);
        }

        await db.collection('users').doc(uid).update({ savedMovies });

        return res.status(200).json({ message: 'فلیمەکە خرایە لیستی بینینی دواتر' });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getSavedMovies = async (req, res) => {
    const { uid } = req.user;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const savedMovies = userDoc.data().savedMovies || [];
        return res.status(200).json({ savedMovies });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const favMovie = async (req, res) => {
    const { uid } = req.user;
    const { movieId } = req.body;
    const xssMovieId = xss(movieId);

    if (!xssMovieId) {
        return res.status(400).json({ message: 'ئایدی فلیمەکە داواکراوە' });
    }

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const favMovies = userDoc.data().favMovies || [];
        if (favMovies.includes(xssMovieId)) {
            favMovies.splice(favMovies.indexOf(xssMovieId), 1);
            await db.collection('users').doc(uid).update({ favMovies });
            return res.status(200).json({ message: 'ئەم فلیمە لە بەشی دڵخواز سڕایەوە' });
        } else {
            favMovies.push(xssMovieId);
        }

        await db.collection('users').doc(uid).update({ favMovies });

        return res.status(200).json({ message: 'فلیمەکە خرایە لیستی دڵخوازەوە' });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getfavMovies = async (req, res) => {
    const { uid } = req.user;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const favMovies = userDoc.data().favMovies || [];
        return res.status(200).json({ favMovies });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const watchedMovie = async (req, res) => {
    const { uid } = req.user;
    const { movieId } = req.body;
    const xssMovieId = xss(movieId);

    if (!xssMovieId) {
        return res.status(400).json({ message: 'ئایدی فلیمەکە داواکراوە' });
    }

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const watchedMovies = userDoc.data().watchedMovies || [];
        if (watchedMovies.includes(xssMovieId)) {
            watchedMovies.splice(watchedMovies.indexOf(xssMovieId), 1);
            await db.collection('users').doc(uid).update({ watchedMovies });
            return res.status(200).json({ message: 'ئەم فلیمە لە بەشی بینراو سڕایەوە' });
        } else {
            watchedMovies.push(xssMovieId);
        }

        await db.collection('users').doc(uid).update({ watchedMovies });

        return res.status(200).json({ message: 'فلیمەکە خرایە لیستی بینراوە' });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getwatchedMovies = async (req, res) => {
    const { uid } = req.user;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const watchedMovies = userDoc.data().watchedMovies || [];
        return res.status(200).json({ watchedMovies });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const addComment = async (req, res) => {
    const { uid } = req.user;
    const { filmId, reviewmsg, star, spoiler } = req.body;

    const xssFilmId = xss(filmId);
    const xssReviewmsg = xss(reviewmsg);
    const xssStar = xss(star);
    const xssSpoiler = xss(spoiler);

    if (!xssFilmId || !xssReviewmsg || !xssStar || !xssSpoiler) {
        return res.status(400).json({ message: "تکایە هەموو زانیاریەکان پڕ بکەوە" });
    }

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: "هیچ ئەندامێک نەدۆزرایەوە" });
        }

        const commentData = {
            uid,
            name: userDoc.data().username,
            reviewmsg : xssReviewmsg,
            star : xssStar,
            spoiler : xssSpoiler
        };

        const updates = [
            db.collection('users').doc(uid).update({
                comments: FieldValue.arrayUnion(xssFilmId)
            }),
            db.collection('movies').doc(xssFilmId).update({
                comments: FieldValue.arrayUnion(commentData)
            })
        ];

        await Promise.all(updates);
        return res.status(200).json({ message: "کۆمێنتەکەت زیادکرا" });
    } catch (error) {
        return res.status(500).json({ message: "‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە" });
    }
};

const saveSeries = async (req, res) => {
    const { uid } = req.user;
    const { seriesId } = req.body;
    const xssSeriesId = xss(seriesId);

    if (!xssSeriesId) {
        return res.status(400).json({ message: 'ئایدی زنجیرەکە داواکراوە' });
    }

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const savedseries = userDoc.data().savedseries || [];
        if (savedseries.includes(xssSeriesId)) {
            savedseries.splice(savedseries.indexOf(xssSeriesId), 1);
            await db.collection('users').doc(uid).update({ savedseries });
            return res.status(200).json({ message: 'ئەم زنجیرەیە لە بەشی بینینی دواتر سڕایەوە' });
        } else {
            savedseries.push(xssSeriesId);
        }

        await db.collection('users').doc(uid).update({ savedseries });
        return res.status(200).json({ message: 'زنجیرەکە خرایە لیستی بینینی دواتر' });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getSavedSeries = async (req, res) => {
    const { uid } = req.user;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const savedseries = userDoc.data().savedseries || [];
        return res.status(200).json({ savedseries });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const favSeries = async (req, res) => {
    const { uid } = req.user;
    const { seriesId } = req.body;
    const xssSeriesId = xss(seriesId);

    if (!xssSeriesId) {
        return res.status(400).json({ message: 'ئایدی زنجیرەکە داواکراوە' });
    }

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const favSeries = userDoc.data().favSeries || [];
        if (favSeries.includes(xssSeriesId)) {
            favSeries.splice(favSeries.indexOf(xssSeriesId), 1);
            await db.collection('users').doc(uid).update({ favSeries });
            return res.status(200).json({ message: 'ئەم زنجیرەکە لە بەشی دڵخواز سڕایەوە' });
        } else {
            favSeries.push(xssSeriesId);
        }

        await db.collection('users').doc(uid).update({ favSeries });

        return res.status(200).json({ message: 'زنجیرەکە خرایە لیستی دڵخوازەوە' });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getfavSeries = async (req, res) => {
    const { uid } = req.user;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const favSeries = userDoc.data().favSeries || [];
        return res.status(200).json({ favSeries });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const watchedSeries = async (req, res) => {
    const { uid } = req.user;
    const { seriesId } = req.body;
    const xssSeriesId = xss(seriesId);

    if (!xssSeriesId) {
        return res.status(400).json({ message: 'ئایدی زنجیرەکە داواکراوە' });
    }

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const watchedSeries = userDoc.data().watchedSeries || [];
        if (watchedSeries.includes(xssSeriesId)) {
            watchedSeries.splice(watchedSeries.indexOf(xssSeriesId), 1);
            await db.collection('users').doc(uid).update({ watchedSeries });
            return res.status(200).json({ message: 'ئەم زنجیرەکە لە بەشی بینراو سڕایەوە' });
        } else {
            watchedSeries.push(xssSeriesId);
        }

        await db.collection('users').doc(uid).update({ watchedSeries });

        return res.status(200).json({ message: 'زنجیرەکە خرایە لیستی بینراوە' });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getwatchedSeries = async (req, res) => {
    const { uid } = req.user;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'هیچ ئەندامێک نەدۆزرایەوە' });
        }

        const watchedSeries = userDoc.data().watchedSeries || [];
        return res.status(200).json({ watchedSeries });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const addCommentSeries = async (req, res) => {
    const { uid } = req.user;
    const { seriesId, reviewmsg, star, spoiler } = req.body;
    const xssSeriesId = xss(seriesId);
    const xssReviewmsg = xss(reviewmsg);
    const xssStar = xss(star);
    const xssSpoiler = xss(spoiler);

    if (!xssSeriesId || !xssReviewmsg || !xssStar || !xssSpoiler) {
        return res.status(400).json({ message: "تکایە هەموو زانیاریەکان پڕ بکەوە" });
    }

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: "هیچ ئەندامێک نەدۆزرایەوە" });
        }

        const commentData = {
            uid,
            name: userDoc.data().username,
            reviewmsg : xssReviewmsg,
            star : xssStar,
            spoiler : xssSpoiler
        };

        const updates = [
            db.collection('users').doc(uid).update({
                Seriescomments: FieldValue.arrayUnion(xssSeriesId)
            }),
            db.collection('series').doc(seriesId).update({
                Seriescomments: FieldValue.arrayUnion(commentData)
            })
        ];

        await Promise.all(updates);
        return res.status(200).json({ message: "کۆمێنتەکەت زیادکرا" });
    } catch (error) {
        return res.status(500).json({ message: "‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە" });
    }
};


module.exports = { addCommentSeries, watchedSeries, getwatchedSeries, getfavSeries, favSeries, getSavedSeries, saveSeries, saveMovie, favMovie, watchedMovie, getSavedMovies, getfavMovies, getwatchedMovies, addComment };