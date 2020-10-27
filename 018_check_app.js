require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);
const path = require('path');
const hogan =require('hogan-express');
const bodyparser = require('body-parser');
app.use(express.static(path.join(__dirname , 'public')));
app.engine('html',hogan);
app.set("view engine" ,'html');
app.use(bodyparser.urlencoded({extended : true}));
app.get('/check' , (req,res)=>{
    res.render('check');
});
const userRoom = new Map();
const room1 = "public";
const room2 = "private";

io.sockets.on('connection' , (socket)=>{
    socket.on('login' , data=>{
        socket.username = data; 
        userRoom.set(socket.username , socket.id);
        if(data== 'W' || data == "X"){
            socket.join(room1);
            socket.userRooms = room1;
        }else{
            socket.join(room2);
            socket.userRooms = room2;
        }
        // socket.broadcast.emit('loginsuccess' , `Server form ${data}`) //other user only
        // io.emit('loginsuccess' , `Server form ${data}`);// all user
        // socket.emit('loginsuccess' , `Server form ${data}`); //single user only
        io.sockets.connected[socket.id].emit('loginsuccess' , `Server form ${data}`); //single user
    });
    socket.on('msgSend' , data =>{
        io.in(socket.userRooms).emit('msgSended' , socket.username+ socket.userRooms + ":" + data);
    })
});

server.listen(process.env.PORT ,()=>console.log(`Server is Running Port ${process.env.PORT}`));