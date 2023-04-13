const [[M, N, H], ...tomatoes] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" ").map(Number))

// 토마토 층 나누기
const tomatoBoxes = []
let count = 0

for(let i = 0; i < H; i++){
    tomatoBoxes.push(tomatoes.slice(count, count+N))
    count += N
}

// 입력값 중 익은 토마토 확인하기
const queue = []
let zeroCount = 0
let date = 0

for(let i = 0; i < H; i++){
    for(let j = 0; j < N; j++){
        for(let k = 0; k < M; k++){
            const tomato = tomatoBoxes[i][j][k]
            if(tomato === 1){
                queue.push([k, j, i, date])
            }else if(tomato === 0){
                zeroCount++
            }
        }
    }
}

// 익은 토마토 주위 6방향으로 확산하기
let pointer = 0
const offsetX = [0, 0, 0, 0, -1, 1] // 왼쪽칸, 오른쪽칸, ...같은행
const offsetY = [0, 0, -1, 1, 0, 0] // 아래칸, 위칸, ...같은열
const offsetZ = [-1, 1, 0, 0, 0, 0] // 아래층, 위층, ...같은층

while (pointer < queue.length) {
    const [ x, y, z, countDate ] = queue[pointer++]
    
    // 6방향 이동
    for (let i = 0; i < 6; i++) {
        const nextX = x + offsetX[i]
        const nextY = y + offsetY[i]
        const nextZ = z + offsetZ[i]

        // 열매가 없으면 토마토야 피어나라
        if (tomatoBoxes?.[nextZ]?.[nextY]?.[nextX] === 0) {
            queue.push([ nextX, nextY, nextZ, countDate + 1 ])
            zeroCount--
            tomatoBoxes[nextZ][nextY][nextX] = 1
            date = Math.max(date, countDate + 1)
        }
    }
}

console.log(zeroCount ? -1 : date)