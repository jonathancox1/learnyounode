const http = require('http');
const bl = require('bl');

let results = [];
let count = 0;
let urlsArray = process.argv.slice(2);
let noOfUrls = urlsArray.length;

function printResults() {
    for (let i = 0; i < noOfUrls; i++) {
        console.log(results[i]);
    }
}

function httpGet(index) {
    http.get(urlsArray[index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                console.error(err);
            }
            results[index] = data.toString();
            count++
            if (count === noOfUrls) {
                printResults();
            }
        }))
    })
}

for (var i = 0; i < noOfUrls; i++) {
    httpGet(i);
}
