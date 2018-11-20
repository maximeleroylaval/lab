exports.post = function (req, res, next) {
    if (req.body.user === undefined || req.body.user === "") {
        res.json({error: "Username cannot be empty"});
    } else {
        res.redirect('/chat?user=' + req.body.user);
    }
};

exports.renderHtml = function(req, res, next) {
    res.sendFile('login.html', {root: './public'});
};