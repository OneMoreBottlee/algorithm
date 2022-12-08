const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const value = input[0]
let result = value.charCodeAt(0)
console.log(result)