require('dotenv').config();
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = 3000

console.log('process.env.USER_ID',process.env.USER_ID)
const io = require('socket.io')(server,
    {
        cors: { origin: '*' }
    })




    io.on('connection', (socket) => {
       // console.log('connection',socket)
    
       /* socket.on('server/chat/', (message) => {
            console.log(message)
    
            io.sockets.emit('client/chat/', message)
        })*/
    
        
    
        socket.on('disconnect', (socket) => {
            console.log('disconnect')
        })
    })


app.get('*', (req, res) => {

    console.log(req.query.message);

    let pathname = req.params[0];

    console.log('pathname',pathname);

    if(req.query.message){
      io.sockets.emit(`client${pathname}`, req.query.message)
    }


    

    res.send('<h1>Hello world from ec2</h1>');
});

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})