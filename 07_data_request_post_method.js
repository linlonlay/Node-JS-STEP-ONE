const http = require('http');
const url  = require('url');
const { write } = require('fs');
require('dotenv').config();
const responds = (req , res , params)=>{
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    // res.write( params);
    res.end(params);
}
const routes = {
    "GET"   : {
        '/' : (req , res)=>{
            responds(req , res , `<h1>Method is GET and url is / query  </h1>`);
        }
    },
    "POST" : {
        '/': (req , res)=>{
            responds(req,res , `<h1>Method is POST and url is / </h1>`);
        },
        '/api/login': (req , res)=>{
            let body = '';
            req.on('data' , data =>{
                body += data;
            });
            req.on('end' , ()=>{
                console.log(body)
                res.write(`data is ${body}`);
                res.end();
            });

        }
    },
    "UN"    : (req , res)=> {
        responds(req , res , `<h1>Page Not Found  </h1>`)
    }
}

const start = (req , res )=>{
    let urlMethod = req.method;
    let urlPath   = url.parse(req.url , true);
    let mPath     = routes[urlMethod][urlPath.pathname];
    // console.log(mPath);
    if(mPath != null && mPath != undefined){
        mPath(req , res );
    }

    else{
        routes['UN'](req, res );
    }
}
const server = http.createServer(start);
server.listen(process.env.PORT , ()=>{
    console.log(`Serverssss is running ${process.env.PORT}`);
})