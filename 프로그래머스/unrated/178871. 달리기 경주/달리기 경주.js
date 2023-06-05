function solution(players, callings) {
  // 이름별 순위, 순위별 이름으로 현재 랭킹을 기록할 Map
  const rankByName = new Map()
  const rankByGrade = new Map()
  
  // 랭킹 데이터 추가
  for(let i = 0; i < players.length; i++){
    const player = players[i]
    rankByName.set(player, i)
    rankByGrade.set(i, player)
  }
    
  // 이름이 호명될때마다 순위 변경
  callings.forEach(taggerName => {
    const taggerRank = rankByName.get(taggerName)
    const taggerNewRank = taggerRank-1
    
    const otherName = rankByGrade.get(taggerNewRank)
    const otherRank = taggerRank-1
    const otherNewRank = taggerRank
    
    rankByName.set(taggerName, taggerNewRank)
    rankByName.set(otherName, otherNewRank)
    rankByGrade.set(taggerRank, otherName)
    rankByGrade.set(otherRank, taggerName)
  })
  
  // 순위별 Map의 value를 활용해 변경된 배열 리턴
  const result = []
  rankByGrade.forEach(el => result.push(el))
  return result
}