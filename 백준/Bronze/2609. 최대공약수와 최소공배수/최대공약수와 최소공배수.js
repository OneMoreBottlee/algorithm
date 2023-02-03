const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ')

const A = input[0] * 1
const B = input[1] * 1

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

console.log(gcd(A,B))
console.log(lcm(A,B))