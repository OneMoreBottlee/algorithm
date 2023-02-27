const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = input[0].split(" ").map(el => el*1)
input.shift()
const arr = input.map(el => el*1)

function solution(money, arr){
    let count = 0
    let rest = money
    
    while(rest !== 0){
        const max = Math.max(...arr.filter(el => el <= rest))
        const coins = Math.floor(rest / max)
        rest -= coins * max
        count += coins
    }
    return count
}

console.log(solution(K, arr))