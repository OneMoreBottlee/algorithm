const input = require("fs").readFileSync("예제.txt").toString().trim().split(" ");

console.log(input[0] === "" ? 0 : input.length)