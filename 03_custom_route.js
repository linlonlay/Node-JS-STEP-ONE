const http = require('http');
const url  = require('url');

const routes = {
    "GET"   : {
        '/' : (req ,res)=>{
            res.end(`<h1>Method = GET and request Url = / </h1>`)
        },
        "/about" : (req , res )=>{
            res.end(`<h1>Method = GET and request Url = /about </h1>`)
        },
        '/about/fff' : (req ,res)=>{
            res.end(`<h1>Method = GET and request Url = /about/fff </h1>`)
        }
    },
    "POST" : {
        '/' : (req , res)=>{
            res.end(`<h1>Method = POST and request Url = / </h1>`)
        },
        '/about' : (req , res)=>{
            res.end(`<h1>Method = POST and request Url = /about </h1>`)
        },
        '/about/fff' : (req ,res)=>{
            res.end(`<h1>Method = POST and request Url = /about/fff </h1>`)
        }
    }
}
const start = (req,res)=>{
    res.writeHead(200 , {'Content-Type' :"text/html"});
    let reqUrl = url.parse(req.url , true);
    let reqMethod = req.method ;
    routes[reqMethod][reqUrl.pathname](req ,res);
    // console.log(reqUrl.pathname);
}
const server= http.createServer(start);

server.listen(3000 , ()=>{console.log(`ServerIs Running !`)});
