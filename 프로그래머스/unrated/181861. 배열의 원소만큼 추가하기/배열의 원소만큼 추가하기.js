function solution(arr) {
  	const X = []
    arr.forEach(el => {
      for(let i = 0; i < el; i++){
        X.push(el)
      }
    })
    return X
}