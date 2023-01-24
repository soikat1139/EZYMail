
const avatarUploads=require("../midddleware/users/avatarUploads")

const bcrypt=require('bcrypt');
const User=require('../models/people');



function profileInfo(req,res,next){
    res.render('profile');
    // next();
}



async function profileSet(req,res,next){

    console.log(req.body)

let newUsers;
const hashedPassword= await bcrypt.hash(req.body.password,10);


    newUsers={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:hashedPassword,
       image:req.body.image
    }

    


const newuser=new User(newUsers);

try{
    await newuser.save();

   res.send('success')
}
catch(err){
    console.log(err)
    res.send('error')
}



    
    // next();
}


module.exports={
    profileInfo,
    profileSet,

}