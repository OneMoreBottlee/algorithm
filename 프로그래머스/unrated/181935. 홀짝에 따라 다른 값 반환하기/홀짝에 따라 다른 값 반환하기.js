function solution(n) {
    let result1 = 0
    let result2 = 0
    
    for(let i = 1; i <= n; i++){
        i % 2 ? result1 += i : result2 += i*i;
    }
  
    return n % 2 ? result1 : result2
}