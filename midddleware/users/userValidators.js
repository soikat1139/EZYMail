


const {check,validationResult}=require('express-validator');

const addUserValidors=[
    check('firstName').not().isEmpty().withMessage('Name is required').trim(),
    check('lastName').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Email is required'),
    check('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
]


const addUserValidationHandlers=(req,res,next)=>{
    const errors=validationResult(req);
    
    const mappedErrors=errors.mapped();

    
}

module.exports={addUserValidors


};