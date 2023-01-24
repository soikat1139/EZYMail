const dotenv=   require('dotenv');
dotenv.config();
const jwt=require('jsonwebtoken');


function authenticate(req, res, next) {
    
    // console.log(Object.keys(req.signedCookies).includes(process.env.COOKIE_NAME));

    const token = req.signedCookies[process.env.COOKIE_NAME] ? req.signedCookies[process.env.COOKIE_NAME] : null;
    
    if(token) {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        console.log(user)
        res.locals.loggedInUser=user;
        req.user=user;
        
    }
    else{
        res.redirect('/');
    }

    next();


}


module.exports = authenticate;