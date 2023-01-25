const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let n = Number(input[0]);
let k = Number(input[1]);

function solution(n, k) {
  let result = [];
  let deleteBox = [];

  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  while (result.length !== 0) {
    for (let i = 1; i <= k; i++) {
      i === k ? deleteBox.push(result.shift()) : result.push(result.shift());
    }
  }

  return "<" + deleteBox.join(", ") + ">";
}

console.log(solution(n, k));
