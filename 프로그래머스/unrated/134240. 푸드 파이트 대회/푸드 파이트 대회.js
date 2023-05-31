function solution(food) {
  	let matchFood = ""
    food.forEach((el, index) => matchFood += String(index).repeat(Math.floor(el/2)))
    return [...matchFood.split(""), "0" , ...matchFood.split("").reverse()].join("")
}