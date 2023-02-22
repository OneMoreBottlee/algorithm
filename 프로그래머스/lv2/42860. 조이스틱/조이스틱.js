function solution(name){
  let frontName = new Array(name.length).fill("A")
  let index = 0
  let totalCount = 0
  
  // 상하 횟수 구하기
  const upDownCount = frontName.map((el,index) => {
    let count = 0
    if(name[index] !== frontName[index]){
      const abcIndex = name[index].charCodeAt()*1 - 65
      abcIndex < 26 - abcIndex ? count += abcIndex : count += 26 - abcIndex
      return count
    }else{
      return 0
    }
  }).reduce((acc,cur)=>acc+cur,0)

  // 좌우 횟수 구하기
  let min_move = name.length - 1;

  [...name].map((n, i) => {
    let idx = i + 1;

    // 연속되는 A의 개수 count
    while (idx < name.length && name[idx] === 'A') {
      idx++;
    }

    min_move = Math.min(
      min_move,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx),
    )
  })
  
  totalCount = upDownCount + min_move
  return totalCount
}