function solution(l, r) {
    const result = []
    
    for(let i = l; i <= r; i++){
        if(i%5 !== 0)continue
        const str = i + ""
        if([...str].every(el => el === '5' || el === '0'))result.push(i)
    }

    return result.length ? result : [-1]
}