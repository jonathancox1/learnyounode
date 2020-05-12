const fs = require('fs');
const path = require('path');

let filePath = process.argv[2];

fs.readdir(filePath, (err, list) => {
    if (err) throw err;
    list.forEach((i) => {
        if (path.extname(i) == ("." + process.argv[3])) {
            console.log(i);
        }
    })
}
)

