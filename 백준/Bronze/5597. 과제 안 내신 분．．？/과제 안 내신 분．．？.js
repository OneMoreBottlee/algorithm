const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const result = {}

for(let i = 1; i < 31; i++){
    result[i] = 0
}

for(let el of input){
    delete(result[el])
}

console.log(Object.keys(result).join("\n"))