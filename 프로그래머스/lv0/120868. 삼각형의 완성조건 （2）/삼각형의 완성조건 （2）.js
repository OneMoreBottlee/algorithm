function solution(sides) {
  	const a = Math.max(...sides)
    const b = Math.min(...sides)
    return (a+b-a-1) + (a-(a-b))
}