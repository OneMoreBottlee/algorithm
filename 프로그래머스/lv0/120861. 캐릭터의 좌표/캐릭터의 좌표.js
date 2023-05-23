function solution(keyinput, board) {
  	const start = [0, 0]
    const end = [(board[0]-1)/2, -(board[0]-1)/2, (board[1]-1)/2, -(board[1]-1)/2]
    keyinput.forEach(el => {
      if(el === "left"){
        start[0] > end[1] ? start[0]-- : null
      }
      if(el === "right"){
        start[0] < end[0] ? start[0]++ : null
      }
      if(el === "up"){
        start[1] < end[2] ? start[1]++ : null
      }
      if(el === "down"){
        start[1] > end[3] ? start[1]-- : null
      }
    })
  
    return start
}