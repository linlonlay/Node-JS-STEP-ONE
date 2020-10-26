const http = require('http');
const url  = require('url');
const routes = {
    "GET" : 
    {
        '/home' : (req , res ,params)=>
        {
            res.write(`<h1>Method is GET and Route is / with Params name ${params.query.name} and Params age ${params.query.age} Params family Count is ${params.query.familyCount}</h1>`);
            res.end();
        } 
    },
    "POST" :
    {
        '/home' : (req , res ,params)=>
        {
            res.write(`<h1>Method is POST and Route is / with Params name ${params.query.name} and Params age ${params.query.age} Params family Count is ${params.query.familyCount}</h1>`);
            res.end();
        } 
    },
    
    "UNKNOWN" : (req ,res, params) => 
    {
        res.write(`<h1>Your Request Route Page is Not Found !</h1>`);
        res.end();
    }   
}
const start = (req , res)=>
{
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    let reqMethod = req.method ;
    let params    = url.parse(req.url,true);
    let methodPath= routes[reqMethod][params.pathname];
    if(methodPath != null && methodPath != undefined)
    {
        methodPath(req, res , params );
    }
    else{
        routes["UNKNOWN"](req, res , params);
    }
}


const server = http.createServer(start);
server.listen(
    3000 , ()=>
    {
        console.log(`Server is running on port number 3000`);
    }
);