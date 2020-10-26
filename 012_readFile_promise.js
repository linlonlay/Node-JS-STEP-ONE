const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const { resolve } = require('path');
const { rejects } = require('assert');
require('dotenv').config();
const cType = {
    '.html' : 'text/html',
    '.png'  : "image/png",
    '.jpg'  : "image/jpeg"
}
const checkFileExit = (filePath)=>{
    return new Promise((resolve , rejects)=>{
        fs.access(filePath , fs.F_OK ,(err)=>{
            if(err){
                rejects(err);
            }else{
                resolve(filePath);
            }
        })
    });
}
const myreadFile = (filePath)=>{
    return new Promise((resolve , rejects)=>{
        fs.readFile(filePath ,(err , data)=>{
            if(err) {
                rejects(err);
            }
            else{
                resolve(data);
            }
        })
    })
}
const start = (req , res)=>{
    let param = url.parse(req.url , true);
    let oriPath = param.pathname;
    let filePath = __dirname + oriPath ;
    let ext = path.extname(filePath);
    checkFileExit(filePath)
    .then(myreadFile)
    .then(data=>{
        res.writeHead(200 , {"Content-Type" : cType[ext]});
        res.write(data);
        res.end();
    })
    .catch(err =>{
        res.writeHead(200 , {"Content-Type" : "text/html"});
        res.write('file cant read');
        res.end();
    });
    // console.log(filePath);
}


const server = http.createServer(start);
server.listen(process.env.PORT, ()=>console.log(`Server is running at Port number ${process.env.PORT}`));