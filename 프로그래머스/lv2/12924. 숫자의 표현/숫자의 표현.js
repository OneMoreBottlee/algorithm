function solution(n) {
  // n만 있을때 조건 성립
  let result = 1
  let startValue = 1
  
  // 중앙값보다 큰 값은 확인할 필요 X
  while(startValue <= Math.floor(n/2)){
    let sum = 0
    
    // 시작값부터 n의 중앙값까지 조건을 만족하는 값 찾기
    for(let i = startValue; i <= n; i++){
      sum += i
      // 더했을때 n보다 큰 값은 필요없음, 반복문 종료
      if(sum > n)break
      
      // 조건을 만족하는 값. result 1 추가 & 반복문 종료
      if(sum === n){
        result++
        break
      }
    }
    
    // 시작값 1추가
    startValue++
  }
  return result
}
