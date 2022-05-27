const News = require('../database/models/news.model');

async function loadNews(req, res, next) {
    let news = await News.find().populate(['categories', 'products'])
    if(req.data === undefined) req.data = {};
    req.data.news = news;
    next();
}

async function createNews(req, res, next) {
    if(req.session.user === undefined) return res.sendStatus(401);
    if(!req.session.user.admin) return res.sendStatus(401);
    await News.create(JSON.parse(req.body.data));
    next();
}

async function actionNews(req, res, next) {
    if(req.session.user === undefined) return res.sendStatus(401);
    if(!req.session.user.admin) return res.sendStatus(401);
    if(req.query.action === 'delete') await News.findByIdAndDelete(req.params.id);
    next();
}

module.exports = {
    loadNews: loadNews,
    createNews: createNews,
    actionNews: actionNews
}