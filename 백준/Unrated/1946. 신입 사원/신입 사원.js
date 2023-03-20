const [t, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = []

for(let i = 0; i < t; i++){
    const top = input.shift()*1
    arr.push(input.splice(0,top).map(el => el.split(" ").map(Number)))
}

console.log(arr.map(el => solution(el)).join("\n"))

function solution(arr){
    arr.sort((a,b) => a[0] - b[0])
    
    let count = 0
    let minValue = 100001
    
    for(let [x,y] of arr){
        if(y < minValue){
            minValue = y
            count++
        }
    }
    
    return count
}