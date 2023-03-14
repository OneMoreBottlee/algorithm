const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
arr.sort((a,b)=>a.length - b.length)

let count = 0

for(let i = 0; i < n; i++){
    const str = arr[i]
    const checkArr = [...arr.slice(i+1)]
    
    for(let j = 0; j < checkArr.length; j++){
        if(checkArr[j].indexOf(str) === 0){
        count++
        break
        }
    }
}

console.log(n - count)