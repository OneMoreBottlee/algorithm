function solution(sizes) {
  const width = []
  const height = []
  
  sizes.forEach(el => {
    const max = Math.max(...el)
    const min = Math.min(...el)
    width.push(max)
    height.push(min)
  })
  
  const max = Math.max(...width)
  const min = Math.max(...height)
  
  return max * min
}