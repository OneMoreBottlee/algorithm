function solution(A,B){
  A.sort((a,b)=>a-b)
  B.sort((a,b)=>a-b)
  return A.map((el,index)=> el*B[B.length-1-index]).reduce((acc,cur)=>acc+cur)
}