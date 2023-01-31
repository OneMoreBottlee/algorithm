const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop()
let result = "";

let a = input.forEach(el => {
  let check = "yes\n";
  for (let i = 0; i < Math.floor(el.length / 2); i++) {
    if (el[i] !== el[el.length - 1 - i]) {
      check = "no\n";
      break;
    }
  }
  result += check;
});
console.log(result.slice(0, result.length-1));
