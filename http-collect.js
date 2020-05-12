const http = require('http');
const bl = require('bl');


http.get((process.argv[2]), function callback(response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            console.error(err);
            return
        }
        console.log(data.length);
        console.log(data.toString());
    }))
})
