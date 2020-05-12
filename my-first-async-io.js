const fs = require('fs');

let filePath = process.argv[2];
// read file
fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    // converts to string
    let string = data.toString();
    // split onto new lines
    let splitString = string.split('\n');
    // count the lines
    let counted = (splitString.length) - 1;
    console.log(counted);
}
);

