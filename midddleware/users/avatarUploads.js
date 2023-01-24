
const uploader = require("../../utilities/singleUpload");

function avatarUploads(req, res, next) {
    const upload=uploader(
        "avatars",
        ["image/jpeg","image/jpg","image/png"],
        1000000,
        "Only .jpg, .jpeg and .png format allowed!"
);

upload.any()(req,res,(err)=>{

    if(err){
        res.status(500).json({
           error:{
            avatar:{
                msg:err.message
            }
           }
        })
    }else{
        next();
    }

});

}

module.exports = avatarUploads;