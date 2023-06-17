const input = require("fs").readFileSync("/dev/stdin").toString().trim()*1

function solution (input) {
    const num = input / 4
    let result = ""
    
    for(let i = 0; i < num; i++){
        result += "long "
    }
    
    return result + "int"
}

console.log(solution(input))