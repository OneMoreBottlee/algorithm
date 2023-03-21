const [testCase, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < testCase; i++){
    const [m, n, k] = arr.shift().split(" ").map(Number)
    const tCase = arr.splice(0, k).map(el => el.split(" ").map(Number))
    
    // 밭 만들기
    const graph = []
    for(let i = 0; i < n; i++){
        graph[i] = new Array(m).fill(0)
    }

    // 배추 심기
    for(let i = 0; i < tCase.length; i++){
        let [y, x] = tCase[i]
        graph[x][y] = 1
    }

    // 지렁이 배치
    let answer = 0
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(dfs(graph, n, m, i, j))answer++
        }
    }
    
    console.log(answer)
}

function dfs (graph, n, m, x, y){
    // 범위에서 벗어나면 false
    if(x <= -1 || x >= n || y <= -1 || y >= m){
        return false
    }

    // 작업 시작
    if(graph[x][y] === 1){
        // 작업 체크 = -1
        graph[x][y] = -1

        // 상하좌우 확인
        dfs(graph,n,m,x-1,y)
        dfs(graph,n,m,x,y-1)
        dfs(graph,n,m,x+1,y)
        dfs(graph,n,m,x,y+1)
        return true
    }
    return false
}