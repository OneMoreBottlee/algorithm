const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [n, m] = input[0]

// 그래프
const graph = [...new Array(n+1)].map(el => Array(n+1).fill(0))

// 그래프에 정보 추가
for(let i = 1; i <= m; i++){
    const [u, v] = input[i]
    graph[u][v] = 1
    graph[v][u] = 1
}

// 방문 확인용 배열
const visited = new Array(n+1).fill(false)

let count = 0

for(let i = 1; i <= n; i++){
    if(!visited[i]){
        DFS(i)
        count++
    }
}

function DFS(v) {
    visited[v] = true;
    for (let i = 1; i < graph.length; i++) {
        if (graph[v][i] === 1 && visited[i] === false) {
            DFS(i);
        }
    }
}

console.log(count)