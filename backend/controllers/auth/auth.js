const { auth, db, signOut } = require('../../config/Firebase/firebase');
const xss = require('xss')

const register = async (req, res) => {
    const { email, password, name, username } = req.body;
    const sanEmail = xss(email)
    const sanPassowrd = xss(password)
    const sanName = xss(name)
    const sanUsername = xss(username)

    if (!sanEmail || !sanPassowrd || !sanName || !sanUsername) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    try {
        const exsitingUser = await db.collection('users').where("username", "==", sanUsername).get();
        if (!exsitingUser.empty) {
            return res.status(404).json({
                message: "نازناو پێشتر بەکار هێنراوە",
            })
        }

        const user = await auth.createUser({
            email: sanEmail,
            password: sanPassowrd,
            displayName: sanUsername,
            emailVerified: true
        });

        try {
            await db.collection('users').doc(user.uid).set({
                email: sanEmail,
                name: sanName,
                username: sanUsername
            });
        } catch (error) {
            console.error("Error writing to Firestore:", error);
            await auth.deleteUser(user.uid);
            return res.status(500).json({ message: "هەڵەیەک ڕویدا تکایە هەوڵ بدەوە" });
        }

        return res.status(201).json({
            message: "هەژمارەکەت بە سەرکەوتوی دروستکرا"
        })
    } catch (error) {
        console.error("Registration error:", error);
        if (error.code === 'auth/email-already-exists') {
            return res.status(400).json({ message: "ئیمەیڵەکە پێشتر بەکارهێنراوە" });
        } else if (error.code === 'auth/weak-password') {
            return res.status(400).json({ message: "وشەی نهێنیەکی باشتر بەکار بهێنە" });
        } else if (error.code === 'auth/invalid-email') {
            return res.status(400).json({ message: "ئیمەیڵێکی دروست بەکار بهێنە" });
        }
        return res.status(500).json({ message: "هەڵەیەک ڕویدا تکایە هەوڵ بدەوە" });
    }
}

const login = async (req, res) => {
    const { email } = req.body;
    const sanEmail = xss(email)
    if (!sanEmail) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    try {
        const user = await auth.getUserByEmail(sanEmail);
        if (!user) {
            return res.status(404).json({
                message: "هیج هەژمارێک نەدۆزرایەوە",
            })
        }

        const idToken = req.headers.authorization?.split("Bearer ")[1];
        if (!idToken) {
            res.status(401).send("Token required");
        }

        const authorization = await auth.verifyIdToken(idToken);
        if (!authorization) {
            return res.send(401).json({ message: 'رێگەپێنەدراوە' });
        }

        const expiresIn = 60 * 60 * 24 * 13 * 1000;
        const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
        res.cookie('idToken', sessionCookie, { httpOnly: false, maxAge: expiresIn, sameSite: 'lax' });

        return res.status(200).json({
            message: "بە سەرکەوتووی چویتە ژورەوە"
        })
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            message: "هەڵەیەک ڕویدا تکایە هەوڵ بدەوە"
        })
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('idToken');
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Logout failed" });
    }
};

const passwordReset = async (req, res) => {
    const { email } = req.body;
    const sanEmail = xss(email)
    if (!sanEmail) {
        return res.status(400).json({
            message: "تکایە ئیمەیڵەکەت بنووسە"
        })
    }

    try {
        const user = await auth.getUserByEmail(sanEmail);
        if (!user) {
            return res.status(404).json({
                message: "هیچ ئەندامێک نەدۆزرایەوە"
            })
        }

        if (Date.now() >= user.passwordResetExpiration) {
            await auth.generatePasswordResetLink(sanEmail);
            const expirationTime = Date.now() + (60 * 60 * 1000);
            await db.collection('users').doc(user.uid).set({
                passwordResetExpiration: expirationTime,
            }, { merge: true });

            return res.status(200).json({
                message: "بەستەری گۆڕینی وشەی نهێنی بە سەرکەوتووی نێردرا، تکایە سەیری ئیمەیڵەکەت بکە بۆ گۆڕینی وشەی نهێنی"
            })
        } else {
            return res.status(429).json({
                message: "تکایە دواتر داوای بەستەری نوێ بکەرەوە"
            });
        }
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            return res.status(404).json({
                message: "هیچ ئەندامێک نەدۆزرایەوە"
            })
        }
        return res.status(500).json({
            message: "هەڵەیەک ڕویدا"
        })
    }
}

module.exports = {
    register,
    login,
    logout,
    passwordReset
}