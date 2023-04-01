const [n, ...apart] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const graph = []

for(let i = 0; i < n; i++){
    graph.push(apart[i].split("").map(Number))
}

let answer = []

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        const current = DFS(i, j)
        if(current > 0)answer.push(current)
    }
}

function DFS(x, y){
    if(x <= -1 || x >= n || y <= -1 || y >= n)return 0
    if(graph[x][y] >= 1){
        graph[x][y] = -1

        let result = 1

        result += DFS(x-1, y)
        result += DFS(x, y-1)
        result += DFS(x+1, y)
        result += DFS(x, y+1)

        return result
    }
    return 0
}

answer.sort((a,b) => a-b)

console.log(answer.length + '\n' + answer.join('\n'))