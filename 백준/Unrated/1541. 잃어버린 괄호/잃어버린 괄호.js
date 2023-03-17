const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const minusSplit = input.split("-").map(el => el.split("+").reduce((acc,cur)=>acc + cur*1,0))

let result = minusSplit[0]

for(let i = 1; i < minusSplit.length; i++){
    result -= minusSplit[i]
}

console.log(result)


