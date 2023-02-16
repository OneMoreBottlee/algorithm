function solution(n, lost, reserve) {
  const clothes = {}

  // 체육복 현황
  for(let i = 1; i <= n; i++){
    // 기본값은 체육복 1개
    clothes[i] = 1
    
    // 여분
    if(reserve.includes(i)){
      clothes[i] += 1
    }
    
    // 도난
    if(lost.includes(i)){
      clothes[i] -= 1
    }
  }
  
  
  // 체육복 분배
  for(let i = 1; i <= n; i++){    
    let add = 0
    
    // 체육복이 2개면
    if(clothes[i] === 2){
      // 본인거 빼고 기부
      clothes[i]--
      add += 1
      
      // 앞 번호에게
      if(clothes[i-1] === 0 && add > 0){
        clothes[i-1]++
        add--
      }
      // 뒷 번호에게
      if(clothes[i+1] === 0 && add > 0){
        clothes[i+1]++
        add--
      }
    }
  }
  
  return Object.values(clothes).filter(el => el===1).length
}