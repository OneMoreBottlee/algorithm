function solution(n) {
    const factorial = [0, 1]
    
    for(let i = 2; i <= 10; i++){
        factorial[i] = factorial[i-1] * i
    }
    
    return factorial.filter(el => el <= n).length -1 
}