require('dotenv').config();
const express = require('express');
const app  = express();
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file , cb)=>{
        cb(null , './public/images');
    },
    filename : (req, file , cb )=>{
        cb(null , Date.now() + "_" + file.originalname);
    }
});
const upload = multer({storage : storage});

app.post('/upload' ,upload.single('img') , (req, res , next)=>{
    console.log(req);
    res.send(req.file.originalname);
});
app.post('/upload/multi' , upload.array('img' , 10) , (req , res , next)=>{
    // console.log(req)
    req.files.forEach(file=>{
        console.log(file.filename);
    })
    res.send(req.files);
})
app.listen(process.env.PORT ,()=> console.log(`Server is running at port number ${process.env.PORT}`));