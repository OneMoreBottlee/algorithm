function solution(num, count=0){
  for(let i = 0; i < 500; i++){
    if(num === 1)return count
    if(count>=500)return -1
    if(num % 2 === 1){
      count++
      return solution(num*3+1, count)
    }else{
      count++
      return solution(num/2, count)
    }
  }
  return count
}