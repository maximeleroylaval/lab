const Task = require('../models/task');

exports.get = function (req, res, next) {
    Task.findById(req.params.id, function (err, task) {
        if (err) return next(err);
        res.json(task.toClient());
    })
};

exports.get_all = function (req, res, next) {
    Task.find({user_id: req.params.id_user}, function (err, tasks) {
        if (err) return next(err);
        let output = [];
        tasks.forEach(task => {
            output.push(task.toClient());
        });
        res.json({tasks: output});
    })
};

exports.post = function (req, res, next) {
    let task = new Task({
        name: req.body.name,
        user_id: req.params.id_user
    });

    task.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json(task.toClient())
    })
};

exports.put = function (req, res, next) {
    Task.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function (err, task) {
        if (err) return next(err);
        res.json(task.toClient());
    });
};

exports.delete = function (req, res, next) {
    Task.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json(null);
    })
};