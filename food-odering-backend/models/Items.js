const mongoose = require("mongoose")

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    }
    
})

module.exports = mongoose.model("items",itemSchema)