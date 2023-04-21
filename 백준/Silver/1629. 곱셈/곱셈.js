const [A, B, C] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(BigInt)

function recursion(a, b, c){
    if(b === 1n)return a % c

    const temp = recursion(a, b / 2n, c)

    if(b % 2n)return (temp * temp * (a % c)) % c
    else return (temp * temp) % c
}
    
console.log(String(recursion(A, B, C)))