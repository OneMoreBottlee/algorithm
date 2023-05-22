function solution(arr) {
  const start = arr.indexOf(2), end = arr.lastIndexOf(2) +1
  return start === -1 ? [-1] : arr.slice(start, end)
}