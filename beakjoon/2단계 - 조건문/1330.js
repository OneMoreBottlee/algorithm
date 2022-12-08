const input = require('fs').readFileSync('예제.txt').toString().split(' ');

const A = Number(input[0])
const B = Number(input[1])

if(A > B){
    return console.log('>')
    }else if(A < B){
        return console.log('<')
    }else if(A === B){
        return console.log('==')
    }