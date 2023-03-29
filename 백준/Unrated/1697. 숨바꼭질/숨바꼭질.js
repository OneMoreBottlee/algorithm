const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

// 방문 기록이 없는 그래프 => 방문시 1로
const graph = new Array(100001).fill(0)

function BFS (startNumber, endNumber){
    // 시작점
    graph[startNumber] = 1
    let queue = [startNumber]
    let count = 0

    while(queue.length){

        // 현재 큐에 담긴 숫자들 확인
        const length = queue.length
        for(let i = 0; i < length; i++){
            let num = queue.shift()

            // 같은 숫자면 반복문 종료 && 카운트 리턴
            if(num === endNumber)return count

            // 해당 숫자에서 분기할 수 있는 3가지 경우 확인
            for(let nextNumber of [num-1, num+1, num*2]){
                if(nextNumber >= 0 && nextNumber <= 100000 && graph[nextNumber] === 0){
                    graph[nextNumber] =1
                    queue.push(nextNumber)
                }
            }
        }
        count++
    }
}   

console.log(BFS(n, k))