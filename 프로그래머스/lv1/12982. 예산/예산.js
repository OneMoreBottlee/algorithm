function solution(d, budget) {
    
    // 최대한 많은 부서를 지원하기 위해 신청 금액이 작은 부서부터 지원
    d.sort((a,b)=>a-b)
  
    let count = 0

    // 지원금 전달 후 남은 지원금이 0보다 크거나 같을때 지원 가능함
    d.forEach(el => {
      	if(budget - el >= 0){
          budget -= el;
      		count++;
        }
    })
    
    return count
}