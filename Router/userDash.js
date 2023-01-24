const express=require('express');

const router=express.Router();
const {userDash}=require('../controller/userDash.js');
const decorate=require('../midddleware/common/decorateHTML');
const authenticate=require('../midddleware/login/authenticate');





router.get('/',decorate("UserDashBoarD"),authenticate, userDash);




module.exports=router;