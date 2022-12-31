function solution(slice, n) {
  let result = Math.floor(n/slice)
  
  n%slice !== 0 ? result++ : null
  
  return result
}