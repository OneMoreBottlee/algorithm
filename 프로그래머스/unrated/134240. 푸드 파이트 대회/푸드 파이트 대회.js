function solution(food) {
  	let result = ""
    food.forEach((el, index) => result += String(index).repeat(Math.floor(el/2)))
    return [...result.split(""), "0" , ...result.split("").reverse()].join("")
}