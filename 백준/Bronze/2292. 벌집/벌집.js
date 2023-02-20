const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const N = input[0]

let count = 1, range = 1

while(range < N){
    range += 6 * count
    count++
}

console.log(count)