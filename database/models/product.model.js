const mongoose = require('mongoose');

/* Модель продукта */
const ProductSchema = new mongoose.Schema({
    name: { type: String }, // Наименование
    img: { type: String }, // Картинка
    price: { type: String }, // Цена
    measurement: { type: String }, // Ед. измерение
    amount: { type: Number }, // Количество
    description: { type: String }, // Описание
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' } // Категория
});

module.exports = mongoose.model('Product', ProductSchema);