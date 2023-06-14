function solution(queue1, queue2) {
    
    // 각 큐의 합
    let sum1 = queue1.reduce((acc,cur) => acc+cur, 0)
    let sum2 = queue2.reduce((acc,cur) => acc+cur, 0)
    
    // 각 큐의 시작점
    let idx1 = 0
    let idx2 = queue1.length
    
    // 목표값
    const half = (sum1 + sum2) / 2
    
    // 큐 합치기
    const queue = [...queue1, ...queue2]
    
    // 횟수의 최대값 - 하나의 큐의 모든 원소를 빼고 넣을 경우의 수
    const max = queue1.length * 3
    
    for(let cnt = 0; cnt < max; cnt++){
        // 하나의 큐 값이 목표값에 도달하면 횟수 리턴
        if(sum1 === half)return cnt
        
        sum1 > half ? sum1 -= queue[idx1++] : sum1 += queue[idx2++]
    }
    
    // 최대 횟수로 반복문을 돌렸음에도 목표에 도달하지 못한 경우
    return -1
}