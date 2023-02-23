const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N,M,B] = input[0].split(" ").map(el=>el*1)
const mine = input.slice(1).reduce((acc, cur) => acc + " " + cur, 0).split(" ").slice(1).map(el => el*1)

let minTime = Number.MAX_VALUE;
let maxHeight = 0;
const heights = Array(257).fill(0);
mine.forEach(v => heights[v]++);

for (let target = 256; target >= 0; target--) {
    let block = B;
    let time = 0;
    heights.forEach((v, i) => {
        block += (i - target) * v;
        if (target > i) {
        time += (target - i) * v;
        } else {
        time += (i - target) * 2 * v;
        }
    });
    
    if (minTime < time) break;
    if (block < 0) continue;
    if (time < minTime) {
        minTime = time;
        maxHeight = target;
    }
}

console.log(minTime, maxHeight);