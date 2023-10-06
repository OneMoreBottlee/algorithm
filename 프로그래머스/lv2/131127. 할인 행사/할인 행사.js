function solution(want, number, discount) {
    let answer = 0;
    
    // 구매 희망 아이템과 개수 정리
    const wantSet = {}
    want.forEach((meal, idx) => wantSet[meal] = number[idx])

    discount.forEach((_, idx) => {
        // 10일간 구매 가능한 아이템들
        const discountTarget = discount.slice(idx, idx + 10)
        const copyWantSet = {...wantSet}
        
        // 구매 희망 리스트에서 갯수 차감
        discountTarget.forEach(meal => {
            if(copyWantSet[meal]) copyWantSet[meal]--
            if(copyWantSet[meal] === 0) delete copyWantSet[meal]
        })

        // 리스트 클리어시 카운트 1
        if(Object.keys(copyWantSet).length === 0) answer++
    })
    
    return answer;
}