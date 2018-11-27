const User = require('../models/user');

exports.get = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user.toClient());
    })
};

exports.post = function (req, res, next) {
    let user = new User({});

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json(user.toClient());
    })
};

exports.delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json(null);
    })
};