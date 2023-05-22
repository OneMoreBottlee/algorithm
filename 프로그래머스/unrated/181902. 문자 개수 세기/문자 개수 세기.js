function solution(my_string){
  const result = Array(52).fill(0)
  
  for(let abc of my_string){
    const number = abc.charCodeAt()
    number > 96 ? result[number-71]++ : result[number-65]++
  }
  
  return result
}