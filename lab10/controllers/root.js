exports.get = function (req, res, next) {
    res.sendFile('index.html', {root: './public'});
};