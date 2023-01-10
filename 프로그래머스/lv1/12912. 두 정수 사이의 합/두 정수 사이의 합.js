function solution(a,b){
  let result = 0
  let small = Math.min(a,b)
  let big = Math.max(a,b)
  
  for(let i = small; i <= big; i++){
    result += i
  }
  return result
}