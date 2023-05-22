function solution(arr, idx) {
  	const result = arr.reduce((acc, cur, index) => (cur === 1 && index >= idx) ? Math.min(acc, index) : acc, Infinity)
    return result === Infinity ? -1 : result
}