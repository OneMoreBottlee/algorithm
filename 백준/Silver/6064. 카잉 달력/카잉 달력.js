const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)
const question = input.map(el => el.split(" ").map(el=>+el))

function solution([m, n, x, y]){
    // 최대공약수
    function gcd(a, b){
        while(b!==0){
            let r = a % b
            a = b
            b = r
        }
        return a
    }

    // 최소공배수
    function lcm(a,b){
        return a * (b / gcd(a,b))
    }
    
    // m과 n의 최소 공배수는 마지막 연도
    const lcmNum = lcm(m,n)
    let result = -1
    
    // 최소공배수까지 m의 배수만큼 더하면서 n의 값을 찾는다.
    for(let i = x; i <= lcmNum; i += m){
        if((i-1) % n + 1 === y){
            result = i
            break
        }
    }
    
    return result
}

const result = question.map(el => solution(el)).join("\n")

console.log(result)