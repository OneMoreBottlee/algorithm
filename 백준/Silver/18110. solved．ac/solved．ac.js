const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)

function solution (n, arr) {
    const length = arr.length
    let difficulty = 0

    // 의견이 없다면 난이도는 0
    if(length === 0)return difficulty

    // 오름차순 정렬
    arr.sort((a,b) => a-b)

    // 절삭할 숫자 반올림
    const cutCnt = Math.round(length * 0.15)

    // 절삭 배열
    const result = arr.slice(cutCnt, length - cutCnt)
    const resultLength = result.length

    return Math.round(result.reduce((acc, cur) => acc + cur,0) / resultLength)
}

console.log(solution(n, arr))