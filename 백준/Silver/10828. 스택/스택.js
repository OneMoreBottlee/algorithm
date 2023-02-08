const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
input.shift()

const stack = []
let result = ""

input.forEach(el => {
    // push
    if(el.includes("push")){
        stack.push(el.slice(5))
    }

    // pop
    if(el.includes("pop")){
        result += (stack.length !== 0 ? stack.pop() : -1) + `\n`
    }

    // size
    if(el.includes("size")){
        result += stack.length + '\n'
    }

    // empty
    if(el.includes("empty")){
        result += (stack.length !== 0 ? 0 : 1) + '\n'
    }

    // top
    if(el.includes("top")){
        result += (stack.length === 0 ? -1 : stack[stack.length-1]) + '\n'
    }
})

console.log(result)