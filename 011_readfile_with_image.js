const http = require('http');
const url  = require('url');
const fs   = require('fs');
const path = require('path');
require('dotenv').config();

const meme = {
    ".html" : "text/html",
    ".png"  : "image/png",
    ".jpg"  : "image/jpeg"
}

const start = (req , res )=>{
    // let reqMethod = req.method;
    let urlPath = url.parse(req.url , true);
    let oriPath = urlPath.pathname == "/" ? "/index.html" : urlPath.pathname;
    let filePath = __dirname + oriPath  ;
    console.log(oriPath);
    let ext  = path.extname(filePath);
    fs.access(filePath , fs.F_OK , (err)=>{
        if(err){
            res.writeHead(404 , {"Content-Type" : "text/html"});
            res.write('File Not Found');
            res.end();
        }else{
            fs.readFile(filePath , (err , data )=>{
                if(err){
                    res.writeHead(403 , {"Content-Type" : "text/html"});
                    res.write('Read File Error');
                    res.end();

                }else{
                    res.writeHead(200 , {"Content-Type" : meme[ext] });
                    res.write(data);
                    res.end();
                }
            })
        }
    })
    console.log(ext);
}

const server = http.createServer(start);
server.listen(process.env.PORT )