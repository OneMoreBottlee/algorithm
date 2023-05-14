function solution(n, m) {
    if(n === m)return 1
    const factorial = [0, 1]
    for(let i = 2; i <= n; i++){
        factorial[i] = factorial[i-1] * i
    }
    
    return Math.round(factorial[n] / (factorial[n-m] * factorial[m]))
}