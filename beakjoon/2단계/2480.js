const input = require('fs').readFileSync('예제.txt').toString().split(' ');

const A = Number(input[0])
const B = Number(input[1])
const C = Number(input[2])

if(A === B && B === C && A === C){
    return console.log(`${10000 + A * 1000}`)
}else if( A === B || B === C || A === C){
    if(A === B){return console.log(`${1000 + A * 100}`)}
    if(A === C){return console.log(`${1000 + A * 100}`)}
    if(C === B){return console.log(`${1000 + B * 100}`)}
}else{
    if(A > B && A > C){return console.log(`${A * 100}`)}
    if(B > A && B > C){return console.log(`${B * 100}`)}
    if(C > B && C > A){return console.log(`${C * 100}`)}
}