const filterFileNames = require('./mymodule')

filterFileNames(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        console.log('Error: ', err);
        return;
    }
    data.forEach((d) => {
        console.log(d);
    })
});