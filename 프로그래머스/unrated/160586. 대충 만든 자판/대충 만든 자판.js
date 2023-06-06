function solution(keymap, targets) {
    const dic = {}
    
    keymap.forEach(key => {
      
      for(let i = 0; i < key.length; i++){
          const word = key[i]
          if(dic[word] === undefined){
            dic[word] = i + 1
          }else if(dic[word] > i + 1){
            dic[word] = i + 1
          }
      }
    })
  
    const result = targets.map(target => {
      let count = 0
      
      for(let i = 0; i < target.length; i++){
        const word = target[i]
        count += dic[word]
      }
      
      return isNaN(count) ? -1 : count
    })
  
    return result
}