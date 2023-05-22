function solution(n) {
  	const result = Math.sqrt(n)
    return result === Math.floor(result) ? 1 : 2
}