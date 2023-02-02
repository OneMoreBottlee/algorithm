const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" "))

let box = input.slice(0, input.length-1)

box.map(el => {
    el.sort((a,b)=>a-b)
    console.log(el[2]**2 === el[1]**2 + el[0]**2 ? "right" : "wrong")
})
