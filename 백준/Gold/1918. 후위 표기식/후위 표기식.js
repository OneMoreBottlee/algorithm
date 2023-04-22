const str = require("fs").readFileSync("/dev/stdin").toString().trim()

const stack = [] // 괄호를 담을 스택
let result = ""

// 주어진 문자열의 요소를 한번씩 확인하면서 작업
for(let i = 0; i < str.length; i++){
    const abc = str[i] // 문자열에 속한 하나의 요소

    if(/[\w]/.test(abc)){ // 문자열이면 result에 추가
        result += abc
    }else{ // 연산 작업 - 우선 순위에 따라 작업한다.
        
        // 1순위 괄호
        if(abc === "(")stack.push(abc) // 여는 괄호는 바로 스택에 추가한다.
        if(abc === ")"){ // 닫는 괄호는 여는 괄호를 만날때까지 스택의 요소를 빼 result에 추가한다.
            while(stack.length && stack[stack.length-1] !== "("){
                result += stack.pop()
            }
            stack.pop() // 그리고 스택에서 여는 괄호를 삭제한다.
        }

        // 2순위 곱셈 나눗셈
        if(abc === "*" || abc === "/"){
            // 스택에서 곱셈이나 나눗셈 기호를 만나지 않을때까지 스택의 요소를 빼 result에 추가한다.
            while(stack.length && stack[stack.length-1] === "*" || stack[stack.length-1] ==="/"){
                result += stack.pop()
            }
            stack.push(abc)
        }

        // 3순위 덧셈 뺄셈
        if(abc === "+" || abc === "-"){
            // 스택에서 여는 괄호를 만날때까지 스택의 요소를 빼 result에 추가한다.
            while(stack.length && stack[stack.length-1] !== "("){
                result += stack.pop()
            }
            stack.push(abc)
        }
    }
}

// 스택에 남은 요소 처리
while(stack.length){
    result += stack.pop()
}

console.log(result)