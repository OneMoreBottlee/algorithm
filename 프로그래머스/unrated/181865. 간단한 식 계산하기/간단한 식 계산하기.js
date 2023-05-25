function solution(binomial) {
  	const [a, op, b] = binomial.split(" ")
    let result = ""
    
    if(op === "+")result = a*1 + b*1
    if(op === "-")result = a*1 - b*1
    if(op === "*")result = a*1 * b*1

    return result
}