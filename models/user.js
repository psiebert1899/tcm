var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var ApplicationUser = require('../models/applicationuser');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    image: {type: String, default:'/imgs/userImgs/defaultuserimage.png'},
    applicationUser: {type: Schema.ObjectId, ref: 'ApplicationUser'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);