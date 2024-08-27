
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
 const jwt = require("jsonwebtoken");
 const secretKey = process.env.KEY;

const userSchema = new mongoose.Schema({
    fname: {
        type:String,
        require: true,
        trim : true
    },
    email: {
        type:String,
        require: true,
        unique: true,
        valitate(value){
            if(!validator.isEmail(value)){
                throw new Error("not valid email address")
            }
        }
    },
    mobile: {
        type:String,
        require: true,
        unique: true,
        maxlength:10
    },
    password: {
        type:String,
        require: true,
        minlegnth: 6
    },
    cpassword: {
        type:String,
        require: true,
        minlegnth: 6
    },
    tokens :[
        {
            token : {
                type:String,
                required: true,
       
            }
        }
    ],
    carts : Array 
});
userSchema.pre("save",async function(next){
    if(this.isModified("password")){
           this.password = await bcrypt.hash(this.password,12);
    this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();

});

// token 
userSchema.methods.generateAuthtoekn = async function(){
    try {
        let token = jwt.sign({ _id:this._id},secretKey);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;

    } catch (error) {
        console.log(error);
    }
}

userSchema.method.addcartdata = async function (cart){
    try{
        this.carts = this.carts.concat(cart);
        await this.save()
        return this.carts
    }catch(error){
        console.log(error)
    }
}

const user = new mongoose.model("user",userSchema);

module.exports = user;
