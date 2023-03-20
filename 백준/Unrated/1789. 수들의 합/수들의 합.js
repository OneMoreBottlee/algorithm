const input = require('fs').readFileSync("/dev/stdin").toString().trim()*1

function solution(num){
    let count = 0
    let sum = 0
    
    while(sum <= num){
        count++
        sum += count
    }
    count--
    return count
}

console.log(solution(input))