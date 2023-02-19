function solution(cards1, cards2, goal) {
  let count = 0
  const n = goal.length
  
  while(count < n){
    if(goal[0] === cards1[0]){
      goal.shift()
      cards1.shift()
    }
    if(goal[0] === cards2[0]){
      goal.shift()
      cards2.shift()
    }
    
    count++
  }
  
  return goal.length===0 ? "Yes" : "No"
}