function solution(progresses, speeds) {
    let workDays = []
    
    // 100까지 남은 작업일수 구하기
    for(let i = 0; i < progresses.length; i++){
      workDays.push(Math.ceil((100-progresses[i])/speeds[i]))
    }
  	let result = []
  	let deploy = workDays[0];
  	let count = 0;
  	
    // 연속되는 배포가능개수 구하기
  	for(let i = 0; i < workDays.length; i++){
      if(workDays[i] <= deploy ){
        count++
      }else{
        result.push(count)
        count = 1;
        deploy = workDays[i]
      }
      // 마지막 요소인 경우
      if(i === workDays.length-1){
        result.push(count)
        break
      }
    }
    return result;
}