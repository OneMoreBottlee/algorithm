const input = require('fs').readFileSync('예제.txt').toString().split(' ');

const year = Number(input[0])

if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    return console.log(1)
}else{
    return console.log(0)
}