const input = require('fs').readFileSync('예제.txt').toString().split('\n');

let result = "";
for(let i = 1; i <= Number(input[0]); i++){
    let a = Number(input[i].split(' ')[0])
    let b = Number(input[i].split(' ')[1])
    result += a + b + "\n"
}

console.log(result)