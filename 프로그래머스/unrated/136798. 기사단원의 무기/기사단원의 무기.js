function solution(number, limit, power) {
  	let result = 0
    
    for(let num = 1; num <= number; num++){
      	let count = 1
        
        for(let i = 1; i <= num/2; i++){
          	if(!(num % i))count++
        }
        
      	result += count <= limit ? count : power
    }
    
  	return result
}