var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/user',function(req,res,next){
    var user = new User({
        firstName:req.body.firstName,
        lastName : req.body.lastName,
        password : passwordHash(req.body.password),
        email : req.body.email
    });
    user.save(function(err,result){
        if(err){
            return res.status(500).json({
                title: 'An Error Occurred',
                error: err
            })
        }
        res.status(200).json({
            message: 'Success',
            obj: result
        })
    })
});
router.post('/user/signin',function(req,res,next){
    User.findOne({email: req.body.email},function(err,user){
        if(err){
            res.status(500).json({
                title: 'An error occurred',
                error: err
            })
        }
        if(!doc){
            res.status(401).json({
                title: 'User Not Authorized',
                error: {message:'User Could Not Be Found'}
            })
        }
        var token = jwt.sign({user:user},'replaceThisSecret',{expiresIn: 7200});
        res.status(200).json({
            message: 'Success',
            obj: token,
            userId : user._id
        })
    })
});
module.exports = router;