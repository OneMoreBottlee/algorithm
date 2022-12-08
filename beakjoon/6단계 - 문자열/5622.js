const input = require('fs').readFileSync('예제.txt').toString().split(' ');
const str = input[0].toLowerCase()

const abc = ["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
let count = 0;

for(let i = 0; i < str.length; i++){
    for(let j = 0; j < abc.length; j++){
        if(abc[j].indexOf(str[i]) === -1){
            continue
        }else{
            count += j + 3;
        }
    }
}

console.log(count)