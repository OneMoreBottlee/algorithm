function solution(number, k) {
  const arr = number.split("").map(el=>el*1)
  const stack = []
  
  for(let i = 0; i < number.length; i++){
    const num = number[i]
    
    // 정제 - 남은 숫자와 stack 값이 k를 충족하고, stack에 있는 마지막 값이 num보다 작으면 삭제
    while(k > 0 && stack[stack.length-1] < num){
      stack.pop()
      k--
    }

    // 추가
    stack.push(num)
  }
  
  stack.splice(stack.length-k, k)
  const result = stack.join("")
  return result
}