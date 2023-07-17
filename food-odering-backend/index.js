const express = require("express")
require("dotenv").config()
require("./db/atlasConn")
const Item = require("./models/Items")
const bodyParser = require("body-parser")
const cors = require("cors")
const Category = require("./models/Category")
const Users = require("./models/Users")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const salt = 10;


const app = express()

app.use(bodyParser.urlencoded({
    extended:true
}));

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
    // res.json(item)
})

// displaying items
app.get("/items", async (req,res)=>{
    const docs = await Item.find({})
    res.send(docs)
})

// displaying categories
app.get("/categories", async (req,res)=>{
    const docs = await Category.find({})
    res.send(docs)
})

// registering user
app.post("/sign-up", async (req, res) => {
  if (await Users.findOne({ email: req.body.email })) {
    res.json({
      "status": "failed",
      "message": "Email already exists :-("
    });
  } else {
    if (req.body.password === req.body.cpassword) {
      try {
        const { fname, lname, email, password } = req.body;
        if (fname && lname && email && password) {
          const enpass = await bcrypt.hash(password, salt);
          const user = new Users({
            fname: fname,
            lname: lname,
            email: email,
            password: enpass
          });
          await user.save();

        const savedUser = await Users.findOne({email:email})
        // Generate JWT Token
        const token = jwt.sign(
            {userID:savedUser._id},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"5d"}
            )
        res.json({
            "status": "success",
            "message": "Registration Successfull :-)",
            user,
            "token":token
        })
        } else {
            res.json({
                "status": "failed",
                "message": "Please fill all the fields :-("
            });
        }
      } catch (error) {}
    } else {
      res.json({
            "status": "failed",
            "message": "Password and Confirm Password doest not match :-("
        });
    }
  }
});

// loging user
app.post("/sign-in", async (req,res)=>{
    try {
        const { email,password } = req.body
        if(email && password) {
            const user = await Users.findOne({email:email})
            if(user != null) {
                const depass = await bcrypt.compare(password,user.password)
                if((email === user.email) && depass) {
                    const savedUser = await Users.findOne({email:email})
                    // Generate JWT Token
                    const token = jwt.sign(
                        {userID:savedUser._id},
                        process.env.JWT_SECRET_KEY,
                        {expiresIn:"5d"}
                        )
                    res.json({
                        "status":"success",
                        "message":"Login Successfull :-)",
                        user,
                        "token":token
                    })
                } else {
                    res.json({
                        "status":"failed",
                        "message":"Bad Credentials :-("
                    })
                }
            } else {
                res.json({
                    "status":"failed",
                    "message":"Bad Credentials :-("
                })
            }
        } else {
            res.json({
                "status":"failed",
                "message":"Please fill all the fields :-("
            })
        }
    } catch (error) {
        
    }
})


// app.get("/:email",async(req,res)=>{
//     // const email = req.params.email
//     const exist = await Users.findOne({email:req.params.email})
//     // if(exist){
//     //     console.log(exist)
//     //     res.json(exist)
//     // }
//     // else{
//     //     console.log("no data")
//     //     res.send("hii")
//     // }
//     res.json(exist)
// })

// app.get("/:email/:password",async(req,res)=>{
//     const emailid = await Users.findOne({email:req.params.email})
//     // const user = Users.findOne({email:req.params.email,password:req.params.password})
//     if (emailid){
//         // if(bcrypt.compare())
//         if(req.params.password === emailid.password){
//             res.status(200).send("logged")
//         }
//     }

// })

app.get("/",(req,res)=>{
    res.send("<h1>Server is running ...</h1><br><p><h2>API Details <br> <ul><li>/items => for getting items</li></ul></p>")
})


app.listen(process.env.PORT,()=>{
    console.log("server started ...")
    console.log(`http://localhost:${process.env.PORT}`)
})