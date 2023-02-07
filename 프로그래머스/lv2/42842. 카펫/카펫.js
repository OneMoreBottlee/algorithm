function solution(brown, yellow) {
  let sum = brown + yellow
  let result
  
  // yellow 가 정사각형 모양일때
  if(Number.isInteger(Math.sqrt(yellow))){
    result = [Math.sqrt(sum), Math.sqrt(sum)]
  }else{
    // yellow 가 직사각형일때
    let num = Math.floor(Math.sqrt(yellow))
    for(let i = 1; i <= num; i++){
      let n = yellow / i
      result = i*n + 2*n + (i+2)*2
      
      // 조건에 맞는지 확인
      if(result === sum){
        result = [n+2, i+2]
        break
      }
    }
  }  
  
  return result
}