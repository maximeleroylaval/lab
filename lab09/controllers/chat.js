exports.renderHtml = function(req, res, next) {
    if (req.query.user === undefined || req.query.user === "") {
        res.sendFile('error.html', {root: './public'});
    } else {
        res.sendFile('chat.html', {root: './public'});
    }
};