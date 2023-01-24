const express=require('express');
const dotenv=require('dotenv');
const cookieParser = require('cookie-parser');
const path=require('path');
const mongoose=require('mongoose');
const {
    notFoundHandler,
    errorHandler
}=require('./midddleware/common/errorHandler');

const loginRouter=require('./Router/loginRouter');
const profileRouter=require('./Router/profileRouter');
const userDash=require('./Router/userDash');




const app=express();

dotenv.config();
//set view engine
app.set('view engine','ejs');
//set view
app.set('views','views');

//connect to database
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{
    console.log('Connected to database');
}).catch(err=>{
    console.log(err);
});
//Request Parser
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
















//Routing
app.use('/',loginRouter)

app.use("/userdash",userDash)

app.use("/profile",profileRouter)














//Error Handling
app.use(notFoundHandler);

app.use(errorHandler);















app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});