function solution(board) {
  	const length = board.length
  	const check = [...new Array(length)].map(el => Array(length).fill(0))
    
    const disX = [-1, -1, -1, 0, 0, 0, 1, 1, 1]
    const disY = [-1, 0, 1, 0, -1, 1, -1, 0, 1]
		
    for(let i = 0; i < length; i++){
      for(let j = 0; j < length; j++){
        if(board[i][j] === 1){
          for(let z = 0; z < disX.length; z++){
            let nextX = i + disX[z]
            let nextY = j + disY[z]
            if(nextX < 0 || nextX >= check.length || nextY < 0 || nextY >= check.length)continue;
            check[nextX][nextY] = 1
          }
        }
      }
    }
  
    return length**2 - check.reduce((acc,cur) => acc + cur.filter(el=>el).length, 0)
}