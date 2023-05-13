function solution(a, b) {
    const ab = a+"" +b+""
    const ba = b+"" +a+""
    return ab >= ba ? ab*1 : ba*1
}