const fs = require('fs');



let filePath = process.argv[2];
// will read file
let read = fs.readFileSync(`${filePath}`);
// convert buffer to string
let readString = read.toString();
// split into new lines
let splitString = readString.split('\n');
// count the lines
let counted = (splitString.length) - 1;
console.log(counted);
