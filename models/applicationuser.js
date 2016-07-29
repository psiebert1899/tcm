var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');
var schema = new Schema({
    firstName : {type: String},
    lastName : {type: String},
    email : {type: String},
    user: {type: Schema.ObjectId , ref: 'User' },
    image: {type: String, default:'/imgs/userImgs/defaultuserimage.png'},
    manager: {type:Schema.ObjectId, ref: 'ApplicationUser'},
    employees: [{type: Schema.ObjectId, ref : 'ApplicationUser'}]
})
module.exports = mongoose.model('ApplicationUser', schema);