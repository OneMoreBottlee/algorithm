const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0]
const box = []

for(let i = 1; i <= N; i++){
    box.push(input[i])
}

box.sort((a,b)=> a-b)

for(let file of box){
    console.log(file)
}