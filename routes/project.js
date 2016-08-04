var express = require('express');
var router = express.Router();

var Project = require('../models/project');

router.post('/',function(req,res,next){
    console.log("body:" +req.body.organization);
    var project = new Project({
        organization: req.body.organization,
        name:req.body.name,
        image:req.body.image,
        manager:req.body.manager
    });
    console.log(project);
    project.save(function(err,result){
        if(err){
            return res.status(500).json({
                title:'An error occurred',
                error: err
            })
            res.status(200).json({
                title:'Success',
                obj:result
            })
        }
    })
});
module.exports = router;