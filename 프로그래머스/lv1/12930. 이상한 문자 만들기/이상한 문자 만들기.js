function solution(s) {
  let result = ""
  let arr = s.split(' ').map(el=>{
    let changeEl = ""
    for(let i = 0; i < el.length; i++){
      i%2 === 0 ? changeEl += el[i].toUpperCase() : changeEl += el[i].toLowerCase()
    }
    result += " " + changeEl
  })
  return result.replace(" ", "")
}