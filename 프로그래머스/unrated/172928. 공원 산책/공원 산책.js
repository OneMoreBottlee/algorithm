function solution(park, routes) {
  
    // 시작 좌표 찾기
    let now = []
    for(let i = 0; i < park.length; i++){
      if(park[i].includes("S"))now.push(i, park[i].indexOf("S"))
    }
    
    const map = park.map(el => el.split(""))
    const move = routes.map(el => el.split(" "))
    
    for(let i = 0; i < move.length; i++){
      const [direction, number] = move[i]
      const check = [...now]
      let state = true
      
      if(direction === "E"){
        check[1] += number*1

        // 범위 이탈 확인
        if(check[1] >= map[0].length)state = false
        else{  // 경로상 X 여부 확인
          for(let j = now[1]; j <= check[1]; j++){
            if(map[now[0]][j] === "X")state = false
          }
        }
      
      }else if (direction === "W"){
        check[1] -= number*1
        
        // 범위 이탈 확인
        if(check[1] < 0)state = false
        else{  // 경로상 X 여부 확인
          for(let j = check[1]; j <= now[1]; j++){
            if(map[now[0]][j] === "X")state = false
          }
        }
      
      }else if (direction === "S"){
        check[0] += number*1
        
        // 범위 이탈 확인
        if(check[0] >= map.length)state = false
        else{  // 경로상 X 여부 확인
          for(let j = now[0]; j <= check[0]; j++){
            if(map[j][now[1]] === "X")state = false
          }
        }
      
      }else{
        check[0] -= number*1
        
        // 범위 이탈 확인
        if(check[0] < 0)state = false
        else{  // 경로상 X 여부 확인
          for(let j = check[0]; j <= now[0]; j++){
            if(map[j][now[1]] === "X")state = false
          }
        }
      }
              console.log(now, check, state)

      // 범위와 경로에 이상없으면 이동 
      if(state)now = [...check]
    }
  
    return now
}