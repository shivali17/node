var User = require('../models/user');

exports.getUsersById = function(req, res) {
    var id = req.params.id;
    User.findOne({
        _id: id
    }, function(err, response) {
        if (err) {
            return res.json(req, res);
        }

        res.json(response);
    })
}

exports.getUsersByName = function(req, res) {
    var regex = /s/i;
    User.find({
        name: regex;
    }, function(err, response) {
        if (err) {
            return res.json(req, res);
        }

        res.json(response);
    })
}
