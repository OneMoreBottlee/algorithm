const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const s = input[0].split("")
const t = input[1].split("")

console.log(solution(s,t))

function solution(s,t){
    while(s.length !== t.length){
        const abc = t.pop()
        if(abc === "B")t.reverse()
    }

    return t.join() === s.join() ? 1 : 0
}