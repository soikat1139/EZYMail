const moongoose=require('mongoose');

//Create a user schema for user database
const peopleSchema=new moongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    
    image:{
        type:String
    }
},
    {
        timestamps:true
    }
    
);

const people=moongoose.model('people',peopleSchema);

module.exports=people;