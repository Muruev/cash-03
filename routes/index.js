var express = require('express');
var router = express.Router();

let Products = require('../middlewares/products.middleware')
let Categories = require('../middlewares/categories.middleware')
let News = require('../middlewares/news.middleware')

router.get('/',
    News.loadNews,
    Products.loadProducts,
    Categories.loadCategories, function(req, res, next) {

  res.render('pages/index', { user: req.session.user, data: req.data });
});

router.get('/products', Products.loadProducts, Categories.loadCategories, function(req, res, next) {
  if(req.session.user === undefined) return res.redirect('/')
  res.render('pages/products', { user: req.session.user, data: req.data });
});

router.get('/news',
    News.loadNews,
    Products.loadProducts,
    Categories.loadCategories, function(req, res, next) {

  if(req.session.user === undefined) return res.redirect('/')
  res.render('pages/news', { user: req.session.user, data: req.data });
});

module.exports = router;
