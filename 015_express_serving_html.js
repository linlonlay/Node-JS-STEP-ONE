require('dotenv').config();
const port = process.env.PORT;
const express = require('express'),
app = express(),
path = require('path');
app.use(express.static(path.join(__dirname, "assets")));
app.get('/' , (req, res )=>{
    // res.sendFile(__dirname + "/index.html")
    res.send(`Hello World`)
    // res.json({con: true , msg : "Hello World"})

});
app.get('/index' , (req , res)=>{
    res.sendFile(`${__dirname}/index.html`);
});
app.get('/about' , (req, res)=>{
    res.sendFile(`${__dirname}/about.html`)
})
app.listen(port  , ()=>{
    console.log(`Server is running Port ${port}`)
})