function solution(arr1, arr2) {
  const result = []
  
  for(let i = 0; i < arr1.length; i++){
    let addArr = []
    
    for(let j = 0; j < arr2[0].length; j++){
      let addValue = 0
      
      for(let k = 0; k < arr2.length; k++){
        addValue += arr1[i][k] * arr2[k][j]
      }
      addArr.push(addValue)
    }
    result.push(addArr)
  }
  return result
}