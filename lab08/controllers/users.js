const bcrypt = require('bcrypt');

const User = require('../models/user')

exports.post = function (req, res, next) {
    if (req.body.user === undefined || req.body.password === undefined) {
        res.sendStatus(401);
    } else {
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            const user = new User({
                name : req.body.user,
                password : hash
            });
            user.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.sendStatus(200);
            })
        });
    }
};

exports.getByName = function(name, callback) {
    User.findOne({ 'name': name }, function (err, user) {
        callback(err, user);
    })
}