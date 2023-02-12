const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N,M] = input[0].split(" ")
const [...arr] = input.slice(1)

const whiteFirst = "WBWBWBWBBWBWBWBW".repeat(4)
const blackFirst = "BWBWBWBWWBWBWBWB".repeat(4)

let answer = 10000;

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    const temp = arr[i].substr(j, 8)
      + arr[i + 1].substr(j, 8)
      + arr[i + 2].substr(j, 8)
      + arr[i + 3].substr(j, 8)
      + arr[i + 4].substr(j, 8)
      + arr[i + 5].substr(j, 8)
      + arr[i + 6].substr(j, 8)
      + arr[i + 7].substr(j, 8)

    let cnt1 = 0;
    let cnt2 = 0;

    for (let k = 0; k < 64; k++) {
      if (temp[k] != whiteFirst[k]) cnt1++;
      if (temp[k] != blackFirst[k]) cnt2++;
    }
    
    if (cnt1 < answer) answer = cnt1;
    if (cnt2 < answer) answer = cnt2;
  }
}

console.log(answer);