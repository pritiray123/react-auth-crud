const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const { usermodel: Users } = require("../databases/user");
const jwt = require("jsonwebtoken")
const auth= require("../middleware/verifytoken")
router.post("/signup",async(req,res)=>{
    const hashed=await bcrypt.hash(req.body.password,10);
    const user = new Users({
        email:req.body.email,
        password:hashed
    })

        await user.save()

    res.json("user redgistered")
})

router.post("/login",async(req,res)=>{
    const email=req.body.email
    const password = req.body.password

    const user = await Users.findOne({email})

    if(!user){
        res.json({
            msg:"user not found"
        })
    }
    const valid = await bcrypt.compare(password,user.password)
    
    if(!valid){
        res.json({
            msg:"incorrect credentials"
        })
    }

    const token = jwt.sign(
        {id:user._id},"secretkey"
    )

    res.json(
        {token:token}

    ) 
    console.log(token)  
})

module.exports=router