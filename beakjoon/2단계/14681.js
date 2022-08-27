const input = require('fs').readFileSync('예제.txt').toString().split('\n'); //런타임 에러

const X = Number(input[0])
const Y = Number(input[1])

if(X > 0 && Y > 0){
    return console.log(1)
}else if( X < 0 && Y > 0){
    return console.log(2)
}else if( X < 0 && Y < 0){
    return console.log(3)
}else if( X > 0 && Y < 0){
    return console.log(4)
}