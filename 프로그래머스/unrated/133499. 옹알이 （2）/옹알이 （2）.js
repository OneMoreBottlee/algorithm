function solution(babbling) {
  const pre = ["ayaaya", "yeye", "woowoo", "mama"]
  const dic = ["aya", "ye", "woo", "ma"]
  
  return babbling.reduce((acc, cur) => {
    for(let i = 0; i < dic.length; i++){
      cur = cur.replaceAll(pre[i], "x")
      cur = cur.replaceAll(dic[i], "-")
    }
    return cur.replaceAll("-", "") ? acc : acc+1
  }, 0)
}