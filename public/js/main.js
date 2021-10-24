const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

// get user and room from url
const params = new URLSearchParams(window.location.search);
const username = params.get('username');
const room = params.get('room');

//console.log(username, room);

const socket = io();

// joint chatroom
socket.emit('joinRoom', {username, room});


socket.on('message', message => {
    console.log(message);
    outputMessage(message);

    // scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

// message submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get message txt
    const msg = e.target.elements.msg.value;

    // emit mesagge to server
    socket.emit('chatMessage', msg);

    //clear inpouts
    e.target.elements.msg.value ='';
    e.target.elements.msg.focus();
})


// out put message to dom
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    const p2 = document.createElement('p');

    const p1 = document.createElement('p');
    p1.classList.add('meta');
    p1.textContent = message.username + ":";
    p2.classList.add('text');
    p2.textContent = message.text;
    div.appendChild(p1);
    div.appendChild(p2);
    document.querySelector('.chat-messages').appendChild(div);
}