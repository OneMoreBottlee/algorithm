function solution(n) {
    return Number(n.toString().split('').sort((a,b)=>b-a).reduce((acc,cur) => acc+cur))
}