const createError = require('http-errors');
const dotenv=require('dotenv');
dotenv.config();

function notFoundHandler(req,res,next){
next(createError(404,'Your requestes Page Not Found'));
}

//defaylt error handler

function errorHandler(err,req,res,next){

    res.locals.error=process.env.NOD_ENV==='development'?err:{message:err.message};
    //check if the header is already sent
    if(!res.headersSent){
    res.status(err.status||500);
     if(res.locals.html===true){
      res.render('error',{
            title:'Error',
      });
     }
   else{
    res.json(res.locals.error);
    }
    }
    else{
        next(err);
    }


}

module.exports={
    notFoundHandler,
    errorHandler
}