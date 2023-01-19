function solution(arr, location){
    // 뽑은 프린트의 수
    let printCount = 0
  
    while(arr.length > 0){
        let front = arr.shift()
        location--
        
        // 첫번째 요소 확인
        if(front >= Math.max(...arr)){
            
            // 큰 값이면 지우고 1 추가
            printCount++
            
            // 찾던 값이면 출력
            if(location < 0)return printCount
        
        }else{
            // 작은 값이면 위치 재조정
            if(location < 0){location = arr.length}
            arr.push(front)
        }
    }
}