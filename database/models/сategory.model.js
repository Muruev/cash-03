const mongoose = require('mongoose');

/* Модель категория  */
const CategorySchema = new mongoose.Schema({
    name: { type: String }, // Наименование
});

module.exports = mongoose.model('Category', CategorySchema);