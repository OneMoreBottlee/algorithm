const input = require('fs').readFileSync('예제.txt').toString().split('\n');
const index = Number(input[0])
result = ""

for(let i = 1; i <= index; i++){
    let A = Number(input[i].split(' ')[0])
    let B = Number(input[i].split(' ')[1])
    result += "Case #" + i + ": " + (A + B) + "\n"
}

console.log(result)