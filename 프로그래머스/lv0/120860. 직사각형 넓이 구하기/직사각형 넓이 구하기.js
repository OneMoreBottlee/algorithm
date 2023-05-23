function solution(dots) {
    const x = []
    const y = []
  
    dots.forEach((el) => {
        x.push(el[0])
        y.push(el[1])
    })
  
	const width = Math.max(...x) - Math.min(...x)
    const height = Math.max(...y) - Math.min(...y)
  
    return width * height
}