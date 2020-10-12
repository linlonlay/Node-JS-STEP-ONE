const http = require('http');
const url = require('url');
require('dotenv').config();
const routes = {
    "POST" : {
        '/home' : (req , res , params)=>{
            res.write(`Method POST | Parth /home | params ${params.query.name}`);
            res.end();
        }
    },
    "UN" : (req , res , params)=>{
        res.write('Page Not Found');
        res.end();
    }
}

const start = (req , res  , params)=>{
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    let urlMethod = req.method;
    let urlPath   = url.parse(req.url , true);
    let mPath     = routes[urlMethod][urlPath];
    if(mPath != null && mPath != undefined){
        mPath(req , res , param);
    }
    else{
        routes['UN'](req, res , params);
    }

}

const server = http.createServer(start);
server.listen(process.env.PORT , ()=>{
        console.log(`server is running on port ${process.env.PORT}`);   
});