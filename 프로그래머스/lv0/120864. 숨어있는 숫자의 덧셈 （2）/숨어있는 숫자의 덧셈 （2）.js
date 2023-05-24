function solution(my_string) {
    return my_string.replace(/[A-z]/g, " ").split(" ").map(Number).reduce((acc,cur) => acc+cur,0)
}