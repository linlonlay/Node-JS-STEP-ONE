const { Console } = require('console');

require('dotenv').config();
const dotEnv = process.env.PORT,
        url  = require('url'),
        http = require('http'),
        express = require('express'),
        app = express(),
        path = require('path'),
        bodyparser = require('body-parser'),
        jwt = require('jsonwebtoken'),
        hogan = require('hogan-express'),
        socket = require('socket.io'),
        server = http.createServer(app),
        io = socket(server);
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended: true}));
        app.use(express.static(path.join(__dirname , "public")));
        app.engine("html" , hogan);
        app.set("view engine" , "html");
        const userRooms = new Map();
        const   room1 ="Public";
        const   room2 = "Privated";
        const nspGame  = io.of('/game');
        const nspBook = io.of('/book');

        app.get('/new' , (req ,res)=>{
            res.render('new');
        });
        nspGame.on('connection' , (socket)=>{
            socket.on('gsmstart' , data=>{
                console.log(data)
            } );
        });
        nspBook.on('connection' , (socket)=>{
            socket.on('bookstart' , data=>{
                console.log(data);
            })
        })
        io.sockets.on('connection' ,(socket)=>{
            socket.on('login' , data=>{
                socket.username = data;
                userRooms.set(socket.username , socket.id);
                if(data == "W" || data == "X"){
                    socket.join(room1);
                    socket.userroom = room1;
                }else{
                    socket.join(room2);
                    socket.userroom = room2;
                }
                // console.log(data);
                io.sockets.connected[socket.id].emit('loginsuccess' , data);
                // socket.emit('loginsuccess' , data );
            });
            socket.on('msgSend' , data=>{
                io.in(socket.userroom).emit("msgSended" ,socket.username + ":" + data );
            })

        })
        server.listen(dotEnv,()=>{console.log('server is running')});
