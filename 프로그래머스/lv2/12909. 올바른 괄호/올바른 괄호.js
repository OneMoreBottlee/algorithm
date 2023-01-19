function solution(str){
  let obx = []
  if(str[0] === ")" || str[str.length-1] === "(")return false
  
  for(let i of str){
    obx[obx.length-1] === i || obx.length === 0 ? obx.push("(") : obx.pop()
  }
  return obx.length === 0
}