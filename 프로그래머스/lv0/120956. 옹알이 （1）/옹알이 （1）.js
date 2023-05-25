function solution(babbling) {
  const dic = ["aya", "ye", "woo", "ma"]
  return babbling.reduce((acc, cur) => {
    for(let i = 0; i < dic.length; i++){
      cur = cur.replace(dic[i], "-")
    }
    return cur.replaceAll("-", "") ? acc : acc+1
  }, 0)
}