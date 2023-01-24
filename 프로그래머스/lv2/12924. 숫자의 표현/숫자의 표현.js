function solution(n) {
  // n만 있을때 조건 성립
  let result = 1
	let count = 1
  
  while(count <= Math.floor(n/2)){
    let sum = 0
    for(let i = count; i <= n; i++){
      sum += i
      if(sum > n)break
      if(sum === n){
        result++
        break
      }
    }
    count++
  }
  return result
}