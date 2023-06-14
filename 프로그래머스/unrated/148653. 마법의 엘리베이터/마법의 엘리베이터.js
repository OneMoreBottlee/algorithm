function solution(storey) {
    // 숫자를 각 자리수별 배열로 변환
    const numbers = [0, ...String(storey).split("").map(Number).reverse()]
    numbers.push(0)
    
    // 횟수 카운트
    let cnt = 0
    
    // 1의 자리수부터 계산
    for(let i = 1; i < numbers.length; i++){
      const num = numbers[i]
      
      if(num === 5){  // 해당 자리수의 숫자가 5인 경우, 다음 자리수 > 5 ? + : -
        cnt += num
        if(numbers[i+1] >= 5)numbers[i+1]++
      }else if(num === 10){	// 이전 자리수에서 값이 더해져 10이 된 경우
        numbers[i+1]++
        numbers[i] = 0
      }else if (num > 5){   // 5보다 크면 그만큼 더하는게 최소
        cnt += 10 - num
        numbers[i+1]++
      }else{    // 5보다 작으면 그만큼 빼는게 최소
        cnt += num
      }
    }
    
    return cnt
}