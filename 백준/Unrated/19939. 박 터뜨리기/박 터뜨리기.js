const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

function solution(n, k) {
    let check = 0
    for(let i = 0; i <= k; i++){
        check += i
    }
    
    if(check > n)check = -1
    else{
        n -= check;
        check = n % k === 0 ? k-1 : k
    }
    
    return check
}

console.log(solution(n,k))