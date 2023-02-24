const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop()

function solution (arr) {
    const result = arr.map(el => check(el))
    return result.join("\n")
}

function check (str){
    const stack = []
    for(let i = 0; i < str.length; i++){
        const abc = str[i]
        const length = stack.length-1
        if(abc === "(" || abc === "["){
            stack.push(abc)
        }
        if(abc === ")"){
            stack[length] === "(" ? stack.pop() : stack.push(abc)
        }
        if(abc === "]"){
            stack[length] === "[" ? stack.pop() : stack.push(abc)
        }
    }
    return stack.length === 0 ? "yes" : "no"
}

console.log(solution(input))