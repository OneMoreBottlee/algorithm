const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a,b] = input
const result = a.includes(b)
console.log(result ? "go" : "no")