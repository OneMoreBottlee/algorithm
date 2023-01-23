function solution(n) {
  let value = n
  let nLength = n.toString(2).replaceAll(0, "")
  
  while(true){
    value++
    if(value.toString(2).replaceAll(0, "") === nLength) break
  }
  
  return value
}