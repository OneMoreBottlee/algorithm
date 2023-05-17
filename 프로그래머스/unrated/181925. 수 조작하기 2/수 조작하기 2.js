function solution(numLog) {
    let number = numLog[0]
    let result = ""
    
    for(let i = 1; i <= numLog.length; i++){
        if(numLog[i] - number === 1){
            result += "w"
            number += 1
        }
        
        if(numLog[i] - number === -1){
            result += "s"
            number += -1
        }
        
        if(numLog[i] - number === 10){
            result += "d"
            number += 10
        }
        
        if(numLog[i] - number === -10){
            result += "a"
            number += -10
        }
    }
    
    return result
}