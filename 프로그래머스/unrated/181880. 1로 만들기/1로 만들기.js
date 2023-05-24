function solution(num_list) {
    const change = (num) => {
      let count = 0
      while(num !== 1){
        num = num % 2 ? (num - 1) / 2 : num / 2;
        count++
      }
      return count
    }
    return num_list.reduce((acc,cur) => acc + change(cur), 0)
}