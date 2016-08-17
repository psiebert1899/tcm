var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var passwordHash = require('password-hash/lib/password-hash');

var User = require('../models/user');
var ApplicationUser = require('../models/applicationuser');

router.post('/signin',function(req,res,next){

    User.findOne({email: req.body.email}).populate('applicationUser').exec(function(err,user){
        if(err){
            res.status(500).json({
                title: 'An error occurred',
                error: err
            })
        }
        if(!user || user === null){
            res.status(401).json({
                title: 'User Not Authorized',
                error: {message:'User Could Not Be Found'}
            })
        }
        var token = jwt.sign({user:user},'replaceThisSecret',{expiresIn: 7200});
        
        if(!passwordHash.verify(req.body.password, user.password)){
            return res.status(500).json({
                title: 'Incorrect User Email or Password',
                error: {message: 'Could not verify user credentials'}
            })
        }

        res.status(200).json({
            message: 'Success',
            obj: token,
            userId : user._id,
            applicationUser: user.applicationUser,
        })
    })

});
router.post('/',function(req,res,next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: passwordHash.generate(req.body.password),
        email: req.body.email
    });
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An Error Occurred',
                error: err
            })
        }

        var applicationUser = new ApplicationUser({
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.email,
            user: result._id

        })
        applicationUser.save(function (err, succ) {
            if (err) {
                return res.status(500).json({
                    title: 'An Error Occurred',
                    error: err
                })

            }
            result.applicationUser=applicationUser;
            result.save();
            res.status(200).json({
                message: 'Success',
                obj: result,
                appUser: succ
            })
        })
    })
})
module.exports = router;
