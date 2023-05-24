function solution(lines) {
  	const lineArr = new Array(200).fill(0);
  
  	lines.forEach(([a, b]) => {
      for(; a < b; a++){
        lineArr[a+100]++
      }
    })

    return lineArr.reduce((acc, cur) => cur > 1 ? acc + 1 : acc, 0)
}