const input = require('fs').readFileSync('예제.txt').toString().split(' ');


let result = 0

for(let i = 1; i <= input[0]; i++){
    result = result + i
}

console.log(result)