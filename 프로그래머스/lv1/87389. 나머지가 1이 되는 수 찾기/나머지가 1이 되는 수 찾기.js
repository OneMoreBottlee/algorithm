function solution(n){
  let a = []
  for(let i = 1; i <= n; i++){
    a.push(i)
  }
  return a.map(el => n % el).indexOf(1)+1
}