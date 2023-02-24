const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop()

function solution (arr) {
    const result = arr.map(el => check(el))
    return result.join("\n")
}

function check (str){
    const stack = []
    for(let i = 0; i < str.length; i++){
        if(str[i] === "(" || str[i] === "["){
            stack.push(str[i])
        }
        if(str[i] === ")"){
            stack[stack.length-1] === "(" ? stack.pop() : stack.push(str[i])
        }
        if(str[i] === "]"){
            stack[stack.length-1] === "[" ? stack.pop() : stack.push(str[i])
        }
    }
    return stack.length === 0 ? "yes" : "no"
}

console.log(solution(input))