const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(" ")
input.shift()

const front = input.slice(0, N)
const back = input.slice(N, input.length)

const obj = {}

front.forEach(el => {
    let site = el.split(" ")[0]
    let pw = el.split(" ")[1]

    obj[site] = pw
})

let result = ""

back.forEach(el => result += obj[el] + "\n")

console.log(result.slice(0, result.length-1))