const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const n = input.shift()*1

const graph = input.map(el => el.split(""))
const answer = []

const checkGraph = input.map(el => el.replaceAll("G", "R").split(""))
const checkAnswer = []

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(graph[i][j] !== -1){
            const rgb = graph[i][j]
            const current = DFS(i, j, rgb)
            answer.push({color : rgb, count:current})
        }
        
        if(checkGraph[i][j] !== -1){
            const rb = checkGraph[i][j]
            const current = DFS2(i, j, rb)
            checkAnswer.push({color: rb, count: current})
        }
    }
}


function DFS(x,y,value) {
    if(x <= -1 || x >= n || y <= -1 || y >= n)return 0
    if(graph[x][y] === value){
        graph[x][y] = -1

        let result = 1

        result += DFS(x-1, y, value)
        result += DFS(x, y-1, value)
        result += DFS(x+1, y, value)
        result += DFS(x, y+1, value)

        return result
    }
    return 0
}

function DFS2(x,y,value) {
    if(x <= -1 || x >= n || y <= -1 || y >= n)return 0
    if(checkGraph[x][y] === value){
        checkGraph[x][y] = -1

        let result = 1

        result += DFS2(x-1, y, value)
        result += DFS2(x, y-1, value)
        result += DFS2(x+1, y, value)
        result += DFS2(x, y+1, value)

        return result
    }
    return 0
}

console.log(answer.length, checkAnswer.length)