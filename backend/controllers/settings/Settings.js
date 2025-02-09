const { db, auth } = require('../../config/Firebase/firebase');

const getSettings = async (req, res) => {
    const { uid } = req.user;
    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: "User not found" });
        }
        const userData = userDoc.data();
        return res.status(200).json({ userData });
    } catch (error) {
        console.error("Error getting user data:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

const changeName = async (req, res) => {
    const { uid } = req.user;
    const { name, username } = req.body;

    if (!name || !username) {
        return res.status(400).json({ message: "Name, and username are required" });
    }

    try {
        const userDoc = await db.collection('users').where("username", "==", username).get();
        const isTaken = userDoc.docs.some(doc => doc.id !== uid);

        if (isTaken) {
            return res.status(400).json({ message: "Username is already taken" });
        }

        const updates = [
            db.collection('users').doc(uid).update({ name, username }),
            auth.updateUser(uid, {
                displayName: username
            })
        ];

        await Promise.all(updates);

        return res.status(200).json({
            message: "Profile updated successfully"
        });
    } catch (error) {
        console.error("Error updating profile:", error);
        return res.status(500).json({
            message: "Failed to update profile",
            error: error.message
        });
    }
};

module.exports = { getSettings, changeName }