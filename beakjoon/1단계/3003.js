const input = require('fs').readFileSync('예제.txt').toString().split(' ');

const result = (1 - input[0]) + " "+ (1 - input[1]) + " " + (2 - input[2]) + " " + (2 - input[3]) + " " + (2 - input[4]) + " " + (8 - input[5])

console.log(result)
