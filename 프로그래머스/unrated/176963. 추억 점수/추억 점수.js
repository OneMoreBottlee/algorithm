function solution(name, yearning, photo) {
  const obj = {}
  
  name.forEach((el, index) => obj[el] = yearning[index])
    
  return photo.map(el => el.reduce((sum, name) => sum += obj[name] ?? 0, 0))
}