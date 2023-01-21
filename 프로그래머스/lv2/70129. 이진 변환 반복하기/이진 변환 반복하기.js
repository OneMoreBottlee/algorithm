function solution(s){
    let count = 0
    let countZero = 0
  
    while(s !== "1"){
        let length = s.length
        s = s.replaceAll("0", "")
        count++
        countZero += length - s.length
        s = s.length.toString(2)
    }
    
    return [count, countZero]
}