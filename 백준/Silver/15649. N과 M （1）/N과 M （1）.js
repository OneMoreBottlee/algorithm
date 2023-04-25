const [N, M] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

function solution(N,M) {
    const seq = new Array(N).fill(0)
	const visited = new Array(N).fill(false)
    const result = []

    function dfs(cnt){
        if(cnt === M){
            const arr = []
            for(let i = 0; i < M; i++){
                arr.push(seq[i])
            }
            return result.push(arr.join(" "))
        }
        
        for(let i = 1; i <= N; i++){
            if(!visited[i]){
                visited[i] = true
                seq[cnt] = i
                dfs(cnt+1)
                visited[i] = false
            }
        }
    }
    
    dfs(0)
    return result.join("\n")
}

console.log(solution(N,M))