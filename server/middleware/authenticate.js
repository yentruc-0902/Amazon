const jwt = require("jsonwebtoken");
const user = require("../models/userSchema");
const secretKey = process.env.KEY;


const authenicate = async(req,res,next)=>{
    try {
        const token = req.cookies.Amazonweb;
        
        const verifyToken = jwt.verify(token,secretKey);
        console.log(verifyToken);
        const rootUser = await user.findOne({_id:verifyToken._id,"tokens.token":token});
       console.log(rootUser);

        if(!rootUser){ throw new Error("User Not Found") };

        req.token = token; 
        req.rootUser = rootUser;   
        req.userID = rootUser._id;   
    
        next();  


    } catch (error) {
        res.status(401).send("Unauthorized:No token provided");
        console.log(error);
    }
};


module.exports = authenicate;