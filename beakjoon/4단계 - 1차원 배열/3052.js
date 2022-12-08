const input = require('fs').readFileSync('예제.txt').toString().split('\n');

let box = []
for(let i = 0; i < 10; i++){    // 10개만 구해야함 !
    if(box.indexOf(input[i]%42) === -1){
        box.push(input[i]%42)
    }
}

console.log(String(box.length))