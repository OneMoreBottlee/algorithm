const cash = require("fs").readFileSync("/dev/stdin").toString().trim()*1

function GreedySolution(cash){
    let count = 0
    if(cash <= 1 || cash === 3)return -1    
    
    while(cash > 0){
        if(cash % 2 === 1 || cash % 5 === 0){
            count++
            cash -= 5
        }else{
            count++
            cash -= 2
        }
    }

    return count
}

console.log(GreedySolution(cash))