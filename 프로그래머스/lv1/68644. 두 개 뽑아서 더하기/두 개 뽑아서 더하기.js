function solution(numbers){
  let result = {}
  for(let i = 0; i < numbers.length-1; i++){
    for(let j = 1; j < numbers.length; j++){
      if(i !== j){
        result[numbers[i]+numbers[j]] = 0
      }
    }
  }
  return Object.keys(result).map((el)=>Number(el))
}