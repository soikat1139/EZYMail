const express=require('express');
const {check}=require('express-validator');


const{profileInfo,profileSet}=require("../controller/profile.js");
const decorate=require('../midddleware/common/decorateHTML');
const avatarUploads=require("../midddleware/users/avatarUploads")
const {addUserValidors}=require('../midddleware/users/userValidators');

const router=express.Router();

router.get('/',decorate("Profile"),profileInfo);


//,addUserValidors
router.post('/',profileSet);






module.exports=router;