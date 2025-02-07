const { auth, db } = require('../../config/Firebase/firebase');

const getSavedMovies = async (req, res) => {
    const { uid } = req.body; 
    if (!uid) {
        return res.status(400).json({ message: "uid field is required" });
    }

    try {
        const userDoc = await db.collection('users').doc(uid).get({
            fields: ["savedmovies", "savedseries","favmovies", "favseries","watchedmovies", "watchedseries"]
        });

        if (!userDoc.exists) {
            return res.status(404).json({ message: "User not found" });
        }

        const userData = userDoc.data();
        const savedmovies = userData.savedmovies || [];
        const savedseries = userData.savedseries || [];
        const favmovies = userData.favmovies || [];
        const favseries = userData.favseries || [];
        const watchedmovies = userData.watchedmovies || [];
        const watchedseries = userData.watchedseries || [];

        return res.status(200).json({ savedmovies, savedseries,favmovies,favseries,watchedmovies,watchedseries });
    } catch (error) {
        console.error("Error getting saved movies:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};


