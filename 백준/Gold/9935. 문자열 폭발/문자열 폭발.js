const [str, bomb] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const stack = []

for(let i = 0; i < str.length; i++){
    const abc = str[i]
    let word = stack.slice(stack.length - bomb.length+1).join("")
    if(word+abc === bomb){
        stack.splice(stack.length-bomb.length+1)
    }else{
        stack.push(abc)
    }
}

console.log(stack.length === 0 ? "FRULA" : stack.join(""))