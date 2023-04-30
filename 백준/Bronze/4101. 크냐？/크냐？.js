const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" ").map(Number))
input.pop()
const result = input.map(el => el[0] > el[1] ? "Yes" : "No").join("\n")
console.log(result)