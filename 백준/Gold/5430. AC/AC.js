const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = []

for(let i = 0; i < input.length; i += 3){
    arr.push([input[i], input[i+1]*1, JSON.parse(input[i+2])])
}

console.log(arr.map(el => solution(el)).join("\n"))

function solution(que){
    let str = que[0]
    let n = que[1]*1
    let arr = que[2]
    let isReverse = false
    let isError = false
    let leftIdx = 0
    let rightIdx = n-1
    
    for(let i = 0; i < str.length; i++){
      	const command = str[i]
        if(command === 'R')isReverse = !isReverse
        if(command === 'D'){
            if(leftIdx > rightIdx){
                isError = true
                break
            }
            isReverse ? rightIdx-- : leftIdx++
        }
    }
  
	arr = arr.slice(leftIdx, rightIdx+1)
    if(isReverse)arr.reverse()
    return isError ? "error" : `[${arr}]`
}