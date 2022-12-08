const input = require('fs').readFileSync('예제.txt').toString().split('\n');

const N = Number(input[0])
const grade = input[1].split(' ')
const M = Math.max(...grade)
let addGrade = 0

for(let i = 0; i < N; i++){
    addGrade = addGrade + Number(grade[i])
}

const newAverage = addGrade/M*100/N
console.log(newAverage)