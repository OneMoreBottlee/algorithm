const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ')

let result = input.map((el) => el**2).reduce((acc,cur)=> acc+cur)%10

console.log(result)