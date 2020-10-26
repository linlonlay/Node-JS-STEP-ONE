require('dotenv').config();
const   express     = require('express'),
        path        = require('path'),
        bodyParser  = require('body-parser'),
        app         = express();
        app.use(express.static(path.join(__dirname + '/assets')));
        app.use(bodyParser.urlencoded({extended : true}));
        // localhost:3000/api/login/5
        app.get('/api/post/:id' , (req,res)=>{
            let id = req.params.id;
            res.send(`post id is ${id}`);
        });
        // localhost:3000/api/login?name=mgmg&age=20
        app.get('/api/login' , (req , res)=>{
            let name = req.query.name;
            let age = req.query.age;
            res.send(`Name is ${name}  and Age is ${age}`)
        });
        // localhost:3000/api/login
        // name = kyaw kyaw 
        // password = 123123
        app.post('/api/login' , (req, res)=>{
            let name = req.body.name ;
            let password = req.body.password;
            res.send(`Name is ${name} And Password is ${password}`)
        })
        app.listen(process.env.PORT , ()=>{
            console.log(`Server is running at port ${process.env.PORT}`);
        });


