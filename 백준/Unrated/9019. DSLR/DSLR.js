const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = input.shift()*1
const questions = input.map(el => el.split(" ").map(Number))

const answer = []

questions.map(el => {
    const [start, end] = el
    BFS(start, end)
})

console.log(answer.join("\n"))

function BFS(start, end) {
    const visited = new Array(10000).fill(false)
    
    visited[start] = true
    const queue = [[start, ""]]

    while(queue.length){
        let [cur, path] = queue.shift()

        if(cur === end){
            answer.push(path)
            return
        }

        // 1. D: D 는 n을 두 배로 바꾼다.
        const D = (cur * 2) % 10000
        if(!visited[D]){
            visited[D] = true
            queue.push([D, path + "D"])
        }

        // 2. S: S 는 n에서 1 을 뺀 결과 n-1을 레지스터에 저장한다.
        const S = cur === 0 ? 9999 : cur - 1
        if(!visited[S]){
            visited[S] = true
            queue.push([S, path + "S"])
        }

        // 3. L: L 은 n의 각 자릿수를 왼편으로 회전시켜 그 결과를 레지스터에 저장한다.
        const L = (cur % 1000) * 10 + Math.floor(cur / 1000)
        if(!visited[L]){
            visited[L] = true
            queue.push([L, path + "L"])
        }

        // 4. R: R 은 n의 각 자릿수를 오른편으로 회전시켜 그 결과를 레지스터에 저장한다. 
        const R = (cur % 10) * 1000 + Math.floor(cur / 10)
        if(!visited[R]){
            visited[R] = true
            queue.push([R, path + "R"])
        }
    }
}