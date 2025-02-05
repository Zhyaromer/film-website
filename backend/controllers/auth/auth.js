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
            return res.status(500).json({ message: "Error creating user in database", errorCode: "FIRESTORE_ERROR" });
        }

        return res.status(201).json({
            message: "User created successfully"
        })
    } catch (error) {
        console.error("Registration error:", error);
        if (error.code === 'auth/email-already-in-use') { 
            return res.status(400).json({ message: "User with this email already exists" });
        }
        return res.status(500).json({ message: "Something went wrong" }); 
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
        const user = await auth.signInWithEmailAndPassword(email, password);
        if (!user) {
            return res.status(404).json({
                message: "no user found",
            })
        }

        return res.status(200).json({
            message: "User logged in successfully",
            uid: user.user.uid
        })

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
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