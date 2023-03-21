const [c, n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const net = arr.map(el => el.split(" ").map(Number))

const stack = []

for(let i = 0; i <= c; i++){
    stack.push([])
}

for(let el of net){
    stack[el[0]].push(el[1])
    stack[el[1]].push(el[0])
}

let cnt = 0
const visited = new Array(c+1).fill(false)

function dfs(x){
    visited[x] = true
    cnt++
    for(y of stack[x]){
        if(!visited[y])dfs(y)
    }
}

dfs(1)

console.log(cnt-1)