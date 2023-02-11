function solution(s, n) {
  let result = ""
  
  for(let i = 0; i < s.length; i++){
    const str = s[i].charCodeAt()
    
    if(str === 32){result += " "}
    else if(str <= 90){ // 대문자
      if(str + n > 90){
        result += String.fromCharCode(64 + Math.abs(str + n - 90))
      }else{
        result += String.fromCharCode(str+n)
      }      
    }else{ // 소문자
      if(str + n > 122){
        result += String.fromCharCode(96 + Math.abs(str + n - 122))
      }else{
        result += String.fromCharCode(str+n)
      }      
    }
  }
  return result
}