function solution(bridge_length, weight, truck_weights) {
  	// 대기열
    let wait = []
    truck_weights.map(el => wait.push({weight: el, time: bridge_length}))
    // 작업 관련
    let totalTime = 0
    let workSpace = []
    
    // 건너는 작업 - 시간, 무게 고려해야함
    // 대기열과 작업열이 비워질때까지 반복
    while(wait.length > 0 || workSpace.length > 0){
      // 시간 up
      totalTime++
      
      // 현재 무게를 확인해서 새로운 트럭 추가
      let totalWeight = workSpace.length === 0 ? 0 : workSpace.map(el=>el.weight).reduce((acc,cur)=>acc+cur)
      if(workSpace.length === 0 || totalWeight + wait[0]?.weight <= weight)
        {
          workSpace.push(wait[0])
          wait.shift()
        }
      
      // 트럭 이동
      workSpace.map(el => el.time--)
      if(workSpace[0].time === 0)workSpace.shift()
    }
  
  // 마지막 트럭이 지나간 후
  return totalTime + 1
}