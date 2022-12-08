const input = require('fs').readFileSync('예제.txt').toString().split('\n');

for(let i = 1; i <= Number(input[0]); i++){
    const testCase = input[i].split(' ')
    
    console.log(Number(testCase[0]) + Number(testCase[1]))
}