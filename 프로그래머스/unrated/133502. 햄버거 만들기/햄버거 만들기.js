function solution(ingredient) {
  let checkBox = []
  let count = 0
  for(let i = 0; i < ingredient.length; i++){
    checkBox.push(ingredient[i])
    if(checkBox.length<4)continue
    if(checkBox[checkBox.length-4]=== 1 &&
       checkBox[checkBox.length-3]=== 2 &&
       checkBox[checkBox.length-2]=== 3 &&
       checkBox[checkBox.length-1]=== 1){
      count++
      for (let j = 0; j < 4; ++j) {
        checkBox.pop();
      }
    }
  }
  return count
}
