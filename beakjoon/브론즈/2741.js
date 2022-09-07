const input = require('fs').readFileSync('예제.txt').toString().split(' ');

const N = Number(input[0])

let result = ''

for(let i = 1; i <= N; i++){
    result += i + "\n"
}

console.log(result)