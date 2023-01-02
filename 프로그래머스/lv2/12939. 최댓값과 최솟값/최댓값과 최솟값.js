function solution(s) {
  const sArr = s.split(' ').sort((a,b)=>a-b)
  
  let result = `${sArr[0]} ${sArr[sArr.length-1]}`
  
  return result
}