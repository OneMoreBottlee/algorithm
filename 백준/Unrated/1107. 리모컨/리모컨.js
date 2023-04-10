const [N, M, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const brokens = nums    // 고장난 버튼
    ? nums.split(' ').reduce((acc, v) => {acc[v] = true; return acc;}, {})
    : {}

let count = Math.abs(100 - N) // + 와 - 로만 이동하는 경우

for (let i = 0; i < 1000000; i++) {
    const numString = i.toString()
    let isValid = true
    for (let j = 0; j < numString.length; j++) {
        if (brokens[numString[j]]) {    // 고장난 버튼인 경우
            isValid = false
            break;
        }
    }
    if (isValid) {
        count = Math.min(count, Math.abs(i - N) + numString.length)
    }
}

console.log(count);