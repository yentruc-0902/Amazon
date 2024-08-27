const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");

const user = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenicate = require("../middleware/authenticate")



router.get("/getproducts", async(req,res)=>{
    try{
        const productsdata = await Products.find();
        //console.log("console the data"+productsdata);
        res.status(201).json(productsdata);
    }catch (error){
        console.log("error" +error.message);
    }
});



router.get ("/getproductsone/:id",async(req,res)=>{
    try {
        const {id} = req.params;
       //console.log(id);
      const indvidualdata = await Products.findOne({id:id});
       
      // console.log(indvidualdata +"indvidual data");
       res.status(201).json(indvidualdata);

    } catch (error) {
        res.status(400).json(indvidualdata);
      console.log("error" + error.message);
    }
});

router.post("/register" , async(req, res) =>{
   //    console.log(req.body);

   const{fname , email,mobile, password, cpassword} = req.body;

   if (!fname|| !email|| !mobile|| !password|| !cpassword){
    res.status(422).json({error:"fill the all data"});
    console.log("not data available ")
   };
   
   try {

    const preuser = await user.findOne({ email: email });

    if (preuser) {
        res.status(422).json({ error: "This email is already exist" });
    } else if (password !== cpassword) {
        res.status(422).json({ error: "password are not matching" });;
    } else {
         const finaluser = new user({
            fname, email, mobile, password, cpassword
        });

    // yaha pe hasing krenge
    const storedata = await finaluser.save();
    console.log(storedata );//+ "user successfully added"
    res.status(201).json(storedata);
      
    }
}catch(error){

}
});

router.post("/login", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the details" });
    }

    try {

        const userlogin = await user.findOne({ email: email });
        console.log(userlogin + "user value");
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            console.log(isMatch + "pass mactch")
            //token
            const token = await userlogin.generateAuthtoekn();
            // console.log(token)

            res.cookie("Amazonweb",token,{
                expires:new Date(Date.now() + 90000),
                httpOnly:true
            })
                if(!isMatch){
                    res.status(400).json({error:"invalid detials"})
                }else{
                    res.status(201).json({userlogin});
                }
            }else{
                res.status(400).json({error:"invalid detials"})
            }
        } catch(error){
            res.status(400).json({error:"invalid detials"})

        }

});
    

router.post("/addcart/:id",authenicate,async(req, res)=>{
    try {
        const{id} = req.params;
        const cart = await Products.findOne({id:id});
        console.log(cart + "cart value")

        const UserContact = await user.findOne({_id:req.userID});
        console.log(UserContact);

        if(UserContact){
            const cartData = await UserContact.addcartdata(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        }else{
            res.status(401).json({error:"invalid user"});
        }
    } catch (error){
  res.status(401).json({error:"invalid user"});
    }
})


router.get('/cartdetails',authenicate,async(res,req)=>{
    try{
            const buyuser = await user.findOne({_id:req.userID});
            res.status(201).json(buyuser);
    }catch(error){
        console.log("error"+error)
    }

})

router.get("/validuser", authenicate, async (req, res) => {
    try {
        const validuserone = await user.findOne({ _id: req.userID });
       
        res.status(201).json(validuserone);
    } catch (error) {
        console.log(error + "error" );
    }
});


module.exports = router;