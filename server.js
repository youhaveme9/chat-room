const express = require('express');
const { Socket } = require('socket.io');
const app = express();

const http = require('http').createServer(app);

const PORT = process.env.PORT || 3000;

http.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


const io = require('socket.io')(http);

io.on('connection', (socket)=>{
    console.log('Connected')
})