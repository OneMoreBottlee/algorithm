const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0].split(' ')[0] 
const k = input[0].split(' ')[1]
const box = input[1].split(' ')
box.sort((a,b)=>b-a)
console.log(box[k-1])