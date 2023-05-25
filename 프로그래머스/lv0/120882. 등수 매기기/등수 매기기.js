function solution(score) {
    const average = score.map(el => (el[0]+el[1])/2)
    const averageIdx = [...average].sort((a,b) => b-a)
    return average.map((el, idx) => averageIdx.indexOf(el)+1)
}