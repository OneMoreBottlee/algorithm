let input = require('fs').readFileSync('/dev/stdin').toString().trim() * 1
let startNum = 665

while(input > 0){
    startNum++

    if(startNum.toString().includes('666')){
        input--
    }
}

console.log(startNum)