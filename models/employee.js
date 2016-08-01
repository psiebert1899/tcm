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
    employees : [{type: String}],
    projects : [{type: String}]

});

module.exports = mongoose.model('Employee', schema);