const input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

console.log(input.reduce((acc,cur)=> acc*1+cur*1))