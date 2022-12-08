const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
const N = input[0]

const box = input.slice(1,N+1)

box.sort()
box.sort((a,b)=> a.length - b.length)

let result = ""
for(let i = 0; i < box.length; i++){
    if(box[i] === box[i+1]){
        continue
    }else{
        result += box[i] + "\n"
    }
}
console.log(result)
