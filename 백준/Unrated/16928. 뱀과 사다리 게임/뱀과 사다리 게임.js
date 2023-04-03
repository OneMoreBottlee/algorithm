const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [n, m] = input.shift()

// 보드판 그리기
const board = [...new Array(101)].map((el, i) => i)

// 뱀과 사다리 추가
for(let ladderOrSnake of input){
    const [start, end] = ladderOrSnake
    board[start] = end
}

// 보드판의 요소에서 이동할 수 있는 곳 정리
const graph = [...new Array(101)].map((el, i) => [...new Array(6)].map((ele, index) => board[i+index+1]).filter(num => num <= 100))

console.log(BFS(1, graph))

// 시작점(1) 부터 100까지 이동할 수 있는 최단 거리 찾기
function BFS (start, graph) {
    const visited = new Array(101).fill(false)
    const queue = [[start, 0]]

    while(queue.length){
        const [node, count] = queue.shift()
        if(node === 100)return count
        if(!visited[node]){
            visited[node] = true
            queue.push(...graph[node].map(el => [el, count+1]))
        }
    }
}