function solution(arr, intervals) {
    const result = []
    intervals.forEach(el => result.push(...arr.slice(el[0], el[1]+1)))
    return result
}