// const path = require('path');
// const express = require('express');

// const app = express();

// app.use(express.static(path.join(__dirname), 'public'))

// const PORT = 3000 || process.env.PORT;

// app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./public/utils/message');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static('public'));

//New branch changes

io.on('connection', socket => {

    socket.emit('message', formatMessage('Chatbot','Welcome to WetsApp'));

    //Broadcast when user connects
    socket.broadcast.emit('message', formatMessage('Jiten', 'Jiten has joined the chat'));

    //Run when client disconnects\
    socket.on('disconnect', ()=>{
      io.emit('message', formatMessage('Jiten', 'Jiten has left the chat'));
    });

    socket.on('chatMessage', (msg) => {
      io.emit('message', formatMessage('Jiten', msg))
    });
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});