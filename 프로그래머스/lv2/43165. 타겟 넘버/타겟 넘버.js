function solution(numbers, target) {
  let answer = 0

  function dfs(level, sum){
    if(level === numbers.length){
      if(sum === target){
        answer += 1
      }
      return
    }    
    dfs(level + 1, sum + numbers[level])
    dfs(level + 1, sum - numbers[level])
  }
    
  dfs(0,0)
    
  return answer
}