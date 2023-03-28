const graph = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number)
const n = graph[0]
const result = []

function BFS(n, i) {
    if(visited[i])return
    visited[i] = true
    let pointer = graph[i]
    BFS(n, pointer)
}

for(let i = 1; i <= n; i++){
    visited = new Array(n+1).fill(false)
    BFS(n, i)
    result.push(visited.filter(el => el).length)
}

const maxSenpai = Math.max(...result)
const answer = result.indexOf(maxSenpai)+1

console.log(answer)