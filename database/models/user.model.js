const mongoose = require('mongoose');

/* Модель пользователя */
const UserSchema = new mongoose.Schema({
    username: { type: String }, // Логин
    password: { type: String }, // Пароль
    admin: { type: Boolean, default: false}
});

module.exports = mongoose.model('User', UserSchema);