function solution(num_list, n) {
    return num_list.filter((el,index) => {if(index % n === 0) return el})
}