function solution(myString, pat) {
    let cnt = 0
    for(let i = 0; i < myString.length; i++){
        if(myString.slice(i).indexOf(pat) === 0)cnt++
    }
    return cnt
}