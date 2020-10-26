const http = require('http');
const url = require('url');
const qs  = require('querystring');
require('dotenv').config();

const responder = (req, res, params)=>{
    res.writeHead(200 , {'Content-Type':'text/html'});
    res.write(params);
    res.end();
}
const requestRoutes = {
    "POST" : {
        '/'   : (req, res)=>{
            responder(req , res , `<h1>Method is POST and Url is /</h1>`)

        },
        '/api/login':(req , res )=>{
            let body = '';
            req.on('data' , data =>{  
                body += data ;
            });
            req.on('end' ,()=>{
                let query = qs.parse(body);
                
                // console.log("email" ,query.email,"password" , query.password);
                // let jsonObj = JSON.stringify(query);
                // let javascriptObj = JSON.parse(jsonObj)
                // console.log(javascriptObj.email);
                //  res.write(`<h1>Emai is ${javascriptObj.email} \n Password is ${javascriptObj.password}</h1>`);
                res.write(`<h1>Emai is ${query.email} \n Password is ${query.password}`);
                res.end();
            });
        }

    },
    "UN"   : (req , res )=> {
        responder(req , res , `<h1>Method is UN and Url is Unknow  page not found</h1>`)
    }
}

const startServer = (req , res )=>{
    let reqMethod = req.method;
    let reqUrl    = url.parse(req.url , true);
    let methodUrl = requestRoutes[reqMethod][reqUrl.pathname];
    if(methodUrl != null && methodUrl != undefined){
        methodUrl(req , res , methodUrl);
    }
    else{
        requestRoutes["UN"](req , res);
    }

}
const server = http.createServer(startServer);
const portNumber = process.env.PORT;
server.listen(portNumber,()=>{
    console.log(`Server is running at port number ${portNumber}`)
});