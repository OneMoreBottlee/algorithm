const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, ...arr] = input
arrNum = arr.map(el => el*1)

const result = []

arrNum.forEach(el => {
    if(el !== 0)result.push(el)
        else{result.pop(el)}
    })
    
console.log(result.reduce((acc,cur) => acc+cur,0))