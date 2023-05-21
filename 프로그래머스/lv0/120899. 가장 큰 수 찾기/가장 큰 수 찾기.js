function solution(array){
  return array.reduce((acc, cur, index) => acc[0] > cur ? acc : [cur, index], [0, 0])
}