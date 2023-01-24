const gmailAPI=require('../googleAuth')
const userInfo=require('../userInfo')
const createError = require('http-errors');

const User=require("../models/people")
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();
const {validationResult}=require('express-validator');






function getlogIn(req,res,next){

    res.render('login')
    // next();
}

async function glogIn(req,res,next){
   const tken= await gmailAPI.getAccessToken();
//    console.log(tken)
const gUser=await userInfo.getUserInfo(tken);
// console.log(gUser)

res.locals.gUser=gUser;
    // res.render("profile",{
    //     gUser
    // })
    res.redirect("/profile")
    

}



async function login(req,res,next){
    console.log(req.body)
    try{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    // console.log(user)

    
    if(user && user._id){
        console.log(password)

        const isValidPassword=await bcrypt.compare(password,user.password);
        console.log(isValidPassword)

        if(isValidPassword){
            const userObject={
                id:user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                image:user.image
            }
            console.log(userObject)


            const token=  jwt.sign(userObject,process.env.JWT_SECRET,{
                expiresIn:process.env.JWT_EXPIRES_IN
            });
            console.log(token)
            // res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })

            res.cookie(process.env.COOKIE_NAME,token,{
                maxAge:process.env.JWT_EXPIRES_IN,
                httpOnly:true,
                signed:true
            });
          

            res.locals.loggedInUser=userObject;
            // console.log('hekko')
            // res.render('index',{
            //     userObject
            // })
           res.json(userObject)



    }
    else{
        throw createError(401,'Invalid Email or Password');

    }


}
else{
    throw(createError(401,'Log In Failed'))

}}
catch(err){
    res.render('login',{
        data:req.body.email,
        error:err.message
    })
}
}









module.exports= {
    getlogIn,
    glogIn,
    login
 }