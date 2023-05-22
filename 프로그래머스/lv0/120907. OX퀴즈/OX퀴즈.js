function solution(quiz) {
  return quiz.map(el => {
    const arr = el.split(" ")
    let result = arr[0]*1
    
    for(let i = 1; i < arr.length-2; i+=2){
      result += (arr[i] === "+") ? arr[i+1]*1 : arr[i+1]*-1
    }
    
    return result === arr[arr.length-1]*1 ? "O" : "X"
  })
}