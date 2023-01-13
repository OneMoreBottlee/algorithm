function solution(s) {
  return s.split("").sort().reverse().reduce((acc,cur)=>acc+cur)
}