var express = require('express');
var router = express.Router();
var Employee=require('../models/employee');
router.get("/", function(req,res,next){
    if(req.query.type!=='null'){
        type=req.query.type;
        value=req.query.value;
        Employee.find().where(type, value).exec(function(err,success){

            if(err){
                return res.status(500).json({
                    title: 'An Error Occurred',
                    error:err
                })
            }
            res.status(200).json({
                title:'Success',
                obj:success
            })
        })
    }else {
        Employee.find().exec(function (err, emps) {
            if (err) {
                return res.status(500).json({
                    title: "An Error Occurred",
                    error: err
                })
            }
            res.status(200).json({
                title: 'Success',
                obj: emps
            })
        })
    }
})

router.post("/",function(req,res,next){
    console.log("projects");
    console.log(req.body.projects);
    console.log("end projects");
    var employee = new Employee({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone : req.body.phone,
        country : req.body.country,
        city: req.body.city,
        state : req.body.state ? req.body.state : '',
        title : req.body.title,
        division: req.body.division,
        department: req.body.department,
        manager: req.body.manager,
        employees : req.body.employees,
        projects: req.body.projects,
        canManageEmployees:req.body.canManageEmployees,
        canManageProjects:req.body.canManageProjects,
        hasManager:req.body.hasManager,
        projectManagerFor:req.body.projectManagerFor
    })
    employee.save(function(err,result){
        if(err){
            return res.status(500).json({
                title: "An Error Has Occurred",
                error: err
            })
        }
        res.status(200).json({
            title: 'Success',
            obj: result
        })
    })
})

module.exports = router;