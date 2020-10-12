const http = require('http');

const start = (req , res)=>{
    res.writeHead(200 , {'Content-Type':'text/html'});
    if(req.method == "POST")
        res.end('<h1>Request Method Is Post Method </h1>');
    else if(req.method== "GET")
        res.end(`<h1>Request Method Is Get Method</h1>`);
}
const server = http.createServer(start);

server.listen(3000 ,()=>{
    console.log(`Server is running at Port Number 3000`);
});