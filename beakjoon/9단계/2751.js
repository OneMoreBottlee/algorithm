const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');

const N = input[0]
const box = []

for(let i = 1; i <= N; i++){
    box.push(input[i])
}

box.sort((a,b)=> a-b)


console.log(box.join('\n'))