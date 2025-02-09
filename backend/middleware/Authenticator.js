const { auth } = require('../config/Firebase/firebase');

const authenticateUser = async (req, res, next) => {
    const idToken = req.cookies.idToken;
    if (!idToken) {
        return res.status(401).json({ error: "Unauthorized: Token required" });
    }
    try {
        const decodedToken = await auth.verifySessionCookie(idToken);
        if (!decodedToken) {
            return res.status(401).json({ error: "Unauthorized: Invalid token" });
        }
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
    }
};

module.exports = { authenticateUser };