const input = Number(require('fs').readFileSync("/dev/stdin").toString())

let result = ""

for(let i = input; i > 0; i--){
    result += `${i} \n`
}

console.log(result.slice(0, result.length-1))