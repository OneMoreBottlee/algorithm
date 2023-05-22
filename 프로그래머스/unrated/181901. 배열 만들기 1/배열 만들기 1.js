function solution(n, k) {
    const num = Math.floor(n / k)
    const result = []
    for(let i = 1; i <= num; i++){
        result.push(k * i)
    }
    return result
}