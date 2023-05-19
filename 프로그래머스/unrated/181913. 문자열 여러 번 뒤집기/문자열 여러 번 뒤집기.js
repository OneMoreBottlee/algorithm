function solution(my_string, queries){
  let arr = my_string.split("")
  
  queries.forEach(el => {
    arr = [...arr.slice(0, el[0]), ...arr.slice(el[0], el[1]+1).reverse(), ...arr.slice(el[1]+1)]
  })
  
  return arr.join("")
}