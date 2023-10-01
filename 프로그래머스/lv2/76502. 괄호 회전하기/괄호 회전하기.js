function solution(s) {
    
    // 올바른 괄호 문자열 배열인지 체크
    const getIsCorrectString = (strArr) => {
        const correctSet = {
            ']' : '[',
            ')' : '(',
            '}' : '{',
        }
        
        const stack = []
        let isCorrect = true
        
        strArr.forEach(str => {
            if(str === '(' || str === '{' || str === '[' ){
                stack.push(str)
            }else{
                correctSet[str] === stack.at(-1) ? stack.pop() : isCorrect = false
            }
        })
        
        return stack.length === 0 && isCorrect
    }

    let answer = 0
    
    // s만큼 회전하면서 체크
    for(let i = 0; i < s.length; i++){
        const newS = [...s.slice(i, s.length), ...s.slice(0, i)]
        const isCorrect = getIsCorrectString(newS)
        answer += isCorrect
    }

    return answer
}