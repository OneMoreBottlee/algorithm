function solution(num_list){
  return [num_list.filter(el => el % 2 === 0).length,num_list.filter(el => el % 2 !==0).length]
}