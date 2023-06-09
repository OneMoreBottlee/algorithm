function solution(s, skip, index) {
  const skipCode = skip.split("").map(el => el.charCodeAt())
  
  let result = ""
  for(let letter of s){
    let num = letter.charCodeAt()
    
    for(let i = 0; i < index; i++){
      // 1. index를 더하는 과정
      num++
      // 1-1. skip에 포함되어있으면 한 글자 뒤로
      while(skipCode.includes(num))num++
      
      // 2. z 를 넘어가는 값 조정
      if(num > 122){
        const dif = num - 122
        num = 96 + dif
      }
      // 2-1. skip에 포함되어 있으면 한 글자 뒤로
      while(skipCode.includes(num))num++
    }
    
    result += String.fromCharCode(num)
  }
  
  return result
}