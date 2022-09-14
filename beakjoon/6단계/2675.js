const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input[0]

for(let i = 1; i <= T; i++){
    const caseBox = input[i].split(' ')
    const idx = caseBox[0]
    let result = ""

    for(let j = 0; j < caseBox[1].length; j++){
        result += String(caseBox[1][j]).repeat(idx)
    }

    console.log(result)
}