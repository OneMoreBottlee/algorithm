const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, v] = input.shift().split(" ").map(Number)
const edges = input.map(el => el.split(" ").map(Number))
const graph = [...new Array(n+1)].map(() => [])

// 연결 관계 정리
for(let i = 0; i < input.length; i++){
    const [start, end] = edges[i]
    graph[start].push(end)
    graph[end].push(start)
}

function DFS(start) {
    const stack = [start]
    const visited = new Array(n+1).fill(false)
    const result = []

    while(stack.length){
        // 후입선출
        const node = stack.pop()

        if(!visited[node]){
            visited[node] = true
            result.push(node)
            stack.push(...graph[node].sort((a,b) => b-a))
        }
    }

    return result.join(" ")
}

function BFS(start){
    const queue = [start]
    const visited = new Array(n+1).fill(false)
    const result = []

    while(queue.length){
        // 선입선출
        const node = queue.shift()
        
        if(!visited[node]){
            visited[node] = true
            result.push(node)
            queue.push(...graph[node].sort((a,b) => a-b))
        }
    }

    return result.join(" ")
}


console.log(DFS(v)+"\n"+BFS(v))