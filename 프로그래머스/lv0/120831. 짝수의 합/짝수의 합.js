function solution(number){
  if(number <= 1)return 0
  // 등차수열의합 sn = n*(a+l)/2
  const n = Math.floor(number/2)
  const a = 2
  const l = 2*n
  const result = n * (a+l) / 2;
  return result
}