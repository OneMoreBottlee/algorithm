const [n, h] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const hArr = h.split(" ").map(Number)

console.log(solution(n, hArr))

function solution(n, hArr){
    let result = 0
    let target = Array(n*1+1).fill(0)
    
    for(let shot of hArr){
        if(target[shot] > 0){
            target[shot] -= 1
            target[shot-1] += 1;
        }else{
            target[shot - 1] += 1
            result += 1
        }
    }

    return result
}