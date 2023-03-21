const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = a*1
const road = b.split(" ").map(Number)
const price = c.split(" ").map(Number)

console.log(solution(n, road, price))

function solution(n, road, price){
    price.forEach((el, idx) => {if(el < price[idx+1])return price[idx+1] = el})
    price.pop()
    
    let result = 0
    for(let i = 0; i < n - 1; i++){
        result += price[i] * road[i]
    }
    
    return result
}