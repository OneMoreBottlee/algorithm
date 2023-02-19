function solution(s) {
  const dic = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  
	for(let i = 0; i < dic.length; i++){
    if(s.includes(dic[i])){
      s = s.replaceAll(dic[i], i)
    }
  }
  
  return s*1
}