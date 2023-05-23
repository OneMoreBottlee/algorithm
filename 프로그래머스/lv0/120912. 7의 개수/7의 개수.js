function solution(array) {
    return array.reduce((acc,cur) => acc + checkSeven(String(cur)), 0)
}

function checkSeven(str){
    let count = 0;
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === "7")count++
    }
    
    return count
}