var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    email: {type: String, required: true},
    image: {type: String, default:'/imgs/userImgs/defaultuserimage.png'},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type:String,required:true},
    country : {type:String, required: true},
    city : {type:String, required: true},
    state : {type:String},
    title : {type:String},
    division : {type: String},
    department : {type: String},
    manager : {type: String},
    employees : [{type: Schema.Types.ObjectId, ref:'Employee'}],
    projects : [{type: Schema.Types.ObjectId, ref:'Project'}],
    hasManager:{type:Boolean, required:true , default:false},
    canManageEmployees: {type:Boolean,required: true,default:false},
    canManageProjects:{type:Boolean ,required:true,default:false},
    projectManagerFor:[{type:Schema.Types.ObjectId,ref:'Project'}],
    trainings:[{
        subject:String,
        organization:String,
        length:Number,
        date:Date
    }],
    skills:[{name:String,level:String}]

});

module.exports = mongoose.model('Employee', schema);