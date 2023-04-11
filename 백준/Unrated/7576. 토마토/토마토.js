const tomatoes = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" ").map(Number))
const [M, N] = tomatoes.shift()
const queue = [];
const offsetX = [0, 0, -1, 1];
const offsetY = [-1, 1, 0, 0];

let date = 0;
let pointer = 0;
let zeroCount = 0;

// 시작부터 토마토 있는 칸 확인
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (tomatoes[i][j] === 1) {
            queue.push({ x: j, y: i, countDate: 0 }); // 좌표와 날짜 기록
        } else if (tomatoes[i][j] === 0) {
            zeroCount++;
        }
    }
}

// 토마토 확산 시작
while (pointer < queue.length) {
    const { x, y, countDate } = queue[pointer++];
    // 상하좌우
    for (let i = 0; i < 4; i++) {
        const nextX = x + offsetX[i];
        const nextY = y + offsetY[i];
        if (tomatoes?.[nextY]?.[nextX] === 0) {
            queue.push({ x: nextX, y: nextY, countDate: countDate + 1 });
            zeroCount--;
            tomatoes[nextY][nextX] = 1;
            date = Math.max(date, countDate + 1);
        }
    }
}

console.log(zeroCount ? -1 : date);