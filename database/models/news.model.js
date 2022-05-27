const mongoose = require('mongoose');

/* Модель продукта */
const NewsSchema = new mongoose.Schema({
    title: { type: String }, // Заголовок
    text: { type: String }, // Содержание
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Автор
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], // Продукты
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] // Категории
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('News', NewsSchema);