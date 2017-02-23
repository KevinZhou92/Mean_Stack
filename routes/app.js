var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc) {
        if (err) {
            return res.send('Error!');
        }
        res.render('node', {email : doc.email});
    });
});

router.get('/test/:msg', function(req, res, next){
    res.render('test', {message : req.params.msg});
});

router.get('/test', function(req, res, next){
    res.render('test');
});


router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName :'Kevin',
        lastName : 'Zhou',
        password : 'zpc920515',
        email : email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
