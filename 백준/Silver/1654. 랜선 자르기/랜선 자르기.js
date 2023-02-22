const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [K, N] = input[0].split(' ').map(el => el*1)
const arr = input.slice(1).map(el => +el)

function solution(arr, N){
    let lines = arr.sort((a,b)=>a-b)
    let max = Math.max(...lines)
    let min = 1
    
    while(min <= max){
        let mid = parseInt((max+min) /2)
        let countLines = lines.map(line => parseInt(line/mid)).reduce((acc,cur) => acc+cur,0)
        
        if(countLines >= N){
            min = mid + 1
        }else{
            max = mid - 1
        }
    }
    
    return max
}

console.log(solution(arr,N))