let express = require('express');
let Users = require('../middlewares/users.middleware')

let router = express.Router();

/* POST users page. */
router.post('/', Users.loadUser, function(req, res, next) {
  res.sendStatus(200);
});

/* GET users page. */
router.get('/logout', function(req, res, next) {
  req.session.user = undefined;
  res.sendStatus(200);
});

module.exports = router;
