const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let queue = [];
let result = "";

for (let i in input) {
  // push
  if (input[i].indexOf("push") !== -1) {
    let X = input[i].slice(5)
    queue.push(X);
  }

  // pop
  if (input[i] === "pop") {
    queue.length === 0 ? (result += "-1\n") : (result += queue.shift() + "\n");
  }

  // front
  if (input[i] === "front")
    queue.length === 0 ? (result += "-1\n") : (result += queue[0] + "\n");

  // back
  if (input[i] === "back")
    queue.length === 0
      ? (result += "-1\n")
      : (result += queue[queue.length - 1] + "\n");

  // size
  if (input[i] === "size") result += queue.length + "\n";

  // empty
  if (input[i] === "empty")
    queue.length === 0 ? (result += "1\n") : (result += "0\n");
}

console.log(result.slice(0, result.length - 1));
