const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n").slice(1);
const deque = [];
let result = ""

function solution(str) {
  if (str.includes("push_front")) {
    deque.unshift(str.slice(11));
  }
  if (str.includes("push_back")) {
    deque.push(str.slice(10));
  }
  if (str.includes("pop_front")) {
    const shift = deque.shift();
    result += (shift === undefined ? "-1" : shift) + "\n";
  }
  if (str.includes("pop_back")) {
    const pop = deque.pop();
    result += (pop  === undefined ? "-1" : pop) + "\n";
  }
  if (str === "size") {
    result += deque.length + "\n";
  }
  if (str.includes("empty")) {
    result += (deque.length === 0 ? "1" : "0") + "\n";
  }
  if (str === "front") {
    result += (deque.length === 0 ? "-1" : deque[0]) + "\n";
  }
  if (str === "back") {
    result += (deque.length === 0 ? "-1" : deque[deque.length - 1]) + "\n";
  }
}

input.forEach(el => solution(el));

console.log(result.slice(0, result.length-1))