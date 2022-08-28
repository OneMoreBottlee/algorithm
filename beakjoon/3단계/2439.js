const input = require('fs').readFileSync('예제.txt').toString().split(' ');

let result = ""

for(let i = 1; i <= Number(input[0]); i++){
    result += " ".repeat(Number(input[0]) - i) + "*".repeat(i) + "\n"
}

console.log(result)
