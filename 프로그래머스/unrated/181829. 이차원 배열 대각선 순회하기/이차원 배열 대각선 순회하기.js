function solution(board, k) {
  	let result = 0
  	for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[0].length; j++){
        result += i + j <= k ? board[i][j] : 0
      }
    }
    return result
}