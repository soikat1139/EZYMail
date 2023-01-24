
function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_message


){
    const UPLOAD_FOLDER=`${__dirname}/../public/uploads/${subfolder_path}`;

    //define storage
    const storage=multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,UPLOAD_FOLDER);
        },
        filename:(req,file,cb)=>{
            const uniqueName=`${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`;
            cb(null,uniqueName);
        }
    });
    //prepare the final multer upload object
    const upload=multer({
        storage,
        limits:{fileSize:max_file_size},
        fileFilter:(req,file,cb)=>{
            if(allowed_file_types.includes(file.mimetype)){
                cb(null,true);
            }else{
                cb({message:error_message});
            }
        }
    }).single("avatar");
    


    return upload;
}
module.exports=uploader;