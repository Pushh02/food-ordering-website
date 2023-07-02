const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://rosh0409:rosh0409@cluster0.cvohyfl.mongodb.net/EPIC_CAFE?retryWrites=true&w=majority").then(()=>{
    console.log("connected")
}).catch((e)=>{
    console.log(e)
})