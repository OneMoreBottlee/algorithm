function solution(n) {
  let result = "수박".repeat(n/2)
  return n%2 ? result + "수" : result
}