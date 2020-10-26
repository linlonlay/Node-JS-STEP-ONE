const http = require('http');
const url  = require('url');
const qs = require('querystring');
require('dotenv').config();
const responder = (req, res , params )=>{
    // res.write();
    res.end(params);
}

const routes = {
    "GET" : {
        '/' : (req , res)=>{
            let filePath = __dirname + '/index.html';
            responder(req, res ,filePath)
        },
        '/index.html' : (req , res )=>{
            let filePath = __dirname + '/index.html';
            responder(req, res  , filePath);
        },
        '/about.html':(req, res)=>{
            let filePath = __dirname + '/about.html';
            responder(req , res , filePath);
        }
    },
    "UN" : (req , res)=>{
        responder( req, res , "File Not Found");
    }
}
const start = (req , res )=>{
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    let reqMethod = req.method;
    let reqPath   = url.parse(req.url,true) ;
    let mPath     = routes[reqMethod][reqPath.pathname];
    if(mPath != null && mPath != undefined){
        mPath(req , res ,reqPath);
    }
    else{
        routes["UN"](req , res );
    }

}
const server = http.createServer(start);
server.listen(process.env.PORT , ()=>{
    console.log(`Server is running at port number ${process.env.PORT}`);
});
