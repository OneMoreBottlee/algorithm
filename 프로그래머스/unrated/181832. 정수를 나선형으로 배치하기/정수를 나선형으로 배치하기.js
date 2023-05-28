function solution(n){
  // 모두를 담을 배열
  const result = []

  // 배열 안 배열
  for(let i = 0; i < n; i++){
    result.push([])
  }
  
  // 이동
  let count = 1
  let startColumn = 0
  let endColumn = n-1
  let startRow = 0
  let endRow = n-1
  
  // 배열에 값 추가
  while(startColumn <= endColumn && startRow <= endRow){
    
    // 좌상 => 좌상
    for(let i = startColumn; i <= endColumn; i++){
      result[startRow][i] = count
      count++
    }
  	startRow++
  
    // 우상 => 우하
  	for(let i = startRow; i <= endRow; i++){
      result[i][endColumn] = count
      count++
    }
  	endColumn--
  
    // 우하 => 좌하
  	for(let i = endColumn; i >= startColumn; i--){
      result[endRow][i] = count
      count++
    }
  	endRow--
  
    // 좌하 => 좌상
  	for(let i = endRow; i >= startRow; i--){
      result[i][startColumn] = count
      count++
    }
  	startColumn++
  }

  return result
}