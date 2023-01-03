function solution(num) {
  let result = 0
  for(let i = 1; i <= num; i++){
    if(num/i - Math.floor(num/i) === 0){result += i}
  }
  return result
}