const input = require('fs').readFileSync('/dev/stdin').toString().trim()*1

function solution(n) {
    const arr = [0,1,3]

    for(let i = 3; i <= n; i++){
        arr[i] = (arr[i-1] + 2 * arr[i-2]) % 10007
    }

    return arr[n]
}

console.log(solution(input))