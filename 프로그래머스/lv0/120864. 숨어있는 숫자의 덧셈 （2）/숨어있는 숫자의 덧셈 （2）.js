function solution(my_string) {
    let result = 0
    let number = ""
    
    for(let i = 0; i < my_string.length; i++){
      	const ele = my_string[i]
        
        if(!isNaN(Number(ele))){
          number += ele
          
          if(i === my_string.length-1){
            result += number*1
          }
        }else{
          result += number*1
          number = ""
        }
    }
  
    return result
}