function solution(myStr) {
  	const result = myStr.replace(/[a-c]/g, "X").split("X").filter(el => el)
    return result.length ? result : ["EMPTY"]
}