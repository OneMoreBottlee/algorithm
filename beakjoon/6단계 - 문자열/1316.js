const input = require('fs').readFileSync('예제.txt').toString().trimEnd().split('\n');
const N = Number(input[0])

function repeatABC(word){
    let beforeValue = word[0]
    let box = {}
    box[word[0]] = 0
    for(let i = 0; i < word.length; i++) {
        let abc = word[i]
        if(word[i] === beforeValue){
            if(box[abc] > 0){
                box[abc]++
            }else if(box[abc] = 0){
                box[abc] = 1
            }else{
                box[abc] = 0
            }
        }else{
            if(box[abc] >= 0){
                return false
            }else{
                box[abc] = 0
            }
        }
        beforeValue = abc
    }
    return true
}

let count = 0
for(let j = 1; j <= N; j++){
    if(repeatABC(input[j])){count++}
}
console.log(count)