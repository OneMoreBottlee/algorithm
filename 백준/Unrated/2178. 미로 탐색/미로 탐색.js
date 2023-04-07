const [firstLine, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n,m] = firstLine.split(" ").map(Number)
const graph = arr.map(el=>el.split("").map(Number))

function BFS(){
    // 0,0 부터 시작
    const stack = [[0,0,1]]

    // 4방향으로 이동시 x,y 값 변환
    const direction = [[0,1],[0,-1],[1,0],[-1,0]]

    while(stack.length){
        const [x, y, distance] = stack.shift()

        // 4방향 이동
        for(let i = 0; i < 4; i++){
            const xMove = x + direction[i][0]
            const yMove = y + direction[i][1]

            // graph 내 이동 가능한 칸을 확인하고, 칸의 값을 지금까지의 이동 거리로 변환한다.
            if(xMove >= 0 && yMove >= 0 && xMove < m && yMove < n){
                if(graph[yMove][xMove] === 1){
                    graph[yMove][xMove] = distance + 1
                    stack.push([xMove, yMove, distance+1])
                }
            }
        }
    }

    return graph[n-1][m-1]
}

console.log(BFS())