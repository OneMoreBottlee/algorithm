function solution(arr) {
  	let cnt = 0
    let beforeArr = arr
    let afterArr = []
    
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    
    while(true){
      afterArr = beforeArr.map(el => {
          if(el >= 50 && el % 2 === 0)return el/2
          if(el < 50 && el % 2 === 1)return el*2+1
          return el
      })
      
      if(equals(beforeArr, afterArr))break
      
      beforeArr = afterArr
      cnt++
    }

    return cnt
}