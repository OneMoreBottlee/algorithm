function solution(N, stages) {
  const failure = [[0, 0]]
  let people = stages.length
  
  // 현재 스테이지 기준으로 스테이지별 실패 인원 확인
  stages.forEach(el => {
    if(el <= N){
      failure[el] === undefined ? failure[el] = [el, 1] : failure[el][1]++
    }
  })
  
  // 스테이지별 실패 인원 정리
  for(let i = 0; i <= N; i++){
    if(failure[i] === undefined) failure[i] = [i, 0] 
    else{
      const failPeople = failure[i][1]
      failure[i][1] = failPeople / people
      people -= failPeople}
  }
  
  // 실패율 기준 내림차순으로 정렬
  const result = failure.slice(1, N+1).sort((a,b) => b[1] - a[1])
  return result.map(el => el[0])
}