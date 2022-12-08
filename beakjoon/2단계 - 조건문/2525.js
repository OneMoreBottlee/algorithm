
const input = require('fs').readFileSync('예제.txt').toString().split('\n');

const inputA = input[0].split(' ')
const A = Number(inputA[0])
const B = Number(inputA[1])
const C = Number(input[1])

if(A+ (parseInt((B+C)/60)) >= 24 && B + C >= 60){
    return console.log(`${A+(parseInt((B+C)/60))-24} ${(B+C)%60}`)
}else if(B + C >= 60){
    return console.log(`${A+(parseInt((B+C)/60))} ${(B+C)%60}`)
}else{
    console.log(`${A} ${B+C}`)
}
