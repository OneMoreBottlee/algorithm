const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const value = input[0]
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
let result = ''

for(let i = 0; i < alphabet.length; i++) {
    result += String(value.indexOf(alphabet[i])) + ' ';
}

console.log(result)