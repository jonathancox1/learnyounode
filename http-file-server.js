const http = require('http');
const fs = require('fs');
const port = process.argv[2]
const fileToServe = process.argv[3];
console.log(fileToServe);



const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(fileToServe);
    stream.pipe(res);
})
server.listen(port);