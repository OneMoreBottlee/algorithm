const [S, i] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
console.log(S[i-1])