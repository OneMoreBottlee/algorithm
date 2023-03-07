const [N,M,S] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

console.log(solution(N, S))

function solution(n, str){
    const IOI = "I" + "OI".repeat(n)
    
    let leftIdx = str.indexOf(IOI)
    let count = 0
    
    while(leftIdx !== -1){
        str = str.slice(leftIdx+2)
        leftIdx = str.indexOf(IOI)
        count++
    }
    
    return count
}
