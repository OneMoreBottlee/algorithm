const input = require("fs").readFileSync("/dev/stdin") * 1;

function solution(n) {
    if(n===0)return 0
    
    let num = [0, 1, 2]
    
    // factorial 만들기
    for(let i = 3; i <= n; i++){
      num[i] = BigInt(num[i-1]) * BigInt(i)
    }
    
    // 0 찾기
    const result = num[n].toString().split("").reverse()
    let count = 0
    
    for(let i = 0; i <= result.length; i++){
        if(result[i] === '0')count ++
        else{break}
    }
    
    return count
}

console.log(solution(input));
