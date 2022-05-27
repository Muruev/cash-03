const Product = require('../database/models/product.model');

async function loadProducts(req, res, next) {
    let products = await Product.find().populate('category');

    if(req.data === undefined) req.data = {};
    req.data.products = products;
    next();
}

async function createProduct(req, res, next) {
    if(req.session.user === undefined) return res.sendStatus(401);
    if(!req.session.user.admin) return res.sendStatus(401);
    await Product.create(req.body);
    next();
}

async function actionProduct(req, res, next) {
    if(req.session.user === undefined) return res.sendStatus(401);
    if(!req.session.user.admin) return res.sendStatus(401);
    if(req.query.action === 'delete') await Product.findByIdAndDelete(req.params.id)
    if(req.query.action === 'update') await Product.findByIdAndUpdate(req.params.id, req.body)
    next();
}


module.exports = {
    loadProducts: loadProducts,
    createProduct: createProduct,
    actionProduct: actionProduct
}