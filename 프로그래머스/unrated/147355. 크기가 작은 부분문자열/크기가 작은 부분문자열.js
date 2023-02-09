function solution(t, p) {
  let count = 0
  const plength = p.length
  
  for(let i = 0; i < t.length - plength + 1; i++){
    if(t.slice(i, i+plength)*1 <= p*1)count++
  }
  
  return count
}