const solution = (number) => {
  let count = 0
  for(let i = 0; i < number.length-2; i++){
    for(let j = 1; j < number.length-1; j++){
      if(i < j)
      for(let k = 2; k < number.length; k++){
        if(j < k)
        if(number[i]+number[j]+number[k] === 0){
          count++
        }
      }
    }
  }
  return count
}