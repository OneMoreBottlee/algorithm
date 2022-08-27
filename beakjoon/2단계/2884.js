const input = require('fs').readFileSync('예제.txt').toString().split(' ');

const H = Number(input[0])
const M = Number(input[1])

if(H === 0 && M < 45){
    return console.log(`23 ${60-(45-M)}`)
}else if(M < 45){
    return console.log(`${H-1} ${60-(45-M)}`)
}else{
    return console.log(`${H} ${M-45}`)
}