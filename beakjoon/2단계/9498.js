const input = require('fs').readFileSync('예제.txt').toString().split(' ');

const score = Number(input[0])

if(score >= 90){
    return console.log("A")
}else if(score >= 80){
    return console.log("B")
}else if(score >= 70){
    return console.log("C")
}else if(score >= 60){
    return console.log("D")
}else{
    return console.log("F")
}