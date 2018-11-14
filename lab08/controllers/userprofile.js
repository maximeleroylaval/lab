exports.get = function (req, res, next) {
    res.sendFile('user_profile.html', {root: './public'});
};
