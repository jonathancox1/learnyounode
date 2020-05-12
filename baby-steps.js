let data = process.argv;
let corrected = data.slice(2);
let newArray = []
corrected.forEach((i) => newArray.push(+i))
let answer = newArray.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(answer);


