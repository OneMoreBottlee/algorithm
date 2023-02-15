const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const str = input[1].split("")

function solution(arr){
    const abc = "abcdefghijklmnopqrstuvwxyz".split("")
    const r = 31
    const M = 1234567891
    
    return arr.map((el,i) => (abc.indexOf(el)+1) * r**i).reduce((acc,cur)=>acc+cur)%M
}


console.log(solution(str))