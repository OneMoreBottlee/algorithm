function solution(i, j, k) {
  const dp = [...new Array(j).fill(0)]
  
  for(; i <= j; i++){
    const abc = String(i).includes(k)
    const add = String(i).split("").filter(el => el === String(k)).length
    dp[i] = dp[i-1] + add
  }
  return dp[j]
}