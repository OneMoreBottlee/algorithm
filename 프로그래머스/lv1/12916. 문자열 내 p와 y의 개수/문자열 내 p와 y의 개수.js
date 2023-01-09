function solution(s){
  let cs = s.toLowerCase()
  let box = {}
  for(let i =0; i < cs.length; i++){
    box[cs[i]] ? box[cs[i]]+=1 :box[cs[i]] = 1
  }
  return box['p'] === box['y'] ? true : false
}