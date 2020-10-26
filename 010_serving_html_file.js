const http = require('http');
const url = require('url');
const qs  = require('querystring');
const fs  = require('fs');
const { dir } = require('console');
require('dotenv').config();
const fileReader = (filePath ,res)=>{
    fs.access(filePath , fs.F_OK ,(err )=>{
        if(err) throw err;
        fs.readFile(filePath , (err , data)=>{
            if(err) throw err;
            res.writeHead(200 , {'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
        })
    });

}
const routes = {
    "GET" : {
        '/' : (req , res )=>{
            let filePath = __dirname + '/index.html';
           fileReader(filePath , res)  ;
        },
        '/index.html' : (req, res )=>{
            let filePath = __dirname + '/index.html';
            fileReader (filePath , res)
        }
        ,
        '/about.html' : (req , res )=>{
            let filePath = __dirname + '/about.html';
            fileReader( filePath , res);
        }
    }
}
const start = (req, res)=>{
   let  reqMethod = req.method;
   let  reqPath   = url.parse(req.url , true);
   let mPath      = routes[reqMethod][reqPath.pathname];
   if(mPath != null && mPath != undefined){
       mPath(req, res, reqPath);
   }

}
const server = http.createServer(start);
server.listen(process.env.PORT , ()=>{
    console.log(`Server is running at port number ${process.env.PORT}`)
})