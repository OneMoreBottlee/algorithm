function solution(arr, queries) {
  queries.forEach(([i, j]) => {
    const aa = arr[i]
    arr[i] = arr[j]
    arr[j] = aa
  })
                  
  return arr
}