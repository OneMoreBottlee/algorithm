function solution(x) {
  return x%(x+"").split("").reduce((acc,cur) => +acc + +cur) === 0
}