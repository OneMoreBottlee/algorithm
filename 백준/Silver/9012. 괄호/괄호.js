const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)
let result = ""

function checkPS (value) {
    const arr = value.split("")
    const stack = []
    
    while(arr.length !== 0){
        const ele = arr.shift()
        if(stack.length === 0){stack.push(ele)}
      else{
        if(stack[0] === ")"){return false}
        else{
          stack[stack.length-1] !== ele ? stack.pop() : stack.push(ele)
        }
      }
    }
    return stack.length === 0
}

input.forEach(el => result += checkPS(el) ? "YES" + "\n" : "NO" + "\n")

console.log(result.slice(0, result.length-1))