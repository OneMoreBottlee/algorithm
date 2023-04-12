const [n, arrA, arrB] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" ").map(Number))

let result = 0
arrA.sort((a,b) => b-a)
arrB.sort((a,b) => a-b)

for(let i = 0; i < n; i++){
    result += arrA[i] * arrB[i]
}

console.log(result)