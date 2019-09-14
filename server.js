const express = require('express');
const socket = require('socket.io');

var app = express();
app.use(express.static('public'));
var server = app.listen(8000, () => console.log('The Server is listening on port: 8000'));

var io = socket(server);
io.on('connection', socket => {
    socket.on('chat', data => io.sockets.emit('chat', data));
    socket.on('typing', data => socket.broadcast.emit('typing', data));
});