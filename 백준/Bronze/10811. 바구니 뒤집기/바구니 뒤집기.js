const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(el=>el.split(" ").map(Number))
const [N, M] = input.shift()

let arr = [...new Array(N)].map((_, idx) => idx+1)

input.forEach(([i, j]) => {
    const reverse = arr.slice(i-1, j).reverse()
    arr = [...arr.slice(0, i-1), ...reverse, ...arr.slice(j)]
})

console.log(arr.join(" "))