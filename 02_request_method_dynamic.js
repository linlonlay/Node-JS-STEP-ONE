const  http = require('http');

const routes = {
    "GET" : {
        "/"      : ()=>{console.log(`Method Is GET and url is / `)},
        "/about" : ()=>{console.log(`Method Is GET and url is /about `)}
    },
    "POST": {
        "/"      : ()=>{console.log(`Method Is POST and url is /`)},
        "/about" : ()=>{return `Method Is POST and url is /about`}
    }
}
const start = (req , res )=>{
    res.writeHead(200 , {'Content-Type' : "text/html"});
    let url = req.url ;
    let reqMethod = req.method ;
    // console.log() style
    // routes[reqMethod][url]()
    res.end(routes[reqMethod][url]());

}
const server = http.createServer(start);
server.listen(3000 , ()=>{console.log(`Server Is Running At Port 3000`)});