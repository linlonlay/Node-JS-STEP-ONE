let sockets = io.connect();
let check_ = document.querySelector('.check_');
let check_message = document.querySelector('.check_message');
let name = document.querySelector('#name');
let write = document.querySelector('#write');
let login = document.querySelector('#login');
let send = document.querySelector('#send');
let sendMessage = document.querySelector('.sendMessage');
let messageContainer = document.querySelector('.messageContainer');
login.addEventListener('click' , ()=>{
    sockets.emit('login' ,name.value);
    name.value = '';
});
send.addEventListener('click' , ()=>{
    sockets.emit('msgSend' , write.value);
    write.value = '';
})
sockets.on('loginsuccess' , data => {
    console.log(data)
    check_.classList.add('hide');
    messageContainer.classList.remove('hide');
});
sockets.on('msgSended' , data => {
    let div = document.createElement('div');
    div.classList.add('sendMessage');
    div.innerHTML = ` <div class="author">${sockets.username} </div> 
    <p class="message">${data}</p>
    <span class="time">12:30 </span> `;
check_message.appendChild(div);
})