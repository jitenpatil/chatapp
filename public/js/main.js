const chatForm = document.getElementById("chat-form");
const socket = io();
const chatMessageContainer = document.querySelector('.chat-messages');

socket.on('message', message => {
    console.log(message);
    outputMessage(message);
});

//New Changes
//New Changes 2

chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const msg = e.target.elements.msg.value;
    socket.emit('chatMessage', msg);

    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});


function outputMessage(message){
    let messageBox = document.createElement('div');
    messageBox.innerHTML = "<p class='message-user'>"+message.username+"</p>"+"<p>"+message.text+"</p><p class='message-time'>"+message.time+"</p>";
    messageBox.classList.add('message');
    chatMessageContainer.appendChild(messageBox);
}

