const { db } = require('../../config/Firebase/firebase');

const getAllNews = async (req, res) => {
    try {
        const news = await db.collection('News').get();
        const newsData = news.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return res.status(200).json({ newsData });
    } catch (error) {
        console.error('Error getting news:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const getSpecificNews = async (req, res) => {
    const { newsId } = req.params;
    try {
        const newsDoc = await db.collection('News').doc(newsId).get();
        if (!newsDoc.exists) {
            return res.status(404).json({ message: 'News not found' });
        }
        const newsData = newsDoc.data();
        return res.status(200).json({ newsData });
    } catch (error) {
        console.error('Error getting news:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const incrementViewNews = async (req, res) => {
    const { newsId } = req.params;
    console.log(newsId);
    try {
        const collectionRef = db.collection("News");
        const docRef = collectionRef.doc(newsId);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ message: 'Document not found' });
        }
        await docRef.update({ view: doc.data().view + 1 });
        return res.status(200).json({ message: 'View count incremented successfully' });
    } catch (error) {
        console.error('Error incrementing view count:', error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { getAllNews, getSpecificNews, incrementViewNews };