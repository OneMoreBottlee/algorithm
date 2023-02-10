function solution(n, works) {
  // 일하는 시간의 총합이 n보다 작으면 0 리턴
  if(works.reduce((acc,cur)=>acc+cur) <= n) return 0
  
  // 정렬
  works.sort((a,b)=>b-a)
  let result = 0
  
  while(n>0){
    // 최대값 저장
    const max = works[0]

    // max 보다 큰 값은 1씩 차감 => max가 항상 최대값이게 유지
    for(let i = 0; i < works.length; i++){
      if(works[i] >= max){
        works[i]--
        n--
      }
      if(!n)break
    }
  }
  
  works.forEach(el => result += el**2)
  
  return result
}