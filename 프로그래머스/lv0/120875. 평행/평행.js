function solution(dots) {
  	const ab = (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0])
  	const ac = (dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0])
  	const ad = (dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0])
  	const bc = (dots[1][1] - dots[2][1]) / (dots[1][0] - dots[2][0])
  	const bd = (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0])
  	const cd = (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0])
          
    return ab === cd || ac === bd || ad === bc ? 1 : 0
}