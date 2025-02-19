const { db } = require('../../config/Firebase/firebase');
const xss = require('xss');

const getAllNews = async (req, res) => {
    try {
        const news = await db.collection('News').get();
        const newsData = news.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return res.status(200).json({ newsData });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const getNewestNews = async (req, res) => {
    try {
        const news = await db.collection('News').limit(6).get();
        const newsData = news.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return res.status(200).json({ newsData });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
}

const getSpecificNews = async (req, res) => {
    const { newsId } = req.params;
    const sanNewsId = xss(newsId);

    try {
        const newsDoc = await db.collection('News').doc(sanNewsId).get();
        if (!newsDoc.exists) {
            return res.status(404).json({ message: 'هەواڵەکە نەدۆزرایەوە' });
        }
        const newsData = newsDoc.data();
        return res.status(200).json({ newsData });
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

const incrementViewNews = async (req, res) => {
    const { newsId } = req.params;
    const sanNewsId = xss(newsId);

    try {
        const collectionRef = db.collection("News");
        const docRef = collectionRef.doc(sanNewsId);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ message: 'هەواڵەکە نەدۆزرایەوە' });
        }
        await docRef.update({ view: doc.data().view + 1 });
        return res.status(200);
    } catch (error) {
        return res.status(500).json({ message: '‌هەڵەیەک ڕویدا تکایە هەوڵ بدەوە' });
    }
};

module.exports = { getNewestNews, getAllNews, getSpecificNews, incrementViewNews };