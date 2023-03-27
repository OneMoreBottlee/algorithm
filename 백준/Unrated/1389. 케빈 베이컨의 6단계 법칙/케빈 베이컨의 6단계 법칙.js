const [firstline, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(el => el.split(" ").map(Number))
const [n, m] = firstline
const result = []

// 관계 정리
const graph = [...new Array(n+1)].map(() => [])
input.forEach(el => {
    const [start, end] = el
    graph[start].push(end)
    graph[end].push(start)
})

function BFS (start, target) {
    const queue = [[start, 0]]
    const visited = new Array(n+1).fill(false)

    while(queue.length){
        let [cur, count] = queue.shift()
        let friend = graph[cur]
        
        if(visited[cur])continue
        
        visited[cur] = true

        if(cur === target)return count

        for(let i = 0; i < friend.length; i++){
            let value = friend[i]
            if(visited[value])continue
            queue.push([value, count+1])
        }
    }
}

for(let i = 0; i < n; i++){
    let count = 0
    for (let j = 1; j <= n; j++){
        count += BFS(i+1, j)
    }
    result.push(count)
}

const min = Math.min(...result)
console.log(result.indexOf(min)+1)