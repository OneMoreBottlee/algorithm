function solution(k, tangerine) {
    let answer = 0;
    
    const countObj = {}
    
    tangerine.forEach(size =>{
        countObj[size] === undefined ? countObj[size] = 1 : countObj[size]++
    })

    const tangerineCount = Object.entries(countObj).map(([key,value]) => ({key,value}))

    tangerineCount.sort((a,b) => b.value - a.value)
    
    for(let i = 0; i < tangerineCount.length; i++){
        if(k - tangerineCount[i].value <= 0){
            answer++
            break;
        }else{
            k -= tangerineCount[i].value
            answer++
        }
    }
    
    return answer;
}