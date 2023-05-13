function solution(emergency) {
    // 점수가 높은 순으로 정렬
    const list = [...emergency]
    list.sort((a,b)=>b-a)
    return emergency.map(el => list.indexOf(el)+1)
}