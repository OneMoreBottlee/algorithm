function solution(a, b, c, d) {
    const dice = [a, b, c, d]
    
    const result = []
    for(let dic of dice){
      result.push([dice.filter(el => el === dic).length, dic])
    }
  
  	// 중복 많은 순으로 정렬
  	result.sort((a,b) => b[0] - a[0])
  	
  	// 모두 같은 경우
  	if(result[0][0] === 4){
      return (1111 * result[0][1])
    }
  	
  	// 3 1 경우
  	if(result[0][0] === 3 && result[3][0] === 1){
      return (10 * result[0][1] + result[3][1])**2
    }
  
  	// 2 1 1 경우
  	if(result[0][0] === 2 && result[3][0] === 1){
      return result[2][1] * result[3][1]
    }
  	
  	result.sort((a,b) => a[1] - b[1])
  
  	// 2 2 경우
  	if(result[0][0] === 2 && result[3][0] === 2){
      return (result[0][1] + result[3][1]) * Math.abs(result[0][1] - result[3][1])
    }
  
  	// 모두 다른 경우
    return result[0][1]
}