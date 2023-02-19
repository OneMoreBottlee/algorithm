const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, ...people] = input
const guys = people.map(el => el.split(" ").map(ell => ell*1))

console.log(guys.map(guy=>guys.filter(el => (el[0] > guy[0]) && (el[1] > guy[1])).length+1).join(" "))