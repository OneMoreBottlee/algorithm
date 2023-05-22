function solution(my_string, indices) {
  	const arr = my_string.split("");
    
    return arr.reduce((acc, cur, index) => indices.includes(index) ? acc + "" : acc + cur
    , "")
}