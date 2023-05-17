function solution(my_string) {
    const numberArr = my_string.replace(/[^0-9]/g,"").split("")
    return numberArr.map(Number).sort()
}