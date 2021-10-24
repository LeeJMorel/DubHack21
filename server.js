const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));


// runs when client connects
io.on('connection', socket => {
    socket.on('joinRoom', ({username, room}) => {
            // welcome current user
    socket.emit('message', formatMessage('chat bot','welcome to the chat'));

    // broadcast when a user connects
    socket.broadcast.emit('message', formatMessage('chatbot','a user has join the chat'));
    });

    // Listen for chatMessage
    socket.on('chatMessage',msg =>  {
        io.emit('message', formatMessage('user', msg));
    });

    // run when client disconnects
    socket.on('disconnect', () => {
        io.emit('message', formatMessage('chat bot', 'a user has left the chat'));
    });

});


const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log('Server running on port ' + PORT));