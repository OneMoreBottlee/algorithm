function solution(arr, n) {
    return arr.length % 2 
      ? arr.map((el, index) => index % 2 ? el : el + n) 
    : arr.map((el, index) => index % 2 ? el + n : el)
}