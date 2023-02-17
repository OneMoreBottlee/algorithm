function solution(n) {
    let field = Array(n + 1).fill(true).fill(false, 0, 2)
    for(let i = 2; i * i <= n; i++){
        if(field[i]){
            for(let j = i * i; j <= n; j += i){
                field[j] = false
            }
        }
    }
    return field.filter(e=>e).length
}