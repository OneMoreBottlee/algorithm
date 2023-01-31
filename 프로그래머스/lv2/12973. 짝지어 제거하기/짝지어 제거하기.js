function solution(s){
  let arrS = s.split('')
  let stack = []

  while(arrS.length > 0){
    let add = arrS.pop()
    add === stack[stack.length-1] ? stack.pop() : stack.push(add)
  }
  
  return stack.length === 0 ? 1 : 0
}