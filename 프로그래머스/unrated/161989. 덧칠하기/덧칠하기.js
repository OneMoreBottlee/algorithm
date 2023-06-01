function solution(n, m, section) {
  	// 색칠 구간을 기록할 변수
    let fillArea = 0
    
    // 색칠 횟수를 기록할 변수
  	let count = 0
    
    section.forEach(el => {
      // 색칠할 구간이 색칠된 구간보다 오른쪽에 있으면 (크면)
      if(el > fillArea){
        // 색칠한 구간 기록
        fillArea = el + m -1;
        // 색칠 횟수 기록
        count++
      }
    })
    
	  return count
}