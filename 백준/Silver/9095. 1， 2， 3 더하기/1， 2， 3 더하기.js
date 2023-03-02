const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

function solution(n) {
    // 1 - 1 && 2 - 2 && 3 - 4
    const arr = [0,1,2,4]

    if( n <4)return arr[n]
    
    let result = ""
    
    for(let i = 4; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
        result = arr[i]
    }
    
    return result
}

console.log(input.map(el => solution(el*1)).join("\n"))