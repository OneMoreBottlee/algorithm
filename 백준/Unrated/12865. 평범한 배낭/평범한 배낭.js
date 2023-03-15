const [firstLine, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = firstLine.split(" ").map(Number)
const items = arr.map(el => el.split(" ").map(Number))

console.log(solution(n, k, items))

function solution(n, k, items){
    items.unshift(undefined)
    const maxValue = []
    
    for(let i = 0; i <= n; i++){
        maxValue.push(Array(k + 1).fill(0))
    }
    
    for(let i = 1; i <= n; i++){
        const [weight, value] = items[i]

        for(let j = 0; j <= k; j++){
            j < weight ? 
            maxValue[i][j] = maxValue[i-1][j] :
            maxValue[i][j] = Math.max(maxValue[i-1][j], maxValue[i-1][j-weight] + value)
        }
    }
    
    return maxValue[n][k]
}