function solution(name, yearning, photo) {
  const obj = {}
  
  name.forEach((el, index) => obj[el] = yearning[index])
    
  return photo.map(el => el.reduce((sum, name) => obj[name] === undefined ? sum + 0 : sum + obj[name], 0))
}