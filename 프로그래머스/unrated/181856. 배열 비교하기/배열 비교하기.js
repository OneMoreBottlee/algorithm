function solution(arr1, arr2) {
  	let result = arr1.length > arr2.length ? 1 : -1
    if(arr1.length === arr2.length){
      	const sum1 = arr1.reduce((acc,cur) => acc+cur, 0)
        const sum2 = arr2.reduce((acc,cur) => acc+cur, 0)
        
        if(sum1 === sum2)result = 0
      	else if(sum1 > sum2)result = 1
      	else result = -1
    }
  
    return result
}