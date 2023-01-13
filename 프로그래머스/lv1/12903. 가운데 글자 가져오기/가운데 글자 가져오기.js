function solution(s) {
  const middleValue = Math.floor(s.length/2)
  
  return s.length%2 === 0 ? s[middleValue-1] + s[middleValue] : s[middleValue]
}