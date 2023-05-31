function solution(k, score) {
	const result = []
    const hallOfFame = []
    
    for(let i = 0; i < score.length; i++){
      	const newSinger = score[i]
        const idx = hallOfFame.indexOf(Math.min(...hallOfFame))
        
		// 명예의 전당 리스트 길이가 k가 될때까지 채운다
        if(hallOfFame.length < k){
          	hallOfFame.push(newSinger)
        }else{
			// 새 가수의 점수가 명예의 전당 최소 점수보다 높은 점수면 그 가수를 밀어내고 명예의 전당에 입성한다.
            if(newSinger > Math.min(...hallOfFame))hallOfFame[idx] = newSinger
        }
      
      	// 각 일차의 명예의 전당 최솟값을 발표한다.
        result.push(Math.min(...hallOfFame))
    }
  
    return result
}