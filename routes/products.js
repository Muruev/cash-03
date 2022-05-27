var express = require('express');
var router = express.Router();

let Products = require('../middlewares/products.middleware')
let Categories = require('../middlewares/categories.middleware')

router.post('/create', Products.createProduct, function(req, res, next) {
  res.sendStatus(200)
});

router.post('/:id', Products.actionProduct, function(req, res, next) {
  res.sendStatus(200)
});

module.exports = router;
