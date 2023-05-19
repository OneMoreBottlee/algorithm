function solution(number) {
    let result = 0
    
    for(let num of number){
        result += num*1
    }
    
    return result % 9
}