const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');

const box = input.slice(1,input.length)
box.sort((a,b)=>a-b)
console.log(box.join('\n'))