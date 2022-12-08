const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let A = input[0];
let B = input[1];

let sangsuA = Number(A[2] + A[1] + A[0]);
let sangsuB = Number(B[2] + B[1] + B[0]);

if (sangsuA > sangsuB) {
  return console.log(sangsuA);
} else {
  return console.log(sangsuB);
}
