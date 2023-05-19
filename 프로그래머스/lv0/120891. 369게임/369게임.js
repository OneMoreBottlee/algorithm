function solution(order) {
    const str = order+""
    let cnt = 0
    for(let i = 0; i < str.length; i++){
        const tsn = str[i]
        tsn === "3" || tsn === "6" || tsn === "9" ? cnt++ : null
    }
    return cnt
}