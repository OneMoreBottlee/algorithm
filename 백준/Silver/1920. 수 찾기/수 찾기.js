const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const A = input[1].split(" ")
const M = input[3].split(" ")
const box = new Set()

A.forEach(el => box.add(el))

const result = M.map(el=> box.has(el) ? 1 : 0).join("\n")

console.log(result)