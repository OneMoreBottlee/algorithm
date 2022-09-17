let input = require('fs').readFileSync('예제.txt').toString().trim().split(' ')[0];

// 정규표현식...! => runtime error.. ! => input에 [0]을 안넣었다.. 이것도 정답
const result = input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, 'a').length
console.log(result)

// element 변경
const croatiaProblems = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
for(let ele of croatiaProblems){
    input = input.split(ele).join("a")  // input에서 ele을 기준으로 input을 나누고 a로 합쳐라
}

console.log(input.length)