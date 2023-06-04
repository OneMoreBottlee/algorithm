function solution(s) {
    const result = []
    const sArr = s.split("")
    
    while(sArr.length !== 0){
      let x = sArr[0]
      let xCnt = 1
      let yCnt = 0
      
      for(let i = 1; i < sArr.length; i++){
        const abc = sArr[i]
        
        x === abc ? xCnt++ : yCnt++
        
        if(xCnt === yCnt){
          break
        }
      }
      
      result.push(sArr.splice(0, xCnt + yCnt).join(""))
    }
  
    return result.length
}