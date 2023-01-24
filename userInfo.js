const axios = require('axios');
const mail=require('./googleAuth');


const user={};

user.getUserInfo=async(accessToken)=>{
    var config1 = {
        method: "get",
        url:
          "https://www.googleapis.com/oauth2/v1/userinfo",
        headers: {
          'Authorization': `Bearer ${accessToken} `,
        },
      };
  
  
      let threadId = {};
    
     
    
    
      await axios(config1)
        .then( async function (response) {
          //threadId = response.data["messages"][0].id;
    
          //console.log("ThreadId = " + threadId);
            
           // console.log("Search Result:" +JSON.stringify(response.data.messages[0].id));
  
            threadId= await response.data;
            
        })
        .catch(function (error) {
          console.log("This error is from SearchItem "+error);
        });


        // console.log(threadId)
        return threadId;


  }




  module.exports=user;