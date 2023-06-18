const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(el=>el.split(" ").map(Number))
const [N, M] = input.shift()

const arr = [...new Array(N)].map((_, idx) => idx+1)

input.forEach(([i, j]) => {
    const change = arr[i-1]
    arr[i-1] = arr[j-1]
    arr[j-1] = change
})

console.log(arr.join(" "))