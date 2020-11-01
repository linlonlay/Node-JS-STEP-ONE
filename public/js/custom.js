let sockets = io.connect();
let check_ = document.querySelector('.check_');
let check_message = document.querySelector('.check_message');
let name = document.querySelector('#name');
let write = document.querySelector('#write');
let login = document.querySelector('#login');
let send = document.querySelector('#send');
let sendMessage = document.querySelector('.sendMessage');
let messageContainer = document.querySelector('.messageContainer');
let gameStart = document.querySelector('#game');
let bookStart = document.querySelector('#book');
const gmsSocket = io('/game') ;
const booksocket = io('/book');
gameStart.addEventListener('click' , ()=>{
    gmsSocket.emit('gsmstart' , "game Socket  is starting");
});
bookStart.addEventListener('click' , ()=>{
    booksocket.emit('bookstart' , "book socket is starting")
});

login.addEventListener('click' , ()=>{
    sockets.emit('login' ,name.value);
    name.value = '';
});
send.addEventListener('click' , ()=>{
    if(write.value != ""){
        sockets.emit('msgSend' , write.value);
        write.value = '';
    }else{
        return false;
    }
   
})
sockets.on('loginsuccess' , data => {
    console.log(data)
    check_.classList.add('hide');
    messageContainer.classList.remove('hide');
});
sockets.on('msgSended' , data => {
    checkConsole(data);
    // let div = document.createElement('div');
    // div.classList.add('sendMessage');
    // div.innerHTML = ` <div class="author">${sockets.username} </div> 
    // <p class="message">${data}</p>
    // <span class="time">12:30 </span> `;
    // check_message.appendChild(div);
    // check_message.scrollTop = check_message.scrollHeight;
});

const checkConsole = (mass)=>{
    let div = document.createElement('div');
    div.classList.add('sendMessage');
    div.innerHTML = ` <div class="author"><img src="images/phone.png" > </div> 
    <p class="message">${mass}</p>
    <span class="time">12:30 </span> `;
    check_message.appendChild(div);
    check_message.scrollTop = check_message.scrollHeight;
    
}