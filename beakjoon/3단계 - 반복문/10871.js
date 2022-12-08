const input = require('fs').readFileSync('예제.txt').toString().split('\n');
const index = Number(input[0].split(' ')[0])
const X = Number(input[0].split(' ')[1])
const A = input[1].split(' ')

let result = ""

for(let i = 0; i < index; i++){
    if(A[i] < X){
        result += A[i] + " "
    }
}

console.log(result)