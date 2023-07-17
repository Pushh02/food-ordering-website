const moment = require('moment');
const mongoose = require("mongoose");

const user = mongoose.Schema({
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    // date:{
    //     type:Date,
    //     default:moment().format("Do MMMM YYYY")
    // }
});

module.exports = mongoose.model("users",user)