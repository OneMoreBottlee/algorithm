function solution(arr, k) {
    const newArr = [...new Array(k)].fill(-1)
    
    arr.forEach(el => newArr.includes(el) ? null : newArr[newArr.indexOf(-1)] =el)
  
    return newArr.slice(0, k)
}