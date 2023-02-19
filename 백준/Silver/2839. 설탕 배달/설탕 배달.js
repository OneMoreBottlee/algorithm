const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const N = input[0]*1

function solution(n){
    const lim3 = Math.floor(n/3)
    const lim5 = Math.floor(n/5)
    
    for(let i = 0; i <= lim3; i++){
        for(let j = 0; j <= lim5; j++){
            if(3*i + 5*j === n){
                return i+j
            }
        }
    }
    
    return -1
}

console.log(solution(N))