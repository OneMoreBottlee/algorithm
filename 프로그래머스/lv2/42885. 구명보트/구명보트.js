function solution(people, limit) {
  // 무게순 정렬
  people.sort((a,b) => a-b)
  
  // 무게별 인덱스
  let [light, weight] = [0, people.length-1]

  // 구명보트
  let boat = 0
  
  while(light < weight){
    // 가장 가벼운 사람 + 가장 무거운 사람 무게
    let save = people[light] + people[weight]
    
    // 구명 보트가 버틸 수 없으면 무거운 사람, 있으면 2명
    save > limit ? weight-- : (light++, weight--)
    
    // 구명보트 수 1 추가
    boat++
  }

  // 마지막
  if(light === weight)boat++
  return boat
}