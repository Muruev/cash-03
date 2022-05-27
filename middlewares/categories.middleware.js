const Category = require('../database/models/сategory.model');
const Products = require('../database/models/product.model');

async function loadCategories(req, res, next) {
    let categories = await Category.find();

    if(req.data === undefined) req.data = {};
    req.data.categories = categories;
    next();
}

async function createCategory(req, res, next) {
    if(req.session.user === undefined) return res.sendStatus(401);
    if(!req.session.user.admin) return res.sendStatus(401);
    await Category.create(req.body);
    next();
}

async function deleteCategory(req, res, next) {
    if(req.session.user === undefined) return res.sendStatus(401);
    if(!req.session.user.admin) return res.sendStatus(401);
    await Products.deleteMany({category: req.body.category})
    await Category.findByIdAndDelete(req.body.category);
    next();
}


module.exports = {
    loadCategories: loadCategories,
    createCategory: createCategory,
    deleteCategory: deleteCategory,
}