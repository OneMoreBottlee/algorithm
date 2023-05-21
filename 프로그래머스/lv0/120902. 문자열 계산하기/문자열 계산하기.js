function solution(my_string) {
  const arr = my_string.split(" ")
  let result = arr[0]*1
  
  for(let i = 1; i < arr.length; i+=2){
    const operator = arr[i]
    const num = arr[i+1]
    
    result += operator === "+" ? num*1 : num*(-1)
  }
  
  return result
}