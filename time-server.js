const net = require('net');
var strftime = require('strftime')

const port = process.argv[2]


const server = net.createServer(function (socket) {
    socket.end(strftime('%F %R\n'))
})
server.listen(port);


// prints current time in 2020-05-12 20:37 format
// console.log(strftime('%F %R\n'))