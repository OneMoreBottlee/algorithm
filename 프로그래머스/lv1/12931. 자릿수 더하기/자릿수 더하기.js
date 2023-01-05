function solution(n){
  let a = String(n)
  let result = 0
  for(let i = 0; i < a.length; i++){
    result += Number(a[i])
  }
  return result
}