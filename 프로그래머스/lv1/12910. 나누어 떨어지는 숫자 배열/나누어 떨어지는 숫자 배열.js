function solution(arr, divisor) {
  	const result = arr.filter((el)=>el%divisor===0).sort((a,b)=>a-b)
    return result.length ? result : [-1]
}