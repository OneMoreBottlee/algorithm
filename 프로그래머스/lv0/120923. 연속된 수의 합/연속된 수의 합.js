function solution(num, total) {
  	const start = (total*2 - (num * (num+1))) / (2 * num) + 1
    return new Array(num).fill(start).map((el, index) => el+index)
}