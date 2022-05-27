var express = require('express');
var router = express.Router();

let News = require('../middlewares/news.middleware')

router.post('/create', News.createNews, function(req, res, next) {
  res.sendStatus(200)
});

router.post('/:id', News.actionNews, function(req, res, next) {
  res.sendStatus(200)
});

module.exports = router;
