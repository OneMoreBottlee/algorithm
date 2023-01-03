function solution(num) {
  if(num<0) num = num*-1  
  return num%2 === 1 ? "Odd" : "Even"
}