const input = require('fs').readFileSync('/dev/stdin').toString()

let result = ""

for(let i = 0; i < input.length; i++){
    input[i] === input[i].toUpperCase() ? result += input[i].toLowerCase() : result += input[i].toUpperCase()
}

console.log(result)