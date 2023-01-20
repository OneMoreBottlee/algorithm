function solution(A,B){
  A.sort((a,b)=>a-b)
  B.sort((a,b)=>b-a)
  return A.map((el,index)=> el*B[index]).reduce((acc,cur)=>acc+cur)
}