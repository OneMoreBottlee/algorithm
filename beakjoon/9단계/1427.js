const input = require('fs').readFileSync('예제.txt').toString().trim().split('');
const result = input.sort((a,b)=> b-a).join('')
console.log(result)
