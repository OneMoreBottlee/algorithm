const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const arr = input.slice(1)
let result = ""

for(let i = 0; i < input[0] * 1; i++){
    result += arr[i][0] + arr[i][arr[i].length-1] + "\n"
}

console.log(result)