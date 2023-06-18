const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" ").map(Number))
const [N, M] = input.shift()

const arr = [...new Array(N)].fill(0)

input.forEach(([i, j, k]) => {
    for(let num = i-1; num < j; num++){
        arr[num] = k
    }
})

console.log(arr.join(" "))