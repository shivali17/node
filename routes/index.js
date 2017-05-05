var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router.route('/v1/users/:id')
    .get(userController.getUsersById);

router.route('/v1/users')
    .get(userController.getUsersByName);

module.exports = router;
