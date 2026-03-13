const jwt = require("jsonwebtoken");


function auth(req,res,next){
    const token = req.headers.authorization

    if(!token){
       return  res.json({
            msg:"invalid credentials"
        })
    }
    try{
    const verified =jwt.verify(token,"secretkey");
    req.userid=verified.id;
    next()
    }catch(err){
        res.json({
            msg:"invalid token"
        })
    }
}

module.exports = auth