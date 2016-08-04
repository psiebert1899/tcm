var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    organization: {type:String, required: true},
    name: {type:String,required:true},
    image: {type:String, default:'/imgs/userImgs/defaultuserimage.png'},
    manager:{type:String,required:true}
});

module.exports = mongoose.model('Project', schema);