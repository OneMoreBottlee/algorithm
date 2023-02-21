function solution(s) {
  const abc = s.split("")
  
  return abc.map((el,i) => abc.slice(0,i).includes(el) ? i - abc.slice(0,i).lastIndexOf(el) : -1 )
}
