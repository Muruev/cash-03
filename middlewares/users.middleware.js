const User = require('../database/models/user.model');

async function loadUser(req, res, next) {
    let user = await User.findOne(req.body);
    if(user == null) return res.sendStatus(401);
    req.session.user = user;
    next();
}

module.exports = {
    loadUser: loadUser
}