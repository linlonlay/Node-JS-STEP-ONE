const http = require('http');
const url  = require('url');

const routes = 
{
    "GET"  :
    {
        '/' : (req , res)=>
        {
            res.write(`<h1>Method is GET and Route is / </h1>`);
            res.end();
        },
        '/about' : (req , res )=>
        {
            res.write(`<h1>Method is GET and route is /about</h1>`);
            res.end();
        }
    },
    "POST" : 
    {
        '/' : (req, res)=>
        {
            res.write(`<h1>Method is POST and Route is /</h1>`);
            res.end();
        },
        '/about' : (req , res )=>
        {
            res.write(`<h1>Method is POST and Route is /about</h1>`);
            res.end();
        }

    },
    "UNKNOWN" : (req , res)=>
    {
        res.write(`<h1>Your are Request Page is Not Found!</h1>`);
        res.end();
    }
}
const start = (req , res )=>
{
    res.writeHead( 200  , {'Content-Type' : 'text/html'});
    let reqMethod = req.method ;
    let urlPath       = url.parse(req.url , true);
    let methodurl = routes[reqMethod][urlPath.pathname];
    if(methodurl != null && methodurl != undefined)
    {
        methodurl(req, res);
    }
    else 
    {
        routes["UNKNOWN"](req , res);
    }
}

const server = http.createServer(start);
server.listen(3000 , ()=>{
    console.log(`Server is running at port number 3000`);
})