// const {check}=require('express-validator');

// const loginValidator=[
//     check('email')
//     .isEmail()
//     .withMessage('Please enter a valid email')
//     .normalizeEmail(),
//     check('password')
//     .isLength({min:4})
//     .withMessage('Password must be at least 4 characters long')

// ];

// const validationHandler=function(req,res,next){
//     const errors=validationResult(req);
//     if(errors.isEmpty()){
//         return next();
//     }
//     const extractedErrors=[];
//     errors.array().map(err=>extractedErrors.push({[err.param]:err.msg}));
//     return res.status(422).json({
//         errors:extractedErrors,
//     })

// }

function loginValidator(req,res,next){
    const {email,password}=req.body;
    if(email && password){
        if(password.length>4){
            if(email.includes("@")){
                next();
            }
            else{
                res.status(422).json({
                    errors:[{email:"Please enter a valid email"}]
                })
            }

        }
        else{
            res.status(422).json({
                errors:[{password:"Password must be at least 4 characters long"}]
            })

        }
        
      
    }
    else{
        res.status(422).json({
            errors:[{email:"Please enter a valid email",password:"Password must be at least 4 characters long"}]
        })
    }
    
}






module.exports={
    loginValidator,
    

}