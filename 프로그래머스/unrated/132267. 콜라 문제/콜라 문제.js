function solution(a, b, n) {
  let total = n
  let cola = 0
  
  while(total >= a){
    const number = Math.floor(total/a) * b
    const rest = total % a
    total = number + rest
  	cola += number
  }
  return cola
}