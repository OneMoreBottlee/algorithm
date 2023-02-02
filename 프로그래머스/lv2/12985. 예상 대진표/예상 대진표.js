function solution(n,a,b){
  let round = 1
  while(n > 1){
    if(Math.round(a/2) === Math.round(b/2)){
      break
    }
    n = n/2
    a = Math.round(a/2)
    b = Math.round(b/2)
    round++
  }
  return round
}