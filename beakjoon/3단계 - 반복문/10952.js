const input = require('fs').readFileSync('예제.txt').toString().split('\n'); //0 0일때 break 걸어야함

for(let i = 0; i < input.length-1; i++){
    let A = Number(input[i].split(' ')[0])
    let B = Number(input[i].split(' ')[1])
    let result = A + B

    if(result === 0){
        break;
    }else{
        console.log(result)
    }
    
}