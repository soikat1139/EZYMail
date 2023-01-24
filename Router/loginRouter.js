const express=require('express');
const {check}=require('express-validator');

const router=express.Router();

const{getlogIn,glogIn,login}=require("../controller/login");
const decorate=require('../midddleware/common/decorateHTML');
const {loginValidator}=require("../midddleware/login/loginValidators");

//AxiosError: Request failed with status code 500


router.get('/',decorate("LogIn"),getlogIn);

router.get('/glogIn',decorate("LogIn"),glogIn);

router.post('/login',login);


module.exports=router;

