const { auth, db } = require('../../config/Firebase/firebase');

const register = async (req, res) => {
    const { email, password, name, username } = req.body;
    console.log(email)
    if (!email || !password || !name || !username) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    try {
        const user = await auth.createUser({
            email,
            password,
            displayName: username,
            emailVerified: true
        });

        try {
            await db.collection('users').doc(user.uid).set({
                email,
                name,
                username,
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
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    try {
        const user = await auth.getUserByEmail(email);
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
        res.cookie('idToken', sessionCookie, { httpOnly: false, maxAge: expiresIn, sameSite: 'strict' });

        return res.status(201).json({
            message: "بە سەرکەوتووی جویتە ژورەوە"
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
        await auth.signOut();
        return res.status(200).json({
            message: "User logged out successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
}

const passwordReset = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({
            message: "email field is required"
        })
    }

    try {
        await auth.sendPasswordResetEmail(email);
        return res.status(200).json({
            message: "Password reset email sent successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
}

module.exports = {
    register,
    login,
    logout,
    passwordReset
}