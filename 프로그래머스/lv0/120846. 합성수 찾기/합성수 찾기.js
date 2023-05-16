function solution(n) {
    let count = 0
    for(let i = 1; i <= n; i++){
        check(i) ? count++ : null
    }
    return count
}

function check(n) {
    let count = 0
    for(let i = 1; i <= n; i++){
        if(count >= 3)break
        if(n % i === 0)count++
    }
    return count >= 3 ? true : false
}