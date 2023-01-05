function solution(n) {
  let string = n+''
  let result = []
  for(let i = 0; i < string.length; i++){
    result.unshift(Number(string[i]))
  }
  return result
}