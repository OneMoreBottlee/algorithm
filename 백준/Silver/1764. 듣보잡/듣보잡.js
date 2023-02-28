const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()

const nonHeardSeen = {}

input.forEach(el => {
    nonHeardSeen[el] = nonHeardSeen[el] !== undefined ? +1 : 0
})

const check = Object.keys(nonHeardSeen).filter(el => nonHeardSeen[el] !== 0).sort()
let result = `${check.length}\n${check.join("\n")}`

console.log(result)