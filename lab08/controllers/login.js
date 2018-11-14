const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../controllers/users');

const appkey = 'StrongAndSecretPass';

exports.post = function (req, res, next) {
    if (req.body.user === undefined || req.body.password === undefined) {
        res.sendStatus(401);
    } else {
        User.getByName(req.body.user, function (err, user) {
            if (err) return next(err);

            if (user === null) {
                res.sendStatus(401);
            } else {
                bcrypt.compare(req.body.password, user.password, function(err, isOk) {
                    if (isOk) {
                        jwt.sign({user}, appkey, { expiresIn: 60 * 60 }, (err, token) => {
                            res.json({token});
                        });
                    } else {
                        res.sendStatus(401);
                    } 
                });    
            }
        });
    }
};

exports.checkAuth = function (req, res, next) {
    const token = req.cookies['auth_token'];
    if (token !== undefined) {
        jwt.verify(token, appkey, (err, authData)=>{
            if (err){
                res.sendStatus(401);
            } else{
                next();
            }
        });
    } else {
        res.sendStatus(401);
    }
};