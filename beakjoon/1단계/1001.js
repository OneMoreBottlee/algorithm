const input = require("fs").readFileSync("예제.txt").toString().trim().split(" ");

const a = +input[0];
const b = +input[1];

console.log(a-b);