function solution(x) {
  return x%(x+"").split("").reduce((acc,cur) => acc*1 + cur*1)=== 0 ? true : false
}