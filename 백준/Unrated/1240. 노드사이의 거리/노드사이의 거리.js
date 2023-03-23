const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [n, m] = input[0]

// 그래프 만들기
const graph = []

// 빈 그래프
for(let i = 1; i <= n; i++){
    graph[i] = []
}

// 그래프에 연결 추가
for(let i = 1; i < n; i++){
    const [x, y, cost] = input[i]
    graph[x].push([y, cost])
    graph[y].push([x, cost])
}

// 방문 확인 && cost 업데이트
function dfs(x, dist){
    if(visited[x])return
    visited[x] = true
    distance[x] = dist
    for(let [y, cost] of graph[x])dfs(y, dist+cost)
}

for (let i = 0; i < m; i++){
    const [x, y] = input[n+i]
    visited = new Array(n+1).fill(false)
    distance = new Array(n+1).fill(-1)
    dfs(x, 0)
    console.log(distance[y])
}