function solution(n) {
  	const result = [...new Array(n)].map(el => [])

    for(let i = 0; i < n; i++){
      for(let j = 0; j < n; j++){
        result[i][j] = (i === j) ? 1 : 0
      }
    }
  
    return result
}