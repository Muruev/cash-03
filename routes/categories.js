var express = require('express');
var router = express.Router();

let Categories = require('../middlewares/categories.middleware')

router.post('/create', Categories.createCategory, function(req, res, next) {
  res.sendStatus(200)
});

router.post('/delete', Categories.deleteCategory, function(req, res, next) {
  res.sendStatus(200)
});

module.exports = router;
