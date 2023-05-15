function solution(a, d, included) {
    let result = 0;
    let number = a;
    for(let i = 0; i < included.length; i++){
        
        if(included[i]){
            result += number;
        }
        
        number += d
    }
    return result
}