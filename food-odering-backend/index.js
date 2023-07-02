const express = require("express")
require("dotenv").config()
require("./db/atlasConn")
const Item = require("./models/Items")
const bodyParser = require("body-parser")
const cors = require("cors")
const Category = require("./models/Category")

const app = express()

app.use(bodyParser.json())
app.use(cors())


app.post("/post",async(req,res)=>{
    const item  = new Item()
    item.name = req.body.name
    item.img = req.body.img
    item.price = req.body.price
    item.description = req.body.description
    // const doc = await item.save()
    // res.json(doc)
    res.json(item)
})

app.get("/items", async (req,res)=>{
    const docs = await Item.find({})
    res.send(docs)
})

app.get("/categories", async (req,res)=>{
    const docs = await Category.find({})
    res.send(docs)
})


app.listen(process.env.PORT,()=>{
    console.log("server started ...")
    console.log(`http://localhost:${process.env.PORT}`)
})