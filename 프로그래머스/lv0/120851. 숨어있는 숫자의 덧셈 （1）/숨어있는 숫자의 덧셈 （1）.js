function solution(my_string) {
    const numberArr = my_string.replace(/[A-Za-z]/g, "").split("")
    const result = numberArr.reduce((acc,cur) => acc + cur*1,0)
    return result
}