var express = require('express');
var router = express.Router();
var ApplicationUser = require('../models/applicationuser');
var jwt = require('jsonwebtoken');

router.post('/',function(req,res,next){
    var decoded = jwt.decode(req.query.token);
    ApplicationUser.findById(decoded.user.applicationUser._id,function(err,success){
        if(err){
            return res.status(500).json({
                title: 'An Error Occurred',
                error: err
            })
        }else{
            console.log(success);
            res.status(200).json({
                title: 'Success',
                obj: success
            })
        }
    })
})
module.exports = router;