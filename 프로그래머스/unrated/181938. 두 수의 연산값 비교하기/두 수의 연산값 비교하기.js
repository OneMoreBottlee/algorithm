function solution(a, b) {
    const ab = a+""+b
    const eab = 2*a*b
    return ab*1 >= eab ? ab*1 : eab
}