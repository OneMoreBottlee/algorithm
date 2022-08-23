const input = require("fs").readFileSync("예제.txt").toString().trim().split(" ");

// 입력값을 number 타입으로 변환해 줍니다.
const a = +input[0];
const b = +input[1];

console.log(a + b);