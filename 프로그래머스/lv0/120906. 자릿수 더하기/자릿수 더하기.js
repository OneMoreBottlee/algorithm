function solution(n) {
  let result = 0
  let abc = n+""
  for(let i = 0; i < abc.length; i++){
    result += abc[i]*1
  }
  return result
}