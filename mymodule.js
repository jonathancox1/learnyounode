const fs = require('fs');
const path = require('path');

function filterFileNames(dirName, ext, callback) {

    fs.readdir(dirName, (err, list) => {
        if (err) {
            callback(err);
            return;
        }
        const filteredList = list.filter((i) => {
            if (path.extname(i) == ("." + ext)) {
                return true;
            } else {
                return false;
            }
        })
        callback(null, filteredList);
    }
    )
}

module.exports = filterFileNames;





// function module() {

//     let filePath = process.argv[2];

//     fs.readdir(filePath, (err, list) => {
//         if (err) throw err;
//         list.forEach((i) => {
//             if (path.extname(i) == ("." + process.argv[3])) {
//                 console.log(i);
//             }
//         })
//     }
//     )

// }







