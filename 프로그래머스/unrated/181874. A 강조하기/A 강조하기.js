function solution(myString) {
    let result = ""
    
    for(let abc of myString){
        result += (abc.toLowerCase() === "a") ? "A" : abc.toLowerCase()
    }
    
    return result
}