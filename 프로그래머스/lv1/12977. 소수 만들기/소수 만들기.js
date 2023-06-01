function solution(nums) {
  	// 서로 다른 3개의 수를 더해 나오는 수를 찾아 중복없이 모으기
  	const sumNum = []
  	for(let i = 0; i < nums.length-2; i++){
        for(let j = 1; j < nums.length-1; j++){
            for(let k = 2; k < nums.length; k++){
                if(i < j && j < k && i < k){
                    sumNum.push(nums[i] + nums[j] + nums[k])
                }
            }
        }
    }
  
  	// 소수 체크
  	const isPrime = (num) => {
        if(num <= 1)return false
            for(let i = 2; i*i <= num; i++){
              	if(num % i === 0)return false
            }
        return true    
  	}
    
  	// 3개를 더한 수가 소수인지 체크해 소수만 남기기
  	const primeArr = []
  	for(let num of sumNum){
  			if(isPrime(num))primeArr.push(num)
  	}
    
  	// 소수의 개수 세기
  	return primeArr.length
}