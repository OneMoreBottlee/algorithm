const [t, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => +el)

function solution(num){
    const wave = [0,1,1,1,2]

    for(let i = 5; i <= num; i++){
        wave[i] = wave[i-1] + wave[i-5]
    }

    return wave[num]
}

const result = arr.map(el => solution(el)).join("\n")

console.log(result)