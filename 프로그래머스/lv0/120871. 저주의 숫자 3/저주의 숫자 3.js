function solution(n) {
    const dp = [0]
    for(let i = 1; i <= n; i++){
        let before = dp[i-1] + 1
        
        while(before%3 === 0 || String(before).includes("3")){
          if(before % 3 === 0)before++
          if(String(before).includes("3"))before++
        }
        
      	dp[i] = before
    }
  
    return dp[n]
}