const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let box = input[1].split(' ').map(e => Number(e))

let setBox = new Set(box)
let uniq = [...setBox].sort((a,b) => a - b);

let objBox = {};
uniq.forEach((e, index) => {objBox[e] = index})

let result = '';
for(let i = 0; i < box.length; i++) {
    result += objBox[box[i]] + ' ';
}

console.log(result);