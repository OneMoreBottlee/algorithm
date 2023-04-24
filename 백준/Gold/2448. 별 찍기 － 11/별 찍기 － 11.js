const N = require("fs").readFileSync("/dev/stdin").toString().trim()*1

function recursion(n){
    // 기본 삼각형
    if(n === 3)return ["  *  ", " * * ", "*****"]
    
    // 재귀
    const triangle = recursion(n / 2)
    const result = []
    
    // 기본 삼각형에 공백 붙이기
    for(let el of triangle)result.push(" ".repeat(n/2) + el + " ".repeat(n/2))
    
    // 좌우로 복사
    for(let el of triangle)result.push(el + " " + el)
    return result
}

console.log(recursion(N).join("\n"))