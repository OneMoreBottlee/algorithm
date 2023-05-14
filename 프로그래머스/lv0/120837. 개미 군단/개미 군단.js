function solution(hp) {
  let count = 0
  
  while(hp){
    count++
    if(hp >= 5){
      hp -= 5
    }else if(hp >= 3){
    	hp -= 3
  	}else{
      hp -= 1
    }
  }
  
  return count
}