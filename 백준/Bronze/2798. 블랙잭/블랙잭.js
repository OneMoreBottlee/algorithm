const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const magicNumber = input[0].split(" ")[1]*1
const myCard = input[1].split(" ").map(el => el*1)

let result = 0

for(let i = 0; i < myCard.length; i++){
    for(let j = i+1; j < myCard.length; j++){
        for(let k = j+1; k < myCard.length; k++){
            const addNumber = myCard[i] + myCard[j] + myCard[k]
            if(addNumber > result && addNumber <= magicNumber){
                result = addNumber
            }
        }
    }
}

console.log(result)