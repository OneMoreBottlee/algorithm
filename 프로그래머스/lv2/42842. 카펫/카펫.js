function solution(brown, yellow) {
  let sum = brown + yellow
  let result
  
  // yellow 가 정사각형 모양일때
  if(Number.isInteger(Math.sqrt(yellow))){
    result = [Math.sqrt(sum), Math.sqrt(sum)]
  }else{
    // yellow 가 직사각형일때
    let num = Math.floor(Math.sqrt(yellow))
    for(let height = 1; height <= num; height++){
      let width = yellow / height
      result = height * width + 2 * width + (height + 2) * 2
      
      // 조건에 맞는지 확인 & 반복문 탈출
      if(result === sum){
        result = [width + 2, height + 2]
        break
      }
    }
  }  
  
  return result
}