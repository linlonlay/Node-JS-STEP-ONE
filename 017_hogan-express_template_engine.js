require('dotenv').config();
const   port      = process.env.PORT,
        express   = require('express'),
        app       = express(),
        path      = require('path'),
        bodyParse = require('body-parser'),
        hogan     = require('hogan-express');
        app.use(express.static(path.join(__dirname , "assets")));
        app.use(bodyParse.urlencoded({extended : true}));
        app.engine("html" ,hogan);
        app.set("view engine" , "html");
        app.get('/' , (req,res)=>{
            res.render('index');
        });
        app.get('/about' , (req,res)=>{
            res.render('about');
        });
        app.listen(port , ()=>{
            console.log(`Server is running port ${port}`);
        });